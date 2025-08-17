"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Search,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  Star,
  GitFork,
  AlertCircle,
  BarChart3,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { GitHubCharts } from "@/components/github-charts"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserBookmarks } from "@/components/user-bookmarks"
import { DataExport } from "@/components/data-export"
import { useToast } from "@/hooks/use-toast"
import { useSearchParams } from "next/navigation"

interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  location: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  html_url: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  size: number
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [username, setUsername] = useState("")
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [rateLimitInfo, setRateLimitInfo] = useState<{ remaining: number; reset: number } | null>(null)
  const [showCharts, setShowCharts] = useState(false)
  const [showBookmarks, setShowBookmarks] = useState(false)
  const [cooldownTime, setCooldownTime] = useState<number | null>(null)
  const [showAllRepos, setShowAllRepos] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (cooldownTime && cooldownTime > Date.now()) {
      interval = setInterval(() => {
        if (cooldownTime <= Date.now()) {
          setCooldownTime(null)
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [cooldownTime])

  useEffect(() => {
    const query = searchParams.get("q")
    if (query) {
      setUsername(query)
      setTimeout(() => {
        searchUser()
      }, 100)
    }
  }, [searchParams])

  const searchUser = async () => {
    if (!username.trim()) return

    setLoading(true)
    setError(null)
    setUser(null)
    setRepos([])
    setShowCharts(false)

    try {
      const cacheKey = `github-user-${username}`
      const cached = localStorage.getItem(cacheKey)
      const cacheExpiry = localStorage.getItem(`${cacheKey}-expiry`)

      if (cached && cacheExpiry && Date.now() < Number.parseInt(cacheExpiry)) {
        const cachedData = JSON.parse(cached)
        setUser(cachedData.user)
        setRepos(cachedData.repos)
        setLoading(false)
        toast({
          title: "Data loaded from cache",
          description: `Showing cached data for ${username}`,
        })
        return
      }

      const userResponse = await fetch(`/api/github/user/${username}`)
      const userData = await userResponse.json()

      const remaining = userResponse.headers.get("x-ratelimit-remaining")
      const reset = userResponse.headers.get("x-ratelimit-reset")
      if (remaining && reset) {
        setRateLimitInfo({
          remaining: Number.parseInt(remaining),
          reset: Number.parseInt(reset) * 1000,
        })
      }

      if (!userResponse.ok) {
        if (userResponse.status === 403) {
          const resetTime = Number.parseInt(reset || "0") * 1000
          setCooldownTime(resetTime)
          throw new Error("API rate limit exceeded. Please wait before making another request.")
        }
        throw new Error(userData.error || "User not found")
      }

      const reposResponse = await fetch(`/api/github/repos/${username}`)
      const reposData = await reposResponse.json()

      if (!reposResponse.ok) {
        throw new Error(reposData.error || "Failed to fetch repositories")
      }

      setUser(userData)
      setRepos(reposData)

      const cacheData = { user: userData, repos: reposData }
      localStorage.setItem(cacheKey, JSON.stringify(cacheData))
      localStorage.setItem(`${cacheKey}-expiry`, (Date.now() + 10 * 60 * 1000).toString())

      toast({
        title: "User data fetched successfully",
        description: `Found ${reposData.length} repositories for ${username}`,
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      toast({
        variant: "destructive",
        title: "Error fetching user data",
        description: errorMessage,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    searchUser()
  }

  const getCooldownDisplay = () => {
    if (!cooldownTime) return null
    const remaining = Math.max(0, Math.ceil((cooldownTime - Date.now()) / 1000))
    const minutes = Math.floor(remaining / 60)
    const seconds = remaining % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Github className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Gitcher</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Search GitHub Users</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter a GitHub username to fetch comprehensive profile information and repository data.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1"
                disabled={loading || !!cooldownTime}
              />
              <Button type="submit" disabled={loading || !username.trim() || !!cooldownTime}>
                {loading ? (
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>

          {rateLimitInfo && rateLimitInfo.remaining < 10 && (
            <Alert className="max-w-md mx-auto mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                API rate limit: {rateLimitInfo.remaining} requests remaining. Resets at{" "}
                {new Date(rateLimitInfo.reset).toLocaleTimeString()}.
              </AlertDescription>
            </Alert>
          )}

          {cooldownTime && (
            <Alert className="max-w-md mx-auto mb-6">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                Rate limit exceeded. Next request available in: {getCooldownDisplay()}
              </AlertDescription>
            </Alert>
          )}
        </div>

        {error && (
          <Alert variant="destructive" className="max-w-2xl mx-auto mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {loading && (
          <div className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {user && !loading && (
          <div className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
                    <AvatarFallback>{user.login.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{user.name || user.login}</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={user.html_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <CardDescription className="text-base">@{user.login}</CardDescription>
                    {user.bio && <p className="text-foreground mt-2">{user.bio}</p>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.public_repos}</div>
                    <div className="text-sm text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.following}</div>
                    <div className="text-sm text-muted-foreground">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{new Date(user.created_at).getFullYear()}</div>
                    <div className="text-sm text-muted-foreground">Joined</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {new Date(user.created_at).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {repos.length > 0 && (
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                <Button
                  variant={!showCharts && !showBookmarks ? "default" : "outline"}
                  onClick={() => {
                    setShowCharts(false)
                    setShowBookmarks(false)
                  }}
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Repositories
                </Button>
                <Button
                  variant={showCharts ? "default" : "outline"}
                  onClick={() => {
                    setShowCharts(true)
                    setShowBookmarks(false)
                  }}
                  className="flex items-center gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  Data Insights
                </Button>
                <Button
                  variant={showBookmarks ? "default" : "outline"}
                  onClick={() => {
                    setShowBookmarks(true)
                    setShowCharts(false)
                  }}
                  className="flex items-center gap-2"
                >
                  Bookmarks
                </Button>
              </div>
            )}

            {showBookmarks && <UserBookmarks currentUser={user} />}

            {repos.length > 0 && !showCharts && !showBookmarks && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {showAllRepos
                    ? `All Repositories (${repos.length})`
                    : `Popular Repositories (${Math.min(6, repos.length)} of ${repos.length})`}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(showAllRepos ? repos : repos.slice(0, 6)).map((repo) => (
                    <Card key={repo.id} className="hover:border-primary/50 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">
                            <Link
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {repo.name}
                            </Link>
                          </CardTitle>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                        {repo.description && (
                          <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              {repo.stargazers_count}
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="h-4 w-4" />
                              {repo.forks_count}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Updated {new Date(repo.updated_at).toLocaleDateString()}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {repos.length > 6 && (
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => setShowAllRepos(!showAllRepos)}
                      className="flex items-center gap-2"
                    >
                      {showAllRepos ? (
                        <>
                          Show Less
                          <div className="w-4 h-4 border-l-2 border-b-2 border-muted-foreground rotate-45 transform" />
                        </>
                      ) : (
                        <>
                          Show All {repos.length} Repositories
                          <div className="w-4 h-4 border-r-2 border-b-2 border-muted-foreground -rotate-45 transform" />
                        </>
                      )}
                    </Button>
                  </div>
                )}

                <DataExport user={user} repos={repos} />
              </div>
            )}

            {repos.length > 0 && showCharts && user && !showBookmarks && (
              <div className="space-y-6">
                <GitHubCharts repos={repos} user={user} />
                <DataExport user={user} repos={repos} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

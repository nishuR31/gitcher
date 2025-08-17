"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, BookmarkCheck, Trash2, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface BookmarkedUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  html_url: string
  bookmarked_at: string
}

interface UserBookmarksProps {
  currentUser?: {
    login: string
    name: string
    avatar_url: string
    bio: string
    public_repos: number
    followers: number
    html_url: string
  }
}

export function UserBookmarks({ currentUser }: UserBookmarksProps) {
  const [bookmarks, setBookmarks] = useState<BookmarkedUser[]>([])
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const saved = localStorage.getItem("github-bookmarks")
    if (saved) {
      setBookmarks(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      const isCurrentlyBookmarked = bookmarks.some((b) => b.login === currentUser.login)
      setIsBookmarked(isCurrentlyBookmarked)
    }
  }, [currentUser, bookmarks])

  const saveBookmarks = (newBookmarks: BookmarkedUser[]) => {
    setBookmarks(newBookmarks)
    localStorage.setItem("github-bookmarks", JSON.stringify(newBookmarks))
  }

  const toggleBookmark = () => {
    if (!currentUser) return

    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((b) => b.login !== currentUser.login)
      saveBookmarks(newBookmarks)
      toast({
        title: "Bookmark removed",
        description: `${currentUser.login} has been removed from your bookmarks.`,
      })
    } else {
      const newBookmark: BookmarkedUser = {
        ...currentUser,
        bookmarked_at: new Date().toISOString(),
      }
      const newBookmarks = [newBookmark, ...bookmarks].slice(0, 10) // Limit to 10 bookmarks
      saveBookmarks(newBookmarks)
      toast({
        title: "User bookmarked",
        description: `${currentUser.login} has been added to your bookmarks.`,
      })
    }
  }

  const removeBookmark = (login: string) => {
    const newBookmarks = bookmarks.filter((b) => b.login !== login)
    saveBookmarks(newBookmarks)
    toast({
      title: "Bookmark removed",
      description: `${login} has been removed from your bookmarks.`,
    })
  }

  return (
    <div className="space-y-6">
      {currentUser && (
        <div className="flex justify-center">
          <Button
            onClick={toggleBookmark}
            variant={isBookmarked ? "default" : "outline"}
            className="flex items-center gap-2"
          >
            {isBookmarked ? (
              <>
                <BookmarkCheck className="h-4 w-4" />
                Bookmarked
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4" />
                Bookmark User
              </>
            )}
          </Button>
        </div>
      )}

      {bookmarks.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Bookmarked Users ({bookmarks.length})</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {bookmarks.map((user) => (
              <Card key={user.login} className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
                        <AvatarFallback>{user.login.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{user.name || user.login}</CardTitle>
                        <CardDescription>@{user.login}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={user.html_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeBookmark(user.login)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {user.bio && <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{user.bio}</p>}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Badge variant="secondary">{user.public_repos} repos</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="secondary">{user.followers} followers</Badge>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Bookmarked {new Date(user.bookmarked_at).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

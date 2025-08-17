"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileJson, FileSpreadsheet } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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

interface DataExportProps {
  user: GitHubUser
  repos: GitHubRepo[]
}

export function DataExport({ user, repos }: DataExportProps) {
  const { toast } = useToast()

  const exportToJSON = () => {
    const data = {
      user,
      repos,
      exported_at: new Date().toISOString(),
      total_repos: repos.length,
      total_stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      total_forks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
      languages: [...new Set(repos.filter((r) => r.language).map((r) => r.language))],
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `github-${user.login}-data.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Data exported",
      description: `GitHub data for ${user.login} has been exported as JSON.`,
    })
  }

  const exportToCSV = () => {
    const headers = ["Repository Name", "Description", "Language", "Stars", "Forks", "Size (KB)", "Last Updated", "URL"]

    const csvData = repos.map((repo) => [
      repo.name,
      repo.description || "",
      repo.language || "",
      repo.stargazers_count,
      repo.forks_count,
      Math.round(repo.size / 1024),
      new Date(repo.updated_at).toLocaleDateString(),
      repo.html_url,
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `github-${user.login}-repositories.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Data exported",
      description: `Repository data for ${user.login} has been exported as CSV.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Export Data
        </CardTitle>
        <CardDescription>Download the fetched GitHub data in different formats</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={exportToJSON} variant="outline" className="flex items-center gap-2 bg-transparent">
            <FileJson className="h-4 w-4" />
            Export as JSON
          </Button>
          <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2 bg-transparent">
            <FileSpreadsheet className="h-4 w-4" />
            Export as CSV
          </Button>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>JSON export includes complete user and repository data with metadata.</p>
          <p>CSV export contains repository information in spreadsheet format.</p>
        </div>
      </CardContent>
    </Card>
  )
}

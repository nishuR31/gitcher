import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                Search
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is important to us. Learn how we handle your data.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Gitcher only accesses and displays publicly available information from GitHub's public API.
                We do not collect, store, or process any personal data beyond what is already publicly accessible on
                GitHub.
              </p>
              <p>The information we display includes:</p>
              <ul>
                <li>Public profile information (name, bio, location, avatar)</li>
                <li>Public repository data (names, descriptions, languages, stars, forks)</li>
                <li>Public contribution statistics</li>
                <li>Account creation date and follower counts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Local Storage</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                We use your browser's local storage to temporarily cache GitHub API responses for 10 minutes. This
                improves performance and reduces API calls. This data is stored locally on your device and is not
                transmitted to our servers.
              </p>
              <p>
                You can clear this cached data at any time by clearing your browser's local storage or using your
                browser's developer tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                This application uses GitHub's public REST API v3 to fetch user and repository information. Your use of
                this service is subject to GitHub's own privacy policy and terms of service.
              </p>
              <p>
                We do not use any analytics, tracking, or advertising services. No personal data is shared with third
                parties beyond the necessary API calls to GitHub.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Since we only display publicly available GitHub data and do not store personal information on our
                servers, there is minimal security risk. All API communications with GitHub are conducted over HTTPS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                If you have any questions about this privacy policy or concerns about your data, please contact us
                through our GitHub repository or the contact information provided on our website.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

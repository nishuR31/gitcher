import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Github, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function DisclaimerPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Disclaimer</h1>
          <p className="text-xl text-muted-foreground">Important information about the use of this service</p>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            This tool is subject to GitHub's API rate limits and terms of service. Unauthenticated requests are limited
            to 60 requests per hour per IP address.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>GitHub API Usage</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Gitcher uses GitHub's public REST API v3 to retrieve user and repository information. This
                service is subject to GitHub's API limitations and terms of service:
              </p>
              <ul>
                <li>
                  <strong>Rate Limits:</strong> Unauthenticated requests are limited to 60 requests per hour per IP
                  address
                </li>
                <li>
                  <strong>Data Accuracy:</strong> Information displayed is only as current as GitHub's API responses
                </li>
                <li>
                  <strong>Availability:</strong> Service availability depends on GitHub's API uptime
                </li>
                <li>
                  <strong>Public Data Only:</strong> Only publicly available information is accessible through this tool
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>This application is provided as-is and has the following limitations:</p>
              <ul>
                <li>Cannot access private repositories or private user information</li>
                <li>Data visualization is based on available public repository data</li>
                <li>Historical contribution data may be limited by GitHub's API</li>
                <li>Some features may not work if GitHub's API is unavailable</li>
                <li>Rate limiting may temporarily prevent data fetching</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Warranty</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                This software is provided "as is" without warranty of any kind, express or implied. We make no
                guarantees about the accuracy, completeness, or reliability of the information displayed through this
                service.
              </p>
              <p>
                Users should verify important information directly through GitHub's official website or API
                documentation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>By using this service, you acknowledge that you are also bound by:</p>
              <ul>
                <li>GitHub's Terms of Service</li>
                <li>GitHub's Privacy Policy</li>
                <li>GitHub's API Terms of Use</li>
                <li>GitHub's Acceptable Use Policies</li>
              </ul>
              <p>Please review these documents on GitHub's official website for the most current terms.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact and Support</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                This is an open-source project provided for educational and informational purposes. Support is provided
                on a best-effort basis through our GitHub repository.
              </p>
              <p>For issues related to GitHub's API or your GitHub account, please contact GitHub directly.</p>
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

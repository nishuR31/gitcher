import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Live Demo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See Gitcher in action with real examples and interactive demonstrations of all features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Try These Examples</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Click on any of these popular GitHub users to see the app in action with real data and visualizations.
            </p>

            <div className="space-y-4">
              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">torvalds</CardTitle>
                      <CardDescription>Linus Torvalds - Creator of Linux</CardDescription>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/search?q=torvalds">
                        <Play className="h-4 w-4 mr-2" />
                        Try Demo
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">Shell</Badge>
                    <Badge variant="secondary">Makefile</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">gaearon</CardTitle>
                      <CardDescription>Dan Abramov - React Core Team</CardDescription>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/search?q=gaearon">
                        <Play className="h-4 w-4 mr-2" />
                        Try Demo
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">React</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">sindresorhus</CardTitle>
                      <CardDescription>Sindre Sorhus - Open Source Maintainer</CardDescription>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/search?q=sindresorhus">
                        <Play className="h-4 w-4 mr-2" />
                        Try Demo
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Swift</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">octocat</CardTitle>
                      <CardDescription>GitHub's Mascot Account</CardDescription>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/search?q=octocat">
                        <Play className="h-4 w-4 mr-2" />
                        Try Demo
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">Assembly</Badge>
                    <Badge variant="secondary">Shell</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">What You'll See</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each demo showcases the full range of features and visualizations available in the application.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">User Profile Overview</h3>
                  <p className="text-muted-foreground">
                    Complete profile information including bio, location, follower counts, and account statistics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Repository Analysis</h3>
                  <p className="text-muted-foreground">
                    Detailed repository listings with descriptions, languages, stars, and forks information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Visualizations</h3>
                  <p className="text-muted-foreground">
                    Interactive charts showing language distribution, repository popularity, and activity patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Advanced Features</h3>
                  <p className="text-muted-foreground">
                    Bookmarking, data export, theme switching, and smart caching in action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Try Your Own Search?</CardTitle>
            <CardDescription className="text-lg">
              Enter any GitHub username to explore their profile and repositories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/search">Start Searching</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

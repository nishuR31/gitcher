import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, BarChart3, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Gitcher</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A modern, open-source web application that helps developers explore and analyze GitHub user profiles with
            beautiful visualizations and comprehensive insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We transforms the way you explore GitHub profiles by providing rich visualizations and
              detailed analytics of user data. Whether you're researching potential collaborators, analyzing coding
              patterns, or simply curious about a developer's work, our tool makes it easy and insightful.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Comprehensive Profile Analysis</h3>
                  <p className="text-muted-foreground">
                    Fetch detailed user information including bio, location, followers, and repository statistics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Data Visualization</h3>
                  <p className="text-muted-foreground">
                    Beautiful charts showing language usage, repository popularity, and contribution patterns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Privacy-Focused</h3>
                  <p className="text-muted-foreground">
                    Only displays publicly available GitHub data with transparent privacy practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Performance Optimized</h3>
                  <p className="text-muted-foreground">
                    Smart caching and rate limit handling for optimal user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Built with modern web technologies to ensure performance, accessibility, and maintainability.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js 14</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Github</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Recharts</Badge>
                    <Badge variant="secondary">Lucide Icons</Badge>
                    <Badge variant="secondary">shadcn/ui</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">GitHub REST API</Badge>
                    <Badge variant="secondary">Rate Limiting</Badge>
                    <Badge variant="secondary">Caching</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Dark Mode</Badge>
                    <Badge variant="secondary">Responsive</Badge>
                    <Badge variant="secondary">Accessible</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/search">Try It Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/nishuR31/gitcher" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Open Source</CardTitle>
              <CardDescription>MIT Licensed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This project is open source and available under the MIT license. Contributions are welcome from the
                community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Registration</CardTitle>
              <CardDescription>Start Immediately</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No account creation or API keys required. Simply enter a GitHub username and start exploring
                immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rate Limit Aware</CardTitle>
              <CardDescription>Smart Usage</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built-in rate limit detection and caching to ensure optimal performance within GitHub's API constraints.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Explore?</CardTitle>
            <CardDescription className="text-lg">
              Start discovering GitHub profiles and their insights today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/search">Search GitHub Users</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

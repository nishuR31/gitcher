import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Search, BarChart3, Users, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-primary to-[var(--color-destructive)]">
      {/* Header */}
      <header
        className="border-b  bg-transparent
       backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Gitcher</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/search"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Search
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/demo"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Demo
              </Link>
              <ThemeToggle />
              <Button asChild>
                <Link href="/search">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-muted-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              Powered by GitHub API
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover Developer
              <span className="text-primary block">Profiles & Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Fetch comprehensive GitHub user information, visualize repository
              data, and explore developer contributions with beautiful charts
              and analytics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/search">
                <Search className="mr-2 h-5 w-5" />
                Start Exploring
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/demo">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Demo
              </Link>
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="outline">Chart.js</Badge>
            <Badge variant="outline">GitHub API</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Vercel</Badge>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Developers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze and understand GitHub user profiles
              and their contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Complete User Profiles</CardTitle>
                <CardDescription>
                  Fetch comprehensive user information including bio, location,
                  followers, and public repositories.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data Visualization</CardTitle>
                <CardDescription>
                  Beautiful charts showing language usage, repository stars, and
                  contribution patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Repository Insights</CardTitle>
                <CardDescription>
                  Detailed repository information with stars, forks, languages,
                  and recent activity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Search</CardTitle>
                <CardDescription>
                  Intelligent username validation with error handling and rate
                  limit detection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GitFork className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance Optimized</CardTitle>
                <CardDescription>
                  Local storage caching and skeleton loaders for optimal user
                  experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Privacy Focused</CardTitle>
                <CardDescription>
                  Only uses publicly available GitHub data with transparent
                  privacy practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Explore GitHub Profiles?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start discovering developer insights and repository analytics in
            seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/search">
                <Search className="mr-2 h-5 w-5" />
                Start Your Search
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/demo">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Github className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">GitHub User Fetcher</span>
              </div>
              <p className="text-muted-foreground mb-4">
                A modern web application for fetching and visualizing GitHub
                user information with beautiful charts and insights.
              </p>
              <div className="flex gap-4">
                <Badge variant="outline">MIT License</Badge>
                <Badge variant="outline">Open Source</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="hover:text-foreground transition-colors"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conduct"
                    className="hover:text-foreground transition-colors"
                  >
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="https://github.com"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub Repository
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribute"
                    className="hover:text-foreground transition-colors"
                  >
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 GitHub User Fetcher. Built with Next.js and powered by
              GitHub API.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

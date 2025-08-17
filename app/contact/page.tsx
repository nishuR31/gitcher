import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, MessageSquare, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with questions, feedback, or contributions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Github className="h-12 w-12 text-primary mb-4" />
              <CardTitle>GitHub Repository</CardTitle>
              <CardDescription>Report issues, request features, or contribute to the project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The best way to get support or contribute to the project is through our GitHub repository. You can
                report bugs, request features, or submit pull requests.
              </p>
              <Button asChild>
                <Link href="https://github.com/nishuR31/gitcher" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Visit Repository
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Discussions</CardTitle>
              <CardDescription>Join the community discussion and share ideas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Have questions about using the tool or ideas for improvements? Join our GitHub Discussions to connect
                with other users and contributors.
              </p>
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discussion
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">How do I report a bug?</h3>
                <p className="text-muted-foreground">
                  Please create an issue on our GitHub repository with a detailed description of the problem, including
                  steps to reproduce and your browser/system information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I request new features?</h3>
                <p className="text-muted-foreground">
                  Feature requests are welcome. Please create an issue on GitHub with the "enhancement" label and
                  describe your idea in detail.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How can I contribute?</h3>
                <p className="text-muted-foreground">
                  We welcome contributions! Please read our contributing guidelines in the repository and feel free to
                  submit pull requests for bug fixes or new features.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is there a roadmap?</h3>
                <p className="text-muted-foreground">
                  Yes! Check our GitHub repository for the project roadmap and planned features. We also welcome input
                  on prioritization.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                This is an open-source project maintained by volunteers. While we strive to provide helpful support,
                please keep in mind:
              </p>
              <ul>
                <li>Response times may vary depending on maintainer availability</li>
                <li>Please search existing issues before creating new ones</li>
                <li>Provide clear, detailed information when reporting problems</li>
                <li>Be respectful and follow our Code of Conduct</li>
                <li>Consider contributing back if you find the project useful</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Thank you for your interest in Gitcher!</p>
          <Button asChild>
            <Link href="/search">Start Using the Tool</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

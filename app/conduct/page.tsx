import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Heart, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function ConductPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Code of Conduct</h1>
          <p className="text-xl text-muted-foreground">Building a welcoming and inclusive community for everyone</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Be Respectful</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Treat all community members with respect and kindness, regardless of their background or experience
                level.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Be Inclusive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Welcome newcomers and help create an environment where everyone feels comfortable contributing.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Be Professional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Maintain professional standards in all interactions and focus on constructive collaboration.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Pledge</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                We as members, contributors, and leaders pledge to make participation in our community a harassment-free
                experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex
                characteristics, gender identity and expression, level of experience, education, socio-economic status,
                nationality, personal appearance, race, religion, or sexual identity and orientation.
              </p>
              <p>
                We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and
                healthy community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expected Behavior</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>Examples of behavior that contributes to a positive environment include:</p>
              <ul>
                <li>Demonstrating empathy and kindness toward other people</li>
                <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                <li>Giving and gracefully accepting constructive feedback</li>
                <li>Accepting responsibility and apologizing to those affected by our mistakes</li>
                <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
                <li>Using welcoming and inclusive language</li>
                <li>Being patient with newcomers and those learning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unacceptable Behavior</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>Examples of unacceptable behavior include:</p>
              <ul>
                <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                <li>Public or private harassment</li>
                <li>Publishing others' private information without their explicit permission</li>
                <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                <li>Advocating for, or encouraging, any of the above behavior</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reporting Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                If you experience or witness unacceptable behavior, or have any other concerns, please report it by
                contacting the project maintainers through our GitHub repository.
              </p>
              <p>
                All reports will be handled with discretion and confidentiality. We are committed to providing a safe
                environment for everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enforcement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and
                will take appropriate and fair corrective action in response to any behavior that they deem
                inappropriate, threatening, offensive, or harmful.
              </p>
              <p>
                Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code,
                wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will
                communicate reasons for moderation decisions when appropriate.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>
            This Code of Conduct is adapted from the{" "}
            <Link href="https://www.contributor-covenant.org/" className="text-primary hover:underline">
              Contributor Covenant
            </Link>
            , version 2.1.
          </p>
          <p className="mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

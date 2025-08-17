import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  const { username } = params

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&direction=desc&per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "GitHub-User-Fetcher",
        },
      },
    )

    // Forward rate limit headers
    const rateLimitRemaining = response.headers.get("x-ratelimit-remaining")
    const rateLimitReset = response.headers.get("x-ratelimit-reset")

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }
      if (response.status === 403) {
        return NextResponse.json({ error: "API rate limit exceeded" }, { status: 403 })
      }
      return NextResponse.json({ error: "Failed to fetch repositories" }, { status: response.status })
    }

    const reposData = await response.json()

    const responseHeaders = new Headers()
    if (rateLimitRemaining) responseHeaders.set("x-ratelimit-remaining", rateLimitRemaining)
    if (rateLimitReset) responseHeaders.set("x-ratelimit-reset", rateLimitReset)

    return NextResponse.json(reposData, { headers: responseHeaders })
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  // home
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  size: number;
}

interface GitHubChartsProps {
  repos: GitHubRepo[];
  user: {
    login: string;
    created_at: string;
    public_repos: number;
  };
}

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function GitHubCharts({ repos, user }: GitHubChartsProps) {
  // Process language data
  const languageData = repos
    .filter((repo) => repo.language)
    .reduce((acc, repo) => {
      const lang = repo.language;
      if (!acc[lang]) {
        acc[lang] = { language: lang, count: 0, totalStars: 0 };
      }
      acc[lang].count += 1;
      acc[lang].totalStars += repo.stargazers_count;
      return acc;
    }, {} as Record<string, { language: string; count: number; totalStars: number }>);

  const languageChartData = Object.values(languageData)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Process repository stars data
  const starsData = repos
    .filter((repo) => repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .map((repo) => ({
      name:
        repo.name.length > 15 ? repo.name.substring(0, 15) + "..." : repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    }));

  // Process repository activity over time (simplified)
  const activityData = repos
    .sort(
      (a, b) =>
        new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
    )
    .slice(-12)
    .map((repo) => ({
      month: new Date(repo.updated_at).toLocaleDateString("en-US", {
        month: "short",
        year: "2-digit",
      }),
      updates: 1,
      stars: repo.stargazers_count,
    }));

  // Aggregate activity by month
  const monthlyActivity = activityData.reduce((acc, item) => {
    const existing = acc.find((a) => a.month === item.month);
    if (existing) {
      existing.updates += 1;
      existing.totalStars += item.stars;
    } else {
      acc.push({
        month: item.month,
        updates: item.updates,
        totalStars: item.stars,
      });
    }
    return acc;
  }, [] as { month: string; updates: number; totalStars: number }[]);

  // Repository size distribution
  const sizeData = repos
    .filter((repo) => repo.size > 0)
    .map((repo) => {
      let sizeCategory = "Small";
      if (repo.size > 10000) sizeCategory = "Large";
      else if (repo.size > 1000) sizeCategory = "Medium";
      return { name: repo.name, size: repo.size, category: sizeCategory };
    });

  const sizeDistribution = sizeData.reduce((acc, repo) => {
    const existing = acc.find((item) => item.category === repo.category);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ category: repo.category, count: 1 });
    }
    return acc;
  }, [] as { category: string; count: number }[]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Data Insights
        </h2>
        <p className="text-muted-foreground">
          Visual analysis of {user.login}'s GitHub activity and repositories
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Language Usage Chart */}
        {languageChartData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Most Used Languages</CardTitle>
              <CardDescription>
                Programming languages by repository count
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  count: {
                    label: "Repositories",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      label={({ language, count }) => `${language}: ${count}`}
                    >
                      {languageChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        )}

        {/* Repository Stars Chart */}
        {starsData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Repository Popularity</CardTitle>
              <CardDescription>Top repositories by star count</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  stars: {
                    label: "Stars",
                    color: "hsl(var(--chart-2))",
                  },
                  forks: {
                    label: "Forks",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={starsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="stars"
                      fill="hsl(var(--chart-2))"
                      name="Stars"
                    />
                    <Bar
                      dataKey="forks"
                      fill="hsl(var(--chart-3))"
                      name="Forks"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        )}

        {/* Repository Activity Timeline */}
        {monthlyActivity.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Repository updates over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  updates: {
                    label: "Updates",
                    color: "hsl(var(--chart-4))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyActivity}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="updates"
                      stroke="hsl(var(--chart-4))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--chart-4))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        )}

        {/* Repository Size Distribution */}
        {sizeDistribution.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Repository Sizes</CardTitle>
              <CardDescription>Distribution by repository size</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  count: {
                    label: "Count",
                    color: "hsl(var(--chart-5))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sizeDistribution}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="hsl(var(--chart-5))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Summary Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Repository Statistics Summary</CardTitle>
          <CardDescription>
            Key metrics from {user.login}'s repositories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                In development
              </div>
              <div className="text-sm text-muted-foreground">Home Link</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {repos.reduce((sum, repo) => sum + repo.forks_count, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Forks</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {
                  new Set(
                    repos.filter((r) => r.language).map((r) => r.language)
                  ).size
                }
              </div>
              <div className="text-sm text-muted-foreground">
                Languages Used
              </div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {Math.round(
                  repos.reduce((sum, repo) => sum + repo.size, 0) / 1024
                )}{" "}
                KB
              </div>
              <div className="text-sm text-muted-foreground">
                Total Code Size
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

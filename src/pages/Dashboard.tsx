import { Activity, Shield, Key, AlertTriangle, TrendingUp, Users, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  // Mock data - replace with actual API calls
  const stats = {
    totalScans: 15420,
    flaggedEmails: 1240,
    activeApiKeys: 8,
    activeUsers: 24,
    scanAccuracy: 98.5,
    responseTime: 45
  }

  const recentScans = [
    { id: 1, email: "suspicious@fake-bank.com", status: "flagged", confidence: 95, time: "2 minutes ago" },
    { id: 2, email: "newsletter@company.com", status: "safe", confidence: 92, time: "5 minutes ago" },
    { id: 3, email: "urgent@phishing-site.net", status: "flagged", confidence: 98, time: "8 minutes ago" },
    { id: 4, email: "support@legitimate.com", status: "safe", confidence: 89, time: "12 minutes ago" },
  ]

  const blacklistedDomains = [
    "fake-paypal.scam",
    "phishing-bank.net", 
    "malicious-site.org",
    "scammer-domain.fake"
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your AI email security system performance and analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalScans.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Emails</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.flaggedEmails.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning">8.04%</span> of total scans
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active API Keys</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeApiKeys}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+2</span> new this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+3</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Model Performance</CardTitle>
            <CardDescription>Real-time accuracy and response metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Scan Accuracy</span>
                <span className="text-sm text-muted-foreground">{stats.scanAccuracy}%</span>
              </div>
              <Progress value={stats.scanAccuracy} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Avg Response Time</span>
                <span className="text-sm text-muted-foreground">{stats.responseTime}ms</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blacklisted Domains</CardTitle>
            <CardDescription>Currently blocked suspicious domains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {blacklistedDomains.map((domain, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-destructive/10 rounded">
                  <span className="text-sm font-mono">{domain}</span>
                  <Badge variant="destructive">Blocked</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Scans</CardTitle>
          <CardDescription>Latest email security analysis results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentScans.map((scan) => (
              <div key={scan.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{scan.email}</p>
                    <p className="text-sm text-muted-foreground">Confidence: {scan.confidence}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={scan.status === "flagged" ? "destructive" : "default"}>
                    {scan.status === "flagged" ? "Flagged" : "Safe"}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {scan.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
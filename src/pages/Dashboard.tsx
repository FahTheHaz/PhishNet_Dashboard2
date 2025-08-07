import { Activity, Shield, Key, AlertTriangle, TrendingUp, Users, Mail, Clock, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  // Mock data - replace with actual API calls
  const stats = {
    apiRequestsToday: 1,
    activeApiKeys: 1,
    registeredUsers: 4,
    modelAccuracy: 1,
  }

  const recentRequests = [
    { id: 1, endpoint: "/api/v1/analyze", requests: 0, latency: "0ms", time: "—" },
    { id: 2, endpoint: "/api/v1/classify", requests: 0, latency: "0ms", time: "—" },
    { id: 3, endpoint: "/api/v1/scan", requests: 0, latency: "0ms", time: "—" },
    { id: 4, endpoint: "/api/v1/detect", requests: 0, latency: "0ms", time: "—" },
  ]

  const recentUsers = [
    { email: "Fahimhaziq1@gmail.com", status: "active" },
    { email: "exampleuser@email.com", status: "active" },
    { email: "exampleuser2@email.com", status: "active" },
    { email: "livingliverlibe@gmail.com", status: "active" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor AI model performance, API usage, and manage users
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Requests Today</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.apiRequestsToday.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from yesterday
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
            <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.registeredUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+18%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              AI Model Performance
            </CardTitle>
            <CardDescription>Real-time model metrics and API performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end gap-6">
              <div className="text-5xl font-bold">{stats.modelAccuracy}%</div>
              <div className="relative h-48 w-10 rounded bg-muted">
                <div
                  className="absolute bottom-0 left-0 w-full rounded-b bg-primary"
                  style={{ height: `${stats.modelAccuracy}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Model accuracy (last 24h)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Recent User Activity
            </CardTitle>
            <CardDescription>Latest user registrations and activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm">{user.email}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            API Endpoint Usage
          </CardTitle>
          <CardDescription>Latest API endpoint performance and usage metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{request.endpoint}</p>
                    <p className="text-sm text-muted-foreground">{request.requests} requests</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">
                    {request.latency}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {request.time}
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
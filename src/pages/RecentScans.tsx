import { useState } from "react"
import { Mail, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EmailScan {
  id: string
  email: string
  sender: string
  subject: string
  timestamp: string
  status: "safe" | "flagged" | "suspicious"
  confidence: number
  riskFactors: string[]
  ipAddress: string
}

export default function RecentScans() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [timeFilter, setTimeFilter] = useState("week")
  const isUserView = typeof window !== 'undefined' && localStorage.getItem('viewMode') === 'user'

  const scans: EmailScan[] = []

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="w-4 h-4 text-success" />
      case "flagged":
        return <AlertTriangle className="w-4 h-4 text-destructive" />
      case "suspicious":
        return <Shield className="w-4 h-4 text-warning" />
      default:
        return <Mail className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "safe":
        return <Badge className="bg-success">Safe</Badge>
      case "flagged":
        return <Badge variant="destructive">Flagged</Badge>
      case "suspicious":
        return <Badge className="bg-warning text-warning-foreground">Suspicious</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    
    if (hours < 1) {
      const minutes = Math.floor(diff / (1000 * 60))
      return `${minutes} minutes ago`
    } else if (hours < 24) {
      return `${hours} hours ago`
    } else {
      const days = Math.floor(hours / 24)
      return `${days} days ago`
    }
  }

  const stats = {
    totalScans: scans.length,
    flaggedCount: scans.filter(s => s.status === "flagged").length,
    safeCount: scans.filter(s => s.status === "safe").length,
    suspiciousCount: scans.filter(s => s.status === "suspicious").length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Recent Scans</h1>
          <p className="text-muted-foreground">
            View and analyze your recent email security scans
          </p>
        </div>
      </div>

      {isUserView && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">Your AI Model Performance</CardTitle>
            <CardDescription>Accuracy based on your recent scans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end gap-6">
              <div className="text-6xl font-bold">0%</div>
              <div className="relative h-48 w-20 rounded bg-muted">
                <div className="absolute bottom-0 left-0 w-full rounded-b bg-primary" style={{ height: `0%` }} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Model accuracy (your last 24h)</p>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalScans}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safe</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.safeCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.flaggedCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suspicious</CardTitle>
            <Shield className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.suspiciousCount}</div>
          </CardContent>
        </Card>
      </div>


      {/* Scan Results */}
      <Card>
        <CardHeader>
          <CardTitle>Scan Results</CardTitle>
          <CardDescription>Recent email security analysis results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            No scan results yet.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
import { useState } from "react"
import { Search, Filter, Download, Mail, Shield, AlertTriangle, CheckCircle, Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

  // Mock data
  const scans: EmailScan[] = [
    {
      id: "1",
      email: "urgent@fake-bank.com",
      sender: "urgent@fake-bank.com",
      subject: "URGENT: Verify your account immediately",
      timestamp: "2024-01-15T10:30:00Z",
      status: "flagged",
      confidence: 95,
      riskFactors: ["Suspicious domain", "Urgent language", "Phishing patterns"],
      ipAddress: "192.168.1.100"
    },
    {
      id: "2", 
      email: "newsletter@company.com",
      sender: "marketing@company.com",
      subject: "Weekly Company Newsletter",
      timestamp: "2024-01-15T09:15:00Z",
      status: "safe",
      confidence: 92,
      riskFactors: [],
      ipAddress: "203.0.113.1"
    },
    {
      id: "3",
      email: "support@suspicious-site.net",
      sender: "help@suspicious-site.net", 
      subject: "You've won $1,000,000!",
      timestamp: "2024-01-15T08:45:00Z",
      status: "flagged",
      confidence: 98,
      riskFactors: ["Known scam domain", "Lottery scam", "Suspicious attachment"],
      ipAddress: "198.51.100.42"
    },
    {
      id: "4",
      email: "noreply@legitimate.com",
      sender: "system@legitimate.com",
      subject: "Password reset request",
      timestamp: "2024-01-15T07:20:00Z",
      status: "safe",
      confidence: 89,
      riskFactors: [],
      ipAddress: "203.0.113.5"
    },
    {
      id: "5",
      email: "admin@phishing-test.org",
      sender: "admin@phishing-test.org",
      subject: "Suspicious activity detected",
      timestamp: "2024-01-14T16:30:00Z",
      status: "suspicious",
      confidence: 75,
      riskFactors: ["Mimicking legitimate service", "Suspicious links"],
      ipAddress: "192.0.2.146"
    }
  ]

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
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Results
        </Button>
      </div>

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

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by email, sender, or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="safe">Safe</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
                <SelectItem value="suspicious">Suspicious</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Last 24 hours</SelectItem>
                <SelectItem value="week">Last week</SelectItem>
                <SelectItem value="month">Last month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Scan Results */}
      <Card>
        <CardHeader>
          <CardTitle>Scan Results</CardTitle>
          <CardDescription>Recent email security analysis results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scans.map((scan) => (
              <div key={scan.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(scan.status)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{scan.subject}</h3>
                        {getStatusBadge(scan.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        From: {scan.sender}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        To: {scan.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <Clock className="h-3 w-3" />
                      {formatTimestamp(scan.timestamp)}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Confidence: </span>
                      <span className={scan.confidence > 90 ? "text-success" : scan.confidence > 70 ? "text-warning" : "text-destructive"}>
                        {scan.confidence}%
                      </span>
                    </div>
                  </div>
                </div>

                {scan.riskFactors.length > 0 && (
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium mb-2">Risk Factors:</p>
                    <div className="flex flex-wrap gap-2">
                      {scan.riskFactors.map((factor, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t text-xs text-muted-foreground">
                  IP Address: {scan.ipAddress}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
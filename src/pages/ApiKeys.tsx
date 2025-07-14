import { useState } from "react"
import { Plus, Copy, Eye, EyeOff, Trash2, Key, Calendar, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ApiKey {
  id: string
  name: string
  key: string
  created: string
  lastUsed: string
  requests: number
  status: "active" | "inactive"
}

export default function ApiKeys() {
  const { toast } = useToast()
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Production API",
      key: "pk_live_51234567890abcdef",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
      requests: 15420,
      status: "active"
    },
    {
      id: "2", 
      name: "Development API",
      key: "pk_test_98765432109876543",
      created: "2024-01-10",
      lastUsed: "1 day ago",
      requests: 3240,
      status: "active"
    },
    {
      id: "3",
      name: "Legacy API",
      key: "pk_live_legacy123456789",
      created: "2023-12-01",
      lastUsed: "1 week ago",
      requests: 890,
      status: "inactive"
    }
  ])

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys(prev => ({ ...prev, [keyId]: !prev[keyId] }))
  }

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key)
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    })
  }

  const maskKey = (key: string) => {
    return `${key.substring(0, 12)}${"*".repeat(key.length - 16)}${key.substring(key.length - 4)}`
  }

  const handleCreateKey = () => {
    // Mock API key creation
    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: "New API Key",
      key: `pk_live_${Math.random().toString(36).substr(2, 20)}`,
      created: new Date().toISOString().split('T')[0],
      lastUsed: "Never",
      requests: 0,
      status: "active"
    }
    setApiKeys(prev => [newKey, ...prev])
    toast({
      title: "API Key Created",
      description: "Your new API key has been generated successfully",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">API Keys</h1>
          <p className="text-muted-foreground">
            Manage your API keys for accessing the PhishGuard email security service
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Key
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New API Key</DialogTitle>
              <DialogDescription>
                Generate a new API key for your application
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="keyName">Key Name</Label>
                <Input id="keyName" placeholder="Enter a name for your API key" />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleCreateKey}>Generate Key</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total API Keys</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{apiKeys.length}</div>
            <p className="text-xs text-muted-foreground">
              {apiKeys.filter(k => k.status === "active").length} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {apiKeys.reduce((sum, key) => sum + key.requests, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all keys
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,420</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* API Keys List */}
      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>
            Manage and monitor your API key usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {apiKeys.map((apiKey) => (
              <div key={apiKey.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Key className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{apiKey.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Created on {apiKey.created}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={apiKey.status === "active" ? "default" : "secondary"}>
                      {apiKey.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-sm bg-muted p-3 rounded">
                  <span className="flex-1">
                    {showKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleKeyVisibility(apiKey.id)}
                  >
                    {showKeys[apiKey.id] ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(apiKey.key)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Last Used</p>
                    <p className="font-medium">{apiKey.lastUsed}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Requests</p>
                    <p className="font-medium">{apiKey.requests.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Rate Limit</p>
                    <p className="font-medium">1000/hour</p>
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
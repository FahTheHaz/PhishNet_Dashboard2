import { Book, Code, Shield, Download, ExternalLink, Copy, Terminal, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function Documentation() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-muted-foreground">
          Complete guide to integrating and using the PhishNet AI email security service
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              API Reference
            </CardTitle>
            <CardDescription>Complete API documentation and endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View API Docs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Browser Extension
            </CardTitle>
            <CardDescription>Install our browser extension for Gmail integration</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Extension
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Policies
            </CardTitle>
            <CardDescription>Learn about our security and privacy practices</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Book className="w-4 h-4 mr-2" />
              Read Policies
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Documentation */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="api">API Integration</TabsTrigger>
          <TabsTrigger value="extension">Browser Extension</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to PhishGuard AI</CardTitle>
              <CardDescription>
                Advanced email security powered by artificial intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PhishGuard AI is a comprehensive email security platform that uses advanced machine learning 
                algorithms to detect and prevent phishing attacks, malicious emails, and suspicious content 
                in real-time.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Real-time email threat detection with 98.5% accuracy
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    RESTful API for easy integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Browser extension for Gmail and Outlook
                  </li>
                  <li className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    Comprehensive analytics and reporting
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Getting Started</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li>Create your API key in the API Keys section</li>
                  <li>Choose your integration method (API or Browser Extension)</li>
                  <li>Follow the setup instructions for your chosen method</li>
                  <li>Start protecting your emails!</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Integration Guide</CardTitle>
              <CardDescription>
                Integrate PhishGuard AI into your applications using our REST API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Start</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Make your first API call to scan an email for threats:
                </p>
                
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">POST /api/v1/scan</span>
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard('curl -X POST https://api.phishguard.ai/v1/scan...')}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <pre className="text-xs overflow-x-auto">
{`curl -X POST https://api.phishguard.ai/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": {
      "sender": "suspicious@example.com",
      "subject": "Urgent: Verify your account",
      "content": "Click here to verify...",
      "headers": {...}
    }
  }'`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Response Format</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <pre className="text-xs overflow-x-auto">
{`{
  "scan_id": "scan_123456789",
  "status": "flagged",
  "confidence": 95,
  "risk_factors": [
    "Suspicious domain",
    "Phishing patterns detected",
    "Urgent language"
  ],
  "recommendation": "block",
  "processed_at": "2024-01-15T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Available Endpoints</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <Badge variant="outline">POST</Badge>
                      <span className="ml-2 font-mono">/api/v1/scan</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Scan email for threats</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <Badge variant="outline">GET</Badge>
                      <span className="ml-2 font-mono">/api/v1/scan/:id</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Get scan results</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <Badge variant="outline">GET</Badge>
                      <span className="ml-2 font-mono">/api/v1/stats</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Get usage statistics</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="extension" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Browser Extension Installation</CardTitle>
              <CardDescription>
                Install our browser extension for seamless Gmail and Outlook protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Chrome Extension</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li>Download the PhishGuard Chrome extension from the Chrome Web Store</li>
                  <li>Click "Add to Chrome" and confirm the installation</li>
                  <li>Enter your API key when prompted</li>
                  <li>The extension will automatically start scanning your emails</li>
                </ol>
                <Button className="mt-4">
                  <Download className="w-4 h-4 mr-2" />
                  Download for Chrome
                </Button>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Firefox Extension</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li>Download the PhishGuard Firefox add-on from Firefox Add-ons</li>
                  <li>Click "Add to Firefox" and confirm the installation</li>
                  <li>Configure your API key in the extension settings</li>
                  <li>Enable email scanning in your preferences</li>
                </ol>
                <Button className="mt-4" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download for Firefox
                </Button>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    Real-time email scanning as you read
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    Visual warnings for suspicious emails
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    One-click reporting of false positives
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    Detailed threat analysis tooltips
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy Policies</CardTitle>
              <CardDescription>
                Learn about our commitment to protecting your data and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  PhishGuard AI is committed to protecting your email data and maintaining the highest 
                  standards of security and privacy.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• All data is encrypted in transit and at rest</li>
                  <li>• Email content is processed ephemerally and not stored</li>
                  <li>• Only metadata required for threat analysis is retained</li>
                  <li>• Full GDPR and CCPA compliance</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Compliance Certifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">SOC 2 Type II</p>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">ISO 27001</p>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">GDPR</p>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">CCPA</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Security Team</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For security-related questions or to report vulnerabilities:
                </p>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  security@phishguard.ai
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
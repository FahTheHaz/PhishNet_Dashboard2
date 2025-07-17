import { Download, Key, Chrome, Monitor, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Products() {
  // TODO: Replace these placeholder functions with actual implementation
  const handleDownloadExtension = () => {
    console.log("Download extension clicked");
    // PLACEHOLDER: Replace with actual extension download logic
  };

  const handleGetAPIKey = () => {
    console.log("Get API key clicked");
    // PLACEHOLDER: Replace with actual API key generation/retrieval logic
  };

  const handleViewDocs = () => {
    console.log("View documentation clicked");
    // PLACEHOLDER: Replace with navigation to documentation or external docs
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-muted-foreground">
          Access our phishing detection tools and integrate with your applications
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Browser Extension */}
        <Card className="relative">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Chrome className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  Browser Extension
                  <Badge variant="secondary">Recommended</Badge>
                </CardTitle>
                <CardDescription>
                  Real-time phishing protection for your browser
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Real-time URL scanning</li>
                <li>• Instant threat warnings</li>
                <li>• Seamless browser integration</li>
                <li>• Automatic updates</li>
              </ul>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleDownloadExtension} className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Extension
              </Button>
              <Button variant="outline" onClick={handleViewDocs}>
                <Monitor className="w-4 h-4 mr-2" />
                View Docs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* API Access */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Key className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Integrate phishing detection into your applications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• RESTful API endpoints</li>
                <li>• High-speed URL analysis</li>
                <li>• Detailed threat intelligence</li>
                <li>• Rate limiting & quotas</li>
              </ul>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleGetAPIKey} variant="secondary" className="flex-1">
                <Key className="w-4 h-4 mr-2" />
                Get API Key
              </Button>
              <Button variant="outline" onClick={handleViewDocs}>
                <Monitor className="w-4 h-4 mr-2" />
                API Docs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Your Usage Statistics
          </CardTitle>
          <CardDescription>
            Monitor your phishing detection usage and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold">2,847</div>
              <div className="text-sm text-muted-foreground">URLs Scanned</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-destructive">23</div>
              <div className="text-sm text-muted-foreground">Threats Blocked</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold">99.8%</div>
              <div className="text-sm text-muted-foreground">Detection Rate</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-muted-foreground">Active API Keys</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Quick setup guide for PhishNet products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium">Choose Your Product</h4>
                <p className="text-sm text-muted-foreground">
                  Download the browser extension for personal protection or get an API key for integration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium">Install & Configure</h4>
                <p className="text-sm text-muted-foreground">
                  Follow the setup instructions and configure your preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium">Start Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Begin scanning URLs and protecting against phishing threats.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
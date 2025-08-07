import { Chrome } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Extension() {
  // NOTE: Placeholder download to simulate a real browser extension install
  // TODO: Replace href with your actual Chrome Web Store/Firefox Add-ons URL or signed .crx/.xpi file
  const downloadHref = "/downloads/phishnet-extension.zip"

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Browser Extension</h1>
        <p className="text-muted-foreground">Add the PhishNet extension for real-time phishing protection.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Chrome className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="flex items-center gap-2">
                PhishNet Extension <Badge variant="secondary">Beta</Badge>
              </CardTitle>
              <CardDescription>Works on Chromium-based browsers.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Real-time URL scanning and alerts</li>
            <li>• Lightweight and privacy-conscious</li>
            <li>• Seamless updates</li>
          </ul>
          <div className="flex gap-3">
            <Button asChild className="min-w-40">
              {/* TODO: Replace download with real install flow */}
              <a href={downloadHref} download>
                Add Extension
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" aria-disabled>
                View Docs
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

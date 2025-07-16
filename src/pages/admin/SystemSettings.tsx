import { Settings, Database, Shield, Bell, Globe, Save, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="text-muted-foreground">
          Configure system-wide settings and preferences for the PhishNet platform
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Settings</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                General Configuration
              </CardTitle>
              <CardDescription>
                Basic system settings and platform configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" value="PhishNet AI" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform-version">Platform Version</Label>
                  <Input id="platform-version" value="v2.1.0" readOnly />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" value="support@phishnet.ai" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform-description">Platform Description</Label>
                <Textarea 
                  id="platform-description" 
                  value="Advanced AI-powered email security platform protecting organizations from phishing attacks and malicious content."
                  rows={3}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable maintenance mode to prevent new API requests
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">User Registration</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow new users to register for accounts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Configuration
              </CardTitle>
              <CardDescription>
                Security settings and access control configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" value="60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                  <Input id="max-login-attempts" type="number" value="5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <Select defaultValue="strong">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                    <SelectItem value="strong">Strong (12+ chars, mixed case, numbers)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (16+ chars, special chars)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require 2FA for all admin accounts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">IP Whitelist</Label>
                  <p className="text-sm text-muted-foreground">
                    Restrict admin access to specific IP addresses
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">
                    Log all administrative actions and API calls
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure system notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email for Alerts</Label>
                <Input id="admin-email" type="email" value="admin@phishnet.ai" />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">System Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Critical system errors and downtime alerts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Failed login attempts and security events
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Usage Reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Weekly usage and performance reports
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">New User Registration</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify when new users register
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                API Configuration
              </CardTitle>
              <CardDescription>
                API rate limits, quotas, and global settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="default-rate-limit">Default Rate Limit (per hour)</Label>
                  <Input id="default-rate-limit" type="number" value="1000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-requests-day">Max Requests per Day</Label>
                  <Input id="max-requests-day" type="number" value="10000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="api-timeout">API Timeout (seconds)</Label>
                  <Input id="api-timeout" type="number" value="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="concurrent-requests">Max Concurrent Requests</Label>
                  <Input id="concurrent-requests" type="number" value="100" />
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">API Documentation</Label>
                  <p className="text-sm text-muted-foreground">
                    Make API documentation publicly accessible
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Rate Limit Headers</Label>
                  <p className="text-sm text-muted-foreground">
                    Include rate limit information in API responses
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                System Maintenance
              </CardTitle>
              <CardDescription>
                Database optimization, backups, and system health monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Database Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Database Size</span>
                      <span className="font-medium">2.4 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Backup</span>
                      <span className="font-medium">2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health Status</span>
                      <span className="font-medium text-success">Healthy</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Database className="w-4 h-4 mr-2" />
                      Create Backup
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">System Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>CPU Usage</span>
                      <span className="font-medium">23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory Usage</span>
                      <span className="font-medium">67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Disk Space</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh Stats
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Automated Tasks</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Daily Database Cleanup</Label>
                    <p className="text-sm text-muted-foreground">
                      Remove old scan data and optimize database daily
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Weekly Backups</Label>
                    <p className="text-sm text-muted-foreground">
                      Create automatic backups every week
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Log Rotation</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically rotate and compress log files
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button size="lg">
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
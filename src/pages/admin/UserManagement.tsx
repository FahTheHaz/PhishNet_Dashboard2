import { Users, UserPlus, Search, MoreHorizontal, Shield, Eye, Edit, Trash2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  status: "active" | "inactive" | "suspended"
  lastLogin: string
  apiKeys: number
  totalScans: number
  createdAt: string
}

export default function UserManagement() {
  // TODO: Replace these placeholder functions with actual Firebase/Supabase calls
  const handleAddUser = () => {
    console.log("Add user clicked");
    // PLACEHOLDER: Replace with actual user creation logic
    // This should:
    // 1. Open a modal/form for user details
    // 2. Create user in Firebase/Supabase
    // 3. Update the users list
  };

  const handleDeleteUser = (userId: string) => {
    console.log("Delete user clicked:", userId);
    // PLACEHOLDER: Replace with actual user deletion logic
    // This should:
    // 1. Show confirmation dialog
    // 2. Delete user from Firebase/Supabase
    // 3. Update the users list
  };

  const handleEditUser = (userId: string) => {
    console.log("Edit user clicked:", userId);
    // PLACEHOLDER: Replace with actual user editing logic
    // This should:
    // 1. Open edit form with current user data
    // 2. Update user in Firebase/Supabase
    // 3. Refresh the users list
  };

  // Mock data - replace with actual API calls
  const users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@company.com",
      role: "admin",
      status: "active",
      lastLogin: "2 hours ago",
      apiKeys: 3,
      totalScans: 15420,
      createdAt: "2024-01-01"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@company.com",
      role: "user",
      status: "active",
      lastLogin: "1 day ago",
      apiKeys: 2,
      totalScans: 8930,
      createdAt: "2024-01-05"
    },
    {
      id: "3",
      name: "Bob Wilson",
      email: "bob.wilson@company.com",
      role: "user",
      status: "inactive",
      lastLogin: "1 week ago",
      apiKeys: 1,
      totalScans: 2340,
      createdAt: "2024-01-10"
    },
    {
      id: "4",
      name: "Alice Johnson",
      email: "alice.johnson@company.com",
      role: "user",
      status: "suspended",
      lastLogin: "2 weeks ago",
      apiKeys: 0,
      totalScans: 450,
      createdAt: "2024-01-15"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success">Active</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge variant="default">Admin</Badge>
      case "user":
        return <Badge variant="outline">User</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === "active").length,
    adminUsers: users.filter(u => u.role === "admin").length,
    newThisMonth: 2
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            Manage user accounts, permissions, and access controls
          </p>
        </div>
        <Button onClick={handleAddUser}>
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+{stats.newThisMonth}</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Administrators</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.adminUsers}</div>
            <p className="text-xs text-muted-foreground">
              Admin access granted
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total API Keys</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.reduce((sum, user) => sum + user.apiKeys, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all users
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by name or email..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">Filter by Role</Button>
            <Button variant="outline">Filter by Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            Complete list of users with their roles and activity status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>API Keys</TableHead>
                <TableHead>Total Scans</TableHead>
                <TableHead>Created</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="" alt={user.name} />
                        <AvatarFallback className="bg-primary/10">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastLogin}
                  </TableCell>
                  <TableCell>{user.apiKeys}</TableCell>
                  <TableCell>{user.totalScans.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.createdAt}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEditUser(user.id)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
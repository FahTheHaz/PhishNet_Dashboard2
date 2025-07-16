import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ApiKeys from "./pages/ApiKeys";
import RecentScans from "./pages/RecentScans";
import Documentation from "./pages/Documentation";
import UserManagement from "./pages/admin/UserManagement";
import SystemSettings from "./pages/admin/SystemSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes with layout */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout><Dashboard /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/api-keys" element={
              <ProtectedRoute>
                <Layout><ApiKeys /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/recent-scans" element={
              <ProtectedRoute>
                <Layout><RecentScans /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/documentation" element={
              <ProtectedRoute>
                <Layout><Documentation /></Layout>
              </ProtectedRoute>
            } />
            
            {/* Admin routes */}
            <Route path="/admin/users" element={
              <ProtectedRoute>
                <Layout><UserManagement /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/settings" element={
              <ProtectedRoute>
                <Layout><SystemSettings /></Layout>
              </ProtectedRoute>
            } />
            
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

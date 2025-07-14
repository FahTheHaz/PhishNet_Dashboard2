import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes with layout */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/api-keys" element={<Layout><ApiKeys /></Layout>} />
          <Route path="/recent-scans" element={<Layout><RecentScans /></Layout>} />
          <Route path="/documentation" element={<Layout><Documentation /></Layout>} />
          
          {/* Admin routes */}
          <Route path="/admin/users" element={<Layout><UserManagement /></Layout>} />
          <Route path="/admin/settings" element={<Layout><SystemSettings /></Layout>} />
          
          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

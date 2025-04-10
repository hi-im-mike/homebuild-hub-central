
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import OnboardingApplications from "./pages/OnboardingApplications";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/properties" element={<Layout><Properties /></Layout>} />
          <Route path="/onboarding" element={<Layout><OnboardingApplications /></Layout>} />
          <Route path="/warranty" element={<Layout><Dashboard /></Layout>} />
          <Route path="/energy" element={<Layout><Dashboard /></Layout>} />
          <Route path="/risk-policies" element={<Layout><Dashboard /></Layout>} />
          <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

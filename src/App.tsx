
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import AdminDashboard from "./pages/AdminDashboard";
import WarrantyApplications from "./pages/WarrantyApplications";
import RiskPolicies from "./pages/RiskPolicies";
import Homeowners from "./pages/Homeowners";
import Subcontractors from "./pages/Subcontractors";
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
          <Route path="/properties/:id" element={<Layout><PropertyDetails /></Layout>} />
          <Route path="/warranty-applications" element={<Layout><WarrantyApplications /></Layout>} />
          <Route path="/risk-policies" element={<Layout><RiskPolicies /></Layout>} />
          <Route path="/homeowners" element={<Layout><Homeowners /></Layout>} />
          <Route path="/energy" element={<Layout><Dashboard /></Layout>} />
          <Route path="/subcontractors" element={<Layout><Subcontractors /></Layout>} />
          <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

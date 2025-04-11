
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
import HomeownerDetails from "./pages/HomeownerDetails";
import Subcontractors from "./pages/Subcontractors";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import BuilderDetails from "./pages/BuilderDetails";
import AllBuilders from "./pages/AllBuilders";
import AdminNavbar from "./components/layout/AdminNavbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Builder account routes */}
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/properties" element={<Layout><Properties /></Layout>} />
          <Route path="/properties/:id" element={<Layout><PropertyDetails /></Layout>} />
          <Route path="/warranty-applications" element={<Layout><WarrantyApplications /></Layout>} />
          <Route path="/risk-policies" element={<Layout><RiskPolicies /></Layout>} />
          <Route path="/homeowners" element={<Layout><Homeowners /></Layout>} />
          <Route path="/homeowners/:id" element={<Layout><HomeownerDetails /></Layout>} />
          <Route path="/energy" element={<Layout><Dashboard /></Layout>} />
          <Route path="/subcontractors" element={<Layout><Subcontractors /></Layout>} />
          <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          
          {/* Admin routes */}
          <Route path="/builder-details" element={<>
            <AdminNavbar />
            <BuilderDetails />
          </>} />
          <Route path="/builder-details/:id" element={<>
            <AdminNavbar />
            <BuilderDetails />
          </>} />
          <Route path="/all-builders" element={<>
            <AdminNavbar />
            <AllBuilders />
          </>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

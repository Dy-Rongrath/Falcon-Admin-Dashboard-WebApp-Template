import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavigation from "@/components/SideNavigation";
import TopNavigationBar from "@/components/TopNavigationBar";
import CustomizeButton from "@/components/CustomizeButton";

// Pages
import Index from "./pages/Index";
import Products from "./pages/ecommerce/Products";
import Orders from "./pages/ecommerce/Orders";
import Customers from "./pages/ecommerce/Customers";
import UserManagement from "./pages/UserManagement";
import Analytics from "./pages/Analytics";
import Email from "./pages/Email";
import Kanban from "./pages/Kanban";
import Settings from "./pages/Settings";
import StandaloneProducts from "./pages/Products";
import Events from "./pages/Events";
import SupportDesk from "./pages/support/SupportDesk";
import Authentication from "./pages/Authentication";
import Utilities from "./pages/Utilities";
import FileManager from "./pages/FileManager";
import Chat from "./pages/Chat";
import Invoices from "./pages/Invoices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component for pages with sidebar
const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-slate-50 flex">
    <SideNavigation />
    <div className="flex-1 ml-64">
      <TopNavigationBar />
      <main className="p-6">{children}</main>
    </div>
    <CustomizeButton />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/ecommerce/products"
            element={
              <DashboardLayout>
                <Products />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/orders"
            element={
              <DashboardLayout>
                <Orders />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/customers"
            element={
              <DashboardLayout>
                <Customers />
              </DashboardLayout>
            }
          />
          <Route
            path="/users"
            element={
              <DashboardLayout>
                <UserManagement />
              </DashboardLayout>
            }
          />
          <Route
            path="/analytics"
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            }
          />
          <Route
            path="/email"
            element={
              <DashboardLayout>
                <Email />
              </DashboardLayout>
            }
          />
          <Route
            path="/kanban"
            element={
              <DashboardLayout>
                <Kanban />
              </DashboardLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            }
          />
          <Route
            path="/products"
            element={
              <DashboardLayout>
                <StandaloneProducts />
              </DashboardLayout>
            }
          />
          <Route
            path="/events"
            element={
              <DashboardLayout>
                <Events />
              </DashboardLayout>
            }
          />
          <Route
            path="/support/tickets"
            element={
              <DashboardLayout>
                <SupportDesk />
              </DashboardLayout>
            }
          />
          <Route
            path="/auth"
            element={
              <DashboardLayout>
                <Authentication />
              </DashboardLayout>
            }
          />
          <Route
            path="/utilities"
            element={
              <DashboardLayout>
                <Utilities />
              </DashboardLayout>
            }
          />
          <Route
            path="/files"
            element={
              <DashboardLayout>
                <FileManager />
              </DashboardLayout>
            }
          />
          <Route
            path="/chat"
            element={
              <DashboardLayout>
                <Chat />
              </DashboardLayout>
            }
          />
          <Route
            path="/invoices"
            element={
              <DashboardLayout>
                <Invoices />
              </DashboardLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

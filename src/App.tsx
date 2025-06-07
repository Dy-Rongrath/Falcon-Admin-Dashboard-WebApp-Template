import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SideNavigation from "@/components/SideNavigation";
import TopNavigationBar from "@/components/TopNavigationBar";
import CustomizeButton from "@/components/CustomizeButton";
import Footer from "@/components/Footer";

// Pages
import Index from "./pages/Index";
import Products from "./pages/ecommerce/Products";
import Orders from "./pages/ecommerce/Orders";
import Customers from "./pages/ecommerce/Customers";
import UserManagement from "./pages/UserManagement";
import TeamManagement from "./pages/TeamManagement";
import Analytics from "./pages/Analytics";
import Email from "./pages/Email";
import Kanban from "./pages/Kanban";
import Settings from "./pages/Settings";
import StandaloneProducts from "./pages/Products";
import Events from "./pages/Events";
import SupportDesk from "./pages/support/SupportDesk";
import SupportAgents from "./pages/support/Agents";
import Authentication from "./pages/Authentication";
import Utilities from "./pages/Utilities";
import FileManager from "./pages/FileManager";
import Chat from "./pages/Chat";
import Invoices from "./pages/Invoices";
import Profile from "./pages/Profile";
import Components from "./pages/Components";
import Notifications from "./pages/Notifications";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Cart from "./pages/Cart";
import ELearning from "./pages/ELearning";
import Social from "./pages/Social";
import Charts from "./pages/Charts";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Widgets from "./pages/Widgets";
import Starter from "./pages/Starter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component for pages with sidebar
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-falcon-bg-light flex">
      <SideNavigation
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 lg:ml-64 flex flex-col">
        <TopNavigationBar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
      <CustomizeButton />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardLayout>
                <Index />
              </DashboardLayout>
            }
          />
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
            path="/team"
            element={
              <DashboardLayout>
                <TeamManagement />
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
            path="/support/agents"
            element={
              <DashboardLayout>
                <SupportAgents />
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
          <Route
            path="/profile"
            element={
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            }
          />
          <Route
            path="/components"
            element={
              <DashboardLayout>
                <Components />
              </DashboardLayout>
            }
          />
          <Route
            path="/notifications"
            element={
              <DashboardLayout>
                <Notifications />
              </DashboardLayout>
            }
          />
          <Route
            path="/calendar"
            element={
              <DashboardLayout>
                <Calendar />
              </DashboardLayout>
            }
          />
          <Route
            path="/reports"
            element={
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <DashboardLayout>
                <Cart />
              </DashboardLayout>
            }
          />
          <Route
            path="/elearning"
            element={
              <DashboardLayout>
                <ELearning />
              </DashboardLayout>
            }
          />
          <Route
            path="/social"
            element={
              <DashboardLayout>
                <Social />
              </DashboardLayout>
            }
          />
          <Route
            path="/charts"
            element={
              <DashboardLayout>
                <Charts />
              </DashboardLayout>
            }
          />
          <Route
            path="/icons"
            element={
              <DashboardLayout>
                <Icons />
              </DashboardLayout>
            }
          />
          <Route
            path="/maps"
            element={
              <DashboardLayout>
                <Maps />
              </DashboardLayout>
            }
          />
          <Route
            path="/widgets"
            element={
              <DashboardLayout>
                <Widgets />
              </DashboardLayout>
            }
          />
          <Route
            path="/starter"
            element={
              <DashboardLayout>
                <Starter />
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

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
import ProductGrid from "./pages/ecommerce/ProductGrid";
import ProductDetails from "./pages/ecommerce/ProductDetails";
import AddProduct from "./pages/ecommerce/AddProduct";
import Orders from "./pages/ecommerce/Orders";
import OrderList from "./pages/ecommerce/OrderList";
import OrderDetails from "./pages/ecommerce/OrderDetails";
import Customers from "./pages/ecommerce/Customers";
import CustomerDetails from "./pages/ecommerce/CustomerDetails";
import Checkout from "./pages/ecommerce/Checkout";
import Billing from "./pages/ecommerce/Billing";
import Invoice from "./pages/ecommerce/Invoice";
import UserManagement from "./pages/UserManagement";
import TeamManagement from "./pages/TeamManagement";
import Analytics from "./pages/Analytics";
import DashboardAnalytics from "./pages/dashboard/Analytics";
import Management from "./pages/dashboard/Management";
import SaaS from "./pages/dashboard/SaaS";
import DashboardSupportDesk from "./pages/dashboard/SupportDesk";
import CRM from "./pages/dashboard/CRM";
import LMS from "./pages/dashboard/LMS";
import BasicForms from "./pages/forms/Basic";
import AdvancedForms from "./pages/forms/Advanced";
import FloatingLabelsForms from "./pages/forms/FloatingLabels";
import WizardForms from "./pages/forms/Wizard";
import ValidationForms from "./pages/forms/Validation";
import TablesModule from "./pages/modules/Tables";
import ChartsModule from "./pages/modules/Charts";
import IconsModule from "./pages/modules/Icons";
import MapsModule from "./pages/modules/Maps";
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
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";
import EmailDetail from "./pages/email/EmailDetail";
import EmailCompose from "./pages/email/EmailCompose";
import CourseList from "./pages/elearning/CourseList";
import CourseGrid from "./pages/elearning/CourseGrid";

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
            path="/ecommerce/product-grid"
            element={
              <DashboardLayout>
                <ProductGrid />
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
            path="/ecommerce/order-list"
            element={
              <DashboardLayout>
                <OrderList />
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
            path="/ecommerce/products/:id"
            element={
              <DashboardLayout>
                <ProductDetails />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/add-product"
            element={
              <DashboardLayout>
                <AddProduct />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/orders/:id"
            element={
              <DashboardLayout>
                <OrderDetails />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/customers/:id"
            element={
              <DashboardLayout>
                <CustomerDetails />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/checkout"
            element={
              <DashboardLayout>
                <Checkout />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/billing"
            element={
              <DashboardLayout>
                <Billing />
              </DashboardLayout>
            }
          />
          <Route
            path="/ecommerce/invoice/:id"
            element={
              <DashboardLayout>
                <Invoice />
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
            path="/dashboard/analytics"
            element={
              <DashboardLayout>
                <DashboardAnalytics />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/crm"
            element={
              <DashboardLayout>
                <CRM />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/lms"
            element={
              <DashboardLayout>
                <LMS />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/management"
            element={
              <DashboardLayout>
                <Management />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/saas"
            element={
              <DashboardLayout>
                <SaaS />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/support-desk"
            element={
              <DashboardLayout>
                <DashboardSupportDesk />
              </DashboardLayout>
            }
          />
          <Route
            path="/forms/basic"
            element={
              <DashboardLayout>
                <BasicForms />
              </DashboardLayout>
            }
          />
          <Route
            path="/forms/advanced"
            element={
              <DashboardLayout>
                <AdvancedForms />
              </DashboardLayout>
            }
          />
          <Route
            path="/forms/floating-labels"
            element={
              <DashboardLayout>
                <FloatingLabelsForms />
              </DashboardLayout>
            }
          />
          <Route
            path="/forms/wizard"
            element={
              <DashboardLayout>
                <WizardForms />
              </DashboardLayout>
            }
          />
          <Route
            path="/forms/validation"
            element={
              <DashboardLayout>
                <ValidationForms />
              </DashboardLayout>
            }
          />
          <Route
            path="/modules/tables"
            element={
              <DashboardLayout>
                <TablesModule />
              </DashboardLayout>
            }
          />
          <Route
            path="/modules/charts"
            element={
              <DashboardLayout>
                <ChartsModule />
              </DashboardLayout>
            }
          />
          <Route
            path="/modules/icons"
            element={
              <DashboardLayout>
                <IconsModule />
              </DashboardLayout>
            }
          />
          <Route
            path="/modules/maps"
            element={
              <DashboardLayout>
                <MapsModule />
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
            path="/email/detail"
            element={
              <DashboardLayout>
                <EmailDetail />
              </DashboardLayout>
            }
          />
          <Route
            path="/email/compose"
            element={
              <DashboardLayout>
                <EmailCompose />
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
            path="/elearning/courses"
            element={
              <DashboardLayout>
                <CourseList />
              </DashboardLayout>
            }
          />
          <Route
            path="/elearning/course-grid"
            element={
              <DashboardLayout>
                <CourseGrid />
              </DashboardLayout>
            }
          />
          <Route
            path="/elearning/courses/:id"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Course Details</h1>
                  <p>Course details page - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/elearning/create-course"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Create Course</h1>
                  <p>Course creation page - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/elearning/students"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Student Overview</h1>
                  <p>Student management page - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/elearning/trainer"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Trainer Profile</h1>
                  <p>Trainer profile page - Coming Soon</p>
                </div>
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
          <Route path="/404" element={<Error404 />} />
          <Route path="/500" element={<Error500 />} />
          <Route
            path="/faq"
            element={
              <DashboardLayout>
                <FAQ />
              </DashboardLayout>
            }
          />
          <Route
            path="/pricing"
            element={
              <DashboardLayout>
                <Pricing />
              </DashboardLayout>
            }
          />
          <Route
            path="/docs/faq"
            element={
              <DashboardLayout>
                <FAQ />
              </DashboardLayout>
            }
          />
          <Route
            path="/landing"
            element={
              <DashboardLayout>
                <Landing />
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

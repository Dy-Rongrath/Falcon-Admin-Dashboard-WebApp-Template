import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import SideNavigation from "@/components/SideNavigation";
import TopNavigationBar from "@/components/TopNavigationBar";
import CustomizeButton from "@/components/CustomizeButton";
import Footer from "@/components/Footer";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-falcon-primary"></div>
      <p className="text-falcon-text-secondary text-sm">Loading...</p>
    </div>
  </div>
);

// Import essential components that load immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";

// Lazy load all other pages
const Products = lazy(() => import("./pages/ecommerce/Products"));
const ProductGrid = lazy(() => import("./pages/ecommerce/ProductGrid"));
const ProductDetails = lazy(() => import("./pages/ecommerce/ProductDetails"));
const AddProduct = lazy(() => import("./pages/ecommerce/AddProduct"));
const Orders = lazy(() => import("./pages/ecommerce/Orders"));
const OrderList = lazy(() => import("./pages/ecommerce/OrderList"));
const OrderDetails = lazy(() => import("./pages/ecommerce/OrderDetails"));
const Customers = lazy(() => import("./pages/ecommerce/Customers"));
const CustomerDetails = lazy(() => import("./pages/ecommerce/CustomerDetails"));
const Checkout = lazy(() => import("./pages/ecommerce/Checkout"));
const Billing = lazy(() => import("./pages/ecommerce/Billing"));
const Invoice = lazy(() => import("./pages/ecommerce/Invoice"));
const UserManagement = lazy(() => import("./pages/UserManagement"));
const TeamManagement = lazy(() => import("./pages/TeamManagement"));
const Analytics = lazy(() => import("./pages/Analytics"));
const DashboardAnalytics = lazy(() => import("./pages/dashboard/Analytics"));
const Management = lazy(() => import("./pages/dashboard/Management"));
const SaaS = lazy(() => import("./pages/dashboard/SaaS"));
const DashboardSupportDesk = lazy(() => import("./pages/dashboard/SupportDesk"));
const CRM = lazy(() => import("./pages/dashboard/CRM"));
const LMS = lazy(() => import("./pages/dashboard/LMS"));
const BasicForms = lazy(() => import("./pages/forms/Basic"));
const AdvancedForms = lazy(() => import("./pages/forms/Advanced"));
const FloatingLabelsForms = lazy(() => import("./pages/forms/FloatingLabels"));
const WizardForms = lazy(() => import("./pages/forms/Wizard"));
const ValidationForms = lazy(() => import("./pages/forms/Validation"));
const TablesModule = lazy(() => import("./pages/modules/Tables"));
const ChartsModule = lazy(() => import("./pages/modules/Charts"));
const IconsModule = lazy(() => import("./pages/modules/Icons"));
const MapsModule = lazy(() => import("./pages/modules/Maps"));
const Email = lazy(() => import("./pages/Email"));
const Kanban = lazy(() => import("./pages/Kanban"));
const Settings = lazy(() => import("./pages/Settings"));
const StandaloneProducts = lazy(() => import("./pages/Products"));
const Events = lazy(() => import("./pages/Events"));
const SupportDesk = lazy(() => import("./pages/support/SupportDesk"));
const SupportAgents = lazy(() => import("./pages/support/Agents"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Utilities = lazy(() => import("./pages/Utilities"));
const FileManager = lazy(() => import("./pages/FileManager"));
const Chat = lazy(() => import("./pages/Chat"));
const Invoices = lazy(() => import("./pages/Invoices"));
const Profile = lazy(() => import("./pages/Profile"));
const Components = lazy(() => import("./pages/Components"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Reports = lazy(() => import("./pages/Reports"));
const Cart = lazy(() => import("./pages/Cart"));
const ELearning = lazy(() => import("./pages/ELearning"));
const Social = lazy(() => import("./pages/Social"));
const Charts = lazy(() => import("./pages/Charts"));
const Icons = lazy(() => import("./pages/Icons"));
const Maps = lazy(() => import("./pages/Maps"));
const Widgets = lazy(() => import("./pages/Widgets"));
const Starter = lazy(() => import("./pages/Starter"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Landing = lazy(() => import("./pages/Landing"));
const EmailDetail = lazy(() => import("./pages/email/EmailDetail"));
const EmailCompose = lazy(() => import("./pages/email/EmailCompose"));
const CourseList = lazy(() => import("./pages/elearning/CourseList"));
const CourseGrid = lazy(() => import("./pages/elearning/CourseGrid"));
const ActivityLog = lazy(() => import("./pages/social/ActivityLog"));
const SupportCards = lazy(() => import("./pages/support/SupportCards"));

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
        <main className="flex-1 p-6">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </main>
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
      <HashRouter>
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
            path="/support/cards"
            element={
              <DashboardLayout>
                <SupportCards />
              </DashboardLayout>
            }
          />
          <Route
            path="/support/contacts"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Contacts</h1>
                  <p>Customer contacts management - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/support/contacts/:id"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Contact Details</h1>
                  <p>Individual contact details - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/support/preview"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Tickets Preview</h1>
                  <p>Ticket preview dashboard - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/support/links"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Quick Links</h1>
                  <p>Support quick links - Coming Soon</p>
                </div>
              </DashboardLayout>
            }
          />
          <Route
            path="/support/reports"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Support Reports</h1>
                  <p>Support analytics and reports - Coming Soon</p>
                </div>
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
            path="/social/activity"
            element={
              <DashboardLayout>
                <ActivityLog />
              </DashboardLayout>
            }
          />
          <Route
            path="/social/followers"
            element={
              <DashboardLayout>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Followers</h1>
                  <p>Followers management page - Coming Soon</p>
                </div>
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
          />          <Route path="/404" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Error404 />
            </Suspense>
          } />
          <Route path="/500" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Error500 />
            </Suspense>
          } />
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
          />          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

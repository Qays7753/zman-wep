/** Herbarium Dispatch app shell: RTL routes, protected assets and WhatsApp-first discovery. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const BrandStory = lazy(() => import("./pages/BrandStory"));
const OccasionDetail = lazy(() => import("./pages/OccasionDetail"));
const Customize = lazy(() => import("./pages/Customize"));
const Care = lazy(() => import("./pages/Care"));
const HowToOrder = lazy(() => import("./pages/HowToOrder"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/brand" component={BrandStory} />
    <Route path="/occasions/:id" component={OccasionDetail} />
    <Route path="/customize" component={Customize} />
    <Route path="/care" component={Care} />
    <Route path="/how-to-order" component={HowToOrder} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><div className="app-shell" dir="rtl"><ScrollToTop /><SiteHeader /><Suspense fallback={<main className="page-loader" aria-label="جارٍ التحميل" />}><Router /></Suspense><SiteFooter /></div><Toaster richColors position="top-center" /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

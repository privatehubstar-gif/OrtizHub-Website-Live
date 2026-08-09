import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Books from "@/pages/books";
import BookDetail from "@/pages/book-detail";
import DigitalProducts from "@/pages/digital-products";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function AnalyticsPageView() {
  const [location] = useLocation();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: `${location}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/digital-products" component={DigitalProducts} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AnalyticsPageView />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

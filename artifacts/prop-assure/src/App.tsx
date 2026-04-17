import { Switch, Route, Router } from "wouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import Home from "./pages/home";
import Services from "./pages/services";
import Industries from "./pages/industries";
import HowItWorks from "./pages/how-it-works";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/industries" component={Industries} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
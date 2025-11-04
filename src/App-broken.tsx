import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YearLoader from "./components/YearLoader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  const handleLoadingComplete = () => {
    setShowTransition(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative">
            {/* Main website content */}
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Loader overlay with mask effect */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  className="fixed inset-0 z-50"
                  initial={{ 
                    clipPath: 'circle(150% at 50% 50%)'
                  }}
                  animate={showTransition ? { 
                    clipPath: 'circle(0% at 50% 50%)'
                  } : {
                    clipPath: 'circle(150% at 50% 50%)'
                  }}
                  transition={{ 
                    duration: showTransition ? 1 : 0,
                    ease: "easeInOut"
                  }}
                  onAnimationComplete={() => {
                    if (showTransition) {
                      setIsLoading(false);
                    }
                  }}
                >
                  <YearLoader onComplete={handleLoadingComplete} duration={5000} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative">
            {/* Main website content */}
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Loader overlay with mask effect */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  className="fixed inset-0 z-50"
                  initial={{ 
                    clipPath: 'circle(150% at 50% 50%)'
                  }}
                  animate={showTransition ? { 
                    clipPath: 'circle(0% at 50% 50%)'
                  } : {
                    clipPath: 'circle(150% at 50% 50%)'
                  }}
                  transition={{ 
                    duration: showTransition ? 1 : 0,
                    ease: "easeInOut"
                  }}
                  onAnimationComplete={() => {
                    if (showTransition) {
                      setIsLoading(false);
                    }
                  }}
                >
                  <YearLoader onComplete={handleLoadingComplete} duration={5000} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

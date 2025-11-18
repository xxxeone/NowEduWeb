import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntroLoader } from "@/components/IntroLoader";
import { useIntroLoader } from "@/hooks/useIntroLoader";
import PromoPopup from "@/components/PromoPopup";
import BottomPromoPopup from "@/components/BottomPromoPopup";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { shouldShow, finish, isReady } = useIntroLoader();
  
  // Check if intro loader is disabled via env
  const isIntroEnabled = import.meta.env.VITE_ENABLE_INTRO_LOADER !== "false";
  const showIntro = isIntroEnabled && shouldShow && isReady;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro && <IntroLoader onFinish={finish} />}
        <PromoPopup />
        <BottomPromoPopup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
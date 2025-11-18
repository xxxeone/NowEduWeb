import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import promoImage from "@/assets/spm-sprint-promo.png";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Don't show on About Us page
    if (window.location.pathname === '/about-us') {
      return;
    }

    // Check popup display rules
    const lastShown = localStorage.getItem('worldedu_promo_last_shown');
    const visitCount = parseInt(localStorage.getItem('worldedu_visit_count') || '0');
    const dismissCount = parseInt(localStorage.getItem('worldedu_promo_dismiss_count') || '0');
    
    // Update visit count
    localStorage.setItem('worldedu_visit_count', (visitCount + 1).toString());
    
    // In dev mode, always show for testing
    const isDev = import.meta.env.DEV;
    
    if (isDev) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    // Display logic:
    // 1. Show on first visit
    // 2. Show again after 24 hours if dismissed less than 3 times
    // 3. Show every 3 visits after initial dismissal
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    let shouldShow = false;
    
    if (!lastShown) {
      // First time visitor
      shouldShow = true;
    } else if (dismissCount < 3) {
      // Dismissed less than 3 times, show after 24 hours
      const timeSinceLastShown = now - parseInt(lastShown);
      shouldShow = timeSinceLastShown >= twentyFourHours;
    } else if (visitCount % 3 === 0) {
      // After 3 dismissals, show every 3rd visit
      const timeSinceLastShown = now - parseInt(lastShown);
      shouldShow = timeSinceLastShown >= twentyFourHours;
    }
    
    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('worldedu_promo_last_shown', now.toString());
      }, 6000); // Show after 6 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    const dismissCount = parseInt(localStorage.getItem('worldedu_promo_dismiss_count') || '0');
    localStorage.setItem('worldedu_promo_dismiss_count', (dismissCount + 1).toString());
  };

  const handleEnroll = () => {
    window.open('https://wa.link/c5uaq8', '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative w-full max-w-sm pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden">
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDDE55]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#03AED2]/10 rounded-full blur-3xl"></div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 z-10 w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-300 hover:rotate-90 border border-white/30"
                  aria-label="关闭"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Content */}
                <div className="relative p-8">
                  {/* Logo Image - Larger */}
                  <div className="relative -mb-8">
                    <div className="w-80 h-80 mx-auto">
                      <img
                        src={promoImage}
                        alt="SPM冲刺班"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Info Section - Minimal & Clean */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-white tracking-tight leading-none">
                        SPM 冲刺班
                      </h3>
                      <p className="text-white/70 text-sm font-medium mt-0.5">
                        限时优惠 · 早鸟20% OFF
                      </p>
                    </div>

                    {/* Clean Divider */}
                    <div className="flex items-center gap-3 -my-1">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>

                    {/* Key Info - Minimal Layout */}
                    <div className="grid grid-cols-2 gap-3 text-center pt-1">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                        <div className="text-xs text-white/60 mb-1">开课日期</div>
                        <div className="text-sm font-bold text-white">12月1日</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                        <div className="text-xs text-white/60 mb-1">课程时长</div>
                        <div className="text-sm font-bold text-white">8周</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Premium Style */}
                  <motion.button
                    onClick={handleEnroll}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 font-black text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    <span className="relative flex items-center justify-center gap-2">
                      马上报名
                      <svg 
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>

                  {/* Subtle Footer Text */}
                  <p className="text-center text-xs text-white/50 mt-4">
                    名额有限 · 先到先得
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;

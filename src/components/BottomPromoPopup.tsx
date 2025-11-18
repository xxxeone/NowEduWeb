import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import offerImage from "@/assets/limited-offer.png";

const BottomPromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Don't show on About Us page
    if (window.location.pathname === '/about-us') {
      return;
    }

    const hasSeenBottomPopup = sessionStorage.getItem('worldedu_bottom_promo_seen');
    
    // In dev mode, always enable for testing
    const isDev = import.meta.env.DEV;
    
    if (isDev || !hasSeenBottomPopup) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        
        // Check if user scrolled to bottom (within 200px)
        if (scrollTop + windowHeight >= docHeight - 200) {
          setIsOpen(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('worldedu_bottom_promo_seen', 'true');
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

          {/* Popup Modal - Horizontal Layout */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative w-full max-w-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden">
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDDE55]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#03AED2]/10 rounded-full blur-3xl"></div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 z-10 w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-300 hover:rotate-90 border border-white/30"
                  aria-label="关闭"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Content - Horizontal Layout */}
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left: Image */}
                    <div className="flex-shrink-0">
                      <div className="w-64 h-64 md:w-72 md:h-72">
                        <img
                          src={offerImage}
                          alt="限时优惠"
                          className="w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Right: Info & CTA */}
                    <div className="flex-1 space-y-6">
                      {/* Title Section */}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight leading-tight">
                          限时优惠
                        </h3>
                        <p className="text-white/80 text-base md:text-lg leading-relaxed">
                          现在报名任意课程
                          <br />
                          <span className="text-[#FDDE55] font-bold">享受特别折扣</span>
                        </p>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        onClick={handleEnroll}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        <span className="relative flex items-center justify-center gap-2">
                          立即咨询
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

                      {/* Footer Text */}
                      <p className="text-center text-xs text-white/50">
                        机会难得 · 不容错过
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomPromoPopup;

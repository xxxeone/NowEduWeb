import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg py-3 transition-all duration-300"
    >
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src={logo} 
              alt="Now Edu" 
              className="h-10 sm:h-12 md:h-14 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {!isHomePage ? (
              <Link
                to="/"
                className="font-semibold text-white hover:text-[#fdde55] transition-colors"
              >
                首页
              </Link>
            ) : (
              <Link
                to="/about-us"
                className="font-semibold text-white hover:text-[#fdde55] transition-colors"
              >
                关于我们
              </Link>
            )}
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="font-semibold text-white hover:text-[#fdde55] transition-colors"
                >
                  课程特色
                </button>
                <button
                  onClick={() => scrollToSection("teachers")}
                  className="font-semibold text-white hover:text-[#fdde55] transition-colors"
                >
                  师资团队
                </button>
                <button
                  onClick={() => scrollToSection("subjects")}
                  className="font-semibold text-white hover:text-[#fdde55] transition-colors"
                >
                  学科课程
                </button>
                <button
                  onClick={() => scrollToSection("data-speak")}
                  className="font-semibold text-white hover:text-[#fdde55] transition-colors"
                >
                  数据说话
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="font-semibold text-white hover:text-[#fdde55] transition-colors"
                >
                  学生评价
                </button>
                <button
                  onClick={() => scrollToSection("promise")}
                  className="font-semibold text-white hover:text-[#fdde55] transition-colors"
                >
                  家长承诺
                </button>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
            className="hidden md:flex bg-[#03aed2] hover:bg-[#0396b8] text-white font-bold rounded-full px-8 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            立即报名
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="菜单"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg absolute top-full left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="container max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
            {!isHomePage ? (
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
              >
                首页
              </Link>
            ) : (
              <Link
                to="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
              >
                关于我们
              </Link>
            )}
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
                >
                  课程特色
                </button>
                <button
                  onClick={() => scrollToSection("teachers")}
                  className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
                >
                  师资团队
                </button>
                <button
                  onClick={() => scrollToSection("subjects")}
                  className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
                >
                  学科课程
                </button>
                <button
                  onClick={() => scrollToSection("data-speak")}
                  className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
                >
                  数据说话
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
                >
                  学生评价
                </button>
                <button
                  onClick={() => scrollToSection("promise")}
                  className="text-left text-white active:text-[#fdde55] font-semibold transition-colors py-3 px-4 active:bg-white/10 rounded-lg text-base"
                >
                  家长承诺
                </button>
              </>
            )}
            <div className="px-4 pt-2">
              <Button
                onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                className="w-full bg-[#03aed2] active:bg-[#0396b8] text-white font-bold rounded-full py-6 text-lg shadow-lg active:shadow-xl active:scale-95 transition-all"
              >
                立即报名
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

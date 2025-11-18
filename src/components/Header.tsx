import { Button } from "@/components/ui/button";
import logo from "@/assets/world-edu-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdde55]/95 backdrop-blur-sm shadow-md">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={logo} alt="World Edu" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/about-us"
              className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
            >
              关于我们
            </Link>
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
                >
                  课程特色
                </button>
                <button
                  onClick={() => scrollToSection("teachers")}
                  className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
                >
                  师资团队
                </button>
                <button
                  onClick={() => scrollToSection("subjects")}
                  className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
                >
                  学科课程
                </button>
                <button
                  onClick={() => scrollToSection("data-speak")}
                  className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
                >
                  数据说话
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
                >
                  学生评价
                </button>
                <button
                  onClick={() => scrollToSection("promise")}
                  className="font-semibold text-gray-800 hover:text-[#03aed2] transition-colors"
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
            className="md:hidden p-3 text-gray-800 active:bg-yellow-400/30 rounded-lg transition-colors"
            aria-label="菜单"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fdde55] border-t border-yellow-600/20 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
            >
              关于我们
            </Link>
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
                >
                  课程特色
                </button>
                <button
                  onClick={() => scrollToSection("teachers")}
                  className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
                >
                  师资团队
                </button>
                <button
                  onClick={() => scrollToSection("subjects")}
                  className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
                >
                  学科课程
                </button>
                <button
                  onClick={() => scrollToSection("data-speak")}
                  className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
                >
                  数据说话
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
                >
                  学生评价
                </button>
                <button
                  onClick={() => scrollToSection("promise")}
                  className="text-left text-gray-800 active:text-[#03aed2] font-semibold transition-colors py-4 px-2 active:bg-yellow-400/30 rounded-lg text-lg"
                >
                  家长承诺
                </button>
              </>
            )}
            <Button
              onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
              className="bg-[#03aed2] active:bg-[#0396b8] text-white font-bold rounded-full py-4 mt-2 text-lg shadow-lg active:shadow-xl active:scale-95 transition-all"
            >
              立即报名
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

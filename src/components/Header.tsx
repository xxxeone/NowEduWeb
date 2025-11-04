import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdde55]/95 backdrop-blur-sm shadow-md">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Now Edu" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
            className="md:hidden p-2 text-gray-800"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fdde55] border-t border-yellow-600/20 shadow-lg">
          <nav className="container max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-gray-800 hover:text-[#03aed2] font-semibold transition-colors py-2"
            >
              课程特色
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="text-left text-gray-800 hover:text-[#03aed2] font-semibold transition-colors py-2"
            >
              师资团队
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="text-left text-gray-800 hover:text-[#03aed2] font-semibold transition-colors py-2"
            >
              学科课程
            </button>
            <button
              onClick={() => scrollToSection("data-speak")}
              className="text-left text-gray-800 hover:text-[#03aed2] font-semibold transition-colors py-2"
            >
              数据说话
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-gray-800 hover:text-[#03aed2] font-semibold transition-colors py-2"
            >
              学生评价
            </button>
            <button
              onClick={() => scrollToSection("promise")}
              className="text-left text-gray-800 hover:text-[#03aed2] font-semibold transition-colors py-2"
            >
              家长承诺
            </button>
            <Button
              onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
              className="bg-[#03aed2] hover:bg-[#0396b8] text-white font-bold rounded-full py-3 mt-2"
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

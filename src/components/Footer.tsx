import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const handleEnroll = () => {
    window.open('https://wa.link/c5uaq8', '_blank');
  };

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Now Edu" className="h-32 sm:h-40 w-auto" />
            <p className="text-white/80 leading-relaxed">
              专业线上补习中心，专注Form 1-5学生教育，让每个孩子都能赢在起跑点。
            </p>
            <p className="text-white font-semibold text-lg">
              Results speak loudest
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 active:text-accent transition-colors text-base inline-block py-1">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 active:text-accent transition-colors text-base inline-block py-1">
                  课程介绍
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 active:text-accent transition-colors text-base inline-block py-1">
                  师资团队
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 active:text-accent transition-colors text-base inline-block py-1">
                  成功案例
                </a>
              </li>
              <li>
                <button
                  onClick={handleEnroll}
                  className="text-white/80 active:text-accent transition-colors text-base py-1"
                >
                  立即报名
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <a href="tel:0125488200" className="text-white/80 active:text-accent transition-colors text-base">012-548 8200</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <a href="mailto:HQ@nowedu.co" className="text-white/80 active:text-accent transition-colors text-base break-all">HQ@nowedu.co</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/80 text-base">168 Tingkat 1 Taman Sri Indah, Ayer Tawar New Village, Malaysia</span>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">开始学习之旅</h3>
            <p className="text-white/80 leading-relaxed">
              立即加入Now Edu，让孩子体验高效有趣的线上学习！
            </p>
            <Button
              onClick={handleEnroll}
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-full"
              size="lg"
            >
              立即报名
            </Button>
            
            {/* Social Media */}
            <div className="pt-4">
              <p className="text-sm text-white/80 mb-3">关注我们</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 Now Edu. 版权所有 · 专研教育14年 · 马来西亚线上补习领导品牌
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                服务条款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// WeChat icon as SVG component
const WeChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
  </svg>
);

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted border-t border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Lab Info - Spans more columns */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold">TIL</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {t({ en: 'Touchable Interface Lab', zh: '可触界面实验室' })}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t({ en: 'Hunan University', zh: '湖南大学' })}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t({
                en: 'Advancing haptic multisensory interaction, intelligent design, and user experience innovation.',
                zh: '推进触觉多感官交互、智能设计和用户体验创新。',
              })}
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-6 text-foreground">
              {t({ en: 'Contact', zh: '联系方式' })}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {t({
                    en: 'School of Design, Hunan University, Changsha, Hunan, China',
                    zh: '中国湖南省长沙市湖南大学设计艺术学院',
                  })}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:contact@lab.hnu.edu.cn"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@lab.hnu.edu.cn
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-6 text-foreground">
              {t({ en: 'Follow Us', zh: '关注我们' })}
            </h4>
            <a
              href="https://mp.weixin.qq.com/s/WgiFmcwWRHUlGA024BO9wQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-5 py-3 bg-background rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              aria-label={t({ en: 'WeChat Official Account', zh: '微信公众号' })}
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                <WeChatIcon />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {t({ en: 'WeChat', zh: '微信公众号' })}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()}{' '}
              {t({ en: 'Touchable Interface Lab, Hunan University', zh: '湖南大学可触界面实验室' })}.{' '}
              {t({ en: 'All rights reserved.', zh: '保留所有权利。' })}
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>
                Developed by Weihao
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

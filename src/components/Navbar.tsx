import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: { en: 'Home', zh: '首页' } },
    { id: 'research', label: { en: 'Research', zh: '研究' } },
    { id: 'news', label: { en: 'News', zh: '动态' } },
    { id: 'contact', label: { en: 'Contact', zh: '联系' } },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-effect border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 group"
            >
              <div className={`w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${
                scrolled ? '' : 'shadow-lg'
              }`}>
                <span className="text-white text-xs font-semibold">TIL</span>
              </div>
              <div className="hidden sm:block">
                <div className={`text-sm font-semibold transition-colors ${
                  scrolled ? 'text-foreground' : 'text-foreground'
                }`}>
                  {t({ en: 'Touchable Interface Lab', zh: '可触界面实验室' })}
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentPage === item.id
                      ? scrolled
                        ? 'bg-foreground/5 text-foreground'
                        : 'bg-white/10 text-foreground backdrop-blur-sm'
                      : scrolled
                      ? 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {t(item.label)}
                </button>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`ml-2 px-3 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-1.5 ${
                  scrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? '中文' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled
                  ? 'hover:bg-foreground/5'
                  : 'hover:bg-white/5'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden glass-effect border-b border-border/50"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-foreground/5 text-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {t(item.label)}
                </button>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? '切换到中文' : 'Switch to English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import { useState, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ResearchPage } from './components/ResearchPage';
import { NewsPage } from './components/NewsPage';
import { ContactPage } from './components/ContactPage';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence, motion } from 'motion/react';

type Page = 'home' | 'research' | 'news' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'research':
        return <ResearchPage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

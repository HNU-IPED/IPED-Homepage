import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export const NewsPage = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: {
        en: 'News Title Placeholder',
        zh: '新闻标题占位符',
      },
      excerpt: {
        en: 'News content will be added here. This is a placeholder for upcoming lab news and updates.',
        zh: '新闻内容将在此处添加。这是即将发布的实验室新闻和更新的占位符。',
      },
      date: '2024-10-27',
      category: { en: 'Research', zh: '研究' },
    },
    {
      id: 2,
      title: {
        en: 'News Title Placeholder',
        zh: '新闻标题占位符',
      },
      excerpt: {
        en: 'News content will be added here. This is a placeholder for upcoming lab news and updates.',
        zh: '新闻内容将在此处添加。这是即将发布的实验室新闻和更新的占位符。',
      },
      date: '2024-10-20',
      category: { en: 'Events', zh: '活动' },
    },
    {
      id: 3,
      title: {
        en: 'News Title Placeholder',
        zh: '新闻标题占位符',
      },
      excerpt: {
        en: 'News content will be added here. This is a placeholder for upcoming lab news and updates.',
        zh: '新闻内容将在此处添加。这是即将发布的实验室新闻和更新的占位符。',
      },
      date: '2024-10-15',
      category: { en: 'Publications', zh: '发表' },
    },
    {
      id: 4,
      title: {
        en: 'News Title Placeholder',
        zh: '新闻标题占位符',
      },
      excerpt: {
        en: 'News content will be added here. This is a placeholder for upcoming lab news and updates.',
        zh: '新闻内容将在此处添加。这是即将发布的实验室新闻和更新的占位符。',
      },
      date: '2024-10-10',
      category: { en: 'Awards', zh: '荣誉' },
    },
  ];

  return (
    <div className="min-h-screen pt-14">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-headline mb-6">
              {t({ en: 'News & Updates', zh: '新闻动态' })}
            </h1>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              {t({
                en: 'Stay updated with the latest happenings at our lab.',
                zh: '了解实验室的最新动态和进展。',
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-background rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all border border-border/50 hover:border-primary/20">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0"
                    >
                      {t(item.category)}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(item.excerpt)}
                  </p>

                  {/* Read More */}
                  <button className="inline-flex items-center text-primary font-medium group/button">
                    <span>{t({ en: 'Read more', zh: '阅读更多' })}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground">
              {t({
                en: 'More news coming soon',
                zh: '更多新闻即将发布',
              })}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Award, Brain, Zap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { images } from '../config/images';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const researchAreas = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: { en: 'Haptic Multisensory Interaction', zh: '触觉多感官交互' },
      desc: {
        en: 'Haptic and multisensory multimodal human-computer interaction',
        zh: '触觉与多感官多模态人机交互研究',
      },
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: { en: 'AI4UX', zh: 'AI赋能用户体验' },
      desc: {
        en: 'AI-enabled intelligent product interface and user experience design',
        zh: 'AI赋能的智能产品界面与用户体验设计',
      },
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: { en: 'Seamless Multi-task Design', zh: '无缝多任务设计' },
      desc: {
        en: 'Seamless multi-task experience design',
        zh: '无缝多任务体验设计',
      },
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: { en: 'Uncertainty-driven Design', zh: '不确定性驱动设计' },
      desc: {
        en: 'Uncertainty-driven intelligent design methods',
        zh: '不确定性驱动的智能设计方法',
      },
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <motion.h1
              className="text-display gradient-text"
              style={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
            >
              {t({ en: 'Touchable Interface Lab', zh: '可触界面实验室' })}
            </motion.h1>

            <motion.p
              className="text-body-large text-muted-foreground max-w-3xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {t({
                en: 'Advancing the frontiers of haptic multisensory interaction, intelligent design, and seamless user experiences.',
                zh: '推进触觉多感官交互、智能设计和无缝用户体验的前沿研究。',
              })}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Button
                onClick={() => onNavigate('research')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {t({ en: 'Explore Research', zh: '探索研究' })}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('contact')}
                className="text-lg h-14 px-8 rounded-full border-2 hover:bg-foreground/5"
              >
                {t({ en: 'Join Our Team', zh: '加入我们' })}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-headline mb-6">
              {t({ en: 'About Our Lab', zh: '关于实验室' })}
            </h2>
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t({
                en: 'Focusing on haptic multisensory and multimodal human-computer interaction, intelligent product interfaces and user experience design. We aim to advance theoretical research and industrial innovation through the integration of AI and HCI technologies.',
                zh: '专注于触觉多感官与多模态人机交互、智能产品界面与用户体验设计的交叉研究领域。实验室的目标是通过结合人工智能与人机交互技术，推动相关设计领域的理论方法研究与产业应用创新。',
              })}
            </p>
          </motion.div>

          {/* Research Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all border border-border/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t(area.title)}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(area.desc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="section-spacing bg-muted">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">
              {t({ en: 'Our Dynamic Team', zh: '充满活力的团队' })}
            </h2>
            <p className="text-body-large text-muted-foreground">
              {t({
                en: 'Building the future together (Fall 2025)',
                zh: '共同创造未来（2025年秋季）',
              })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '8', label: { en: 'PhD Students', zh: '博士生' } },
              { number: '20', label: { en: 'Master Students', zh: '硕士生' } },
              { number: '8', label: { en: 'Research Assistants', zh: '科研助理' } },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-3xl p-10 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-6xl font-bold gradient-text mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">{t(stat.label)}</div>
              </motion.div>
            ))}
          </div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={images.lab.meeting}
              alt={t({ en: 'Lab Team Meeting', zh: '实验室团队会议' })}
              className="w-full aspect-[21/9] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Industry Collaboration */}
      <section className="section-spacing bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-headline mb-8">
              {t({ en: 'Industry Collaboration', zh: '产业合作' })}
            </h2>
            <p className="text-body-large text-muted-foreground leading-relaxed mb-8">
              {t({
                en: 'Starting from front-line industry needs, we have established deep collaborative relationships with leading companies in mobile communications, smart mobility, smart home, and high-end equipment sectors.',
                zh: '实验室从行业一线需求出发，经过多年积累，与移动通信、智慧出行、智能家居、高端装备等行业知名企业建立了深度的合作关系。',
              })}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({
                en: 'Our collaboration covers user research, human factors experiments, data modeling, design standards, design solutions, design patents, and co-creation workshops to explore industry trends.',
                zh: '合作涵盖用户研究、人因实验、数据建模、设计标准、设计方案、设计专利等合作项目，并联合开展前沿领域共创工作坊。',
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-headline mb-8">
              {t({
                en: 'Ready to Shape the Future?',
                zh: '准备好一起创造未来了吗？',
              })}
            </h2>
            <p className="text-body-large text-muted-foreground mb-12">
              {t({
                en: 'Join our team of innovators and researchers pushing the boundaries of human-computer interaction.',
                zh: '加入我们的创新团队，共同推动人机交互领域的前沿研究。',
              })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-full shadow-lg"
              >
                {t({ en: 'Get in Touch', zh: '联系我们' })}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('research')}
                className="text-lg h-14 px-8 rounded-full border-2"
              >
                {t({ en: 'View Research', zh: '查看研究' })}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

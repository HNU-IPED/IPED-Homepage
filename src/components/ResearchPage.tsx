import { useState } from 'react';
import { ExternalLink, Calendar, Sparkles, Brain, Zap, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { images } from '../config/images';

export const ResearchPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const researchAreas = [
    {
      id: 'haptic',
      icon: <Sparkles className="w-6 h-6" />,
      title: { en: 'Haptic Multimodal Perception and Interaction', zh: '触觉多模态感知与交互' },
      description: {
        en: 'Research on how to enhance user perception experience through haptic experience elements such as vibration, heating, texture, and feedback interaction.',
        zh: '研究如何通过震动、发热、纹理等触觉体验要素和反馈交互提升用户感知体验。',
      },
    },
    {
      id: 'seamless',
      icon: <Zap className="w-6 h-6" />,
      title: { en: 'Seamless Experience Design in Multi-task Interaction', zh: '多任务交互中的无缝体验设计研究' },
      description: {
        en: 'Utilizing multimodal user interfaces, task switching, and parallel interaction methods to achieve seamless user experience in multi-task processes.',
        zh: '在多任务过程中，利用多模态用户界面，任务切换与并行交互方式，实现无缝用户体验。',
      },
    },
    {
      id: 'ai4ux',
      icon: <Brain className="w-6 h-6" />,
      title: { en: 'AI4UX', zh: 'AI4UX' },
      description: {
        en: 'Exploring the integration of artificial intelligence and user experience, forming a systematic research covering innovation strategy, research methods, process paradigms, and decision evaluation.',
        zh: '探索人工智能与用户体验的结合，形成涵盖创新战略、研究方法、流程范式、决策评估的体系化研究。',
      },
    },
    {
      id: 'uncertainty',
      icon: <Award className="w-6 h-6" />,
      title: { en: 'Uncertainty-driven Intelligent Design Methods', zh: '不确定性驱动的智能设计方法' },
      description: {
        en: 'Research on uncertainty theory and machine learning algorithms, quantifying uncertainties of systems, environments, and humans, constructing a closed-loop system covering probability characterization, scientific computing, risk assessment, and intelligent design.',
        zh: '研究不确定性理论及机器学习算法，量化系统、环境与人的不确定性，构建贯穿概率表征、科学计算、风险评估与智能设计的闭环体系，提升设计的适应性与可靠性。',
      },
    },
  ];

  const projects = [
    {
      id: 1,
      title: {
        en: 'Research Project Title',
        zh: '研究项目标题',
      },
      description: {
        en: 'Detailed project description will be added here. This placeholder represents ongoing research in our laboratory.',
        zh: '详细的项目描述将在此处添加。此占位符代表我们实验室正在进行的研究。',
      },
      year: '2024',
      category: 'haptic',
      image: images.projects.project1,
    },
    {
      id: 2,
      title: {
        en: 'Research Project Title',
        zh: '研究项目标题',
      },
      description: {
        en: 'Detailed project description will be added here. This placeholder represents ongoing research in our laboratory.',
        zh: '详细的项目描述将在此处添加。此占位符代表我们实验室正在进行的研究。',
      },
      year: '2024',
      category: 'ai4ux',
      image: images.projects.project2,
    },
    {
      id: 3,
      title: {
        en: 'Research Project Title',
        zh: '研究项目标题',
      },
      description: {
        en: 'Detailed project description will be added here. This placeholder represents ongoing research in our laboratory.',
        zh: '详细的项目描述将在此处添加。此占位符代表我们实验室正在进行的研究。',
      },
      year: '2023',
      category: 'seamless',
      image: images.projects.project3,
    },
    {
      id: 4,
      title: {
        en: 'Research Project Title',
        zh: '研究项目标题',
      },
      description: {
        en: 'Detailed project description will be added here. This placeholder represents ongoing research in our laboratory.',
        zh: '详细的项目描述将在此处添加。此占位符代表我们实验室正在进行的研究。',
      },
      year: '2023',
      category: 'uncertainty',
      image: images.projects.project4,
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
              {t({ en: 'Research & Innovation', zh: '研究与创新' })}
            </h1>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              {t({
                en: 'Exploring the frontiers of human-computer interaction through cutting-edge research and innovation.',
                zh: '通过前沿研究和创新探索人机交互的未来。',
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-title mb-4">
              {t({ en: 'Research Areas', zh: '研究方向' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t({
                en: 'Four key areas driving our innovation',
                zh: '驱动创新的四大核心研究方向',
              })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.button
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() =>
                  setSelectedCategory(selectedCategory === area.id ? 'all' : area.id)
                }
                className={`group relative p-8 rounded-3xl text-left transition-all ${
                  selectedCategory === area.id || selectedCategory === 'all'
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg'
                    : 'bg-muted/50 opacity-60'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                    selectedCategory === area.id || selectedCategory === 'all'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-foreground/5 text-muted-foreground'
                  }`}
                >
                  {area.icon}
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{t(area.title)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(area.description)}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-title mb-4">
              {t({ en: 'Research Projects', zh: '研究项目' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t({
                en: 'Showcasing our latest work and achievements',
                zh: '展示我们的最新工作和成果',
              })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={project.image}
                      alt={t(project.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-0 shadow-lg">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {t(project.title)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t(project.description)}
                    </p>
                    <Button
                      variant="ghost"
                      className="group/button p-0 h-auto hover:bg-transparent"
                    >
                      <span className="text-primary font-medium">
                        {t({ en: 'Learn more', zh: '了解更多' })}
                      </span>
                      <ExternalLink className="w-4 h-4 ml-2 text-primary group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'No projects in this category yet',
                  zh: '该类别暂无项目',
                })}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-title mb-4">
              {t({ en: 'Publications', zh: '学术成果' })}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t({
                en: 'Our research contributions to the academic community',
                zh: '我们对学术界的研究贡献',
              })}
            </p>
            <p className="text-muted-foreground">
              {t({
                en: 'Publications will be added here as they become available.',
                zh: '学术成果将在此处添加。',
              })}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

import { Mail, ExternalLink, MapPin, User, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { images } from '../config/images';

export const ContactPage = () => {
  const { t } = useLanguage();

  const teamMembers = {
    professors: [
      {
        name: { en: 'Prof. Wang Wei', zh: '王巍 教授' },
        role: { en: 'Professor, PhD Supervisor', zh: '教授，博士生导师' },
        bio: {
          en: 'Research areas: Haptic and multisensory human-computer interaction, intelligent design methods and theory, intelligent product design.',
          zh: '研究方向：触觉与多感官人机交互、智能设计方法与理论、智能产品设计。',
        },
        email: 'contact@lab.hnu.edu.cn',
        website: '#',
        avatar: images.professors.wangWei,
      },
      {
        name: { en: 'Assoc. Prof. Cao Lixiong', zh: '曹立雄 副教授' },
        role: { en: 'Associate Professor, Master Supervisor', zh: '副教授，硕士生导师' },
        bio: {
          en: 'Research areas: Uncertainty quantification, structural optimization design methods, virtual simulation technology, human factors analysis, digital twins, aircraft and intelligent robot design.',
          zh: '研究方向：不确定性量化，结构优化设计方法，虚拟仿真技术、人因分析、数字孪生、飞行器和智能机器人设计等。',
        },
        email: 'contact@lab.hnu.edu.cn',
        website: '#',
        avatar: images.professors.caoLixiong,
      },
      {
        name: { en: 'Asst. Prof. Luan Zhilong', zh: '栾之珑 助理教授' },
        role: { en: 'Assistant Professor, Master Supervisor', zh: '助理教授，硕士生导师' },
        bio: {
          en: 'Research areas: Human-AI collaborative design strategies, design value and technology ethics speculation, standardization of design methods.',
          zh: '研究方向：人智协同设计策略、设计价值与技术伦理思辨、设计方法标准化。',
        },
        email: 'contact@lab.hnu.edu.cn',
        website: '#',
        avatar: images.professors.luanZhilong,
      },
      {
        name: { en: 'Asst. Prof. Chen Fei', zh: '陈菲 助理教授' },
        role: { en: 'Assistant Professor, Master Supervisor', zh: '助理教授，硕士生导师' },
        bio: {
          en: 'Research areas: Haptic texture design, additive manufacturing product IP protection design, electronic product structure optimization design.',
          zh: '研究方向：触觉纹理设计，增材制造产品IP保护设计，电子产品结构优化设计。',
        },
        email: 'contact@lab.hnu.edu.cn',
        website: '#',
        avatar: images.professors.chenFei,
      },
    ],
    phd: [
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'PhD Student Name', zh: '博士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
      {
        name: { en: 'Yang Yijing', zh: '杨逸景' },
        research: {
          en: '2022 PhD Student, Master graduated from Loughborough University',
          zh: '2022博士研究生，硕士毕业于拉夫堡大学',
        },
        email: 'student@hnu.edu.cn',
      },
    ],
    masters: [
      {
        name: { en: 'Master Student Name', zh: '硕士生姓名' },
        research: {
          en: 'Research area placeholder',
          zh: '研究方向占位符',
        },
        email: 'student@hnu.edu.cn',
      },
    ],
    alumni: [
      {
        name: { en: 'Alumni Name', zh: '校友姓名' },
        position: {
          en: 'Position placeholder',
          zh: '职位占位符',
        },
        year: '2024',
      },
    ],
  };

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
              {t({ en: 'Contact & Team', zh: '联系与团队' })}
            </h1>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              {t({
                en: 'The lab has a dynamic research team including: 8 PhD students, 20 Master students, and 8 research assistants and undergraduate interns (As of Fall 2025).',
                zh: '实验室拥有一支充满活力的研究团队，成员包括：在读博士生8名、在读硕士生20名、科研助理和本科实习生8名（截止2025年秋季）。',
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 lg:p-16"
          >
            <h2 className="text-title mb-12 text-center">
              {t({ en: 'Get in Touch', zh: '联系我们' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">
                    {t({ en: 'Address', zh: '地址' })}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t({
                      en: 'School of Design, Hunan University, Changsha, Hunan Province, China',
                      zh: '中国湖南省长沙市湖南大学设计艺术学院',
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">
                    {t({ en: 'Email', zh: '邮箱' })}
                  </h4>
                  <a
                    href="mailto:contact@lab.hnu.edu.cn"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@lab.hnu.edu.cn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professors Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-title mb-4">
              {t({ en: 'Professors & Advisors', zh: '教授与导师' })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.professors.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-border/50"
              >
                <div className="flex items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {member.avatar ? (
                      <ImageWithFallback
                        src={member.avatar}
                        alt={t(member.name)}
                        className="w-24 h-24 rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <User className="w-12 h-12 text-primary" />
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(member.name)}
                    </h3>
                    <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-0">
                      {t(member.role)}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t(member.bio)}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild className="rounded-full">
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      {t({ en: 'Email', zh: '邮件' })}
                    </a>
                  </Button>
                  {member.website && member.website !== '#' && (
                    <Button variant="ghost" size="sm" asChild className="rounded-full">
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t({ en: 'Website', zh: '网站' })}
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          {/* PhD Students */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-title">
                {t({ en: 'PhD Students', zh: '博士研究生' })}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.phd.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-muted/50 rounded-2xl p-6 hover:bg-muted transition-all"
                >
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium text-center mb-2 text-foreground">
                    {t(member.name)}
                  </h4>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {t(member.research)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Master Students */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-foreground">
                {t({ en: 'Master Students', zh: '硕士研究生' })}
              </h3>
              <p className="text-muted-foreground mt-2">
                {t({
                  en: '20 Master students actively engaged in research',
                  zh: '20名硕士生积极参与研究工作',
                })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// 图片配置文件 / Image Configuration
// 替换占位符URL为实际图片URL / Replace placeholder URLs with actual image URLs

export const images = {
  // 教授头像 / Professor Avatars
  professors: {
    wangWei: 'https://placeholder-for-professor-wang-wei-photo.jpg',
    caoLixiong: 'https://placeholder-for-professor-cao-lixiong-photo.jpg',
    luanZhilong: 'https://placeholder-for-professor-luan-zhilong-photo.jpg',
    chenFei: 'https://placeholder-for-professor-chen-fei-photo.jpg',
  },

  // 实验室照片 / Lab Photos
  lab: {
    hero: 'https://placeholder-for-lab-hero-image.jpg',
    meeting: 'https://placeholder-for-lab-meeting-photo.jpg',
  },

  // 研究项目图片 / Research Project Images
  // 如果有具体项目图片，可以在这里添加
  // Add specific project images here if available
  projects: {
    project1: 'https://images.unsplash.com/photo-1682159672286-40790338349b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGNvbXB1dGVyJTIwaW50ZXJhY3Rpb258ZW58MXx8fHwxNzYxNTUwNDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project2: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjE1NTA0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project3: 'https://images.unsplash.com/photo-1712002641538-9581fc8b3b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VjaHNjcmVlbiUyMGludGVyZmFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTUwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    project4: 'https://images.unsplash.com/photo-1603620538410-aa4a336887f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNlYXJjaCUyMGxhYnxlbnwxfHx8fDE3NjE1NTA0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
};

// 使用说明 / Usage Instructions:
// 1. 从微信文章中获取实际图片URL
// 2. 替换上面的占位符URL
// 3. 在组件中导入使用:
//    import { images } from '../config/images';
//    <img src={images.professors.wangWei} />

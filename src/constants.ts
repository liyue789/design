export interface DesignSite {
  name: string;
  url: string;
  description: string;
  tags: string[];
  category: 'mainstream' | 'tools' | 'assets';
}

export const DESIGN_SITES: DesignSite[] = [
  // Mainstream Platforms
  {
    name: "Figma",
    url: "https://figma.com",
    description: "基于浏览器的云端设计工具，支持多人实时协作，拥有丰富的 Community 资源库。",
    tags: ["UI/UX", "协作", "云端"],
    category: 'mainstream'
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    description: "全球顶级设计师聚集地，以高完成度的视觉'小样'（shots）展示为主，风格紧跟潮流。",
    tags: ["灵感", "社区", "作品集"],
    category: 'mainstream'
  },
  {
    name: "Behance",
    url: "https://www.behance.net",
    description: "Adobe 旗下全球最大设计作品集平台，覆盖 UI/UX、品牌视觉、插画等 12 大领域。",
    tags: ["灵感", "社区", "作品集"],
    category: 'mainstream'
  },
  {
    name: "Pixso",
    url: "https://pixso.cn",
    description: "一站式 UI/UX 设计平台，集成 AI 智能设计、大厂设计系统，支持云端协作。",
    tags: ["UI/UX", "国产", "AI"],
    category: 'mainstream'
  },
  {
    name: "即时设计",
    url: "https://js.design",
    description: "在线 UI 设计工具，资源丰富，支持导入 Figma/Sketch 文件。",
    tags: ["UI/UX", "国产", "在线"],
    category: 'mainstream'
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com",
    description: "图片分享与灵感收集平台，支持创建情绪板（Mood Board）。",
    tags: ["灵感", "收集", "素材"],
    category: 'mainstream'
  },

  // Creative Tools
  {
    name: "Coolors",
    url: "https://coolors.co",
    description: "快速生成配色方案，支持锁定颜色、调整明度/饱和度，提供成千上万的配色方案。",
    tags: ["配色", "工具", "实用"],
    category: 'tools'
  },
  {
    name: "Adobe Color",
    url: "https://color.adobe.com",
    description: "Adobe 官方配色工具，支持从图片提取配色、色轮调色、趋势配色。",
    tags: ["配色", "Adobe", "专业"],
    category: 'tools'
  },
  {
    name: "Remove.bg",
    url: "https://www.remove.bg",
    description: "强大的 AI 自动抠图工具，一键去除图片背景，精准高效。",
    tags: ["AI", "抠图", "效率"],
    category: 'tools'
  },
  {
    name: "TinyPNG",
    url: "https://tinypng.com",
    description: "优秀的图片压缩工具，在保证图片质量的同时大幅减小文件体积。",
    tags: ["压缩", "图片", "优化"],
    category: 'tools'
  },
  {
    name: "Ray.so",
    url: "https://ray.so",
    description: "将代码片段转换为精美的分享图片，支持多种主题和编程语言。",
    tags: ["代码", "工具", "分享"],
    category: 'tools'
  },
  {
    name: "Spline",
    url: "https://spline.design",
    description: "简单易用的 3D 设计工具，支持实时协作，可轻松导出为 Web 交互组件。",
    tags: ["3D", "设计", "交互"],
    category: 'tools'
  },
  {
    name: "Paletton",
    url: "https://paletton.com",
    description: "经典配色工具，支持单色/互补/三色等多种配色模式。",
    tags: ["配色", "理论", "工具"],
    category: 'tools'
  },

  // Assets & Resources
  {
    name: "Unsplash",
    url: "https://unsplash.com",
    description: "高质量摄影图片，完全免费可商用，风格多样且具美感。",
    tags: ["图片", "免费", "商用"],
    category: 'assets'
  },
  {
    name: "Pexels",
    url: "https://www.pexels.com",
    description: "高清图片 + 视频素材，免费可商用，视频资源丰富，搜索对中文友好。",
    tags: ["图片", "视频", "免费"],
    category: 'assets'
  },
  {
    name: "Shapefest",
    url: "https://www.shapefest.com",
    description: "海量免费的高质量 3D 形状素材库，包含多种材质和视角。",
    tags: ["3D", "素材", "免费"],
    category: 'assets'
  },
  {
    name: "Iconfont",
    url: "https://www.iconfont.cn",
    description: "阿里巴巴矢量图标库，海量中文图标，支持自定义下载多种格式。",
    tags: ["图标", "阿里", "矢量"],
    category: 'assets'
  },
  {
    name: "Google Fonts",
    url: "https://fonts.google.com",
    description: "免费开源字体检索与下载平台，支持按语言/字重/风格筛选。",
    tags: ["字体", "Google", "开源"],
    category: 'assets'
  },
  {
    name: "LottieFiles",
    url: "https://lottiefiles.com",
    description: "Lottie 格式动态图标（JSON 动画文件），超 1000 款动效图标。",
    tags: ["动效", "Lottie", "动画"],
    category: 'assets'
  }
];

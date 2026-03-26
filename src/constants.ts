export interface DesignSite {
  name: string;
  url: string;
  description: string;
  tags: string[];
  category: 'mainstream' | 'tools' | 'assets' | 'interaction' | 'fonts' | 'ai' | 'editorial';
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
  {
    name: "站酷 (Zcool)",
    url: "https://www.zcool.com.cn/",
    description: "中国最具影响力的设计师互动平台，汇聚了海量优秀原创设计作品。",
    tags: ["社区", "国产", "综合"],
    category: 'mainstream'
  },
  {
    name: "UI中国",
    url: "https://www.ui.cn/",
    description: "专业的用户体验设计平台，专注于 UI/UX 设计交流与作品展示。",
    tags: ["UI/UX", "社区", "国产"],
    category: 'mainstream'
  },
  {
    name: "设计达人",
    url: "https://www.shejidaren.com/",
    description: "分享设计干货、教程、灵感与资源的知名设计博客。",
    tags: ["干货", "教程", "灵感"],
    category: 'mainstream'
  },
  {
    name: "优优教程网",
    url: "https://uiiiuiii.com/",
    description: "优秀的 UI 设计教程与灵感平台，提供海量免费设计视频与图文教程。",
    tags: ["教程", "学习", "UI"],
    category: 'mainstream'
  },
  {
    name: "68Design",
    url: "https://www.68design.net/",
    description: "互联网设计师招聘与作品展示平台，国内老牌设计门户。",
    tags: ["招聘", "作品", "社区"],
    category: 'mainstream'
  },

  // UI/UX & Interaction
  {
    name: "Mobbin",
    url: "https://mobbin.com",
    description: "全球最大的移动及网页应用 UI/UX 设计灵感库，收录数千款应用的真实截图。",
    tags: ["UI/UX", "移动端", "模式"],
    category: 'interaction'
  },
  {
    name: "Awwwards",
    url: "https://www.awwwards.com",
    description: "网页设计奖项与灵感平台，评选全球最具创意与技术含量的网页设计案例。",
    tags: ["网页", "奖项", "交互"],
    category: 'interaction'
  },
  {
    name: "Godly",
    url: "https://godly.website",
    description: "汇集全球最顶尖、最具交互感的现代网页设计，风格前卫，动效精美。",
    tags: ["网页", "动效", "前卫"],
    category: 'interaction'
  },
  {
    name: "UI Movement",
    url: "https://uimovement.com",
    description: "专注于 UI 动效设计灵感，收集来自全球设计师的优秀 UI 动画案例。",
    tags: ["动效", "动画", "灵感"],
    category: 'interaction'
  },
  {
    name: "UI Sources",
    url: "https://www.uisources.com",
    description: "深度分析知名产品的 UI/UX 设计，提供完整的产品流程截图与设计模式解读。",
    tags: ["UX", "分析", "模式"],
    category: 'interaction'
  },
  {
    name: "Hoverstat.es",
    url: "https://hoverstat.es",
    description: "优秀的交互设计与动效灵感集合，专注于网页中的微交互与独特动效。",
    tags: ["交互", "微动效", "网页"],
    category: 'interaction'
  },
  {
    name: "Land-book",
    url: "https://land-book.com",
    description: "精选全球优秀的落地页（Landing Page）设计画廊，涵盖多种行业与风格。",
    tags: ["落地页", "网页", "画廊"],
    category: 'interaction'
  },
  {
    name: "Material Design",
    url: "https://m3.material.io/",
    description: "Google 官方设计规范，提供完整的跨平台设计语言与组件指南。",
    tags: ["规范", "Google", "UI"],
    category: 'interaction'
  },
  {
    name: "Human Interface Guidelines",
    url: "https://developer.apple.com/design/human-interface-guidelines/",
    description: "Apple 官方设计指南，涵盖 iOS、macOS 等全平台的交互与视觉标准。",
    tags: ["规范", "Apple", "交互"],
    category: 'interaction'
  },
  {
    name: "Ant Design",
    url: "https://ant.design/",
    description: "蚂蚁金服的企业级 UI 设计语言，拥有极其丰富的 React 组件库。",
    tags: ["规范", "组件库", "阿里"],
    category: 'interaction'
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
  {
    name: "WebGradients",
    url: "https://webgradients.com/",
    description: "180 个精美的线性渐变配色方案，支持 CSS 代码一键复制。",
    tags: ["渐变", "配色", "代码"],
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
    category: 'fonts'
  },
  {
    name: "字由 (HelloFont)",
    url: "https://www.hellofont.cn/",
    description: "设计师必备字体利器，集成上千款正版字体，支持一键激活至设计软件。",
    tags: ["字体", "国产", "工具"],
    category: 'fonts'
  },
  {
    name: "100Font",
    url: "https://www.100font.com/",
    description: "专门收集整理免费商用字体的网站，分类清晰，让版权无忧。",
    tags: ["字体", "免费", "商用"],
    category: 'fonts'
  },
  {
    name: "猫啃网",
    url: "https://www.maoken.com/",
    description: "专注于中文字体分享，特别是免费商用字体的深度测评与下载。",
    tags: ["字体", "测评", "免费"],
    category: 'fonts'
  },
  {
    name: "DaFont",
    url: "https://www.dafont.com/",
    description: "全球知名的免费字体下载站，分类极其详尽，涵盖各种创意风格。",
    tags: ["字体", "国际", "创意"],
    category: 'fonts'
  },
  {
    name: "Font Squirrel",
    url: "https://www.fontsquirrel.com/",
    description: "严选高质量免费商用字体，提供方便的 Webfont 生成器。",
    tags: ["字体", "商用", "Webfont"],
    category: 'fonts'
  },
  {
    name: "Adobe Fonts",
    url: "https://fonts.adobe.com/",
    description: "Adobe 官方字体库，与 Creative Cloud 深度集成，品质极高且商用安全。",
    tags: ["字体", "Adobe", "专业"],
    category: 'fonts'
  },
  {
    name: "字体家",
    url: "https://www.zitijia.com/",
    description: "提供各类创意字体、毛笔书法字体下载，支持在线预览与定制。",
    tags: ["字体", "书法", "创意"],
    category: 'fonts'
  },
  {
    name: "LottieFiles",
    url: "https://lottiefiles.com",
    description: "Lottie 格式动态图标（JSON 动画文件），超 1000 款动效图标。",
    tags: ["动效", "Lottie", "动画"],
    category: 'assets'
  },
  {
    name: "Flaticon",
    url: "https://www.flaticon.com/",
    description: "全球最大的免费矢量图标库，提供海量 SVG、PNG 格式图标。",
    tags: ["图标", "矢量", "免费"],
    category: 'assets'
  },
  {
    name: "Font Awesome",
    url: "https://fontawesome.com/",
    description: "广受欢迎的图标字体库，提供数千款可缩放的矢量图标。",
    tags: ["图标", "字体", "矢量"],
    category: 'assets'
  },
  {
    name: "Pixabay",
    url: "https://pixabay.com/",
    description: "免费正版高清图片、视频素材库，所有资源均可免费商用。",
    tags: ["图片", "视频", "免费"],
    category: 'assets'
  },
  
  // AI Visual & Generative
  {
    name: "Variant",
    url: "https://variant.com",
    description: "AI 驱动的设计探索与社区平台，连接创意与前沿生成技术。",
    tags: ["AI", "设计", "社区"],
    category: 'ai'
  },
  {
    name: "Midjourney",
    url: "https://www.midjourney.com",
    description: "目前全球艺术表现力最强的 AI 绘画工具，以极高的审美水准著称。",
    tags: ["AI", "绘画", "艺术"],
    category: 'ai'
  },
  {
    name: "Leonardo.ai",
    url: "https://leonardo.ai",
    description: "功能强大的 AI 图像生成平台，支持模型微调、画布编辑及多种艺术风格。",
    tags: ["AI", "生成", "专业"],
    category: 'ai'
  },
  {
    name: "Lexica",
    url: "https://lexica.art",
    description: "Stable Diffusion 提示词搜索引擎，提供海量图片及其对应的生成指令。",
    tags: ["AI", "搜索", "提示词"],
    category: 'ai'
  },
  {
    name: "Krea.ai",
    url: "https://www.krea.ai",
    description: "实时 AI 生成与增强工具，支持实时画笔同步生成，极具交互感。",
    tags: ["AI", "实时", "增强"],
    category: 'ai'
  },
  {
    name: "Liblib.art",
    url: "https://www.liblib.art",
    description: "国内领先的 AI 艺术创作社区，拥有海量 Stable Diffusion 模型资源。",
    tags: ["AI", "国产", "模型"],
    category: 'ai'
  },
  {
    name: "Playground AI",
    url: "https://playgroundai.com",
    description: "简单易用的在线 AI 创作平台，集成了多种主流生成模型与编辑功能。",
    tags: ["AI", "在线", "创作"],
    category: 'ai'
  },
  {
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    description: "Adobe 官方创意生成 AI，深度集成于 PS/AI 等软件，商用安全。",
    tags: ["AI", "Adobe", "商用"],
    category: 'ai'
  },

  // Editorial & Master Portfolios
  {
    name: "It's Nice That",
    url: "https://www.itsnicethat.com/",
    description: "全球最具影响力的创意艺术媒体，挖掘并分享最前沿的设计、艺术与创意故事。",
    tags: ["艺术", "创意", "媒体"],
    category: 'editorial'
  },
  {
    name: "BP&O",
    url: "https://bpando.org/",
    description: "专注于品牌视觉、包装设计与深度评论，以极高的审美标准和专业分析著称。",
    tags: ["品牌", "包装", "评论"],
    category: 'editorial'
  },
  {
    name: "SiteInspire",
    url: "https://www.siteinspire.com/",
    description: "精选全球最具交互创意与视觉美感的网页设计案例，是网页设计师的灵感圣地。",
    tags: ["网页", "灵感", "精选"],
    category: 'editorial'
  },
  {
    name: "Eye on Design (AIGA)",
    url: "https://eyeondesign.aiga.org/",
    description: "AIGA 旗下的设计媒体，深入探讨设计背后的文化、社会意义与行业趋势。",
    tags: ["文化", "趋势", "深度"],
    category: 'editorial'
  },
  {
    name: "Tobias van Schneider",
    url: "https://vanschneider.com/",
    description: "前 Spotify 首席设计师的个人网站，分享深刻的设计见解、作品与创意哲学。",
    tags: ["大师", "博客", "哲学"],
    category: 'editorial'
  },
  {
    name: "Claudio Guglieri",
    url: "https://guglieri.com/",
    description: "前 Microsoft/Apple 设计总监的个人作品集，展示顶尖的视觉表现力与交互思维。",
    tags: ["大师", "视觉", "UI"],
    category: 'editorial'
  },
  {
    name: "Anton & Irene",
    url: "https://antonandirene.com/",
    description: "纽约知名设计工作室，以独特的交互体验和极具张力的视觉风格闻名业界。",
    tags: ["工作室", "交互", "视觉"],
    category: 'editorial'
  },
  {
    name: "Creative Boom",
    url: "https://www.creativeboom.com/",
    description: "为创意人提供灵感、资源与职业建议的综合性艺术设计媒体。",
    tags: ["创意", "艺术", "媒体"],
    category: 'editorial'
  },
  {
    name: "潘虎设计实验室",
    url: "https://www.tigerpan.com/",
    description: "中国顶尖产品包装设计实验室，以极具艺术感染力的商业包装作品闻名。",
    tags: ["包装", "艺术", "大师"],
    category: 'editorial'
  },
  {
    name: "Tencent ISUX",
    url: "https://isux.tencent.com/",
    description: "腾讯社交用户体验设计部，国内顶尖的互联网设计团队，引领行业趋势。",
    tags: ["大厂", "UX", "趋势"],
    category: 'editorial'
  },
  {
    name: "Alibaba Design",
    url: "https://www.alibabadesign.com/",
    description: "阿里巴巴设计官方门户，汇集了阿里系全产品的设计规范与前沿探索。",
    tags: ["大厂", "系统", "设计"],
    category: 'editorial'
  },
  {
    name: "A Black Cover Design (ABCD)",
    url: "http://ablackcover.com/",
    description: "国内顶尖平面设计工作室，以极简、理性的设计风格在业界享有盛誉。",
    tags: ["平面", "极简", "工作室"],
    category: 'editorial'
  },
  {
    name: "LAVA Beijing",
    url: "http://www.lavabeijing.com/",
    description: "跨国创意工作室北京分部，风格活泼、实验性强，擅长品牌与视觉传达。",
    tags: ["创意", "实验", "视觉"],
    category: 'editorial'
  }
];

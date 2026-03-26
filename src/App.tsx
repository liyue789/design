import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ExternalLink, 
  Layout, 
  Wrench, 
  Image as ImageIcon, 
  Github,
  Menu,
  X,
  Compass,
  Zap,
  Palette,
  ArrowRight,
  Sparkles,
  Paperclip,
  Mic,
  ArrowUp,
  MousePointerClick,
  Type,
  Cpu,
  BookOpen
} from 'lucide-react';
import { DESIGN_SITES, DesignSite } from './constants';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mainstream' | 'tools' | 'assets' | 'interaction' | 'fonts' | 'ai' | 'editorial'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredSites = useMemo(() => {
    return DESIGN_SITES.filter(site => {
      const matchesCategory = activeCategory === 'all' || site.category === activeCategory;
      const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           site.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: 'all', name: '万象灵感', icon: Compass, description: '汇聚全球创意，探索无限可能' },
    { id: 'editorial', name: '深度视界', icon: BookOpen, description: '大师作品与深度评论，触及设计灵魂' },
    { id: 'ai', name: '智绘视界', icon: Cpu, description: 'AI 驱动视觉，重塑创意边界' },
    { id: 'mainstream', name: '创意基石', icon: Layout, description: '主流设计平台，构建专业视野' },
    { id: 'interaction', name: '交互视界', icon: MousePointerClick, description: '前沿交互灵感，探索动态美学' },
    { id: 'fonts', name: '字里行间', icon: Type, description: '精选国内外字体，赋予文字灵魂' },
    { id: 'tools', name: '匠心利器', icon: Wrench, description: '高效生产工具，释放创作潜能' },
    { id: 'assets', name: '光影素材', icon: ImageIcon, description: '精选素材资源，点亮设计细节' },
  ] as const;

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#1A1A1A] font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-100/30 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/40 to-white/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white shadow-sm border border-orange-100 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-800">视界灵感舱</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-orange-500 transition-colors">探索</a>
          <a href="#" className="hover:text-orange-500 transition-colors">社区</a>
          <a href="#" className="hover:text-orange-500 transition-colors">关于</a>
          <button className="bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95">
            + 提交灵感
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-gray-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-6 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8"
        >
          今天，你想遇见什么样的灵感？
        </motion.h1>

        {/* Search Box - Reference Image Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-2 flex items-center gap-2"
        >
          <div className="flex-1 flex items-center px-4 gap-3">
            <Search className="w-5 h-5 text-gray-300" />
            <input 
              type="text" 
              placeholder="搜索设计、工具、素材..."
              className="w-full py-4 text-lg outline-none placeholder:text-gray-300 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 pr-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Quick Tags / Categories - Reference Image Style */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${
                activeCategory === cat.id 
                  ? 'bg-white border-gray-200 shadow-sm text-gray-900' 
                  : 'bg-white/40 border-transparent text-gray-500 hover:bg-white/60'
              }`}
            >
              <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-orange-400' : 'text-gray-400'}`} />
              {cat.name}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Content Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {categories.find(c => c.id === activeCategory)?.name || '万象灵感'}
            </h2>
            <p className="text-gray-500 text-sm italic">
              {categories.find(c => c.id === activeCategory)?.description || '捕捉每一瞬创意火花'}
            </p>
          </div>
          <button className="text-sm font-medium text-gray-400 hover:text-gray-900 flex items-center gap-1 transition-colors">
            查看全部 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSites.map((site) => (
              <motion.div
                key={site.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-white/60 backdrop-blur-sm border border-white/80 rounded-[32px] p-6 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {site.category === 'mainstream' && <Layout className="w-7 h-7 text-orange-300" />}
                    {site.category === 'interaction' && <MousePointerClick className="w-7 h-7 text-purple-300" />}
                    {site.category === 'editorial' && <BookOpen className="w-7 h-7 text-amber-300" />}
                    {site.category === 'ai' && <Cpu className="w-7 h-7 text-cyan-300" />}
                    {site.category === 'fonts' && <Type className="w-7 h-7 text-rose-300" />}
                    {site.category === 'tools' && <Palette className="w-7 h-7 text-blue-300" />}
                    {site.category === 'assets' && <ImageIcon className="w-7 h-7 text-emerald-300" />}
                  </div>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-300 hover:text-orange-400 hover:shadow-md transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {site.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow">
                  {site.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {site.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-400 text-[11px] font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredSites.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-200" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">灵感尚未触及此处</h3>
            <p className="text-gray-400 mt-2">换个词试试，或许会有新的发现</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-20 mt-20 border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-orange-300" />
              <span className="text-xl font-bold">视界灵感舱</span>
            </div>
            <p className="text-gray-400 text-sm italic max-w-xs">
              “在创意的海洋里，每个人都是孤独的航行者，直到我们相遇。”
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">导航</span>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">探索灵感</a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">工具箱</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">联系</span>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">提交资源</a>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">社交媒体</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 flex justify-between items-center text-[10px] text-gray-300 uppercase tracking-widest font-bold">
          <span>© 2026 VISION INSPO POD.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-gray-900 transition-colors">TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

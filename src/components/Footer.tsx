import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070c] text-white border-t border-gray-800">
      
      {/* Big Forbes Social Proof Block (Page 8 design bottom style) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center border-b border-gray-800">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-3xl sm:text-4xl text-amber-500">“</span>
          <h3 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            “Your AI everything app.”
          </h3>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gray-500">
            — Forbes
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-left text-sm">
        
        {/* Bio column */}
        <div className="col-span-2 space-y-4 pr-0 md:pr-10">
          <a href="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white focus:outline-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-extrabold text-[22px] shadow-lg border border-black/10 select-none">
              N
            </div>
            <span className="text-lg font-semibold tracking-tight">Notion Agents</span>
          </a>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Notion is the single workspace where your wikis, documents, and task trackers co-live harmoniously alongside autonomous AI agents.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
            <Sparkles className="h-3.5 w-3.5" /> Deployed with AI Studio
          </div>
        </div>

        {/* Links Col 1: Product */}
        <div className="space-y-3.5">
          <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Product</h5>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><a href="#wikis" className="hover:text-white transition-colors">Wikis</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#docs" className="hover:text-white transition-colors">Docs</a></li>
            <li><a href="#notion-ai" className="hover:text-white transition-colors">Notion AI</a></li>
            <li><a href="#notion-agents" className="hover:text-white font-bold text-blue-400 transition-colors">Notion Agents</a></li>
          </ul>
        </div>

        {/* Links Col 2: Solutions */}
        <div className="space-y-3.5">
          <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Solutions</h5>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><a href="#enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
            <li><a href="#small-business" className="hover:text-white transition-colors">Small business</a></li>
            <li><a href="#personal" className="hover:text-white transition-colors">Personal</a></li>
            <li><a href="#design" className="hover:text-white transition-colors">Design</a></li>
            <li><a href="#engineering" className="hover:text-white transition-colors">Engineering</a></li>
          </ul>
        </div>

        {/* Links Col 3: Company */}
        <div className="space-y-3.5">
          <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Company</h5>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><a href="#about" className="hover:text-white transition-colors">About us</a></li>
            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#media-kit" className="hover:text-white transition-colors">Media kit</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Under copyright bar */}
      <div className="bg-[#030408] border-t border-gray-800/80 text-center py-6 text-[10px] text-gray-500 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Notion Labs, Inc. Mock workspace replication for preview only.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            <span>by utiifat2@gmail.com</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

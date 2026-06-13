import { useState } from 'react';
import { NAV_LINKS } from '../data';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const menuKeys = Object.keys(NAV_LINKS) as Array<keyof typeof NAV_LINKS>;

  return (
    <header className="sticky top-0 z-50 bg-[#0d111c]/90 backdrop-blur-md border-b border-gray-800 text-white">
      {/* Top Banner */}
      <div className="bg-blue-600 px-4 py-2 text-center text-xs font-medium text-white transition-all hover:bg-blue-700">
        <a href="#indonesia" className="inline-flex items-center gap-1.5 cursor-pointer">
          🌐 Lihat halaman ini dalam bahasa anda. <span className="underline font-semibold text-white">Ganti ke Bahasa Indonesia →</span>
        </a>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white focus:outline-none">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-extrabold text-[22px] transition-transform hover:scale-105 shadow-inner border border-black/10">
                N
              </div>
              <span className="text-xl tracking-tight hidden sm:inline font-semibold">Notion</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuKeys.map((key) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                const isAI = key === 'products'; // highlighting AI inside custom product menus
                return (
                  <div key={key} className="relative">
                    <button
                      onClick={() => toggleDropdown(key)}
                      onMouseEnter={() => setActiveDropdown(key)}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all focus:outline-none cursor-pointer"
                    >
                      {label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180 text-white' : 'text-gray-400'}`} />
                    </button>

                    {activeDropdown === key && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-0 mt-1 w-56 rounded-xl bg-[#191f30] border border-gray-800 p-2 shadow-2xl ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-2 duration-150"
                      >
                        {NAV_LINKS[key].map((item) => (
                          <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                          >
                            <span>{item}</span>
                            {item.includes('AI') || item.includes('Agents') ? (
                              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                            ) : null}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                Pricing
              </a>
              <a href="#demo" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                Request a demo
              </a>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="#login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all">
              Log in
            </a>
            <a
              href="#get-started"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-md shadow-blue-900/30 active:scale-95"
            >
              Get Notion free
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#get-started"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-md"
            >
              Get free
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-[#0d111c] px-4 pt-2 pb-6 space-y-3">
          {menuKeys.map((key) => (
            <div key={key} className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {key}
              </div>
              {NAV_LINKS[key].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  <span>{item}</span>
                  {item.includes('AI') ? <Sparkles className="h-3.5 w-3.5 text-blue-400" /> : null}
                </a>
              ))}
            </div>
          ))}
          <div className="border-t border-gray-800 pt-3 space-y-3">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Request a demo
            </a>
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

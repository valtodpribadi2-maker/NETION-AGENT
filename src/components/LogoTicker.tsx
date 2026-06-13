import { COMPANYES } from '../data';

export default function LogoTicker() {
  // Duplicate list to make infinite ticker seamless
  const extendedCompanies = [...COMPANYES, ...COMPANYES, ...COMPANYES];

  return (
    <div className="bg-[#05070c] py-12 border-y border-gray-800 overflow-hidden relative select-none">
      {/* Soft gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05070c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05070c] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 font-sans">
          Trusted by 98% of the Forbes Cloud 100
        </p>
      </div>

      {/* Marquee Ticker */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
          {extendedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all cursor-pointer group"
            >
              {/* Fake aesthetic mini-logo representations to match screenshot */}
              <div className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[10px] text-gray-400 group-hover:scale-105 group-hover:border-white/30 transition-all font-mono">
                {company.logo}
              </div>
              <span className="font-display font-bold text-sm tracking-tight">
                {company.name}
              </span>
              <span className="text-gray-700 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

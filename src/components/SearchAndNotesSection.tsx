import { useState } from 'react';
import { SEARCH_RESULTS, MEETING_NOTES_DEMO } from '../data';
import { Search, Calendar, FileText, CheckCircle2, ChevronRight, Volume2, Share2, CornerDownRight, Play, Pause, AlertCircle } from 'lucide-react';

export default function SearchAndNotesSection() {
  const [searchQuery, setSearchQuery] = useState('customer requests');
  const [meetingNotes, setMeetingNotes] = useState(MEETING_NOTES_DEMO);
  const [activeTab, setActiveTab] = useState<'summary' | 'notes' | 'transcript'>('summary');
  const [audioPlayback, setAudioPlayback] = useState(false);

  // Filter search results based on simple match
  const filteredSearch = SEARCH_RESULTS.filter(res =>
    res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleActionItem = (id: string) => {
    setMeetingNotes(prev => ({
      ...prev,
      actionItems: prev.actionItems.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    }));
  };

  return (
    <section className="bg-gray-50 py-20 text-gray-900 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout with 2 Columns (Screen 5 & 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-sans">
          
          {/* Card 1: Enterprise Search */}
          <div className="flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0284c7] bg-blue-50 px-2.5 py-1 rounded inline-block">
                Enterprise Search
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 flex items-center justify-between">
                <span>One search for everything.</span>
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600">
                Notion Agents scour all connected workspace tools—including Slack channels, Google Drive documents, Figma canvases, and your wikis—to answer precise terms.
              </p>
            </div>

            {/* Simulated Search Mockup (Page 6 left column) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-5 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask anything or look up keys..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Connected channels badges */}
              <div className="flex gap-2 items-center flex-wrap">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mr-1">Sources:</span>
                <span className="text-[10px] bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-100 flex items-center gap-1 font-medium select-none">
                  🔴 Google Drive
                </span>
                <span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-100 flex items-center gap-1 font-medium select-none">
                  🟣 Slack
                </span>
                <span className="text-[10px] bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded border border-yellow-105 flex items-center gap-1 font-medium select-none">
                  🟡 Jira
                </span>
                <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1 font-medium select-none">
                  🔵 Notion
                </span>
              </div>

              {/* Feed lists representing Search result Page 6 left */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                  <span>Matched Results ({filteredSearch.length})</span>
                  <span>June 2026</span>
                </div>

                {filteredSearch.length > 0 ? (
                  filteredSearch.map((res) => (
                    <div
                      key={res.id}
                      className="p-3.5 hover:bg-gray-50 rounded-xl border border-gray-100 bg-[#fdfdfc] text-xs space-y-1.5 transition-all text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-blue-600 hover:underline cursor-pointer flex items-center gap-1.5 font-sans">
                          {res.title}
                        </span>
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-mono">
                          {res.source}
                        </span>
                      </div>
                      <p className="text-gray-600 text-[11px] leading-relaxed">
                        {res.snippet}
                      </p>
                      <div className="flex items-center gap-3 pt-1 text-[10px] text-gray-400 font-mono">
                        {res.author && <span>By {res.author}</span>}
                        <span>•</span>
                        <span>{res.timestamp}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-6 text-center text-xs text-gray-400 flex flex-col items-center justify-center gap-1.5">
                    <AlertCircle className="h-5 w-5 text-gray-300 animate-bounce" />
                    <span>No results matched your query. Try resetting to "customer requests"!</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: AI Meeting Notes */}
          <div className="flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2.5 py-1 rounded inline-block animate-pulse">
                AI Meeting Notes
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 flex items-center justify-between">
                <span>Perfect notes, every time.</span>
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600">
                Let Notion Agents join your scheduled sync coordinates. The agent automatically produces organized transcripts, structures major feedback notes, and captures items.
              </p>
            </div>

            {/* Simulated Meeting Notes (Page 6 right column) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-5 space-y-4">
              {/* Meeting Header */}
              <div className="border-b border-gray-100 pb-3.5 text-left space-y-1">
                <span className="text-[10px] font-mono text-gray-400">📅 CHRONICLE SUMMARY • {meetingNotes.date}</span>
                <h4 className="text-base font-bold text-gray-900 font-display">
                  {meetingNotes.title}
                </h4>
                
                {/* Attendees list */}
                <div className="flex items-center gap-1.5 pt-1.5">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mr-1">Attendees:</span>
                  {meetingNotes.attendees.map((att) => (
                    <div key={att.name} className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-600">
                      <img src={att.avatar} alt={att.name} referrerPolicy="no-referrer" className="h-4.5 w-4.5 rounded-full object-cover" />
                      <span>{att.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Options Tab summary/notes/transcript */}
              <div className="flex border-b border-gray-100 gap-1 pb-1">
                {(['summary', 'notes', 'transcript'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-blue-50 text-blue-600 border border-blue-100'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}

                {/* Animated Waveform simulator */}
                <div onClick={() => setAudioPlayback(!audioPlayback)} className="ml-auto flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg cursor-pointer transition-all">
                  <Volume2 className={`h-3.5 w-3.5 text-gray-400 ${audioPlayback ? 'text-green-500 animate-bounce' : ''}`} />
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                    {audioPlayback ? 'PAUSE REC' : 'SIM PLAYBACK'}
                  </span>
                </div>
              </div>

              {/* Dynamic Content Display */}
              <div className="min-h-[120px] bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-xs text-left leading-relaxed text-gray-700">
                {activeTab === 'summary' && (
                  <div className="space-y-2.5">
                    {meetingNotes.summary.map((sum, index) => (
                      <p key={index} className="pl-3 border-l-2 border-blue-500">
                        {sum}
                      </p>
                    ))}
                  </div>
                )}

                {activeTab === 'notes' && (
                  <ul className="space-y-1.5 list-disc pl-4">
                    {meetingNotes.notes.map((note, idx) => (
                      <li key={idx}>
                        {note}
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'transcript' && (
                  <div className="space-y-3 font-mono text-[11px]">
                    <p><span className="text-pink-600 font-bold">[00:04] Joyce</span> I want to make sure the landing pages accent and logo tick list matches perfectly.</p>
                    <p><span className="text-blue-600 font-bold">[00:20] Sam</span> Understood. Im building the bento slider and live mockups to handle that securely.</p>
                  </div>
                )}
              </div>

              {/* Interactive Action Checklist (Users can check items off) */}
              <div className="space-y-2 bg-white pt-2 text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Captured Action Items:</span>
                <div className="space-y-2">
                  {meetingNotes.actionItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleActionItem(item.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-100 bg-[#fdfdfc] hover:bg-gray-50 cursor-pointer select-none transition-all"
                    >
                      <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border text-white transition-all ${
                        item.done ? 'bg-green-500 border-green-500' : 'border-gray-300'
                      }`}>
                        {item.done && <span className="text-[10px]">✓</span>}
                      </div>
                      <span className={`text-xs flex-grow ${item.done ? 'line-through text-gray-400 font-normal shadow-sm' : 'text-gray-800 font-semibold'}`}>
                        {item.text}
                      </span>
                      <span className="text-[9px] font-mono bg-blue-50 text-blue-600 px-1.5 py-0.2 rounded font-medium shrink-0">
                        @{item.assignee}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

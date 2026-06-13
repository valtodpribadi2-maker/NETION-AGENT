import React, { useState } from 'react';
import { FileEdit, MessageSquare, Plus, ChevronRight, Bookmark, Database, Heart, ArrowRight } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
}

export default function DocsAndKbSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c-1',
      author: 'Laura Oritz',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
      content: 'Can you take a look at these dates and let me know your thoughts? @Emily Yang',
      time: 'Just now'
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const added: Comment = {
      id: String(Date.now()),
      author: 'You (Sandbox review)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
      content: newCommentText,
      time: 'Just now'
    };

    setComments(prev => [...prev, added]);
    setNewCommentText('');
  };

  return (
    <section className="bg-white py-20 text-gray-950 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2 font-mono">Notion Co-location</span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 leading-none">
            Bring all your work together.
          </h2>
        </div>

        {/* Twins Columns layout matching Screen 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left font-sans">
          
          {/* Docs Panel (Screen 7 left side) */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded inline-block">
                Docs
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 flex items-center justify-between">
                <span>Simple and powerful.</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600">
                Author documents, formulate roadmaps, and embed live active agent processes within standard text blocks on the fly.
              </p>
            </div>

            {/* Document Mockup Block */}
            <div className="bg-[#fcfcf9] rounded-2xl border border-gray-200 shadow-xl p-6 space-y-4">
              <div className="border-b border-gray-200/60 pb-3 flex items-center gap-2">
                <div className="h-6 w-6 bg-[#e0f2fe] text-blue-600 flex items-center justify-center rounded font-extrabold text-xs">📖</div>
                <span className="text-xs font-semibold text-gray-400">docs / help-center-revamp</span>
              </div>

              {/* Title Section */}
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-gray-900 font-display">Help Center Revamp</h4>
                <div className="flex flex-wrap gap-4 text-xs pt-1.5 text-gray-500">
                  <div>👤 <span className="font-semibold text-gray-700">DRI:</span> Emily Yang</div>
                  <div>🗓️ <span className="font-semibold text-gray-700">Milestone:</span> H1 Planning</div>
                  <div>🟢 <span className="font-semibold text-gray-700">Status:</span> In progress</div>
                </div>
              </div>

              {/* Overview Details */}
              <div className="space-y-2.5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 pt-4">
                <h5 className="font-bold text-gray-800 uppercase tracking-widest text-[10px]">Overview</h5>
                <p>
                  In H1, the Acquisition & Growth team will focus on serving revenue by improving the full funnel from first signup to activation. We will do this across three priorities:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Enhance accessibility patterns for localized users.</li>
                  <li>Incorporate real-time Notion integration check points.</li>
                </ul>
              </div>

              {/* User Dynamic Commenting (Page 7 design card) */}
              <div className="border-t border-gray-200 pt-4 space-y-3.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-gray-400" /> Comments ({comments.length})
                </span>

                <div className="space-y-2.5 max-h-[140px] overflow-y-auto">
                  {comments.map((com) => (
                    <div key={com.id} className="flex gap-2.5 p-3 rounded-xl border border-gray-100 bg-white text-[11px] text-left leading-normal shadow-sm">
                      <img src={com.avatar} alt={com.author} referrerPolicy="no-referrer" className="h-6 w-6 rounded-full object-cover shrink-0 border border-gray-200" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-gray-900">{com.author}</span>
                          <span className="text-[9px] text-gray-400 font-mono">{com.time}</span>
                        </div>
                        <p className="text-gray-600 mt-0.5">{com.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inline comment form to fulfill high interactivity */}
                <form onSubmit={handleAddComment} className="flex gap-2 text-xs">
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Write a sandboxed comment here..."
                    className="flex-1 bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button type="submit" className="px-3 py-1.5 bg-blue-600 text-white rounded-xl text-xs hover:bg-blue-500 font-medium whitespace-nowrap cursor-pointer">
                    Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Knowledge Base Panel (Screen 7 right side) */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded inline-block">
                Knowledge Base
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 flex items-center justify-between">
                <span>One source of truth for teams.</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600">
                Consolidate your files, handbook guidelines, brand collateral, and team assets into organized workspaces easily indexable by human teammates and agent bots.
              </p>
            </div>

            {/* Knowledge Base Mockup Block */}
            <div className="bg-[#eff6ff]/30 rounded-2xl border border-gray-200 shadow-xl p-6 grid grid-cols-1 md:grid-cols-12 gap-5 leading-normal">
              {/* Left Column (8 cols): Company HQ */}
              <div className="md:col-span-8 space-y-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="text-base font-extrabold text-gray-900 font-display">Company HQ</h4>
                    <span className="text-[10px] text-gray-400 font-mono">INDEX GUIDELINES & RESOURCES</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500">
                  Welcome to the home for company-wide info—strategy, day-to-day work, and tools to support your growth.
                </p>

                {/* Subsections list */}
                <div className="space-y-1.5 pt-1.5 text-[11px] text-left">
                  <div className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 cursor-pointer p-1 rounded hover:bg-gray-50">
                    <Bookmark className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span className="font-semibold">Company Policies & benefits handbook</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 cursor-pointer p-1 rounded hover:bg-gray-50">
                    <Bookmark className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span className="font-semibold">SOP-704 Expense submission claims</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 cursor-pointer p-1 rounded hover:bg-gray-50">
                    <Bookmark className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span className="font-semibold">H1 Product Planning coordinates</span>
                  </div>
                </div>
              </div>

              {/* Right Column (4 cols): People indicators representing PDF screenshot 7 right bottom */}
              <div className="md:col-span-4 flex flex-col justify-between space-y-4 bg-white/60 p-4 rounded-xl border border-dashed border-gray-200">
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connected Bots</h5>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>slack-scraper-bot</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>finance-audit-bot</span>
                  </div>
                </div>

                <div className="border-t border-gray-200/60 pt-3 text-[10px]">
                  <span className="block font-bold text-gray-800">Ready to integrate?</span>
                  <a href="#quickstart" className="text-blue-600 font-semibold hover:underline mt-1 inline-flex items-center gap-0.5">
                    View setup docs <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

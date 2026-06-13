import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHAT_SIMULATIONS } from '../data';
import { ChatMessage } from '../types';
import { MessageSquare, Lightbulb, User, Settings, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';

export default function KeepMovingSection() {
  const [activeTab, setActiveTab] = useState<'qa' | 'routing' | 'reporting' | 'custom'>('qa');
  const [customPrompt, setCustomPrompt] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(CHAT_SIMULATIONS.qa);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts based on tab
  const getSuggestions = () => {
    switch (activeTab) {
      case 'qa':
        return [
          { label: 'How to submit an expense?', text: 'Where is the guide to submit active expenses?' },
          { label: 'Open enrollment dates', text: 'When is the next open benefits enrollment period?' }
        ];
      case 'routing':
        return [
          { label: 'Review marketing assets', text: 'Hey, who should review this brand layout file?' },
          { label: 'Found endpoint bug', text: 'Found a buggy API call on payment endpoint limit checks.' }
        ];
      case 'reporting':
        return [
          { label: 'Compile sprint update', text: 'Draft the weekly update for product sprint 14 please.' }
        ];
      default:
        return [
          { label: 'Initialize Custom Agent', text: 'Build a custom agent to audit calendar conflicts every Friday.' }
        ];
    }
  };

  // Sync messages with preset content when tab changes
  useEffect(() => {
    if (activeTab !== 'custom') {
      setChatMessages(CHAT_SIMULATIONS[activeTab] || []);
    } else {
      setChatMessages([
        {
          id: 'custom-init',
          sender: 'agent',
          name: 'Custom Agent Configurator',
          avatar: '⚙️',
          content: 'Hello! I am your custom agent playground. Enter any custom instruction or task in the input below, and I will execute it according to your guidelines.',
          timestamp: 'Now'
        }
      ]);
    }
  }, [activeTab]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const handleSuggestionClick = (text: string) => {
    handleSendMessage(text);
  };

  const handleSendMessage = (textToSend?: string) => {
    const prompt = textToSend || customPrompt;
    if (!prompt.trim() || isTyping) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      name: 'You',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=85&q=80',
      content: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setCustomPrompt('');
    setIsTyping(true);

    // Simulate Agent Reply
    setTimeout(() => {
      let replyContent = '';
      let agentName = 'Notion Assistant';
      let agentAvatar = '🤖';

      if (activeTab === 'qa') {
        agentName = 'Q&A Agent';
        agentAvatar = '🤖';
        if (prompt.toLowerCase().includes('expense')) {
          replyContent = 'To submit an expense, go to our Finance Wiki, download the expense sheet, fill it, and upload it using the #expense-claims channel on Slack. Claims under $50 are auto-approved!';
        } else if (prompt.toLowerCase().includes('enrollment')) {
          replyContent = 'Open enrollment for benefits begins on November 1st and ends on November 25th. You can review current medical/dental plans on the HR Portal.';
        } else {
          replyContent = `Searching Wiki content... Found matching parameters! The guidelines indicate you should follow standard SOP-704 regarding your query on: "${prompt}". Let me know if you want the link.`;
        }
      } else if (activeTab === 'routing') {
        agentName = 'Task Router';
        agentAvatar = '⚡';
        if (prompt.toLowerCase().includes('marketing') || prompt.toLowerCase().includes('asset')) {
          replyContent = 'Routed brand layout file to @Sarah (Head of Brand) for review. Created ticket in Marketing Board #MK-402 and assigned priority High.';
        } else if (prompt.toLowerCase().includes('bug') || prompt.toLowerCase().includes('payment')) {
          replyContent = 'Identified payment endpoint issue. Routed bug report to @Eng-Platform team on Slack, created issue #ENG-904, and set triager rules to Auto.';
        } else {
          replyContent = `Analyzed request. Routing ticket to appropriate team members and updating status to triaged in downstream boards.`;
        }
      } else if (activeTab === 'reporting') {
        agentName = 'Reporting Agent';
        agentAvatar = '📊';
        replyContent = 'Sprint summaries completed! Gathered statistics: 🟢 4 features deployed, 🟡 3 tests in-progress, 🔴 1 security check pending. Ready to append to wiki.';
      } else {
        agentName = 'Custom Agent';
        agentAvatar = '⚙️';
        replyContent = `Custom workflow executed successfully. Rules analyzed for: "${prompt}". Modified 2 entries in Company HQ Database and triggered Webhook callback.`;
      }

      const agentMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'agent',
        name: agentName,
        avatar: agentAvatar,
        content: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        replyCount: 1
      };

      setChatMessages(prev => [...prev, agentMsg]);
      setIsTyping(false);
    }, 1800);
  };

  return (
    <section className="bg-[#faf9f5] py-20 text-gray-900 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Keep work moving 24/7.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Meet the custom-built agents that work concurrently alongside your team to handle questions, triage tickets, and summarize projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Menu list (Page 3 layout) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                Custom Agents
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                Automate repetitive work for your team.
              </h3>
            </div>

            {/* Menu options mimicking Screen 3 */}
            <div className="space-y-3.5">
              {/* Q&A */}
              <button
                onClick={() => setActiveTab('qa')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'qa'
                    ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-lg font-bold">
                    🧡
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-sm block text-gray-900">Q&A agents</span>
                    {activeTab === 'qa' && (
                      <p className="text-xs text-gray-500 mt-1">
                        Answers questions instantly using knowledge you already have in documents, wikis, and chats.
                      </p>
                    )}
                  </div>
                </div>
              </button>

              {/* Task routing */}
              <button
                onClick={() => setActiveTab('routing')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'routing'
                    ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] text-lg font-bold">
                    💜
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-sm block text-gray-900">Task routing agents</span>
                    {activeTab === 'routing' && (
                      <p className="text-xs text-gray-500 mt-1">
                        Forwards tasks, updates tickets, and flags blocker alerts to the correct engineer or channel.
                      </p>
                    )}
                  </div>
                </div>
              </button>

              {/* Reporting */}
              <button
                onClick={() => setActiveTab('reporting')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'reporting'
                    ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#dcfce7] flex items-center justify-center text-[#15803d] text-lg font-bold">
                    🩵
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-sm block text-gray-900">Reporting agents</span>
                    {activeTab === 'reporting' && (
                      <p className="text-xs text-gray-500 mt-1">
                        Compiles sprint logs, scrapes customer feedback channels, and prepares high-level summaries.
                      </p>
                    )}
                  </div>
                </div>
              </button>

              {/* Create your own */}
              <button
                onClick={() => setActiveTab('custom')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'custom'
                    ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#faf5ff] flex items-center justify-center text-[#7e22ce] text-lg font-bold">
                    ⚙️
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-sm block text-gray-900 font-display flex items-center gap-1.5">
                      Create your own <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-mono font-bold">PLAYGROUND</span>
                    </span>
                    {activeTab === 'custom' && (
                      <p className="text-xs text-gray-500 mt-1">
                        Instruct and build custom loop guidelines specifically for your workspace processes and metrics.
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </div>

            <div className="pt-2 hidden lg:block">
              <a href="#meet-agents" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline">
                See client success stories <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Chat Widget Simulator (Pages 2-3 design) */}
          <div className="lg:col-span-7 rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Thread Header mimicking Screen 3 Slack/Notion style */}
            <div className="bg-gray-50 border-b border-gray-200 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  📁 channel-ops: <span className="font-mono text-xs text-gray-400 font-normal">#general-ops-agents</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold uppercase animate-pulse">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-6 overflow-y-auto max-h-[300px] flex-grow space-y-4 font-sans bg-white">
              <AnimatePresence initial={false}>
                {chatMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3 text-left"
                  >
                    {/* Unique Avatar Representation matching Screen 3 */}
                    {msg.sender === 'user' ? (
                      <img src={msg.avatar} alt="User Avatar" referrerPolicy="no-referrer" className="h-8.5 w-8.5 rounded-full object-cover border border-gray-200 shrink-0" />
                    ) : (
                      <div className="h-8.5 w-8.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-lg shadow-sm shrink-0">
                        {msg.avatar}
                      </div>
                    )}

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-900">{msg.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono font-normal">{msg.timestamp}</span>
                        {msg.sender === 'agent' && (
                          <span className="text-[9px] font-mono bg-blue-50 text-blue-600 px-1.5 py-0.2 rounded border border-blue-100 uppercase font-bold">AGENT</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed bg-[#fbfbfb] p-2.5 rounded-r-xl rounded-bl-xl border border-gray-100">
                        {msg.content}
                      </p>

                      {/* Reply threads element to match UI in pdf */}
                      {msg.replyCount && (
                        <button className="flex items-center gap-1 text-[11px] text-orange-500 font-medium hover:underline mt-1 cursor-pointer">
                          💬 {msg.replyCount} reply
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <div className="flex gap-3 text-left">
                  <div className="h-8.5 w-8.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-lg animate-bounce shrink-0">
                    🪄
                  </div>
                  <div className="flex-grow space-y-1">
                    <span className="text-xs font-bold text-gray-900">Notion Agent thinking...</span>
                    <div className="flex space-x-1.5 items-center p-2.5 bg-gray-50 border border-gray-100 rounded-lg w-20">
                      <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Simulated Suggestions & Quick buttons */}
            <div className="px-6 pb-2.5 pt-1 bg-white border-t border-gray-100 text-left">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1.5">Preset Questions:</span>
              <div className="flex flex-wrap gap-1.5">
                {getSuggestions().map((s) => (
                  <button
                    key={s.label}
                    onClick={() => handleSuggestionClick(s.text)}
                    className="text-[11px] font-medium text-gray-600 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 px-2.5 py-1 rounded-full border border-gray-200 hover:border-blue-200 transition-all cursor-pointer"
                  >
                    {s.label} →
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form area */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={
                    activeTab === 'custom'
                      ? 'Type custom instructions (e.g. Build calendar agent)...'
                      : 'Ask anything to this agent...'
                  }
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-12 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-md transition-all font-sans placeholder-gray-400"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!customPrompt.trim()}
                  className={`absolute right-1.5 p-1.5 rounded-lg transition-all ${
                    customPrompt.trim()
                      ? 'bg-blue-600 text-white cursor-pointer hover:bg-blue-500'
                      : 'bg-gray-100 text-gray-300'
                  }`}
                >
                  <CornerDownLeft className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2.5 px-1 text-[10px] text-gray-400 select-none">
                <span>⚡ Simulated using standard Notion workflows</span>
                <span>Press Enter to send</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CUSTOM_AGENT_PRESETS, SAMPLE_TASKS } from '../data';
import { MessageSquare, Slack, ShieldAlert, FileText, Plus, HelpCircle, FileEdit, CheckCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';

export default function AskAssistantsSection() {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [checkedLogs, setCheckedLogs] = useState<string[]>([]);
  const [createdAgentPrompt, setCreatedAgentPrompt] = useState('');
  const [successAgentPopup, setSuccessAgentPopup] = useState(false);

  const selectedPreset = SAMPLE_TASKS[activeTaskIndex];

  // Map string to Lucide Icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="h-5 w-5" />;
      case 'Slack': return <Slack className="h-5 w-5" />;
      case 'ShieldAlert': return <ShieldAlert className="h-5 w-5" />;
      case 'FileText': return <FileText className="h-5 w-5" />;
      default: return <HelpCircle className="h-5 w-5" />;
    }
  };

  const startCompiling = (index: number) => {
    if (isCompiling) return;
    setActiveTaskIndex(index);
    setIsCompiling(true);
    setTypingText('');
    setCheckedLogs([]);

    const activeTask = SAMPLE_TASKS[index];
    const words = activeTask.outputMarkdown.split(' ');
    let currentIdx = 0;
    
    // Simulate steps checking
    const steps = [
      'Retrieving database entries',
      'Scanning connected workspace assets',
      'Formulating summary using custom instructions',
      'Publishing to Notion Doc wiki'
    ];

    steps.forEach((step, stepIdx) => {
      setTimeout(() => {
        setCheckedLogs(prev => [...prev, step]);
      }, (stepIdx + 1) * 800);
    });

    // Solve type-out simulation
    let currentText = '';
    const typingInterval = setInterval(() => {
      if (currentIdx < words.length) {
        currentText += (currentIdx === 0 ? '' : ' ') + words[currentIdx];
        setTypingText(currentText);
        currentIdx++;
      } else {
        setIsCompiling(false);
        clearInterval(typingInterval);
      }
    }, 45); // milliseconds per word
  };

  useEffect(() => {
    startCompiling(0);
  }, []);

  const handleCreateAgentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!createdAgentPrompt.trim()) return;
    setSuccessAgentPopup(true);
    setTimeout(() => {
      setSuccessAgentPopup(false);
      setCreatedAgentPrompt('');
    }, 4000);
  };

  return (
    <section className="bg-white py-20 text-gray-950 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">See What Custom Agents Can Do</span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
            Ask your on-demand assistants.
          </h2>
        </div>

        {/* Custom Agent Preset Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-24 text-left">
          {CUSTOM_AGENT_PRESETS.map((preset) => (
            <div
              key={preset.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:bg-white hover:shadow-xl hover:border-gray-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`h-10 w-10 rounded-xl ${preset.avatarBg} flex items-center justify-center mb-4 shadow-sm`}>
                  {getIcon(preset.icon)}
                </div>
                <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                  {preset.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200/50 flex flex-wrap gap-1.5">
                {preset.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-mono font-medium text-gray-400 bg-gray-200/50 px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Interactive Card: Create Your Own Card (Screen 4 right side style) */}
          <div className="bg-[#121826] border border-gray-800 rounded-2xl p-5 text-white flex flex-col justify-between hover:border-blue-500 transition-all shadow-xl group">
            <form onSubmit={handleCreateAgentSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md">
                  <Plus className="h-5 w-5 text-blue-400 group-hover:rotate-90 transition-transform" />
                </div>
                <span className="text-[10px] font-mono text-blue-400 font-bold bg-blue-900/40 px-2 py-0.5 rounded uppercase">
                  CUSTOM
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-white font-display">Create your own Custom Agent →</h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Type a prompt to quickly spin up a specialized custom Notion agent.
                </p>
              </div>
              <input
                type="text"
                placeholder="e.g. Audit calendar conflicts..."
                value={createdAgentPrompt}
                onChange={(e) => setCreatedAgentPrompt(e.target.value)}
                className="w-full bg-white/5 border border-gray-800 focus:border-blue-500 focus:outline-none p-2 rounded-xl text-xs placeholder-gray-500 text-white transition-all"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-500 transition-all font-semibold rounded-xl text-xs text-white"
              >
                Assemble Agent
              </button>
            </form>

            <AnimatePresence>
              {successAgentPopup && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 p-2 bg-green-900/50 border border-green-500/30 rounded-xl text-center text-[10px] text-green-300 font-mono"
                >
                  🎉 custom-agent: ready! Added to workspace sidebar.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Draft Engine - Screen 4 & 5 Underneath Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-16 text-left">
          
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded inline-block">
                Notion Agent Workspace
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">
                You assign the tasks. <br />Notion Agent does the work.
              </h3>
              <p className="text-sm text-gray-500 max-w-sm mt-3">
                Click on any of the tasks below to watch the Notion Agent compile documents, retrieve logs, and automate actions live in real-time.
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="space-y-3.5 mt-8 lg:mt-0">
              {SAMPLE_TASKS.map((task, index) => (
                <button
                  key={task.id}
                  onClick={() => startCompiling(index)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    activeTaskIndex === index
                      ? 'bg-blue-50 border-blue-500 shadow-md'
                      : 'bg-white border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      activeTaskIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      0{index + 1}
                    </div>
                    <div>
                      <span className="font-bold text-xs text-gray-900 block">{task.label}</span>
                      <p className="text-[10px] text-gray-400 mt-0.5 truncate max-w-[200px] sm:max-w-xs">{task.text}</p>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${activeTaskIndex === index ? 'translate-x-1.5 text-blue-600' : 'text-gray-300'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Beautiful live typing Document Editor Panel */}
          <div className="lg:col-span-7 bg-[#faf9f6]/95 border border-gray-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[480px]">
            {/* Simulation Header */}
            <div className="bg-gray-100 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <FileEdit className="h-4 w-4 text-blue-600" />
                <span>Notion Writer Sandbox</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className={`h-3.5 w-3.5 text-blue-600 ${isCompiling ? 'animate-spin' : 'hidden'}`} />
                <span className={`text-[10px] font-mono rounded px-2 py-0.5 font-bold uppercase ${
                  isCompiling ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                }`}>
                  {isCompiling ? 'compiling' : 'waiting'}
                </span>
              </div>
            </div>

            {/* Compiled Task Active Header info */}
            <div className="p-6 border-b border-gray-200/60 bg-white space-y-3">
              <span className="text-[10px] font-mono text-gray-400">TARGET: /docs/wiki/{selectedPreset.outputTitle.toLowerCase().replace(/\s+/g, '-')}</span>
              <h3 className="text-xl font-bold text-gray-900 font-display flex items-center gap-2">
                📂 {selectedPreset.outputTitle}
              </h3>
              <div className="flex flex-wrap gap-2 text-[11px] text-gray-500">
                <span className="font-semibold text-gray-700">Trigger:</span>
                <span>{selectedPreset.text}</span>
              </div>
            </div>

            {/* Document Draft Body mimicking Pages 4/5 */}
            <div className="p-6 bg-[#fcfcf9] font-mono text-xs flex-grow overflow-y-auto max-h-[300px] text-gray-800 leading-relaxed text-left whitespace-pre-wrap">
              {typingText ? (
                <div>
                  {typingText}
                  {isCompiling && <span className="inline-block w-2 h-4 bg-blue-600 ml-1 animate-pulse" />}
                </div>
              ) : (
                <span className="text-gray-400 italic">Starting compiler feed...</span>
              )}
            </div>

            {/* Active Simulation Step status list */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[10px] text-left">
                {[
                  'Retrieving database entries',
                  'Scanning connected workspace assets',
                  'Formulating summary using custom instructions',
                  'Publishing to Notion Doc wiki'
                ].map((step) => {
                  const isChecked = checkedLogs.includes(step);
                  return (
                    <div
                      key={step}
                      className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all ${
                        isChecked
                          ? 'bg-green-50 border-green-200 text-green-700'
                          : 'bg-gray-50 border-gray-100 text-gray-400'
                      }`}
                    >
                      <CheckCircle className={`h-3.5 w-3.5 shrink-0 ${isChecked ? 'text-green-500' : 'text-gray-300'}`} />
                      <span className="truncate font-sans font-medium">{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

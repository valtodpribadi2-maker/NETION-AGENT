import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Play, Moon, Sun, Sparkles, CheckSquare, Search, MessageSquare, Briefcase, Zap, Inbox, ArrowRight } from 'lucide-react';

interface LogEntry {
  id: string;
  time: string;
  agent: string;
  action: string;
  status: 'info' | 'success' | 'alert';
}

export default function HeroSection() {
  const [nightShiftActive, setNightShiftActive] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({
    'task-1': false,
    'task-2': true,
    'task-3': false,
  });
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', time: '22:00', agent: 'System', action: 'Night shift mode enabled. Listening for events.', status: 'info' }
  ]);

  // Tasks that can be automatically compiled
  const tasks = [
    { id: 'task-1', title: 'Compile design assets for Slack review', time: '10-11 AM', assignee: 'Task routing agent' },
    { id: 'task-2', title: 'Answer benefits submission questions', time: '12-1 PM', assignee: 'Q&A agent' },
    { id: 'task-3', title: 'Sync weekly timeline with Linear sprint tracking', time: '4-5 PM', assignee: 'Reporting agent' },
  ];

  const toggleTask = (id: string) => {
    setCheckedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (nightShiftActive) {
      const actions = [
        { agent: 'Q&A Agent', action: 'Answered Catherine\'s question on Open Enrollment guidelines.', status: 'success' },
        { agent: 'Task Router', action: 'Routed brand layout file to @Sarah Jenkins.', status: 'info' },
        { agent: 'Reporting Agent', action: 'Compiled Sprint 14 markdown status report.', status: 'success' },
        { agent: 'Task Router', action: 'Triaged 4 critical firewall alerts in slack.', status: 'alert' },
        { agent: 'Q&A Agent', action: 'Answered Emily\'s claim on medical spending policy.', status: 'success' },
        { agent: 'Reporting Agent', action: 'Scraped 20 fresh App Store reviews.', status: 'info' },
      ];

      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex < actions.length) {
          const newAction = actions[currentIndex];
          const now = new Date();
          const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
          
          setLogs(prev => [
            {
              id: String(Date.now()),
              time: timeStr,
              agent: newAction.agent,
              action: newAction.action,
              status: newAction.status as any
            },
            ...prev.slice(0, 5)
          ]);

          // Automatically check tasks when their responsible agent runs
          if (currentIndex === 0) {
            setCheckedTasks(prev => ({ ...prev, 'task-2': true }));
          } else if (currentIndex === 2) {
            setCheckedTasks(prev => ({ ...prev, 'task-3': true }));
          } else if (currentIndex === 1) {
            setCheckedTasks(prev => ({ ...prev, 'task-1': true }));
          }

          currentIndex++;
        } else {
          // Restart simulations or keep idle
          const now = new Date();
          const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
          setLogs(prev => [
            { id: String(Date.now()), time: timeStr, agent: 'System', action: 'All overnight queues complete. Sleep safe! 💤', status: 'success' },
            ...prev
          ]);
          clearInterval(interval);
        }
      }, 3500);
    } else {
      setLogs([
        { id: '1', time: '09:00', agent: 'System', action: 'Standby mode. Flip the night shift toggle to see Notion Agents run.', status: 'info' }
      ]);
    }
    return () => clearInterval(interval);
  }, [nightShiftActive]);

  return (
    <section className="relative overflow-hidden bg-[#0a0d17] pt-20 pb-20 sm:pt-28 text-white">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-indigo-500/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-blue-500/10 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-40"></div>

      {/* Floating illustrations badges (Pages 1-3 visual items) */}
      <div className="absolute left-[8%] top-[25%] hidden xl:block animate-bounce pointer-events-none" style={{ animationDuration: '6s' }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fce7f3]/10 backdrop-blur-md border border-pink-500/30 p-2.5 shadow-lg">
          <div className="h-10 w-10 text-pink-400 bg-pink-900/40 rounded-full flex items-center justify-center text-xl font-bold">📂</div>
        </div>
      </div>

      <div className="absolute right-[5%] top-[20%] hidden xl:block animate-bounce pointer-events-none" style={{ animationDuration: '8s' }}>
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-3xl bg-[#fef3c7]/5 border border-yellow-500/25 p-3.5 shadow-2xl backdrop-blur-sm text-center">
          <span className="text-3xl">🤖</span>
          <span className="text-[9px] text-yellow-400 font-mono mt-1 font-bold">24/7 ACTIVE</span>
        </div>
      </div>

      <div className="absolute right-[12%] bottom-[15%] hidden xl:block animate-bounce pointer-events-none" style={{ animationDuration: '7s' }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dbeafe]/10 backdrop-blur-md border border-blue-500/30 p-3 shadow-lg">
          <div className="h-10 w-10 text-blue-400 bg-blue-900/40 rounded-full flex items-center justify-center text-lg">💡</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-blue-400 mb-6 backdrop-blur-md">
            <Sparkles className="h-3 w-3 animate-pulse" />
            Empowering modern businesses with automated intelligence
          </div>

          <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">night shift.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto font-sans">
            Notion agents keep work moving 24/7. They capture knowledge, answer questions, and push projects forward—all while you sleep.
          </p>

          {/* Action Cta */}
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <a
              href="#get-started"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl hover:bg-blue-500 hover:shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2"
            >
              Get Notion free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
            >
              Request a demo
            </a>
          </div>
        </motion.div>

        {/* Interactive Mockup workspace - Page 1 "Ramp HQ" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-24 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-800 bg-[#0e1220]/80 shadow-2xl backdrop-blur-md"
        >
          {/* Mac Header buttons */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#13192b] border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block pointer-events-none"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block pointer-events-none"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block pointer-events-none"></span>
              <span className="text-xs text-gray-500 font-mono ml-4 hidden sm:inline select-none">⚡ Ramp HQ Notion Workspace</span>
            </div>
            
            {/* Action Simulator Toggle banner */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-400">Night Shift simulation:</span>
              <button
                onClick={() => setNightShiftActive(!nightShiftActive)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${nightShiftActive ? 'bg-indigo-600' : 'bg-gray-700'}`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center ${nightShiftActive ? 'translate-x-5' : 'translate-x-0'}`}
                >
                  {nightShiftActive ? <Moon className="h-3 w-3 text-indigo-600" /> : <Sun className="h-3 w-3 text-amber-500" />}
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
            {/* Sidebar (4 cols) */}
            <div className="md:col-span-3 bg-[#0d101a] border-r border-gray-800 p-4 text-left font-sans select-none flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-gray-200 mb-6 font-semibold">
                  <div className="h-5 w-5 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded flex items-center justify-center text-xs text-white">🚀</div>
                  <span>Ramp HQ</span>
                  <span className="text-[10px] bg-white/10 text-gray-400 px-1.5 py-0.5 rounded ml-auto">Free</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase px-2 mb-1">Navigation</div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/5 text-white text-xs cursor-pointer">
                        <Inbox className="h-3.5 w-3.5 text-gray-400" />
                        <span>Home</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white text-xs cursor-pointer">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Schedules</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white text-xs cursor-pointer">
                        <Search className="h-3.5 w-3.5" />
                        <span>Search</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase px-2 mb-1">Upcoming Events</div>
                    <div className="space-y-1 font-mono text-[11px] px-2">
                      <div className="flex items-center justify-between text-gray-300">
                        <span className="truncate">🗓️ Design Weekly</span>
                        <span className="text-gray-500 ml-1">10–11AM</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span className="truncate">🗓️ Eng Kickoff</span>
                        <span className="text-gray-500 ml-1">11–12PM</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase px-2 mb-1">Overnight Agents</div>
                    <div className="space-y-1.5 px-1">
                      <div className="flex items-center gap-1.5 px-1 py-0.5 rounded text-xs text-blue-300">
                        <span className="animate-pulse">🟢</span>
                        <span className="border-b border-dashed border-blue-500/50">Q&A agent</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-1 py-0.5 rounded text-xs text-indigo-300">
                        <span className="animate-pulse">🟢</span>
                        <span className="border-b border-dashed border-indigo-500/50">Task routing agent</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-1 py-0.5 rounded text-xs text-green-300">
                        <span className="animate-pulse">🟢</span>
                        <span className="border-b border-dashed border-green-500/50">Reporting agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer badge */}
              <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-mono">STATUS</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${nightShiftActive ? 'bg-indigo-900/50 text-indigo-300 animate-pulse' : 'bg-gray-800 text-gray-400'}`}>
                  {nightShiftActive ? '● NIGHT SHIFT RUNNING' : '○ DAYTIME STANDBY'}
                </span>
              </div>
            </div>

            {/* Main Interactive Editor area (9 cols) */}
            <div className={`md:col-span-9 p-6 text-left flex flex-col justify-between transition-colors duration-500 ${nightShiftActive ? 'bg-[#0b0c16]' : 'bg-[#0f1325]'}`}>
              {/* Document Header in Notion style */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 select-none">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-gray-300">Company Overview</span>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold tracking-tight font-display text-white">🔌 Ramp HQ Dashboard</h2>
                  <div className="flex items-center gap-1 text-xs bg-white/5 border border-white/10 px-2 py-1 rounded">
                    <span>⚡ Daily Status Tasks</span>
                  </div>
                </div>
              </div>

              {/* Tasks list and active checks */}
              <div className="mt-6 space-y-4 flex-grow">
                <p className="text-sm text-gray-400">
                  Select some workflows, flip the switch above, and watch the agents pick them up overnight!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {/* Left Column: Tasks */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Active Queue Queue</h4>
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                          checkedTasks[task.id]
                            ? 'bg-blue-600/10 border-blue-500/40 text-white'
                            : 'bg-white/5 border-gray-800 text-gray-300 hover:bg-white/10 hover:border-gray-700'
                        }`}
                      >
                        <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                          checkedTasks[task.id] ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-500'
                        }`}>
                          {checkedTasks[task.id] && <span className="text-[10px]">✓</span>}
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-semibold leading-none">{task.title}</p>
                          <p className="text-[10px] text-gray-500 mt-1 font-mono">Assigned: {task.assignee}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Live Log Terminal */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest flex items-center justify-between">
                      <span>Agent Processing Logs</span>
                      <span>Realtime</span>
                    </h4>
                    <div className="bg-[#05070c] border border-gray-800 rounded-xl h-[178px] p-3 font-mono text-[10px] overflow-y-auto space-y-2">
                      <AnimatePresence>
                        {logs.map((log) => (
                          <motion.div
                            key={log.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-1.5 border-b border-gray-900/30 pb-1.5 last:border-0"
                          >
                            <span className="text-gray-600">[{log.time}]</span>
                            <span className={`font-bold ${log.status === 'success' ? 'text-green-400' : log.status === 'alert' ? 'text-red-400' : 'text-blue-400'}`}>
                              {log.agent}:
                            </span>
                            <span className="text-gray-300 flex-1">{log.action}</span>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status box indicating actions */}
              <div className="mt-4 p-3 rounded-xl bg-whites bg-white/5 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${nightShiftActive ? 'bg-green-500 animate-ping' : 'bg-yellow-500'}`}></div>
                  <span className="text-gray-400 font-mono">
                    {nightShiftActive ? 'Notion night agents are processing task loops' : 'Notion is waiting for Night Shift toggle to start...'}
                  </span>
                </div>
                {nightShiftActive && (
                  <span className="text-[11px] text-blue-400 font-bold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Total 36 actions completed tonight
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { ProjectTask } from '../types';
import { ChevronRight, Calendar, AlertCircle, Sparkles, FolderKanban, CheckSquare, Plus } from 'lucide-react';

export default function ProjectsSection() {
  const [tasks, setTasks] = useState<ProjectTask[]>(PROJECTS_DATA.boardTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const toggleTaskStatus = (id: string) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id === id) {
          const nextStatus = task.status === 'done' ? 'todo' : 'done';
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const added: ProjectTask = {
      id: String(Date.now()),
      title: newTaskTitle,
      status: 'todo',
      priority: 'medium'
    };

    setTasks(prev => [...prev, added]);
    setNewTaskTitle('');
  };

  // Stats
  const completedCount = tasks.filter(t => t.status === 'done').length;
  const progressPercent = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <section className="bg-gray-50 py-20 text-gray-950 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout mimicking Screen 8 structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block (4 cols) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0284c7] bg-blue-50 px-2.5 py-1 rounded inline-block">
              Projects
            </span>
            <h3 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 leading-tight">
              Less tracking. <br />More progress.
            </h3>
            <p className="text-sm text-gray-600">
              Stop nagging peers for daily updates. Notion Projects aggregates tasks, timelines, and roadmap deliverables in unified visual boards, syncable automatically through Notion Agent hooks.
            </p>

            <div className="pt-4">
              <a href="#projects-learn" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline">
                Explore tracking modules <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Block (8 cols): Interactive Sprint Mockup boards (Screen 8 style) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Card Left (6 cols): Active Task Checklist */}
            <div className="md:col-span-7 bg-[#fcfcf9] rounded-2xl border border-gray-200 shadow-xl p-5 space-y-4">
              <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📋</span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-display">Final QA Board</h4>
                    <span className="text-[10px] text-gray-400 font-mono">SPRINT RELEASE MILESTONE</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">
                  {progressPercent}% DONE
                </span>
              </div>

              {/* Progress visual bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="space-y-2 max-h-[178px] overflow-y-auto">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTaskStatus(task.id)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-gray-100 bg-white hover:bg-gray-50/50 cursor-pointer select-none transition-all"
                  >
                    <div className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition-colors ${
                      task.status === 'done' ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white'
                    }`}>
                      {task.status === 'done' && <span className="text-[10px]">✓</span>}
                    </div>
                    
                    <span className={`text-xs flex-grow font-medium truncate ${task.status === 'done' ? 'line-through text-gray-400 font-normal' : 'text-gray-800'}`}>
                      {task.title}
                    </span>

                    <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded border ${
                      task.status === 'done'
                        ? 'bg-green-50 text-green-700 border-green-100'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Add Task input sandbox */}
              <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Append new sandboxed ticket..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="flex-grow bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center cursor-pointer whitespace-nowrap"
                >
                  <Plus className="h-4 w-4" /> Add
                </button>
              </form>
            </div>

            {/* Card Right (5 cols): Milestone Schedule Timeline (Page 8 style) */}
            <div className="md:col-span-5 bg-white rounded-2xl border border-gray-200 shadow-xl p-5 space-y-4 text-left">
              <div className="border-b border-gray-100 pb-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">📅 Launch Milestones</h4>
              </div>

              <div className="space-y-4">
                {PROJECTS_DATA.timelineEvents.map((ev, index) => (
                  <div key={ev.label} className="relative flex gap-3 pb-3 last:pb-0">
                    {/* Line connector */}
                    {index < PROJECTS_DATA.timelineEvents.length - 1 && (
                      <span className="absolute left-[13px] top-6 bottom-0 w-0.5 bg-gray-100 pointer-events-none" />
                    )}

                    <div className="h-7 w-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm font-mono text-[9px] font-bold text-blue-600 z-10">
                      0{index + 1}
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono block">
                        {ev.date}
                      </span>
                      <span className="text-xs font-bold text-gray-900 block leading-tight">
                        {ev.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">Connected Workspace:</span>
                <span className="text-xs font-sans text-gray-600 flex items-center gap-1.5 font-medium">
                  🛠️ GTM-Notion-Webhook
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

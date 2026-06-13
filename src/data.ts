import { ChatMessage, CustomAgentPreset, SearchResult, MeetingNotesData, ProjectTask } from './types';

export const COMPANYES = [
  { name: 'OpenAI', logo: 'OAI' },
  { name: 'Figma', logo: 'FIG' },
  { name: 'ramp', logo: 'RMP' },
  { name: 'CURSOR', logo: 'CUR' },
  { name: 'Vercel', logo: 'VRC' },
  { name: 'NVIDIA', logo: 'NVD' },
  { name: 'VOLVO', logo: 'VLV' },
  { name: 'L\'OREAL', logo: 'LOR' },
  { name: 'Discord', logo: 'DSC' },
  { name: 'Lovable', logo: 'LVB' },
  { name: '1Password', logo: '1PW' },
  { name: 'affirm', logo: 'AFM' },
  { name: 'RIOT GAMES', logo: 'RIOT' },
  { name: 'clay', logo: 'CLY' },
  { name: 'remote', logo: 'RMT' },
  { name: 'FAIRE', logo: 'FRE' },
  { name: 'TOYOTA', logo: 'TYT' },
];

export const NAV_LINKS = {
  products: ['Wikis', 'Projects', 'Docs', 'Notion AI', 'Notion Agents', 'Templates'],
  solutions: ['Enterprise', 'Small business', 'Personal', 'Design', 'Product', 'Engineering'],
  resources: ['Help center', 'Blog', 'Community', 'Webinars'],
  developers: ['API docs', 'Integrations', 'Developer forum']
};

export const CHAT_SIMULATIONS: Record<string, ChatMessage[]> = {
  qa: [
    {
      id: 'emily-1',
      sender: 'user',
      name: 'Emily',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
      content: 'How do I submit an expense?',
      timestamp: '10:05 AM',
      replyCount: 1,
    },
    {
      id: 'agent-1',
      sender: 'agent',
      name: 'Q&A Agent',
      avatar: '🤖',
      content: 'To submit an expense, go to our Finance Wiki, download the expense sheet, fill it, and upload it using the #expense-claims channel on Slack. Claims under $50 are auto-approved!',
      timestamp: '10:05 AM',
    },
    {
      id: 'catherine-1',
      sender: 'user',
      name: 'Catherine',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
      content: 'When is open enrollment?',
      timestamp: '10:12 AM',
      replyCount: 1,
    },
    {
      id: 'agent-2',
      sender: 'agent',
      name: 'Q&A Agent',
      avatar: '🤖',
      content: 'Open enrollment for benefits begins on November 1st and ends on November 25th. You can review current medical/dental plans on the HR Portal.',
      timestamp: '10:12 AM',
    },
    {
      id: 'stephanie-1',
      sender: 'user',
      name: 'Stephanie',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
      content: 'Where\'s the company calendar?',
      timestamp: '10:15 AM',
      replyCount: 1,
    },
    {
      id: 'agent-3',
      sender: 'agent',
      name: 'Q&A Agent',
      avatar: '🤖',
      content: 'The company calendar is embedded directly on our Company HQ index page and also synced to the Google Workspace group calendar. Let me know if you need the direct link!',
      timestamp: '10:15 AM',
    }
  ],
  routing: [
    {
      id: 'r-1',
      sender: 'user',
      name: 'Marcus',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
      content: 'Hey, who should review this brand layout file? It\'s for the marketing campaign.',
      timestamp: '11:20 AM',
      replyCount: 1
    },
    {
      id: 'r-agent-1',
      sender: 'agent',
      name: 'Task Router',
      avatar: '⚡',
      content: 'Routed brand layout file to @Sarah (Head of Brand) for review. Created ticket in Marketing Board #MK-402 and assigned priority High.',
      timestamp: '11:20 AM'
    },
    {
      id: 'r-2',
      sender: 'user',
      name: 'Clara',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80',
      content: 'Found a buggy API call on payment endpoint limit checks.',
      timestamp: '11:25 AM',
      replyCount: 1
    },
    {
      id: 'r-agent-2',
      sender: 'agent',
      name: 'Task Router',
      avatar: '⚡',
      content: 'Identified API issue. Routed bug report to @Eng-Platform team on Slack, created issue #ENG-904, and set triager rules to Auto.',
      timestamp: '11:25 AM'
    }
  ],
  reporting: [
    {
      id: 'rep-1',
      sender: 'user',
      name: 'David',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
      content: 'Draft the weekly update for product sprint 14 please.',
      timestamp: '09:00 AM',
      replyCount: 1
    },
    {
      id: 'rep-agent-1',
      sender: 'agent',
      name: 'Reporting Agent',
      avatar: '📊',
      content: 'Sprint 14 update compiled! Pulled 8 completed issues, checked 2 release drafts, and compiled summary: 🟢 4 features deployed, 🟡 3 tests in-progress, 🔴 1 security check pending.',
      timestamp: '09:01 AM'
    }
  ]
};

export const CUSTOM_AGENT_PRESETS: CustomAgentPreset[] = [
  {
    id: 'triage',
    name: 'Triage product feedback',
    description: 'Scrapes reviews, categorizes bugs, and labels core themes automatically on release days.',
    avatarBg: 'bg-blue-100 text-blue-600',
    icon: 'MessageSquare',
    tags: ['Customer Feedback', 'Auto tag', 'Jira Sync'],
    status: 'idle',
  },
  {
    id: 'slack',
    name: 'Resolve support tickets in Slack',
    description: 'Auto-scrapes support channel messages and uses internal PDFs to resolve 60% of technical queries.',
    avatarBg: 'bg-orange-100 text-orange-600',
    icon: 'Slack',
    tags: ['Slack Integration', 'Help Desk', 'PDF Reader'],
    status: 'idle',
  },
  {
    id: 'security',
    name: 'Respond to security alerts faster',
    description: 'Triages security logs, alerts the on-duty engineer, and drafts rollback actions within 2 minutes.',
    avatarBg: 'bg-red-100 text-red-600',
    icon: 'ShieldAlert',
    tags: ['Log Monitoring', 'PagerDuty', 'Security'],
    status: 'idle',
  },
  {
    id: 'weekly',
    name: 'Automate weekly reporting',
    description: 'Aggregates tasks across multiple project tracking boards to compile clean executive bullet summaries.',
    avatarBg: 'bg-green-100 text-green-600',
    icon: 'FileText',
    tags: ['Report Compiler', 'Board Scraping', 'Markdown'],
    status: 'idle',
  },
];

export const SAMPLE_TASKS = [
  {
    id: 't-1',
    label: 'Summarize Product Sprint 14',
    text: 'Scan the project board and draft our weekly status update. Map it against critical product channels.',
    outputTitle: 'Weekly Product Sprint 14 Summary',
    outputMarkdown: `## 📦 Sprint 14 Executive Summary

Status: 🟢 **On Track**
Updated by: **Notion Reporting Agent**
Date: June 13, 2026

### 🚀 Deployed in this Update
* **Dynamic Pricing Engine**: Automated pricing logic launched in core database.
* **Unified Auth**: Passwordless authentication rolled out sandbox wide.
* **HMR Exclusions**: Built specific server guards to prevent file system flickering.

### 📈 Current Team Progress
* **Sarah (Design)**: Completed 4 asset sets for the 'Night Shift' media kit.
* **Michael (Frontend)**: Assembled bento layout, logo ticker, and custom agent creator.
* **John (Platform)**: Deployed sandbox environment on GCP.

### 🛡️ Outstanding Risks
* Verification checks on billing endpoints pending live-load benchmarks.`
  },
  {
    id: 't-2',
    label: 'Analyze Customer Feedback',
    text: 'Retrieve last 20 App Store reviews, tag core sentiments, and route bug reports directly to Zendesk.',
    outputTitle: 'Sentiment & Bug Dispatch Report',
    outputMarkdown: `## 💬 Customer Sentiment Summary

Scanned reviews: **20 entries**
Overall Score: **4.6 / 5.0** 🟢

### 📁 Feature Tags & High-Frequency Words
1. **"Agents feature"** - *Highly Positive* (9 counts)
2. **"Night shift ui"** - *Positive* (6 counts)
3. **"Database syncing speed"** - *Neutral* (5 counts)

### 📌 Bug Dispatches Formed
* **BUG-401**: iOS 19 layout overlap on mobile filter card toggle. *Dispatched to Mobile Eng*
* **BUG-442**: Dark mode contrast on search scrollbar. *Dispatched to Design Core*`
  },
  {
    id: 't-3',
    label: 'Respond to Security Incident SEC-09',
    text: 'Analyze the firewall breach logs under node 904, notify triage channel, and prepare remediation draft.',
    outputTitle: 'Security Briefing SEC-09',
    outputMarkdown: `## 🚨 Security Incident Resolution Workflow

Incident ID: **SEC-09**
Severity: 🔴 **Critical**
Status: **Mitigated / Draft actions ready**

### 🔍 Investigation Log
* **08:14 UTC**: Unauthorized token validation check spotted on node 904.
* **08:15 UTC**: Notion Agent identified anomalous access IP originating from remote region.
* **08:16 UTC**: Rotated access credentials for API tier and isolated server cluster.

### 🛡️ Recommended Remediation Actions
- [x] Rotate production secret tokens
- [x] Enforce origin rate limiting
- [ ] Upgrade IP verification protocols`
  }
];

export const SEARCH_RESULTS: SearchResult[] = [
  {
    id: 's-1',
    title: 'Top Customer Requests This Quarter (GTM Analysis)',
    source: 'Notion',
    snippet: 'Here are the top customer requests this quarter (so far), compiled based on the latest GTM analysis across product categories.',
    timestamp: '2 hours ago',
    author: 'Sarah Jenkins',
    category: 'Product Feedback'
  },
  {
    id: 's-2',
    title: 'Multi-property calendar synchronization roadmap',
    source: 'Jira',
    snippet: 'Unified management across channels with conflict prevention, automatic calendar blocking, and real-time syncing triggers.',
    timestamp: 'Yesterday',
    author: 'Alex Rivera',
    category: 'Epic Ticket'
  },
  {
    id: 's-3',
    title: 'Guest communication templates draft v2',
    source: 'Google Drive',
    snippet: 'Pre-arrival checklists, automatic check-in receipts, wifi details, and post-stay review requests utilizing Notion Agent templates.',
    timestamp: '3 days ago',
    author: 'Jane Doe',
    category: 'Docs'
  },
];

export const MEETING_NOTES_DEMO: MeetingNotesData = {
  title: 'Joyce & Sam weekly 1:1',
  date: 'June 2, 2026',
  attendees: [
    { name: 'Joyce Chen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80', role: 'Product Manager' },
    { name: 'Sam Wheeler', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80', role: 'Staff Engineer' }
  ],
  summary: [
    'Joyce provided an update on the landing page improvements. Based on research, the team has identified three key areas to enhance: social proof, demo interactions, and case studies.',
    'Sam noted that the initial API response rates are highly resilient under 4,000 concurrent requests.'
  ],
  notes: [
    'Reviewed layout assets for Notion Agents.',
    'Discussed database indexing for rapid global search.',
    'Alignment on next weeks production test cycles.'
  ],
  actionItems: [
    { id: 'a-1', text: 'Team review planned for Tomorrow', done: true, assignee: 'Joyce' },
    { id: 'a-2', text: 'Testing to begin next week', done: false, assignee: 'Sam' },
    { id: 'a-3', text: 'Launch targeted for the week after testing', done: false, assignee: 'Sam & Joyce' }
  ]
};

export const PROJECTS_DATA = {
  boardTasks: [
    { id: 'pt-1', title: 'Capitalization of feature names', status: 'done', priority: 'medium' },
    { id: 'pt-2', title: 'Add max-width to titles', status: 'done', priority: 'low' },
    { id: 'pt-3', title: 'Add hanging punctuation to pullquotes', status: 'in-progress', priority: 'medium' },
    { id: 'pt-4', title: 'Adjust dropshadow styling', status: 'todo', priority: 'low' },
  ] as ProjectTask[],
  timelineEvents: [
    { date: 'June 15', label: 'Beta release', type: 'milestone' },
    { date: 'June 22', label: 'Staging & internal previews', type: 'stage' },
    { date: 'June 25', label: 'Launch comms prep', type: 'task' },
    { date: 'July 1', label: 'Public roll-out', type: 'launch' }
  ]
};

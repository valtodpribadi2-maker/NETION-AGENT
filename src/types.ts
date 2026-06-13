export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  name: string;
  avatar: string;
  content: string;
  timestamp: string;
  reactions?: string[];
  replyCount?: number;
}

export interface CustomAgentPreset {
  id: string;
  name: string;
  description: string;
  avatarBg: string;
  icon: string;
  tags: string[];
  status: 'idle' | 'running' | 'success';
}

export interface TaskItem {
  id: string;
  title: string;
  status: 'pending' | 'completed';
  assignee: string;
}

export interface SearchResult {
  id: string;
  title: string;
  source: 'Notion' | 'Slack' | 'Google Drive' | 'Jira' | 'Figma';
  snippet: string;
  timestamp: string;
  author?: string;
  category?: string;
}

export interface MeetingAttendee {
  name: string;
  avatar: string;
  role?: string;
}

export interface MeetingNotesData {
  title: string;
  date: string;
  attendees: MeetingAttendee[];
  summary: string[];
  notes: string[];
  actionItems: { id: string; text: string; done: boolean; assignee: string }[];
}

export interface ProjectTask {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export type JobStatus = 'saved' | 'applied' | 'interview' | 'offer';

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  url: string;
  status: JobStatus;
};

export type KanbanColumn = {
  id: JobStatus;
  title: string;
};

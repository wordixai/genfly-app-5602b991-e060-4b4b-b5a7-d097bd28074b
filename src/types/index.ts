export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Internship';
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  logo?: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  website: string;
  location: string;
  description: string;
  industry: string;
  size: string;
  founded: string;
  jobs?: Job[];
}

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Internship';
export type LocationFilter = string;
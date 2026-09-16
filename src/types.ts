export interface Department {
  code: string;
  name: string;
  skt: string;
  category: 'circuit' | 'core' | 'sciences' | 'management';
  tag: string;
  seats: number;
  established: number;
  avgPackage: string;
  highestPackage: string;
  description: string;
  curriculumHighlights: string[];
  flagshipLabs: string[];
  topRecruiters: string[];
  researchAreas: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Admissions' | 'Research' | 'Placements' | 'Campus' | 'Notice';
  summary: string;
  isUrgent?: boolean;
}

export interface CampusLandmark {
  id: string;
  name: string;
  teluguName?: string;
  category: 'Academic' | 'Hostel' | 'Sports' | 'Culture' | 'Innovation';
  description: string;
  features: string[];
  image: string;
  coordinates: { x: number; y: number }; // Percentage for interactive map
}

export interface CutoffData {
  branchCode: string;
  branchName: string;
  homeStateOpening: number;
  homeStateClosing: number;
  otherStateOpening: number;
  otherStateClosing: number;
  category: string;
}

export interface PlacementStat {
  year: string;
  avgCTC: string;
  highestCTC: string;
  offersCount: number;
  placementPercent: number;
}

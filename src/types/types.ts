export interface User {
  id: string;
  username: string;
  created_at: string;
  last_sign_in: string;
  isLoggedIn: boolean;
}

export interface FullProjectType {
  id: string;
  title: string;
  description: string;
  demo_url: string;
  repo: string|null;
  created_at: string;
  techList: Technology[];
  contributors: any[];
  screenshots: string[];
}

export interface ReducedProjectType {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techList: string[];
}

export interface Technology {
  id: string;
  name: string;
  p_id: string;
}
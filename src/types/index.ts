export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  certifications: string[];
  additional: AdditionalInfo;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  school: string;
  duration?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  styling: string[];
  tools: string[];
  devops: string[];
  methodologies: string[];
}

export interface AdditionalInfo {
  languages: string;
  engagements: string;
}
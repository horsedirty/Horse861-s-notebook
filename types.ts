export enum Difficulty {
  Easy = "基础",
  Medium = "进阶",
  Hard = "困难",
  Critical = "核心考点"
}

export interface ContentSection {
  subtitle?: string; // Optional sub-heading within a card
  text: string; // Can contain LaTeX wrapped in $$...$$ or $...$
  list?: string[]; // Bullet points
}

export interface KeyPoint {
  title: string;
  sections: ContentSection[];
  tags?: string[];
  important?: boolean; // Highlights the card visually
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  summary: string;
  keyPoints: KeyPoint[];
  examTips?: string[];
}

export interface ExamDistribution {
  name: string;
  value: number;
  color: string;
}
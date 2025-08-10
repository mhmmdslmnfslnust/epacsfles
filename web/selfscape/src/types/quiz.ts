export interface Answer {
  id: string;
  text: string;
  score: Record<string, number>; // trait scores
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'slider' | 'checkbox';
  answers?: Answer[]; // for multiple choice and checkbox
  sliderMin?: number;
  sliderMax?: number;
  sliderLabels?: { min: string; max: string };
  traits?: Record<string, number>; // for slider questions
}

export interface UserAnswer {
  questionId: string;
  answerId?: string | string[]; // string for single choice, array for checkbox
  sliderValue?: number;
}

export interface PersonalityProfile {
  id: string;
  name: string;
  description: string;
  traits: Record<string, number>;
  tips: string[];
  color: string;
  emoji: string;
}

export interface QuizResult {
  profile: PersonalityProfile;
  traitScores: Record<string, number>;
  completedAt: Date;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: UserAnswer[];
  isCompleted: boolean;
  result?: QuizResult;
}

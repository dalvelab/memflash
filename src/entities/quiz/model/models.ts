export interface Question {
  question: string;
  answer: string;
}

export type QuizType = "new" | "progress" | "mastered" | "repeat";

export const statusToColor: Record<QuizType, string> = {
  new: "purple",
  progress: "yellow",
  mastered: "green",
  repeat: "red",
};

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createDate: Date;
  editDate?: Date;
  status: QuizType;
}

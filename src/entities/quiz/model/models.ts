export interface Question {
  question: string;
  answer: string;
}

export interface Quiz {
  title: string;
  questions: Question[];
  createDate: Date;
  editDate: Date;
  level: number;
}

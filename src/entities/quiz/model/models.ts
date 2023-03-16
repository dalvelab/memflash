export interface Question {
  question: string;
  answer: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createDate: Date;
  editDate?: Date;
}

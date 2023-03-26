export type Question = {
	question: string;
	answer: string;
};

export type QuizType = 'new' | 'progress' | 'mastered' | 'repeat';

export const statusToColor: Record<QuizType, string> = {
	new: 'purple',
	progress: 'yellow',
	mastered: 'green',
	repeat: 'red',
};

export type Quiz = {
	id: string;
	title: string;
	description: string;
	questions: Question[];
	createDate: Date;
	editDate?: Date;
	status: QuizType;
};

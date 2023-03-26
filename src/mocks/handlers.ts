import {rest} from 'msw';

import {type Quiz} from '../entities/quiz/model/models';

type QuizzesResponse = {
	quizzes: Quiz[];
};

type CreateQuizRequest = Record<string, unknown> & Pick<Quiz, 'title' | 'description' | 'questions'>;

export const handlers = [
	rest.get('/quizzes', async (req, res, ctx) => {
		const data: QuizzesResponse = {
			quizzes: [
				{
					id: 'quiz-1234',
					title: 'Quiz #1',
					description: 'Brief description of quiz content',
					createDate: new Date(),
					status: 'progress',
					questions: [
						{
							question: 'Table',
							answer: 'стол',
						},
						{
							question: 'Chair',
							answer: 'кресло',
						},
					],
				},
				{
					id: 'quiz-1235',
					title: 'Quiz #2',
					description: 'Brief description of quiz content',
					createDate: new Date(),
					status: 'new',
					questions: [
						{
							question: 'Table',
							answer: 'стол',
						},
						{
							question: 'Chair',
							answer: 'кресло',
						},
					],
				},
				{
					id: 'quiz-1236',
					title: 'Quiz #3',
					description: 'Brief description of quiz content',
					createDate: new Date(),
					status: 'repeat',
					questions: [
						{
							question: 'Table',
							answer: 'стол',
						},
						{
							question: 'Chair',
							answer: 'кресло',
						},
					],
				},
				{
					id: 'quiz-1237',
					title: 'Quiz #4',
					description: 'Brief description of quiz content',
					createDate: new Date(),
					status: 'mastered',
					questions: [
						{
							question: 'Table',
							answer: 'стол',
						},
						{
							question: 'Chair',
							answer: 'кресло',
						},
					],
				},
			],
		};

		return res(ctx.json(data));
	}),
	rest.get('/quiz/:id', async (req, res, ctx) => {
		const data: Quiz = {
			id: 'quiz-1234',
			title: 'Quiz #1',
			description: 'Brief description of quiz content',
			createDate: new Date(),
			status: 'new',
			questions: [
				{
					question: 'Table',
					answer: 'стол',
				},
				{
					question: 'Chair',
					answer: 'кресло',
				},
				{
					question: 'Progress',
					answer: 'прогресс',
				},
			],
		};

		return res(ctx.json(data));
	}),
	rest.post('/quiz/create', async (req, res, ctx) => {
		const {title, description, questions}
      = (await req.json());

		const response: Quiz = {
			id: 'random_id_1',
			title,
			description,
			questions,
			status: 'new',
			createDate: new Date(),
		};

		return res(ctx.json(response));
		// Return res(ctx.status(403));
	}),
];

import axios from 'axios';

import {type Quiz} from '../model/models';

type ApiResponse = {
	quizzes: Quiz[];
};

export async function fetchQuizzes(): Promise<ApiResponse> {
	return axios.get('/quizzes').then(res => res.data);
}

export async function fetchQuiz(id?: string): Promise<Quiz> {
	return axios.get(`/quiz/${id}`).then(res => res.data);
}

export async function createQuiz(
	quiz: Pick<Quiz, 'title' | 'description' | 'questions'>,
) {
	return axios.post('/quiz/create', quiz);
}

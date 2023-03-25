import axios from "axios";

import { Quiz } from "../model/models";

interface APIResponse {
  quizzes: Quiz[];
}

export function fetchQuizzes(): Promise<APIResponse> {
  return axios.get("/quizzes").then((res) => res.data);
}

export function fetchQuiz(id?: string): Promise<Quiz> {
  return axios.get(`/quiz/${id}`).then((res) => res.data);
}

export function createQuiz(
  quiz: Pick<Quiz, "title" | "description" | "questions">
) {
  return axios.post("/quiz/create", quiz);
}

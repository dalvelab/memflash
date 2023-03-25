import { rest } from "msw";

import { Quiz } from "../entities/quiz/model/models";

interface QuizzesResponse {
  quizzes: Quiz[];
}

interface CreateQuizRequest
  extends Pick<Quiz, "title" | "description" | "questions"> {}

export const handlers = [
  rest.get("/quizzes", (req, res, ctx) => {
    const data: QuizzesResponse = {
      quizzes: [
        {
          id: "quiz-1234",
          title: "Quiz #1",
          description: "Brief description of quiz content",
          createDate: new Date(),
          status: "progress",
          questions: [
            {
              question: "Table",
              answer: "стол",
            },
            {
              question: "Chair",
              answer: "кресло",
            },
          ],
        },
        {
          id: "quiz-1235",
          title: "Quiz #2",
          description: "Brief description of quiz content",
          createDate: new Date(),
          status: "new",
          questions: [
            {
              question: "Table",
              answer: "стол",
            },
            {
              question: "Chair",
              answer: "кресло",
            },
          ],
        },
        {
          id: "quiz-1236",
          title: "Quiz #3",
          description: "Brief description of quiz content",
          createDate: new Date(),
          status: "repeat",
          questions: [
            {
              question: "Table",
              answer: "стол",
            },
            {
              question: "Chair",
              answer: "кресло",
            },
          ],
        },
        {
          id: "quiz-1237",
          title: "Quiz #4",
          description: "Brief description of quiz content",
          createDate: new Date(),
          status: "mastered",
          questions: [
            {
              question: "Table",
              answer: "стол",
            },
            {
              question: "Chair",
              answer: "кресло",
            },
          ],
        },
      ],
    };

    return res(ctx.json(data));
  }),
  rest.get("/quiz/:id", (req, res, ctx) => {
    const data: Quiz = {
      id: "quiz-1234",
      title: "Quiz #1",
      description: "Brief description of quiz content",
      createDate: new Date(),
      status: "new",
      questions: [
        {
          question: "Table",
          answer: "стол",
        },
        {
          question: "Chair",
          answer: "кресло",
        },
        {
          question: "Progress",
          answer: "прогресс",
        },
      ],
    };

    return res(ctx.json(data));
  }),
  rest.post("/quiz/create", async (req, res, ctx) => {
    const { title, description, questions } =
      (await req.json()) as CreateQuizRequest;

    const response: Quiz = {
      id: "random_id_1",
      title,
      description,
      questions,
      status: "new",
      createDate: new Date(),
    };

    return res(ctx.json(response));
    // return res(ctx.status(403));
  }),
];

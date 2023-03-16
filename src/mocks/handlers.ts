import { rest } from "msw";

import { Quiz } from "../entities/quiz/model/models";

interface QuizzesResponse {
  quizzes: Quiz[];
}

interface QuizeResponse {
  quiz: Quiz;
}

export const handlers = [
  rest.get("/quizzes", (req, res, ctx) => {
    const data: QuizzesResponse = {
      quizzes: [
        {
          id: "quiz-1234",
          title: "Quiz #1",
          description: "Brief description of quiz content",
          createDate: new Date(),
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
    const data: QuizeResponse = {
      quiz: {
        id: "quiz-1234",
        title: "Quiz #1",
        description: "Brief description of quiz content",
        createDate: new Date(),
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
    };

    return res(ctx.json(data));
  }),
];

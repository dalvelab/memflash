import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Quiz } from "./pages/Quiz";
import { CreateQuiz } from "./pages/CreateQuiz";
import { Layout } from "./shared/components/Layout";

export interface IQuiz {
  question: string;
  answer: string;
}

const quiz: IQuiz[] = [
  {
    question: "Table",
    answer: "стол",
  },
  {
    question: "Chair",
    answer: "кресло",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "quiz/create",
        element: <CreateQuiz />,
      },
    ],
  },
  {
    path: "quiz",
    element: <Quiz quiz={quiz} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

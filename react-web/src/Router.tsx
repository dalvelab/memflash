import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Quiz } from "./Quiz";

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
    element: <Dashboard />,
  },
  {
    path: "/quiz",
    element: <Quiz quiz={quiz} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

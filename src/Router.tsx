import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Quiz } from "./pages/Quiz";
import { CreateQuiz } from "./pages/CreateQuiz";
import { Layout } from "./shared/components/Layout";

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
    path: "/quiz/:id",
    element: <Quiz />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

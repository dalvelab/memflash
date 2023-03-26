import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {Quiz, Dashboard, CreateQuiz, Login, Register} from 'pages';
import {Layout} from 'shared/components/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: 'quiz/create',
				element: <CreateQuiz />,
			},
			{
				path: 'auth/signin',
				element: <Login />,
			},
			{
				path: 'auth/signup',
				element: <Register />,
			},
		],
	},
	{
		path: '/quiz/:id',
		element: <Quiz />,
	},
]);

export const Router = () => <RouterProvider router={router} />;

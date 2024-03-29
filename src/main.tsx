import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';
import {startWorker} from './mocks/browser';
import './index.css';

if (process.env.NODE_ENV === 'development') {
	startWorker();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>,
);

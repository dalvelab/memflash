import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { startWorker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  startWorker();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

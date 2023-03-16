import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { startWorker } from "./mocks/browser";

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  startWorker();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

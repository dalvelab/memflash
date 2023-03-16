// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers";

export function startWorker() {
  const worker = setupWorker(...handlers);

  worker.start();
}

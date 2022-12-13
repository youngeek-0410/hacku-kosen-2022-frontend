import { setupWorker } from "msw";
import { setupServer } from "msw/node";

import { backendApiHandlers, spotifyApiHandlers } from "./handlers";

// for browser
export const setupMockWorker = () => setupWorker(...spotifyApiHandlers, ...backendApiHandlers);

// for node
export const setupMockServer = () => setupServer(...spotifyApiHandlers, ...backendApiHandlers);

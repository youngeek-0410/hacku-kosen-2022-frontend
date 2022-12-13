import { setupServer } from "msw/node";

import { spotifyApiHandlers } from "../../../mocks/handlers";

import { authenticate } from "./authenticate";

const mockServer = setupServer(...spotifyApiHandlers);

describe("authenticate spotify api", () => {
  beforeAll(() => {
    mockServer.listen({
      onUnhandledRequest: "warn",
    });
  });
  afterAll(() => {
    mockServer.close();
  });

  it("should success authendication", async () => {
    expect(await authenticate()).toBe("token");
  });
});

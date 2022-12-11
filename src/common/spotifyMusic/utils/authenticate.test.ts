import { setupServer } from "msw/node";
import { rest } from "msw";

import { authenticate, authSpotifyApiUrl } from "./authenticate";

const mockServer = setupServer();
rest.post(authSpotifyApiUrl, (req, res, ctx) => {
  const resBody = {
    access_token: "token",
    token_type: "Bearer",
    expires_in: 3600,
  };

  return res(ctx.status(200), ctx.json(resBody));
});

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

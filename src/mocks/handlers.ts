import { rest } from "msw";

import { backendApiUrl } from "../../api";
import { authSpotifyApiUrl } from "../common/spotifyMusic/utils/authenticate";

export const spotifyApiHandlers = [
  rest.post(authSpotifyApiUrl, (req, res, ctx) => {
    const resBody = {
      access_token: "token",
      token_type: "Bearer",
      expires_in: 3600,
    };

    return res(ctx.status(200), ctx.json(resBody));
  }),
];

export const backendApiHandlers = [
  rest.post(`${backendApiUrl}/api/projects/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ project_id: "test_project_id" }));
  }),
];

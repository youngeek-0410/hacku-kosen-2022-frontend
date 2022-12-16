import { rest } from "msw";

import { backendApiUrl } from "../utils/apis";
// import { authSpotifyApiUrl } from "../common/spotifyMusic/utils/authenticate";
import { exampleSpotifyMusic } from "../common/spotifyMusic/example";

export const spotifyApiHandlers = [
  //   rest.post(authSpotifyApiUrl, (req, res, ctx) => {
  //     const resBody = {
  //       access_token: "token",
  //       token_type: "Bearer",
  //       expires_in: 3600,
  //     };
  //
  //     return res(ctx.status(200), ctx.json(resBody));
  //   }),
];

export const backendApiHandlers = [
  rest.post(`${backendApiUrl}/api/projects/`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ project_id: "test_project_id" }));
  }),
  rest.post(`${backendApiUrl}/api/projects/:project_id/message/`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${backendApiUrl}/api/projects/:project_id/spotify_music/`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.put(`${backendApiUrl}/api/projects/:project_id/top_text/`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.put(`${backendApiUrl}/api/projects/:project_id/top_image/`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/`, async (req, res, ctx) => {
    const textMessageLimit = req.url.searchParams.get("text_message_limit");
    const imageMessageLimit = req.url.searchParams.get("image_message_limit");

    // NOTE: copy from https://youngeek-0410.github.io/hacku-kosen-2022-backend/#/project/get_api_projects__project_id_
    const resBody = {
      project_id: "a38ioje",
      receiver_name: "山田 太郎",
      top_text: "こうよう祭おつかれ様でした！",
      top_image: {
        url: "https://via.placeholder.com/150",
      },
      spotify_music: exampleSpotifyMusic,
      text_messages: {
        count: textMessageLimit || 3,
        items: [
          {
            text: "おっつー",
            sender_name: "山田 圭祐",
          },
          {
            text: "おっつー",
            sender_name: "山田 圭祐",
          },
          {
            text: "おっつー",
            sender_name: "山田 圭祐",
          },
        ],
      },
      image_messages: {
        count: imageMessageLimit || 3,
        items: [
          {
            url: "https://via.placeholder.com/150",
            sender_name: "山田 圭祐",
          },
          {
            url: "https://via.placeholder.com/150",
            sender_name: "山田 圭祐",
          },
          {
            url: "https://via.placeholder.com/150",
            sender_name: "山田 圭祐",
          },
        ],
      },
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/text_messages/`, (req, res, ctx) => {
    const resBody = {
      count: 5,
      items: [
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
      ],
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/image_messages/`, (req, res, ctx) => {
    const resBody = {
      count: 5,
      items: [
        {
          url: "https://via.placeholder.com/150",
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          sender_name: "山田 圭祐",
        },
      ],
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
];

import { Handler } from "@netlify/functions";
import fetch from "node-fetch";
import { ResponseCodes } from "../constants";
import { sendResponse } from "../utils";
import { AlbumSearchResponse } from "../types";

const handler: Handler = async (event, context) => {
  const { name } = event.queryStringParameters;

  if (!name) {
    return sendResponse(ResponseCodes.BadRequest, {
      error: "Name parameter missing.",
    });
  }

  try {
    const url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${encodeURI(
      name
    )}&api_key=${process.env.API_KEY}&format=json`;
    const response = await fetch(url);
    const jsonRes = (await response.json()) as AlbumSearchResponse;

    const matches = jsonRes.results.albummatches.album.map((al) => ({
      name: al.name,
      artist: al.artist,
      images: al.image.reduce(
        (prev, cur) => [...prev, { url: cur["#text"], size: cur.size }],
        []
      ),
    }));

    return sendResponse(ResponseCodes.Ok, { message: matches });
  } catch (e) {
    return sendResponse(ResponseCodes.Error, { error: e });
  }
};

export { handler };

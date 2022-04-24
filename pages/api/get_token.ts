import client, { jwt } from "twilio";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ACCOUNT_SID,
  API_KEY_SECRET,
  API_KEY_SID,
  AUTH_TOKEN,
} from "../../config/constants";
import { RoomInstance } from "twilio/lib/rest/video/v1/room";

type Data = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const c = client(ACCOUNT_SID, AUTH_TOKEN);
  const { identity, room } = req.body;
  const participants = await (
    await c.video.v1.rooms(room).participants.list({ status: "connected" })
  ).map((p) => p.identity);

  if (participants.includes(identity)) {
    res.status(402).json({ message: "not accepted" });
    return;
  }
  const accessToken = new jwt.AccessToken(
    ACCOUNT_SID,
    API_KEY_SID,
    API_KEY_SECRET,
    { identity }
  );
  const grant = new jwt.AccessToken.VideoGrant({
    room,
  });

  accessToken.addGrant(grant);

  res.status(200).json({ token: accessToken.toJwt() });
}

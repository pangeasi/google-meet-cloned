import client from "twilio";
import type { NextApiRequest, NextApiResponse } from "next";
import { ACCOUNT_SID, AUTH_TOKEN } from "../../config/constants";

type Data = {
  exist: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const c = client(ACCOUNT_SID, AUTH_TOKEN);
  try {
    await c.video.rooms(req.query.room as string).fetch();

    res.status(200).json({ exist: false });
  } catch (error) {
    res.status(404).json({ exist: true });
  }
}

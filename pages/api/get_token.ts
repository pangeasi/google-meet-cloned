import { jwt } from "twilio";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ACCOUNT_SID,
  API_KEY_SECRET,
  API_KEY_SID,
} from "../../config/constants";

type Data = {
  token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { identity, room } = req.body;
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

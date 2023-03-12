import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  answer: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please Provide a valid PROMPT" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please Provide a valid chat ID§" });
    return;
  }
  res.status(200).json({ answer: "sUCCESS" });
}

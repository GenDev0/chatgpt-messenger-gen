import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";

type ResponseData = {
  answer: string;
};

export default async function handler(
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

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that !",
    createdAt: undefined,
    user: {
      _id: "",
      name: "",
      avatar: "",
    },
  };

  res.status(200).json({ answer: "sUCCESS" });
}

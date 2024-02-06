// pages/api/servo.ts
import { NextApiRequest, NextApiResponse } from "next";

interface RequestWithBody extends NextApiRequest {
  body: {
    value: number;
  };
}

export default function handler(req: RequestWithBody, res: NextApiResponse) {
  if (req.method === "POST") {
    const { value } = req.body;
    console.log(`Received value: ${value}`);
    res.json({ status: "ok" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

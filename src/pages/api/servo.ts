import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

let timeInterval = 0; // Store the time interval

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { timeInterval: newTimeInterval } = req.body;
    timeInterval = newTimeInterval; // Update the time interval

    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    res.status(200).json({ timeInterval }); // Return the time interval
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

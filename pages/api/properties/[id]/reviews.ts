import { NextApiRequest, NextApiResponse } from "next";

const reviewsData: Record<string, any[]> = {
  "1": [
    { id: 1, author: "John Doe", rating: 5, comment: "Fantastic place!" },
    { id: 2, author: "Jane Smith", rating: 4, comment: "Very cozy and clean." },
  ],
  "2": [
    { id: 3, author: "Ali Khan", rating: 5, comment: "Loved the view!" },
  ],
  "3": [
    { id: 4, author: "Sara Lee", rating: 3, comment: "Good, but noisy area." },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const reviews = reviewsData[id as string] || [];
  res.status(200).json(reviews);
}
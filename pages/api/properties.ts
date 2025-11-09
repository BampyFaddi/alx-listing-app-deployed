import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = [
    { id: 1, title: "Modern Apartment", location: "New York", price: 120 },
    { id: 2, title: "Cozy Cottage", location: "Paris", price: 150 },
    { id: 3, title: "Beach House", location: "Malibu", price: 250 },
  ];
  res.status(200).json(properties);
}
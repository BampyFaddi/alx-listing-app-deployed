import { NextApiRequest, NextApiResponse } from "next";

// Simple mock data — in a real app this would come from a database
const properties = [
  { id: 1, title: "Modern Apartment", location: "New York", price: 120, image: "/images/apartment.jpg", description: "A cozy apartment in the heart of the city." },
  { id: 2, title: "Cozy Cottage", location: "Paris", price: 150, image: "/images/cottage.jpg", description: "A peaceful cottage surrounded by nature." },
  { id: 3, title: "Beach House", location: "Malibu", price: 250, image: "/images/beachhouse.jpg", description: "Enjoy the waves and sun in this beautiful beach house." },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(property);
}
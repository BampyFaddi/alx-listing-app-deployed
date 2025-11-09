import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <p className="p-8">Loading property details...</p>;
  if (error) return <p className="p-8 text-red-500">{error}</p>;
  if (!property) return <p className="p-8">No property found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

      <div className="mb-6">
        <img
          src={property.image || "https://via.placeholder.com/800x450"}
          alt={property.title}
          className="rounded-2xl shadow-lg mb-4 w-full object-cover"
        />
        <p className="text-gray-700 mb-2">{property.location}</p>
        <p className="text-gray-800 font-semibold text-lg mb-2">
          ${property.price} / night
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">{property.description}</p>
      </div>

      <div className="flex gap-4 mb-8">
        <Link
          href={`/booking?propertyId=${property.id}`}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Book Now
        </Link>

        <button
          onClick={() => router.back()}
          className="px-5 py-2 border rounded-md hover:shadow"
        >
          Back
        </button>
      </div>

      {/* ✅ Add review section below the property details */}
      <div className="border-t pt-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Guest Reviews</h2>
        <ReviewSection propertyId={property.id} />
      </div>
    </div>
  );
}

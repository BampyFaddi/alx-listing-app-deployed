import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

const ReviewSection = ({ propertyId }: { propertyId: number }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-6 bg-white rounded-2xl shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Guest Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="border-b py-2">
            <p className="font-medium">{review.author}</p>
            <p className="text-yellow-500">⭐ {review.rating}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
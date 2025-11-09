import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function BookingForm() {
  const router = useRouter();
  const { propertyId } = router.query;

  const [property, setProperty] = useState<any>(null);
  const [loadingProperty, setLoadingProperty] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // fetch property summary if propertyId is provided
  useEffect(() => {
    if (!propertyId) return;
    const fetchProperty = async () => {
      setLoadingProperty(true);
      try {
        const res = await axios.get(`/api/properties/${propertyId}`);
        setProperty(res.data);
      } catch (err) {
        console.error("Failed to fetch property for booking", err);
      } finally {
        setLoadingProperty(false);
      }
    };
    fetchProperty();
  }, [propertyId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Basic front-end validation example (email + required)
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("First name, last name and email are required.");
      setLoading(false);
      return;
    }

    try {
      const payload = { ...formData, propertyId: propertyId || null };
      const res = await axios.post("/api/bookings", payload);
      console.log("Booking response:", res.data);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to submit booking. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Your Booking</h2>

        {propertyId && (
          <div className="mb-4 p-4 border rounded">
            {loadingProperty ? (
              <p>Loading property...</p>
            ) : property ? (
              <div>
                <p className="font-semibold">{property.title}</p>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="font-bold">${property.price} / night</p>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Property summary unavailable</p>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First name" className="px-3 py-2 border rounded" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last name" className="px-3 py-2 border rounded" />
          </div>
          <input name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full px-3 py-2 border rounded" />
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number" className="w-full px-3 py-2 border rounded" />

          <div className="grid grid-cols-2 gap-3">
            <input name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card number" className="px-3 py-2 border rounded" />
            <input name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="MM/YY" className="px-3 py-2 border rounded" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" className="px-3 py-2 border rounded" />
            <input name="billingAddress" value={formData.billingAddress} onChange={handleChange} placeholder="Billing address" className="px-3 py-2 border rounded" />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
            {loading ? "Processing..." : "Confirm & Pay"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">Booking confirmed successfully!</p>}
        </form>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/property/${property.id}`} className="block">
      <div className="border rounded-xl shadow-md p-4 hover:shadow-lg hover:scale-105 transition transform bg-white">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="font-bold">${property.price} / night</p>
      </div>
    </Link>
  );
}
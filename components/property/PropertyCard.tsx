import Link from "next/link";

export default function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/property/${property.id}`} className="block group">
      <div className="card overflow-hidden hover:-translate-y-1 transform transition-all">
        <div className="aspect-video bg-gray-200">
          <img
            src={property.image || "/images/placeholder.jpg"}
            alt={property.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h2>
          <p className="text-sm text-gray-500">{property.location}</p>
          <p className="text-gray-900 font-semibold mt-2">${property.price} / night</p>
        </div>
      </div>
    </Link>
  );
}

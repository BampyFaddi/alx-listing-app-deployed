import Image from "next/image";
import { CardProps } from "../../interfaces";
import Button from "./Button";

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png" // remove 'public/' prefix for Next.js
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center gap-3">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm text-center">{description}</p>

        {/* Reusable Button */}
        <Button label="Book Now" onClick={() => alert(`Booking ${title}`)} />
      </div>
    </div>
  );
}

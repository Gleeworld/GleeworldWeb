import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-gray-500 text-sm font-semibold">{number}</h3>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={buttonLink}
          className="inline-block mt-4 text-orange-500 font-semibold hover:underline"
        >
          {buttonText} ↗
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from "react";

interface ImageWithTextProps {
  title: string;
  text: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
  title,
  text,
  imageUrl,
  imagePosition = "right",
}) => {
  const textOrder = imagePosition === "right" ? "order-first" : "order-last";

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${textOrder}`}>
            <h2 className="text-3xl tracking-tight font-bold poppins-extrabold-italic text-red-700 uppercase tracking-wide">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{text}</p>
          </div>
          <div>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;

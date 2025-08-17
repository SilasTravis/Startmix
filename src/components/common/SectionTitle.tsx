import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl tracking-tight font-bold poppins-extrabold-italic text-red-700 uppercase">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;

import React from "react";

interface CallToActionProps {
  title: string;
  buttonText: string;
  imageUrl: string;
  onActionModal: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  buttonText,
  imageUrl,
  onActionModal,
}) => {
  return (
    <div className="bg-[#373737] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-snug">{title}</h2>
            <button
              onClick={onActionModal}
              className="bg-[#EE3431] hover:bg-red-600 text-white font-bold py-4 px-10 uppercase tracking-wider transition-colors duration-300"
            >
              {buttonText}
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={imageUrl} alt="Product Image" className="max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

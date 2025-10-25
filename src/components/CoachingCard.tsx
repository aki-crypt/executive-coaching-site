import React from 'react';

interface CoachingCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  image?: string;
}

export const CoachingCard: React.FC<CoachingCardProps> = ({
  title,
  description,
  price,
  duration,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brand-primary mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-xs">所要時間</p>
            <p className="text-sm font-medium">{duration}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs">料金</p>
            <p className="text-2xl font-bold text-brand-accent">¥{price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

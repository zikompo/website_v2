"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Star, X } from 'lucide-react';

interface BookReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  author: string;
  imageUrl: StaticImageData | string;
  rating: number;
  review: string;
}

const BookReviewModal: React.FC<BookReviewModalProps> = ({ isOpen, onClose, title, author, imageUrl, rating, review }) => {
  if (!isOpen) return null;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={20}
          className={`${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-2xl relative max-h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close review"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex-shrink-0 w-full sm:w-1/3">
            <Image
              src={imageUrl}
              alt={`Cover of ${title}`}
              width={200}
              height={300}
              className="object-contain rounded-md mx-auto"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-1">{title}</h2>
            <p className="text-lg text-gray-600 mb-2 italic">{author}</p>
            <div className="flex items-center mb-4">{renderStars()}</div>
            <p className="text-base text-gray-700">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReviewModal; 
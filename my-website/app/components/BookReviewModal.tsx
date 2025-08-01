"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Star, StarHalf, X } from 'lucide-react';

interface BookReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  author: string;
  imageUrl: StaticImageData | string;
  rating: number; // 1-5 with 0.5 increments
  review: string | string[];
}

const BookReviewModal: React.FC<BookReviewModalProps> = ({ isOpen, onClose, title, author, imageUrl, rating, review }) => {
  if (!isOpen) return null;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(
          <Star
            key={i}
            size={20}
            className="text-yellow-400 fill-yellow-400"
          />
        );
      } else if (i - 0.5 === rating) {
        // Half star
        stars.push(
          <StarHalf
            key={i}
            size={20}
            className="text-yellow-400 fill-yellow-400"
          />
        );
      } else {
        // Empty star
        stars.push(
          <Star
            key={i}
            size={20}
            className="text-muted-foreground/50"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-card rounded-lg shadow-2xl p-6 w-full max-w-2xl relative max-h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
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
            <p className="text-lg text-muted-foreground mb-2 italic">{author}</p>
            <div className="flex items-center mb-4">{renderStars()}</div>
            <div className="text-base text-foreground/80 space-y-4">
              {Array.isArray(review) 
                ? review.map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))
                : (review as string).split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReviewModal; 
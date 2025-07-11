"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Star } from 'lucide-react';
import BookReviewModal from './BookReviewModal';

interface BookReviewCardProps {
  title: string;
  author: string;
  imageUrl: StaticImageData | string;
  rating: number; // 1-5
  review: string | string[];
}

const BookReviewCard: React.FC<BookReviewCardProps> = ({ title, author, imageUrl, rating, review }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={20}
          className={`${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'} transition-colors`}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div
        className="bg-card rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={imageUrl}
              alt={`Cover of ${title}`}
              width={100}
              height={150}
              className="object-cover rounded-md w-24 h-36"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2 italic">{author}</p>
            <div className="flex items-center">{renderStars()}</div>
          </div>
        </div>
      </div>
      <BookReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        author={author}
        imageUrl={imageUrl}
        rating={rating}
        review={review}
      />
    </>
  );
};

export default BookReviewCard; 
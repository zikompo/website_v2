"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Star, StarHalf } from "lucide-react";
import BookReviewModal from "./BookReviewModal";

interface BookReviewCardProps {
  title: string;
  author: string;
  imageUrl: StaticImageData | string;
  rating: number; // 1-5 with 0.5 increments
  review: string | string[];
}

const BookReviewCard: React.FC<BookReviewCardProps> = ({
  title,
  author,
  imageUrl,
  rating,
  review,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(
          <Star
            key={i}
            size={18}
            className="text-yellow-400 fill-yellow-400"
          />,
        );
      } else if (i - 0.5 === rating) {
        // Half star
        stars.push(
          <StarHalf
            key={i}
            size={18}
            className="text-yellow-400 fill-yellow-400"
          />,
        );
      } else {
        // Empty star
        stars.push(<Star key={i} size={18} className="text-white/50" />);
      }
    }
    return stars;
  };

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image container with hover overlay */}
        <div className="relative overflow-hidden rounded-sm transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-copper/10 max-w-[200px] mx-auto md:max-w-none border border-border/30 group-hover:border-copper/30">
          <Image
            src={imageUrl}
            alt={`Cover of ${title}`}
            width={300}
            height={450}
            className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-0.5">{renderStars()}</div>
            <span className="text-background text-xs font-outfit uppercase tracking-[0.15em]">
              Read review
            </span>
          </div>
        </div>

        {/* Title and author below image */}
        <div className="mt-4 text-center">
          <h3 className="font-cormorant text-lg font-medium leading-tight group-hover:text-copper transition-colors">
            {title}
          </h3>
          <p className="font-outfit text-xs text-muted-foreground mt-1">
            {author}
          </p>
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

"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as motion from "motion/react-client";
import Layout from "../components/Layout";
import BookReviewCard from "../components/BookReviewCard";
import AnimatedBulletPoint from "../components/AnimatedBulletPoint";
import {
  currentlyReading,
  bookReviews,
  booksRead2025,
  booksRead2026,
} from "./data";

const ReadingPage = () => {
  const [showBooksRead, setShowBooksRead] = useState(false);
  const [showBooks2025, setShowBooks2025] = useState(false);
  const [showBooks2026, setShowBooks2026] = useState(false);
  const [showCurrentlyReading, setShowCurrentlyReading] = useState(false);

  const listVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      x: 4,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen text-[23px]">
      <Layout>
        <div className="space-y-6 py-16">
          <h1 className="text-4xl font-bold font-sans text-center">
            Reading List
          </h1>

          {/* Currently Reading Section */}
          <div className="">
            <button
              onClick={() => setShowCurrentlyReading(!showCurrentlyReading)}
              className="flex items-center gap-2 text-xl font-semibold hover:opacity-70 transition-opacity"
            >
              <span>Currently Reading (1)</span>
              {showCurrentlyReading ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            <motion.div
              initial="hidden"
              animate={showCurrentlyReading ? "visible" : "exit"}
              variants={listVariants}
              style={{ overflow: "hidden" }}
            >
              <div className="space-y-4">
                <div className="space-y-2 text-xl pl-4">
                  <AnimatedBulletPoint>
                    <i>{currentlyReading.title}</i>
                    <span className="ml-1"> by {currentlyReading.author}</span>
                  </AnimatedBulletPoint>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Books I've Read Section */}
          <div className="">
            <button
              onClick={() => setShowBooksRead(!showBooksRead)}
              className="flex items-center gap-2 text-xl font-semibold hover:opacity-70 transition-opacity"
            >
              <span>
                Books I&apos;ve Read (
                {booksRead2025.length + booksRead2026.length})
              </span>
              {showBooksRead ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            <motion.div
              initial="hidden"
              animate={showBooksRead ? "visible" : "exit"}
              variants={listVariants}
              style={{ overflow: "hidden" }}
            >
              <div className="space-y-4 pl-4">
                {/* 2026 Sub-dropdown */}
                <div>
                  <button
                    onClick={() => setShowBooks2026(!showBooks2026)}
                    className="flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                  >
                    <span>2026 ({booksRead2026.length})</span>
                    {showBooks2026 ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  <motion.div
                    initial="hidden"
                    animate={showBooks2026 ? "visible" : "exit"}
                    variants={listVariants}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="space-y-2 text-xl pl-4">
                      {booksRead2026.map((book, index) => {
                        const [title, author] = book.includes(" by ")
                          ? book.split(" by ")
                          : [book, ""];
                        return (
                          <AnimatedBulletPoint key={index}>
                            <i>{title}</i>
                            {author && (
                              <span className="ml-1"> by {author}</span>
                            )}
                          </AnimatedBulletPoint>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                {/* 2025 Sub-dropdown */}
                <div>
                  <button
                    onClick={() => setShowBooks2025(!showBooks2025)}
                    className="flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                  >
                    <span>2025 ({booksRead2025.length})</span>
                    {showBooks2025 ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  <motion.div
                    initial="hidden"
                    animate={showBooks2025 ? "visible" : "exit"}
                    variants={listVariants}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="space-y-2 text-xl pl-4">
                      {booksRead2025.map((book, index) => {
                        const [title, author] = book.includes(" by ")
                          ? book.split(" by ")
                          : [book, ""];
                        return (
                          <AnimatedBulletPoint key={index}>
                            <i>{title}</i>
                            {author && (
                              <span className="ml-1"> by {author}</span>
                            )}
                          </AnimatedBulletPoint>
                        );
                      })}
                    </div>

                    <motion.div
                      className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-lg"
                      variants={listItemVariants}
                    >
                      <p className="italic">
                        <strong className="text-red-600 dark:text-red-400">
                          Note:
                        </strong>{" "}
                        Not all books will receive detailed reviews as I created
                        this website recently and read some of these books a
                        while ago. I may not be able to provide reviews that
                        accurately reflect what I actually thought of the book
                        at the time of reading.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Book Reviews Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-sans">Book Reviews</h2>
            <p className="text-center text-muted-foreground text-sm mb-4 md:hidden">
              Tap on a book to see the review
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookReviews.map((book, index) => (
                <BookReviewCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  imageUrl={book.imageUrl}
                  rating={book.rating}
                  review={book.review}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ReadingPage;

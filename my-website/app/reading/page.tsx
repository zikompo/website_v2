"use client";
import React from "react";
import Layout from "../components/Layout";
import BookReviewCard from "../components/BookReviewCard";

const readingList = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        imageUrl: "https://books.google.ca/books/publisher/content?id=lFhbDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U343F3-6_1z8woFuaecKQaXganiQw&w=1280",
        rating: 5,
        review: "A highly practical and useful book. It's a great framework for thinking about self-improvement and has changed the way I approach my daily routines."
    },
    {
        title: "The Almanack of Naval Ravikant",
        author: "Eric Jorgenson",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQk8ar0Hp_wmhGD7ictirCjY-biMk7j_jTatI2rFgXnLxcZMLji",
        rating: 5,
        review: "A collection of Naval's wisdom, distilled from his tweets and interviews. It covers wealth, happiness, and philosophy. A book I'll be re-reading for years to come."
    },
    {
        title: "Shoe Dog",
        author: "Phil Knight",
        imageUrl: "https://books.google.ca/books/publisher/content?id=wO3PCgAAQBAJ&pg=PA1924&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1zYn2SaGBdZXUYz0AiKXHUTZ8cJw&w=1280",
        rating: 4,
        review: "A fascinating memoir about the early days of Nike. It's an honest and inspiring story about entrepreneurship, perseverance, and the power of a crazy idea."
    }
];

const ReadingPage = () => {
    return (
        <div
            className="flex flex-col min-h-screen font-crimson-pro text-[23px]">
            <Layout>
                <div className="space-y-8 py-16">
                    <h1 className="text-4xl font-bold font-grotesk">Reading List</h1>
                    <p className="text-xl">
                        A collection of books I've enjoyed, along with my thoughts on them. Click on a card to read the review.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {readingList.map((book, index) => (
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
            </Layout>
        </div>
    );
};

export default ReadingPage; 
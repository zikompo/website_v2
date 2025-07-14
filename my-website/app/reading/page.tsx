"use client";
import React from "react";
import Layout from "../components/Layout";
import BookReviewCard from "../components/BookReviewCard";

const ReadingPage = () => {
    const bookReviews = [
        {
            title: "Thinking in Bets",
            author: "Annie Duke",
            imageUrl: "https://m.media-amazon.com/images/I/71WOIOz0ihL._SY522_.jpg",
            rating: 4,
            review: [
                "It is a good book for someone who wants to learn about decision making and how to make better decisions.",
                "I got into it because I recently started playing poker and wanted to understand the psychology behind making decisions when you have incomplete information.",
                "It's more of a theoretical book, but it's still a good read in my opinion.",
            ]
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            imageUrl: "https://images.renaud-bray.com/images/PG/3440/3440245-gf.jpg",
            rating: 4,
            review: [
                "Great book for someone wanting to understand the emotional and psychological factors that drive our financial decisions. Talks a lot about how our upbringing and experiences shape the way we think about money.",
                "Has a lot of good anecdotes that make the book engaging, and it's an easy read.",
                "In a practical sense, Morgan Housel talks about how he approaches saving/investing, but it's not a how-to-book. I saw it more as an insightful book."
            ]
        },
        {
            title: "Man's Search for Meaning",
            author: "Viktor Frankl",
            imageUrl: "https://m.media-amazon.com/images/I/612eTMIpONS._SY522_.jpg",
            rating: 4.5,
            review: [
                "Great book. It was very touching, and there were multiple moments where I had to pause and reflect to try and imagine goint through the inhumane conditions that the author and others in the concentration camps had to endure.",
                "The book is about Viktor Frankl's experiences in the concentration camps, and how he found meaning in his life despite the horrors he endured. He also goes into detail about methods of finding meaning to one's life.",
                "Potentially one of the best books I've read this year."
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-crimson-pro text-[23px]">
            <Layout>
                <div className="space-y-12 py-16">
                    <h1 className="text-4xl font-bold font-grotesk text-center">Reading List</h1>

                    {/* Currently Reading Section */}
                    <div className="space-y-6">
                        <p className="text-xl">
                            I&apos;m currently reading the following books:
                        </p>
                        <div className="pt-4 text-xl">
                            <ul className="list-disc list-inside space-y-4">
                                <li><i>Man&apos;s Search for Meaning</i><span className="ml-1"> by Viktor Frankl</span></li>
                                <li><i>The 4-Hour Workweek</i><span className="ml-1"> by Tim Ferriss</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Book Reviews Section */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-grotesk">Book Reviews</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
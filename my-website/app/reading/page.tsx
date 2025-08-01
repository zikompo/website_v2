"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as motion from "motion/react-client";
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
                "Great book. It was very touching, and there were multiple moments where I had to pause and reflect to try and imagine going through the inhumane conditions that the author and others in the concentration camps had to endure.",
                "The book is about Viktor Frankl's experiences in the concentration camps during WW2 and how he found meaning in his life despite the horrors he endured. He also details methods for finding purpose, such as suffering with dignity.",
                "Potentially one of the best books I've read this year."
            ]
        }
    ];

    const [showBooksRead, setShowBooksRead] = useState(false);
    const [showCurrentlyReading, setShowCurrentlyReading] = useState(false);

    const booksReadThisYear = [
        "Ego is the Enemy by Ryan Holiday",
        "Discipline is Destiny by Ryan Holiday", 
        "Make it Stick by Peter C. Brown, Henry L. Roediger III, and Mark A. McDaniel",
        "Psychology of Money by Morgan Housel",
        "Can't Hurt Me by David Goggins",
        "Hidden Potential by Adam Grant",
        "How to Become a Straight-A Student by Cal Newport",
        "Deep Work by Cal Newport",
        "How to Love Someone Without Losing Your Mind by Todd Baratz",
        "The Almanack of Naval Ravikant by Eric Jorgenson",
        "What I Talk About When I Talk About Running by Haruki Murakami",
        "Obliquity by John Kay",
        "Thinking in Bets by Annie Duke",
        "Man's Search for Meaning by Viktor Frankl",
    ];

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
            transition: { duration: 0.3 } 
        },
        hover: { 
            x: 4, 
            transition: { duration: 0.2 } 
        },
    };

    return (
        <div className="flex flex-col min-h-screen font-crimson-pro text-[23px]">
            <Layout>
                <div className="space-y-6 py-16">
                    <h1 className="text-4xl font-bold font-grotesk text-center">Reading List</h1>

                    {/* Currently Reading Section */}
                    <div className="">
                        <button
                            onClick={() => setShowCurrentlyReading(!showCurrentlyReading)}
                            className="flex items-center gap-2 text-xl font-semibold hover:opacity-70 transition-opacity"
                        >
                            <span>Currently Reading (1)</span>
                            {showCurrentlyReading ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        
                        <motion.div
                            initial="hidden"
                            animate={showCurrentlyReading ? "visible" : "exit"}
                            variants={listVariants}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="space-y-4">
                                <div className="space-y-2 text-xl pl-4">
                                    <motion.p 
                                        variants={listItemVariants}
                                        whileHover="hover"
                                    >
                                        ◆ <i>The Count of Monte Cristo</i>
                                        <span className="ml-1"> by Alexandre Dumas</span>
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Books Read This Year Section */}
                    <div className="">
                        <button
                            onClick={() => setShowBooksRead(!showBooksRead)}
                            className="flex items-center gap-2 text-xl font-semibold hover:opacity-70 transition-opacity"
                        >
                            <span>Books I&apos;ve read this year ({booksReadThisYear.length})</span>
                            {showBooksRead ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        
                        <motion.div
                            initial="hidden"
                            animate={showBooksRead ? "visible" : "exit"}
                            variants={listVariants}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="space-y-4">
                                <div className="space-y-2 text-xl pl-4">
                                    {booksReadThisYear.map((book, index) => {
                                        const [title, author] = book.includes(' by ') 
                                            ? book.split(' by ') 
                                            : [book, ''];
                                        return (
                                            <motion.p 
                                                key={index}
                                                variants={listItemVariants}
                                                whileHover="hover"
                                            >
                                                ◆ <i>{title}</i>
                                                {author && <span className="ml-1"> by {author}</span>}
                                            </motion.p>
                                        );
                                    })}
                                </div>
                                
                                <motion.div 
                                    className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-lg"
                                    variants={listItemVariants}
                                >
                                    <p className="italic">
                                        <strong className="text-red-600 dark:text-red-400">Note:</strong> Not all books will receive detailed reviews as I created this website recently and read some of these books a while ago. I may not be able to provide reviews that accurately reflect what I actually thought of the book at the time of reading.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
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
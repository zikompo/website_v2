"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as motion from "motion/react-client";
import Layout from "../components/Layout";
import BookReviewCard from "../components/BookReviewCard";
import AnimatedBulletPoint from "../components/AnimatedBulletPoint";

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
      ],
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      imageUrl: "https://images.renaud-bray.com/images/PG/3440/3440245-gf.jpg",
      rating: 4,
      review: [
        "Great book for someone wanting to understand the emotional and psychological factors that drive our financial decisions. Talks a lot about how our upbringing and experiences shape the way we think about money.",
        "Has a lot of good anecdotes that make the book engaging, and it's an easy read.",
        "In a practical sense, Morgan Housel talks about how he approaches saving/investing, but it's not a how-to-book. I saw it more as an insightful book.",
      ],
    },
    {
      title: "Man's Search for Meaning",
      author: "Viktor Frankl",
      imageUrl: "https://m.media-amazon.com/images/I/612eTMIpONS._SY522_.jpg",
      rating: 4.5,
      review: [
        "Great book. It was very touching, and there were multiple moments where I had to pause and reflect to try and imagine going through the inhumane conditions that the author and others in the concentration camps had to endure.",
        "The book is about Viktor Frankl's experiences in the concentration camps during WW2 and how he found meaning in his life despite the horrors he endured. He also details methods for finding purpose, such as suffering with dignity.",
        "Potentially one of the best books I've read this year.",
      ],
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      imageUrl: "https://m.media-amazon.com/images/I/811iBn28JdL._SY522_.jpg",
      rating: 5,
      review: [
        "This book is THE revenge tale, and probably one of the best books I've ever read.",
        "The story follows Edmond Dantès, a young sailor who is wrongfully imprisoned and seeks revenge on those who betrayed him.",
        "The way he goes about his retribution is both very clever and calculated, and despite being over 1200 pages long, it was a page-turner from start to finish. It has everything you could want in a book: adventure, romance, betrayal, and revenge.",
        "This was my first time reading a fiction book in a long time, and I think I will get back into reading more fiction after this.",
        "Amazing read, and a deserved 5 stars.",
      ],
    },
    {
      title: "Educated",
      author: "Tara Westover",
      imageUrl: "https://m.media-amazon.com/images/I/418dkB1gnxL.jpg",
      rating: 4,
      review: [
        "Was a very interesting read, and rather empowering. This book follows the life of Tara, a woman who grew up in an extremely fundamentalist Mormon household, where she was denied access to education. It details how she gradually educates herself\
                and eventually goes on to earn a PhD from Cambridge University.",
        "The book is well-written and engaging. I got rather angry at some parts, especially when she detailed the abuse she and her siblings endured at the hands of their father/brother, and how her family refused to acknowledge it.\
                I even got more frustrated when she kept going back to her family despite the abuse, but I guess that's the power of family.",
        "It was inspiring overall, seeing someone overcome such adversity to attain such a high level of education. Overall a good read.",
      ],
    },
    {
      title: "Flowers for Algernon",
      author: "Daniel Keyes",
      imageUrl: "https://m.media-amazon.com/images/I/81HntONlwgL._SY522_.jpg",
      rating: 4.5,
      review: [
        "This book was very touching. It follows the story of Charlie, a man who initially suffers from severe mental disabilities, but undergoes a brain surgery that gives him intelligence.",
        "It reminded me of the importance of showing compassion and empathy towards people different from us. It was kind of sad at times to see how Charlie slowly realized that everyone around him didn't actually care about him, and made fun of him just because he was different.",
        "It was also interesting to see how Charlie's intelligence grew over time, and made him less and less relatable, and even at times arrogant.",
        "Seeing his eventual mental decline was very saddening, and it left me in a sort of somber mood for a while after reading it.",
        "I'd recommend this book. It was the first time I've read a fiction book that was written in the form of journal entries, and it surely surpassed my expectations.",
      ],
    },
    {
      title: "A Spy Among Friends",
      author: "Ben Macintyre",
      imageUrl: "https://m.media-amazon.com/images/I/81grRR9GmML._SY522_.jpg",
      rating: 4,
      review: [
        "This book is a non-fiction that tells the story of famed British spy Kim Philby, who was actually a double agent for the Soviet Union. It details his life, his relationships with other spies, and the eventual uncoverning of his betrayal.",
        "It kind of surprised me how Philby was able to maintain his cover for so long, and how his closest friends backed him vehemently despite the mounting evidence against him. It was also kind of crazy how Philby basically undermined Western intelligence operations against the Soviets for two decades.",
        "It gave me new perspective on betrayal, and how people can let their personal relationships get in the way of their professional responsibilities.",
        "It was a good read, and it gave me a new perspective on the Cold War and the role of intelligence agencies in the push to change the ideological landscape of the world.",
      ],
    },
    {
      title: "East of Eden",
      author: "John Steinbeck",
      imageUrl:
        "https://books.google.ca/books/content?id=OPy6E5ZhXs0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71k0nh84AhFIuUDSAb0PScx2MwEVUjQ0NAQ4p3t3hVfmTRMO0sKgOrl0OK_fhZ8llmrH-r_5HMh6DF5C3A-SdriKcyCpRpdzpyEDOJ0aPm6hSUgi0S50Hs-k7EfKG6mx7MnDTvl",
      rating: 5,
      review: [
        "Possibly the best book I've ever read.",
        "This book goes into the lives of two families, the Trasks and the Hamiltons, who lived in California. This book spans a couple of generations, from around the mid-19th century to the early 20th century.",
        "It is essentially a modern American retelling of the biblical story of Cain and Abel, and the themes are rather prevalent throughout the book. Across each generation, you can draw parallels between the events in the story and the story from the Book of Genesis. It also touches on the themes of good and evil, examining whether humans can be inherently good or evil. It asks whether we are doomed to repeat the transgressions of our ancestors, or we can form our own moral paths.",
        'A key word in this whole thing is Timshel, which was interpreted in East of Eden as "Thou mayest" (I understand that this is not the literal translation). In the context of the book, I think Steinbeck was trying to convey the message that humans have free will to choose whether to be good or evil, independent of what their nature may be.',
        "The book was so wonderfully written. John Steinbeck's prose is rather straightforward, but very beautifully written. His characterization was also top notch, and I sort of grew attached to the characters in the book. Lee and Cal are my favourite characters in the book. Lee for his wisdom and charisma. Cal, because he was a flawed person, but he was a joy to follow, and his battles with identity and morality are things I can somewhat relate to.",
        "I also loved following Cathy. She seemed to be evil for the sake of it, but that made her more interesting. I never figured out what her endgame was. Samuel Hamilton is probably my favourite character after Lee and Cal. He was the poster boy for someone following his dreams and passions.",
        "All in all, this book was very enjoyable with a lot of wisdom scattered throughout the book, if you choose to look for it. Easy 5 star, and an easy recommendation for me.",
      ],
    },
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
    "The Count of Monte Cristo by Alexandre Dumas",
    "Educated by Tara Westover",
    "Flowers for Algernon by Daniel Keyes",
    "A Spy Among Friends by Ben Macintyre",
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
      transition: { duration: 0.3 },
    },
    hover: {
      x: 4,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen font-crimson-pro text-[23px]">
      <Layout>
        <div className="space-y-6 py-16">
          <h1 className="text-4xl font-bold font-grotesk text-center">
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
                    <i>Crime and Punishment</i>
                    <span className="ml-1"> by Fyodor Dostoevsky</span>
                  </AnimatedBulletPoint>
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
              <span>
                Books I&apos;ve read this year ({booksReadThisYear.length})
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
              <div className="space-y-4">
                <div className="space-y-2 text-xl pl-4">
                  {booksReadThisYear.map((book, index) => {
                    const [title, author] = book.includes(" by ")
                      ? book.split(" by ")
                      : [book, ""];
                    return (
                      <AnimatedBulletPoint key={index}>
                        <i>{title}</i>
                        {author && <span className="ml-1"> by {author}</span>}
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
                    this website recently and read some of these books a while
                    ago. I may not be able to provide reviews that accurately
                    reflect what I actually thought of the book at the time of
                    reading.
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

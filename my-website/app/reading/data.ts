export interface BookReview {
  title: string;
  author: string;
  imageUrl: string;
  rating: number;
  review: string[];
}

export const currentlyReading = {
  title: "A Peace to End All Peace",
  author: "David Fromkin",
  url: "https://www.amazon.ca/Peace-End-All-Ottoman-Creation/dp/0805088091",
};

export const bookReviews: BookReview[] = [
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
      "Was a very interesting read, and rather empowering. This book follows the life of Tara, a woman who grew up in an extremely fundamentalist Mormon household, where she was denied access to education. It details how she gradually educates herself and eventually goes on to earn a PhD from Cambridge University.",
      "The book is well-written and engaging. I got rather angry at some parts, especially when she detailed the abuse she and her siblings endured at the hands of their father/brother, and how her family refused to acknowledge it. I even got more frustrated when she kept going back to her family despite the abuse, but I guess that's the power of family.",
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
    imageUrl: "https://m.media-amazon.com/images/I/71NAX4mpJHL._SY522_.jpg",
    rating: 5,
    review: [
      "Possibly the best book I've ever read.",
      "This book goes into the lives of two families, the Trasks and the Hamiltons, who lived in California. This book spans a couple of generations, from around the mid-19th century to the early 20th century.",
      "It is essentially a modern American retelling of the biblical story of Cain and Abel, and the themes are rather prevalent throughout the book. Across each generation, you can draw parallels between the events in the story and the story from the Book of Genesis. It also touches on the themes of good and evil, examining whether humans can be inherently good or evil. It asks whether we are doomed to repeat the transgressions of our ancestors, or we can form our own moral paths.",
      'A key word in this whole thing is Timshel, which was interpreted in East of Eden as "Thou mayest" (I understand that this is not the literal translation). In the context of the book, I think Steinbeck was trying to convey the message that humans have free will to choose whether to be good or evil, independent of what their nature may be.',
      "The book was so wonderfully written. John Steinbeck's prose is rather straightforward, but very beautifully written. His characterization was also top notch, and I sort of grew attached to the characters in the book. Lee and Cal are my favourite characters in the book. Lee for his wisdom and charisma. Cal, because he was a flawed person, but he was a joy to follow, and his battles with identity and morality are things I can somewhat relate to.",
      "I also loved following Cathy. She seemed to be evil for the sake of it, but that made her more interesting. I never figured out what her endgame was. Samuel Hamilton is probably my favourite character after Lee and Cal. He was the poster boy for someone following his dreams and passions.",
      "All in all, this book was very enjoyable with a lot of wisdom scattered throughout the book, if you choose to look for it. Easy 5 star, and an easy recommendation from me.",
    ],
  },
  {
    title: "1984",
    author: "George Orwell",
    imageUrl:
      "https://m.media-amazon.com/images/I/51yNeZ+SDOL._SY445_SX342_ControlCacheEqualizer_.jpg",
    rating: 4,
    review: [
      "(Shorter Review because of exams)",
      "It's a good book.",
      "1984 is set in a dystopian, totalitarian province within the superstate of Oceania. Specifically, it's set in London, where its protagonist Winston lives and works under the watchful eye of The Party and its leader, Big Brother.",
      "I found it a bit of a drag at first, but it picked up and got more interesting as the book went on.",
      "I'd say it's pretty relevant today given current events in the world today, and it serves as a cautionary tale of some sorts. It does a good job of portraying a surveillance state, where the past is altered, and even the language is narrowed down to keep people as obedient as possible.",
      "The book is worth reading, IMO.",
    ],
  },
  {
    title: "The Art of Spending Money",
    author: "Morgan Housel",
    imageUrl: "https://m.media-amazon.com/images/I/71Pusl9N1AL._SL1500_.jpg",
    rating: 4.5,
    review: [
      "This book talks a lot about the different social and psychological factors that go into our spending habits, and how we can understand their effects on our financial well-being.",
      "I resonated with a lot of the book, and I will definitely be using a lot of the advice in this book when I start my co-op job, as it will be the first time I have a good amount of disposable income.",
      "The number one thing I took away from the book is that anyone's behavior makes sense with enough information. The person who lost all their money in the 2008/2009 financial crisis may be very conservative with their investments, but the young person who has never had to worry about money may be a lot less risk averse, or even reckless.",
      "The author also had a very interesting way of looking at saving money. He viewed saving money as a payment, the same way you'd pay for clothes, or food. But when you save money, you are paying towards your future independence. So saving $100 dollars today could be seen as giving yourself $100 dollars of freedom tomorrow.",
      "It is also important to not have FOMO, and walk your journey. Easier said than done, but you should have a view of what you want your life to look like, and stay true to it.",
      "I believe this book is a great, practical book for people looking into helping people reshape their relationship with money. The book is also incredibly dense with great quotes and anecdotes, probably the most I've seen in a non-fiction/self-help book. I'll definitely be rereading this book in the future.",
      "The only reason this book didn't get a 5 star rating is because there were quite a few parts of the book that seemed to be from the Psychology of Money, which is a similar book by the same author. I did enjoy it better than the former book though.",
      "If you've read Psychology of Money by the same author, you'll like this book as well. If you haven't, just read this book instead.",
    ],
  },
];

export const booksRead2025: string[] = [
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
  "East of Eden by John Steinbeck",
  "1984 by George Orwell",
];

export const booksRead2026: string[] = [
  "The Art of Spending Money by Morgan Housel",
];

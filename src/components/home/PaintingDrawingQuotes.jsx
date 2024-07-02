import { useState } from "react";

const PaintingDrawingQuotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "Every artist was first an amateur. - Ralph Waldo Emerson",
      image:
        "https://cdn.britannica.com/56/65056-050-9E0FABF2/Ralph-Waldo-Emerson-1860.jpg",
      author: "Ralph Waldo Emerson",
      profession: "Essayist, Poet",
      year: "1803 - 1882",
    },
    {
      text: "Drawing is the honesty of the art. There is no possibility of cheating. It is either good or bad. - Salvador Dalí",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/salvador-dali-gettyimages-2695565.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      author: "Salvador Dalí",
      profession: "Painter, Sculptor",
      year: "1904 - 1989",
    },
    {
      text: "Art is the lie that enables us to realize the truth. - Pablo Picasso",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/640px-Pablo_picasso_1.jpg",
      author: "Pablo Picasso",
      profession: "Painter, Sculptor",
      year: "1881 - 1973",
    },
    {
      text: "I am seeking. I am striving. I am in it with all my heart. - Vincent van Gogh",
      image:
        "https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg",
      author: "Vincent van Gogh",
      profession: "Painter",
      year: "1853 - 1890",
    },
    {
      text: "Art is the only way to run away without leaving home. - Twyla Tharp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Twyla_Tharp.jpg",
      author: "Twyla Tharp",
      profession: "Choreographer, Author",
      year: "1941 - Present",
    },
  ];

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrevQuote = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  return (
    <div className="painting-drawing-quotes mb-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold my-10">Painting and Drawing Quotes</h2>
      <div className="quote bg-gray-100 p-4 max-w-[700px] rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold">
          {quotes[currentQuoteIndex].text}
        </p>
        <img
          src={quotes[currentQuoteIndex].image}
          alt="Related Artwork"
          className="mt-4 rounded-lg mx-auto h-[200px]"
        />
        <p className="mt-4">
          - {quotes[currentQuoteIndex].author},{" "}
          {quotes[currentQuoteIndex].profession},{" "}
          {quotes[currentQuoteIndex].year}
        </p>
      </div>
      <div className="controls mt-4">
        <button
          onClick={handlePrevQuote}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={handleNextQuote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaintingDrawingQuotes;

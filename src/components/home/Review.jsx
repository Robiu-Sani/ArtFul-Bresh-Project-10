import image from "../../images/1.png";
export default function Review() {
  return (
    <div className="container mt-10 mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Discover the World of Painting and Drawing
        </h2>
        <p className="text-lg mb-8">
          Explore the magic of colors, strokes, and creativity with our painting
          and drawing website. Dive into a world where imagination knows no
          bounds.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={`${image}`}
            alt="Painting and Drawing Logo"
            className="w-32 h-32"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Inspiring Tutorials
            </h3>
            <p className="text-white">
              Unlock your creativity with our step-by-step tutorials crafted by
              experts. From beginner basics to advanced techniques, there is
              something for everyone.
            </p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Vibrant Community
            </h3>
            <p className="text-white">
              Join a vibrant community of artists from around the globe. Share
              your work, get feedback, and connect with fellow enthusiasts
              passionate about painting and drawing.
            </p>
          </div>
          <div className="bg-purple-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Interactive Workshops
            </h3>
            <p className="text-white">
              Participate in live workshops and demonstrations. Interact with
              artists in real-time, ask questions, and learn new techniques to
              elevate your skills.
            </p>
          </div>
          <div className="bg-orange-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Gallery Showcase
            </h3>
            <p className="text-white">
              Get inspired by browsing through our curated gallery showcasing
              stunning artworks from our talented community members. Discover
              new styles and trends.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

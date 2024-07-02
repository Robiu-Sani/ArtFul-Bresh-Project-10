import { FaPaintBrush } from "react-icons/fa";
import { AiOutlineSketch } from "react-icons/ai";
import { GiWaterSplash } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { BsBrush } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

const ArtAndCraftCategory = () => {
  return (
    <section className="mt-8 mb-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        We Provide
      </h2>
      <p className="text-sm text-center mb-10 text-gray-600">
        Explore various artistic mediums and techniques in painting and drawing.
      </p>
      <div className="grid grid-cols-1 container mx-auto p-2 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <FaPaintBrush className="text-3xl mb-4 mx-auto text-gray-600" />
            <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
              Landscape Painting
            </h3>
            <p className="text-sm text-center text-gray-500">
              Mountain view canvas, Forest based Landscape painting
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <AiOutlineSketch className="text-3xl mb-4 mx-auto text-gray-600" />
            <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
              Portrait Drawing
            </h3>
            <p className="text-sm text-center text-gray-500">
              Pencil Sketch Portrait, Ink Outline Portrait, Acrylic Portrait
              Canvas
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <GiWaterSplash className="text-3xl mb-4 mx-auto text-gray-600" />
            <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
              Watercolour Painting
            </h3>
            <p className="text-sm text-center text-gray-500">
              Floral Watercolor Art, Animal Watercolor Portrait
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <IoMdColorPalette className="text-3xl mb-4 mx-auto text-gray-600" />
            <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
              Oil Painting
            </h3>
            <p className="text-sm text-center text-gray-500">
              Realistic Oil Portrait, Abstract Oil Painting
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <BsBrush className="text-3xl mb-4 mx-auto text-gray-600" />
            <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
              Charcoal Sketching
            </h3>
            <p className="text-sm text-center text-gray-500">
              Figure Charcoal Sketch, Architectural Charcoal Drawing
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4">
            <GiArtificialIntelligence className="text-3xl mb-4 mx-auto text-gray-600" />
            <h3 className="text-lg font-medium text-center text-gray-900 mb-2">
              Cartoon Drawing
            </h3>
            <p className="text-sm text-center text-gray-500">
              Comic Strip Drawing, Superhero Cartoon Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtAndCraftCategory;

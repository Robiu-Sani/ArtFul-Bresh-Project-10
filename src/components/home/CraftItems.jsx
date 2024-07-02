import { Link } from "react-router-dom";
import ChellangeCard from "./ChellangeCard";

export default function CraftItems({ craftes }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl max-w-4xl mx-auto font-bold mb-8">
          Craft Items
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto">
          Art craft is the embodiment of creativity and skill, intertwining
          tradition with innovation to produce objects of beauty and
          functionality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {craftes.slice(0, 6).map((crafte) => (
            <ChellangeCard key={crafte._id} craft={crafte}></ChellangeCard>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to={`/carftItem`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

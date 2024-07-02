import { useContext } from "react";
import image from "../../images/5.jpg";
import { MyContext } from "../../context/Context";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CraftCard from "./CraftCard";

export default function CardByCatogery() {
  const { loader, filterCatogery } = useContext(MyContext);
  const AllCrafts = useLoaderData();
  const getCraft = AllCrafts.filter(
    (data) => data.category_Name == filterCatogery
  );

  if (loader) {
    return (
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Artful Brush | {filterCatogery}</title>
      </Helmet>
      <div
        className="w-full h-[500px] flex justify-center items-center flex-col gap-8 fontstyle animate__animated animate__fadeInDown customBg "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
        }}
      >
        <h1 className="text-6xl text-center text-white font-bold my-5">
          Artistic Delights: Exploring the World of Drawing
        </h1>
        <p className="text-center text-xl mb-4 text-white">
          Dive into the captivating realm of drawing, where creativity knows no
          bounds. Unleash your imagination with pencils, pens, and colors to
          bring your visions to life.
        </p>
      </div>

      <div className="container mx-auto mt-10 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {getCraft.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
    </div>
  );
}

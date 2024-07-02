import { useContext, useState } from "react";
import image from "../../images/7.jpg";
import { MyContext } from "../../context/Context";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";
import { Helmet } from "react-helmet-async";

export default function MyCraftList() {
  const { getUser, loader } = useContext(MyContext);
  const AllCrafts = useLoaderData();
  const Crafts = AllCrafts.filter(
    (allCraft) =>
      allCraft.user_name == getUser.displayName ||
      allCraft.user_email == getUser.email
  );
  const [MyCrafts, setMyCrafts] = useState(Crafts);
  const customization = Crafts.map((data) => data.customization);
  const uniquecustomization = [...new Set(customization)];

  if (loader) {
    return (
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const CurrentData = (data) => {
    setMyCrafts(Crafts.filter((Craft) => Craft._id !== data));
  };

  const handleclick = (e) => {
    setMyCrafts(Crafts.filter((value) => value.customization == e));
  };

  const handleAll = () => {
    setMyCrafts(Crafts);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Artful Brush | My craft List </title>
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

      <div className="w-full mx-auto flex justify-center items-center mt-10">
        <details className="dropdown">
          <summary className="m-1 w-52 bg-gray-300 text-center btn">
            find by custmizetion
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {uniquecustomization.map((e, idx) => (
              <li
                onClick={() => handleclick(e)}
                className="btn text-center mb-2"
                key={idx}
              >
                customize by = {e}
              </li>
            ))}
            <li onClick={handleAll} className="btn text-center">
              All
            </li>
          </ul>
        </details>
      </div>

      <div className="container mt-10 mx-auto p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {MyCrafts.map((MyCraft) => (
            <MyCraftCard
              key={MyCraft._id}
              CurrentData={CurrentData}
              craft={MyCraft}
            ></MyCraftCard>
          ))}
        </div>
      </div>
    </div>
  );
}

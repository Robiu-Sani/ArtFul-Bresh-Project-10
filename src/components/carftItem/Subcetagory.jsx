import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useState } from "react";
import img from "../../images/5.jpg";

export default function Subcetagory() {
  const allDatas = useLoaderData();
  const [crafts, setCrafts] = useState(allDatas);
  const subCetagory = allDatas.map((data) => data.subcategory_Name);
  //   const category = allDatas.map((data) => data.category_Name);
  const uniqueSubcetogery = [...new Set(subCetagory)];
  //   const uniquecategory = [...new Set(category)];
  //   console.log(uniqueSubcetogery.length, uniquecategory.length);

  const handleAll = () => {
    setCrafts(allDatas);
  };
  const handleSubClick = (e) => {
    setCrafts(allDatas.filter((data) => data.subcategory_Name == e));
  };
  return (
    <div>
      <div
        className="container mt-5 animate__animated animate__fadeInDown mx-auto h-[300px] rounded-md flex justify-center items-center bgImg"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${img})`,
        }}
      >
        <h2 className="text-6xl text-center text-white font-bold my-5">
          You can find Your Choies By Sub Cetagory
        </h2>
      </div>
      <div className="container mx-auto">
        <button
          onClick={handleAll}
          className="p-2 px-4 rounded-md bg-gray-200 m-2"
        >
          All
        </button>
        {uniqueSubcetogery.map((e, idx) => (
          <button
            onClick={() => handleSubClick(e)}
            className="p-2 rounded-md bg-gray-200 m-2"
            key={idx}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="container mx-auto p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
    </div>
  );
}

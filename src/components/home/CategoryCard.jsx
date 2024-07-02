import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
export default function CategoryCard({ craftes }) {
  const { item_image_url, category_Name, short_title, item_rating } = craftes;
  const { getCategoryName } = useContext(MyContext);

  const navigate = useNavigate();

  const andleNabigate = (data) => {
    navigate("/CardByCatogery");
    getCategoryName(data);
  };

  return (
    <div
      onClick={() => andleNabigate(category_Name)}
      className="max-w-xs cursor-pointer rounded overflow-hidden shadow-lg"
    >
      <img
        className="min-w-full h-[200px]"
        src={item_image_url}
        alt={short_title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl h-[60px] mb-2">
          Sub Category : {category_Name}
        </div>
        <div className="h-[40px]">{short_title}</div>
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="text-gray-700">{item_rating}</span>
        </div>
      </div>
    </div>
  );
}

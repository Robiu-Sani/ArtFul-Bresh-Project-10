import { Link } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import { GiVibratingShield } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ChellangeCard({ craft }) {
  const navigate = useNavigate();

  const {
    _id,
    item_image_url,
    item_name,
    item_prise,
    item_rating,
    category_Name,
    user_name,
    user_email,
    user_image,
  } = craft;

  const dandleSubCato = () => {
    navigate("/Subcetagory");
  };

  return (
    <div
      onClick={dandleSubCato}
      data-aos="fade-up"
      className="w-full rounded-md card shadow-xl overflow-hidden pb-[66px]"
    >
      <div className="w-full h-[250px]">
        <img
          src={item_image_url}
          alt="this is item image"
          className="h-full mx-auto"
        />
      </div>
      <div className="w-full p-3">
        <p className="text-xl font-bold ">Item Name : {item_name}</p>
        <p className="flex justify-start mt-2 items-center gap-3">
          <ImPriceTags /> Price : {item_prise} $
        </p>
        <p className="flex justify-start mt-2 items-center gap-3">
          <GiVibratingShield />
          Rating : {item_rating}
        </p>
        <p className="flex justify-start mt-2 items-center gap-3">
          <BiCategoryAlt /> Category : {category_Name}
        </p>
      </div>
      <hr />
      <div className="w-full p-3 flex gap-3">
        <div className="h-full">
          {user_image ? (
            <img src={user_image} alt="" className="w-10 h-10 rounded-full" />
          ) : (
            <FaUserCircle className="text-4xl" />
          )}
        </div>
        <div className="flex flex-col justify-between">
          <small>Name : {user_name ? user_name : "Not Found"}</small>
          <small>Email : {user_email ? user_email : "Not Found"}</small>
        </div>
      </div>
      <hr />
      <div className="absolute bottom-0 w-full py-2 px-5">
        <Link
          className="btn text-white w-1/2"
          style={{
            background:
              "linear-gradient(45deg, rgba(50, 105, 50, 0.5), rgba(34, 239, 34, 0.7))",
          }}
          to={`/details/${_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

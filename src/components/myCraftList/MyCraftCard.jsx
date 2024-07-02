import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyCraftCard = ({ craft, CurrentData }) => {
  const {
    _id,
    item_image_url,
    item_name,
    item_prise,
    item_rating,
    customization,
    stock_status,
  } = craft;
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleDeleteCard = (id) => {
    fetch(`https://server-10-taupe.vercel.app/addCraft/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          CurrentData(id);
          setShowConfirmation(false);
          toast("successfully deleted");
        }
      });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <ToastContainer />
      <img
        src={item_image_url}
        alt={item_name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{item_name}</h2>
        <div className="flex items-center mt-2">
          <p className="text-gray-700">Price : {item_prise}</p>
          <div className="flex ml-auto">
            <svg
              className={`h-6 w-6 fill-current text-yellow-500 `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2M12 5.25L9.5 8.25L9.91 12.25L12 10.62L14.09 12.25L14.5 8.25L12 5.25Z" />
            </svg>
            <p className="text-gray-700">{item_rating}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-gray-700">Customization : {customization}</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-700">Stock status : {stock_status}</p>
        </div>
        <div className="flex w-full gap-3 mt-4">
          <Link
            to={`/details/${_id}`}
            className="bg-blue-500 hover:bg-blue-700 w-1/3 text-center text-white font-bold py-2 px-4 mr-2 rounded"
          >
            Details
          </Link>
          <Link
            to={`/update/${_id}`}
            className="bg-blue-500 hover:bg-blue-700 w-1/3 text-center text-white font-bold py-2 px-4 mr-2 rounded"
          >
            Update
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-700 w-1/3 text-center text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleDelete}
          >
            <AiOutlineDelete className="inline-block mr-2" />
            Delete
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">
              Are you sure you want to delete?
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  handleDeleteCard(_id);
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
              >
                Yes
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCraftCard;

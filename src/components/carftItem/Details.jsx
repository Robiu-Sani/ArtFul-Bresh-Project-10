import { useLoaderData } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { MyContext } from "../../context/Context";

export default function Details() {
  const detailsData = useLoaderData();
  const {
    item_image_url,
    item_name,
    item_prise,
    item_rating,
    category_Name,
    user_name,
    user_email,
    user_image,
    subcategory_Name,
    stock_status,
    short_title,
    short_description,
    processing_time,
    customization,
  } = detailsData;
  const { loader } = useContext(MyContext);

  if (loader) {
    return (
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-5 relative p-2">
      <Helmet>
        <title>Artful Brush | details</title>
      </Helmet>
      <div className="w-full mb-5 h-auto sm:h-[500px] rounded-md flex justify-center items-center">
        <img
          src={item_image_url}
          alt=""
          className="h-auto sm:h-full w-full sm:w-auto"
        />
      </div>
      <div className="w-full p-0 sm:px-8 mb-8">
        <h2 className="text-3xl font-bold my-2">Item Name : {item_name}</h2>
        <h3 className="text-xl my-2">Sub Category : {category_Name}</h3>
        <h3 className="text-xl my-2">Whish for : {subcategory_Name}</h3>
        <h3 className="text-xl my-2">Item Title : {short_title}</h3>
        <p className="p-2 mb-5">
          <span className="font-bold">Description :</span> {short_description}
        </p>
      </div>
      <div className="overflow-x-auto w-full mb-5">
        <table className="table table-zebra">
          <tbody>
            <tr className="w-full flex justify-around items-center">
              <th>Name </th>
              <th>Value</th>
            </tr>
            <tr className="w-full flex justify-around items-center">
              <td>Price </td>
              <td>{item_prise}$</td>
            </tr>
            <tr className="w-full flex justify-around items-center">
              <td>Rating </td>
              <td>{item_rating}</td>
            </tr>
            <tr className="w-full flex justify-around items-center">
              <td>Stock Status </td>
              <td>{stock_status}</td>
            </tr>
            <tr className="w-full flex justify-around items-center">
              <td>Customization </td>
              <td>{customization}</td>
            </tr>
            <tr className="w-full flex justify-around items-center">
              <td>processing Time </td>
              <td>{processing_time}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full col-span-1 p-3 flex gap-3">
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
      </div>
    </div>
  );
}

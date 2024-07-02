import { useContext, useState } from "react";
import image from "../../images/1.jpg";
import { MyContext } from "../../context/Context";
import { useLoaderData } from "react-router-dom"; // useNavigate
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function UpdateCraft() {
  const { getUser, loader } = useContext(MyContext);
  const [customization, setCustomization] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const loadData = useLoaderData();
  const [data, setData] = useState(loadData);
  // const navigate = useNavigate();

  if (loader) {
    return (
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      user_name: getUser.displayName,
      user_image: getUser.photoURL,
      user_email: getUser.email,
      item_name: form.item_name.value ? form.item_name.value : data.item_name,
      category_Name: form.category_Name.value
        ? form.category_Name.value
        : data.category_Name,
      subcategory_Name: form.subcategory_Name.value
        ? form.subcategory_Name.value
        : data.subcategory_Name,
      short_title: form.short_title.value
        ? form.short_title.value
        : data.short_title,
      item_image_url: form.item_image_url.value
        ? form.item_image_url.value
        : data.item_image_url,
      item_prise: form.item_prise.value
        ? form.item_prise.value
        : data.item_prise,
      item_rating: form.item_rating.value
        ? form.item_rating.value
        : data.item_rating,
      processing_time: form.processing_time.value
        ? form.processing_time.value
        : data.processing_time,
      short_description: form.short_description.value
        ? form.short_description.value
        : data.short_description,
      customization: customization ? customization : data.customization,
      stock_status: stockStatus ? stockStatus : data.stock_status,
    };
    console.log(formData);

    fetch(`https://server-10-taupe.vercel.app/addCraft/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setData(formData);
    form.reset();
    toast("This Craft updated successfully");
    // navigate("/myCraftList");
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center py-5 sm:py-10 px-2 animate__animated animate__fadeInDown customBg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      }}
    >
      <Helmet>
        <title>Artful Brush | Update Craft item</title>
      </Helmet>
      <ToastContainer />
      <div className="formbg p-5 sm:p-10 rounded-md w-full md:max-w-[1000px]">
        <div className="mx-auto p-5 mb-3 fontstyle">
          <h1 className="text-white text-center text-3xl">
            Update Craft Item{" "}
          </h1>
          <p className="text-center text-gray-300">
            Update craft: Name, Description, Category, Image, Price,
            Availability. Submit to share your creation!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-1 sm:grid-cols-2 gap-7"
        >
          <label className="text-white">
            Item Name:
            <input
              type="text"
              className="w-full  text-black input"
              name="item_name"
              placeholder={`${data.item_name}`}
            />
          </label>
          <label className="text-white">
            Sub Category Name:
            <input
              type="text"
              className="w-full text-black input"
              name="category_Name"
              placeholder={`${data.category_Name}`}
            />
          </label>
          <label className="text-white">
            Add Sumethisg As You Want:
            <input
              type="text"
              className="w-full text-black input"
              name="subcategory_Name"
              placeholder={`${data.subcategory_Name}`}
            />
          </label>
          <label className="text-white">
            Short Title:
            <input
              type="text"
              className="w-full text-black input"
              name="short_title"
              placeholder={`${data.short_title}`}
            />
          </label>
          <label className="text-white">
            Item Image URL:
            <input
              type="text"
              className="w-full text-black input"
              name="item_image_url"
              placeholder={`${data.item_image_url}`}
            />
          </label>
          <label className="text-white">
            Item Price:
            <input
              type="text"
              className="w-full text-black input"
              name="item_prise"
              placeholder={`${data.item_prise}`}
            />
          </label>
          <label className="text-white">
            Item Rating:
            <input
              type="text"
              className="w-full text-black input"
              name="item_rating"
              placeholder={`${data.item_rating}`}
            />
          </label>
          <label className="text-white">
            Processing Time:
            <input
              type="text"
              className="w-full text-black input"
              name="processing_time"
              placeholder={`${data.processing_time}`}
            />
          </label>
          <label className="text-white">
            Customization:
            <select
              className="select select-bordered text-black w-full"
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
            >
              <option disabled value="">
                {data.customization}
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label className="text-white">
            Stock Status:
            <select
              className="select select-bordered w-full text-black"
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
            >
              <option disabled value="">
                {data.stock_status}
              </option>
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </label>
          <label className="text-white col-span-1 sm:col-span-2">
            Description:
            <textarea
              name="short_description"
              className="w-full h-[100px] text-black input"
              placeholder={`${data.short_description}`}
            ></textarea>
          </label>
          <input
            type="submit"
            value={`Update Data`}
            className="text-white bg-blue-500 font-bold col-span-1 sm:col-span-2 input w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

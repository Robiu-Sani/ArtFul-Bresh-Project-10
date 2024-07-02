import { useContext, useState } from "react";
import image from "../../images/1.jpg";
import { MyContext } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function AddCarftItem() {
  const { getUser } = useContext(MyContext);
  const [customization, setCustomization] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      user_name: getUser.displayName,
      user_image: getUser.photoURL,
      user_email: getUser.email,
      item_name: form.item_name.value,
      category_Name: form.category_Name.value,
      subcategory_Name: form.subcategory_Name.value,
      short_title: form.short_title.value,
      item_image_url: form.item_image_url.value,
      item_prise: form.item_prise.value,
      item_rating: form.item_rating.value,
      processing_time: form.processing_time.value,
      short_description: form.short_description.value,
      customization: customization,
      stock_status: stockStatus,
    };
    console.log(formData);

    fetch("https://server-10-taupe.vercel.app/addCraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          setCustomization("");
          setStockStatus("");
          toast("successfully deleted");
        } else {
          toast.error("some thing is worng here");
        }
      });
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center py-5 sm:py-10 px-2 animate__animated animate__fadeInDown customBg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      }}
    >
      <Helmet>
        <title>Artful Brush | Add Craft Item </title>
      </Helmet>
      <ToastContainer />
      <div className="formbg p-5 sm:p-10 rounded-md w-full md:max-w-[1000px]">
        <div className="mx-auto p-5 mb-3 fontstyle">
          <h1 className="text-white text-center text-3xl">Add Craft Item </h1>
          <p className="text-center text-gray-300">
            Add a new craft: Name, Description, Category, Image, Price,
            Availability. Submit to share your creation!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-1 sm:grid-cols-2 gap-7"
        >
          <input
            type="text"
            className="w-full input"
            name="item_name"
            placeholder="Item Name"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="category_Name"
            placeholder="Subcategory Name"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="subcategory_Name"
            placeholder="Add Sumethisg As You Want"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="short_title"
            placeholder="Short Title"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="item_image_url"
            placeholder="Image Url"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="item_prise"
            placeholder="Price"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="item_rating"
            placeholder="Rating"
            required
          />
          <input
            type="text"
            className="w-full input"
            name="processing_time"
            placeholder="Processing Time"
            required
          />
          <select
            className="select select-bordered w-full"
            value={customization}
            onChange={(e) => setCustomization(e.target.value)}
          >
            <option disabled value="">
              Customization
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <select
            className="select select-bordered w-full"
            value={stockStatus}
            onChange={(e) => setStockStatus(e.target.value)}
          >
            <option disabled value="">
              Stock Status
            </option>
            <option value="In stock">In stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
          <textarea
            name="short_description"
            className="w-full h-[100px] input col-span-1 sm:col-span-2"
            placeholder="Description"
            required
          ></textarea>
          <input
            type="submit"
            value={`Add Craft`}
            className="text-white bg-blue-500 font-bold col-span-1 sm:col-span-2 input w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

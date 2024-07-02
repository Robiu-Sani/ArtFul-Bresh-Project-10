import image from "../../images/1.jpg";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "./Google";
import Github from "./Github";
import { useContext } from "react";
import { MyContext } from "../../context/Context";
import { Helmet } from "react-helmet-async";
import LogOut from "./LogOut";
import { ToastContainer, toast } from "react-toastify";

export default function Registration() {
  const { CreateUserByEmail, updateUserProfile, getUser } =
    useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    const updateInfo = {
      displayName: data.name,
      photoURL: data.imageUrl,
    };
    CreateUserByEmail(data.email, data.password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast("Registrations is complete");
        updateUserProfile(updateInfo).then(() =>
          console
            .log("name added successfully")

            .catch(() => console.log("something worng"))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignUpForm = (
    <form
      className="formbg shadow-md w-full sm:w-[450px] rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-white fontstyle text-3xl text-center mb-3 font-bold">
        Sign Up
      </h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 fontstyle"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full formbg input text-black placeholder-gray-700"
          id="name"
          type="text"
          placeholder="Enter Your Name"
          {...register("name", {
            required: "Name is required",
            pattern: {
              minLength: 3,
              message: "This not a name",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 fontstyle"
          htmlFor="imageurl"
        >
          Image Url
        </label>
        <input
          className="w-full formbg input text-black placeholder-gray-700"
          id="image"
          type="text"
          placeholder="Image Url"
          {...register("imageUrl", {
            required: "Image URL is required",
            minLength: { value: 6, message: "Invalid image URL" },
          })}
        />
        {errors.imageUrl && (
          <p className="text-red-500 text-xs italic">
            {errors.imageUrl.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 fontstyle"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full formbg input text-black placeholder-gray-700"
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-1">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 fontstyle"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full formbg input text-black placeholder-gray-700"
          id="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            validate: (value) =>
              /^(?=.*?[A-Z])(?=.*?[a-z])/.test(value) ||
              "Password must contain at least one uppercase and one lowercase letter",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex justify-center gap-8 p-2">
        <Google iconSize={"text-4xl"} />
        <Github iconSize={"text-4xl"} />
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="submit"
          value={`Login`}
          className="input bg-blue-600 w-full text-white font-bold cursor-pointer"
        />
        <small className="text-white">
          I have an account{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </small>
      </div>
    </form>
  );

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center py-5 sm:py-10 px-2 animate__animated animate__fadeInDown customBg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      }}
    >
      <ToastContainer />
      <Helmet>
        <title>Artful Brush | SignUP</title>
      </Helmet>
      {getUser ? (
        <LogOut
          StyleData={`bg-orange-500 text-white font-bold px-[50px] text-xl btn`}
        />
      ) : (
        SignUpForm
      )}
    </div>
  );
}

import { useContext } from "react";
import { MyContext } from "../../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Profile() {
  const { getUser, updateUserProfile } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value || getUser.displayName;
    const image = e.target.image.value || getUser.photoURL;

    const updatedProfile = {
      displayName: name,
      photoURL: image,
    };
    updateUserProfile(updatedProfile);
    navigate(location?.state ? location.state : "/profile");
  };

  return (
    <div className="container mt-[70px] mx-auto p-3 py-8">
      <Helmet>
        <title>Haven Ease | Profile </title>
      </Helmet>

      <div
        data-aos="fade-up"
        className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-3  rounded-md p-5"
      >
        <img
          data-aos="fade-up"
          src={getUser.photoURL ? getUser.photoURL : ""}
          alt="this is user photo"
          className="w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] rounded-full"
        />
        <div
          data-aos="fade-up"
          className="w-full sm:max-w-[50%] flex flex-col justify-center items-center sm:items-start gap-4"
        >
          <h1 className="text-xl font-bold">
            Name : {getUser.displayName ? getUser.displayName : "Not Set"}
          </h1>
          <p>Email : {getUser.email ? getUser.email : "Not Set"}</p>
          <p>
            Number : {getUser.phoneNumber ? getUser.phoneNumber : "Not Set"}
          </p>
        </div>
      </div>
      <hr />
      <div
        data-aos="fade-up"
        className="flex flex-col py-9 gap-2 justify-center items-start sm:items-center my-3  rounded-md p-5 w-full"
      >
        <p>Name : {getUser.displayName ? getUser.displayName : "Not Set"}</p>
        <p>Email : {getUser.email ? getUser.email : "Not Set"}</p>
        <p>Image Url : {getUser.photoURL ? getUser.photoURL : "Not Set"}</p>
        <p>Number : {getUser.phoneNumber ? getUser.phoneNumber : "Not Set"}</p>
        <p>Email Verified : {getUser.emailVerified ? "true" : "false"}</p>
        <p>Anonymous : {getUser.isAnonymous ? "true" : "false"}</p>
        <p>
          Creation Time :{" "}
          {getUser.metadata ? getUser.metadata.creationTime : "Not Set"}
        </p>
        <p>
          Last SignIn Time :{" "}
          {getUser.metadata ? getUser.metadata.lastSignInTime : "Not Set"}
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-3  rounded-md p-5"
      >
        <img
          data-aos="fade-up"
          src={getUser.photoURL ? getUser.photoURL : ""}
          alt="User photo is not found"
          className="w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] rounded-full"
        />
        <form
          data-aos="fade-up"
          onSubmit={handleSubmit}
          className="p-10 w-full flex flex-col justify-center items-center gap-5"
        >
          <h1 className="text-center text-3xl text-black font-bold">
            Edit Profile
          </h1>
          <input
            type="text"
            name="name"
            placeholder={
              getUser.displayName
                ? `Your name is : ${getUser.displayName}`
                : "Enter Your Name"
            }
            className="input bg-gray-200 w-full sm:w-[400px]"
          />
          <input
            type="text"
            name="image"
            placeholder={"Profile url"}
            className="input bg-gray-200 w-full sm:w-[400px]"
          />
          <input
            type="submit"
            value={"Submit"}
            className="input bg-green-500 btn w-full sm:w-[400px]"
          />
        </form>
      </div>
    </div>
  );
}

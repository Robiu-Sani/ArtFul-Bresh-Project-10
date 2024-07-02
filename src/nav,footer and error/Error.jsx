import { TbError404 } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <TbError404 className="text-[150px] text-red-600" />
      <span className="text-5xl text-center text-geay-700 my-5 flex gap-5">
        <BiSolidError className="text-red-800" /> Your Page is Not Found
      </span>
      <p>Check internet connection and url path</p>
      <small className="text-center">
        From this page! you can not do anythig whatever you want. Thatswhy you
        must have to go home page{" "}
      </small>
      <progress className="progress w-56 mt-5"></progress>
      <Link to="/" className="bg-red-500 text-white mt-5 btn px-10">
        Go Home
      </Link>
    </div>
  );
}

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../context/Context";

export default function AddCraftPrivate(props) {
  const { children } = props;
  const { getUser, loader } = useContext(MyContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (getUser) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
}

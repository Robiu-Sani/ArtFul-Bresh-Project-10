import { useContext } from "react";
import { MyContext } from "../../context/Context";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

export default function Google({ iconSize, font, fontSize }) {
  const { signinWithGoogle } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    signinWithGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        className="flex gap-3 justify-center items-center cursor-pointer"
        onClick={handleGoogleAuth}
      >
        <AiFillGoogleCircle className={`${iconSize} `} />
        {font ? <p className={fontSize ? `fontSize` : ""}>{font}</p> : ""}
      </div>
    </div>
  );
}

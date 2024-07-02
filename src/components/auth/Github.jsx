import { useContext } from "react";
import { MyContext } from "../../context/Context";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Github({ iconSize, font, fontSize }) {
  const { signinWithGithub } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGithubAuth = () => {
    signinWithGithub()
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
        onClick={handleGithubAuth}
      >
        <FaGithub className={`${iconSize} `} />
        {font ? <p className={fontSize ? `fontSize` : ""}>{font}</p> : ""}
      </div>
    </div>
  );
}

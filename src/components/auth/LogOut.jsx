import { useContext } from "react";
import { MyContext } from "../../context/Context";

export default function LogOut({ StyleData }) {
  const { signOutByClick } = useContext(MyContext);

  const signOutFunction = () => {
    signOutByClick()
      .then(() => console.log("sognout success fully"))
      .catch((err) => console.log(err));
  };

  return (
    <button className={StyleData} onClick={signOutFunction}>
      LogOut
    </button>
  );
}

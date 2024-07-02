import image from "../../images/8.jpg";
import ArtAndCraftCategory from "../home/ArtAndCraftCategory";
import Faq from "../home/Faq";
import Introduction from "../home/Introduction";
import PaintingDrawingQuotes from "../home/PaintingDrawingQuotes";
import Review from "../home/Review";
import TypeWriter from "../home/TypeWriter";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="w-full">
      <Helmet>
        <title> Artful Brush | about </title>
      </Helmet>
      <div
        className="w-full h-[500px] flex justify-center items-center flex-col gap-8 fontstyle animate__animated animate__fadeInDown customBg "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
        }}
      >
        <TypeWriter></TypeWriter>

        <p className="text-center text-xl mb-4 text-white">
          Dive into the captivating realm of drawing, where creativity knows no
          bounds. Unleash your imagination with pencils, pens, and colors to
          bring your visions to life.
        </p>
      </div>
      <Introduction></Introduction>
      <ArtAndCraftCategory></ArtAndCraftCategory>
      <Review></Review>
      <Faq></Faq>
      <PaintingDrawingQuotes></PaintingDrawingQuotes>
    </div>
  );
}

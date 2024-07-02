import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Faq from "./Faq";
import Review from "./Review";
import CraftItems from "./CraftItems";
import { useLoaderData } from "react-router-dom";
import TypeWriter from "./TypeWriter";
import PaintingDrawingQuotes from "./PaintingDrawingQuotes";
import ArtAndCraftCategory from "./ArtAndCraftCategory";
import Introduction from "./Introduction";
import ChallingSection from "./ChallingSection";

export default function Home() {
  const craftes = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Artful Brush </title>
      </Helmet>
      <Banner></Banner>
      <Introduction />
      <TypeWriter></TypeWriter>
      <CraftItems craftes={craftes}></CraftItems>
      <ChallingSection craftes={craftes}></ChallingSection>
      <Review></Review>
      <ArtAndCraftCategory></ArtAndCraftCategory>
      <Faq></Faq>
      <PaintingDrawingQuotes></PaintingDrawingQuotes>
    </div>
  );
}

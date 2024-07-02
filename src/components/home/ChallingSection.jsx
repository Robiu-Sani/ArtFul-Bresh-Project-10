import CategoryCard from "./CategoryCard";

export default function ChallingSection({ craftes }) {
  const category = craftes.map((data) => data.category_Name);
  const uniquecategory = [...new Set(category)];

  const uniqueCraft = uniquecategory
    .map((categoryName) => {
      const craft = craftes.find((data) => data.category_Name === categoryName);
      return craft;
    })
    .filter(Boolean);

  return (
    <div className="container mx-auto my-10 p-2">
      <div className="w-[750px] mx-auto my-7">
        <h2 className="text-4xl text-center font-bold mb-8">
          Art & Craft Categories
        </h2>
        <p className="text-lg mb-8 text-center">
          A Multifaceted Exploration of Art & Craft Subcategories
        </p>
      </div>
      <div className="grid justify-center items-center grid-cols-auto-fit gap-4">
        {uniqueCraft.map((data) => (
          <CategoryCard key={data._id} craftes={data}></CategoryCard>
        ))}
      </div>
    </div>
  );
}

export default function Introduction() {
  return (
    <div className="hidden w-full sm:block">
      <div className="max-w-[1000px]  mx-auto grid grid-cols-3 overflow-hidden rounded-sm ">
        <div className="w-full text-white bg-[#64748b] p-4 flex justify-center items-center flex-col">
          <h3 className="text-center">Excellent Customer Service</h3>
        </div>
        <div className="w-full text-white bg-[#90cdf4] p-4 flex justify-center items-center flex-col">
          <h3 className="text-center">Quality Products or Services</h3>
        </div>
        <div className="w-full text-white bg-[#4dc0b5] p-4 flex justify-center items-center flex-col">
          <h3 className="text-center">Personalized Experience</h3>
        </div>
      </div>
    </div>
  );
}

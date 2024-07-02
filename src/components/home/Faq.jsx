import faq from "../../images/faq.png";

export default function Faq() {
  return (
    <div className="my-10 py-10 container mx-auto p-2 animate__animated animate__fadeInDown">
      <h2 className="text-3xl text-center font-bold mb-10 animate__animated animate__fadeInDown">
        CLIENT <span className="text-green-500">QUESTIONS</span>
      </h2>
      <div
        data-aos="fade-up"
        className="flex justify-between items-center flex-col md:flex-row gap-5"
      >
        <img
          src={faq}
          data-aos="fade-up"
          alt="this is faq image"
          className="w-full sm:w-1/2"
        />
        <div
          data-aos="fade-up"
          className="w-full animate__animated animate__fadeInDown sm:w-1/2"
        >
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              <p>How do I search for properties on your website?</p>
            </div>
            <div className="collapse-content">
              <p>
                To search for properties, simply use our intuitive search bar
                located on the homepage. You can filter your search by location,
                property type, price range, and more to find listings that match
                your criteria.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              <p>What should I expect during the home buying process?</p>
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                The home buying process typically involves several steps,
                including property search, viewing, making an offer,
                negotiations, home inspection, and closing. Our experienced team
                will guide you through each step of the process, providing
                support and assistance to ensure a smooth and successful
                transaction.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              <p>
                Can I schedule a viewing of a property listed on your website?
              </p>
            </div>
            <div className="collapse-content">
              <p>
                Yes, absolutely! To schedule a viewing of a property, simply
                fill out the contact form on the property listing page or give
                us a call. Our team will be happy to arrange a convenient time
                for you to visit the property and explore it in person.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              <p>
                What information should I provide when contacting you about a
                property?
              </p>
            </div>
            <div className="collapse-content">
              <p>
                When contacting us about a property, please provide your name,
                contact information, and any specific details or questions you
                have about the listing. This will help us assist you more
                efficiently and provide you with the information you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

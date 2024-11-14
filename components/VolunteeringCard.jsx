import { CiLinkedin } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const TestimonialCard = ({ imageSrc, quote, authorName, authorCompany, showLinkedinIcon, linkedinUrl }) => {
  return (
    <div className="relative max-w-xl mx-auto p-4 flex-shrink-0 md:hover:scale-[1.05] transition-transform duration-300">
      {/* Main container */}
      <div className="relative ">
        {/* Background decorative dots */}
        <div className="absolute right-0 bottom-0 transform translate-x-8 translate-y-8 ">
          <div className="grid grid-cols-8 gap-1">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>

        {/* Content container */}
        <div className="relative flex">
          {/* Image */}
          <div className="w-full " >
            <div className="relative h-[500px] bg-transparent">
              <img
                src={imageSrc}
                alt="Testimonial"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Quote box */}
          <div className="absolute bottom-0 right-0 md:w-2/3 w-[80%] transform translate-x-4 ">
            {/* Content */}
            <div className="dark:bg-indigo-900 bg-[#49478b] md:p-8 px-6 py-2 text-white rounded-md">
              <p className="mb-6 md:text-lg text-sm text-gray-400">{quote}</p>

              {/* Author info */}
              <div>
                <h4 className="font-semibold md:text-xl mb-1">{authorName}</h4>
                <p className="flex justify-between items-center text-indigo-300">
                  <div className="flex items-center gap-1 md:text-[16px] text-sm">
                    <IoLocationOutline className="text-xl flex-shrink-0"/>
                    {authorCompany}
                  </div>
                  {showLinkedinIcon && linkedinUrl && (
                    <CiLinkedin
                      className="flex-shrink-0 md:text-3xl text-2xl opacity-70 hover:opacity-100 cursor-pointer"
                      onClick={() => window.open(linkedinUrl, "_blank")}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

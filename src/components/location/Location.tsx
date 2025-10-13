import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  const handleAddBlur = () => setIsBlurred(true);   
  const handleRemoveBlur = () => setIsBlurred(false);

  return (
    <div className="container">
      <span className="inter text-3xl text-mainColor whitespace-nowrap py-2">
        Our restaurant addresses
      </span>

      <div
        className="w-full h-96 relative border-l-8 border-r-8 rounded-md border-mainColor overflow-hidden"
        onMouseEnter={handleRemoveBlur}  
        onMouseLeave={handleAddBlur}     
      >
        <div
          className={`absolute left-0 w-full h-full bg-responsiveMenu backdrop-blur-sm text-white flex items-center justify-center text-2xl font-bold transition-all duration-700 ${
            isBlurred ? "top-0" : "-top-[400px]"
          }`}
        >
          <span className="flex items-center whitespace-nowrap text-secondary inter">
            Xtraordinary Urban Meals location <FaLocationDot />
          </span>
        </div>

        {/* Google Map */}
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11987.54177598186!2d69.28378697201912!3d41.31135565303812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1760362482802!5m2!1sru!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;

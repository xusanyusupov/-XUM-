import logo from "@/assets/head/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { HiOutlineBarsArrowUp } from "react-icons/hi2";
const Header_Link = [
  {
    link: "#",
    title: "Breakfast",
  },
  {
    link: "#",
    title: "Lunch",
  },
  {
    link: "#",
    title: "Dinner",
  },
];

const Header = () => {
  return (
    <>
      <header>
        <div className="container max-md:max-w-none">
          <div className="flex items-center w-full justify-between py-5">
            <a href="#">
              <img src={logo} alt="XUM (Icon)" />
            </a>
            <ul className="flex items-center gap-20 inter text-[18px] text-hLink 
            max-sm:fixed max-sm:flex-col max-sm:top-0 max-sm:left-0 max-sm:z-[999] max-sm:gap-5 
            max-sm:bg-responsiveMenu max-sm:backdrop-blur-lg max-sm:w-full max-sm:h-3/4 max-sm:items-start
            ">
              <li className="hidden max-sm:flex justify-center w-full">
                <span className="playfair font-bold text-3xl text-secondary max-extra-xs:text-xl">Xtraordinary Urban Meals</span>
              </li>
              {Header_Link.map((item, inx) => (
                <li key={inx}>
                  <a href={item.link}>
                    <span className="hover:text-hLinkHover font-normal max-sm:text-secondary max-sm:text-start">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
              {/* Modal close button */}
              <li className="hidden max-sm:block absolute right-5 top-3 max-extra-xs:top-2 max-extra-xs:right-2 ">
                <button><HiOutlineBarsArrowUp className="text-3xl text-secondary max-extra-xs:text-2xl"/></button>
              </li>
              {/* Modal close button */}  
              {/* Visible on desktop only, hidden on mobile and tablet  */}
              <li className="max-xl:hidden">
                <button className="z-10 max-sm:fixed max-sm:bottom-7 max-sm:right-7 max-sm:p-5 max-sm:bg-mainColor max-sm:rounded-full max-sm:border max-sm:border-white">
                  <FiShoppingBag className="text-[22px] text-hLink hover:text-hLinkHover font-medium max-sm:text-secondary " />
                </button>
              </li> 
              {/* Visible on desktop only, hidden on mobile and tablet  */}
            </ul>

            {/* button for phones and tablets */}
            <button className="hidden z-10 max-xl:block max-sm:fixed max-sm:bottom-7 max-sm:right-7 max-sm:p-5 max-sm:bg-mainColor max-sm:rounded-full max-sm:border max-sm:border-white">
              <FiShoppingBag className="text-[22px] text-hLink hover:text-hLinkHover font-medium max-sm:text-secondary " />
            </button>
            
            {/* button for phones and tablets */}
            {/* Menu / Modal */}
            <button className="hidden max-sm:block max-sm:font-bold"><MdMenu className="max-sm:text-3xl max-sm:text-hLink"/></button>
            {/* Menu / Modal */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

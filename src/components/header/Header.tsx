import logo from "@/assets/head/logo.png";
import cart1 from '@/assets/payment/american-express.png'
import cart2 from '@/assets/payment/paypal.png'
import cart3 from '@/assets/payment/visa.png'
import { FiShoppingBag } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { HiOutlineBarsArrowUp } from "react-icons/hi2";
import { useState } from "react";

const Header_Link = [
  { link: "#", title: "Breakfast" },
  { link: "#", title: "Lunch" },
  { link: "#", title: "Dinner" },
];
const paymentTypes = [
  {alt:'american-express',img:cart1},
  {alt:'paypal',img:cart2},
  {alt:'visa',img:cart3},
]
const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header>
      <div className="container max-md:max-w-none">
        <div className="flex items-center justify-between w-full py-5">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="XUM (Icon)" />
          </a>

          {/* Nav menu */}
          <ul
            className={`flex items-center gap-20 inter text-[18px] text-hLink
              max-sm:fixed max-sm:flex-col max-sm:left-0 max-sm:z-[999] max-sm:gap-5
              max-sm:bg-responsiveMenu max-sm:backdrop-blur-lg max-sm:w-full
              max-sm:items-start max-sm:h-3/4 transition-all duration-500 ease-in-out
              ${openModal ? "max-sm:top-0" : "max-sm:-top-3/4"}
            `}
          >
            {/* Mobile logo */}
            <li className="hidden max-sm:flex justify-center w-full pt-10">
              <img src={logo} alt="Logo" />
            </li>

            {/* Links */}
            {Header_Link.map((item, inx) => (
              <li key={inx}>
                <a href={item.link}>
                  <span className="hover:text-hLinkHover font-normal max-sm:text-secondary max-sm:pl-3">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}

            <li className="hidden max-sm:w-full max-sm:grid max-sm:grid-cols-3 max-sm:gap-3">
              {
                paymentTypes.map((el,inx) => (
                  <div key={inx} className="flex justify-center bg-white rounded-lg">
                    <img src={el.img} className="w-20 h-20" alt={el.alt} />
                  </div>
                ))
              }
            </li>

            {/* Close modal button */}
            <li className="hidden max-sm:block absolute right-5 top-3">
              <button onClick={() => setOpenModal(false)}>
                <HiOutlineBarsArrowUp className="text-3xl text-secondary" />
              </button>
            </li>

            {/* Cart button — only visible on desktop */}
            <li className="max-xl:hidden">
              <button className="z-10">
                <FiShoppingBag className="text-[22px] text-hLink hover:text-hLinkHover font-medium" />
              </button>
            </li>
          </ul>

          {/* Cart button — visible on tablet & mobile */}
          <button
            className="hidden z-10 max-xl:block max-sm:fixed max-sm:bottom-7 max-sm:right-7
              max-sm:p-5 max-sm:bg-mainColor max-sm:rounded-full max-sm:border max-sm:border-white"
          >
            <FiShoppingBag className="text-[22px] text-hLink hover:text-hLinkHover font-medium max-sm:text-secondary" />
          </button>

          {/* Menu open button (mobile) */}
          <button
            className="hidden max-sm:block font-bold"
            onClick={() => setOpenModal(true)}
          >
            <MdMenu className="text-3xl text-hLink" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

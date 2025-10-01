import logo from "@/assets/head/logo.png";
import { FiShoppingBag } from "react-icons/fi";
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
        <div className="container">
          <div className="flex items-center w-full justify-between py-5">
            <a href="#">
              <img src={logo} alt="XUM (Icon)" />
            </a>
            <ul className="flex items-center gap-20 inter text-[18px] text-hLink">
              {Header_Link.map((item, inx) => (
                <li key={inx}>
                  <a href={item.link}>
                    <span className="hover:text-hLinkHover font-normal">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <span>
                  <button>
                    <FiShoppingBag className="text-[22px] text-hLink hover:text-hLinkHover font-medium" />
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

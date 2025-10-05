import img1 from "@/assets/hero/img1.png";
import img2 from "@/assets/hero/img2.png";
import img3 from "@/assets/hero/img3.png";
import img4 from "@/assets/hero/img4.png";
import { useState } from "react";

const heroMenu = [
    {
        img: img1,
        alt: 'CAVIAR EXPRESS',
        desc: 'Norem ipsum dolor sit amet, consectetur',
        price: 20,
    },
    {
        img: img2,
        alt: 'BLUE BERRY',
        desc: 'Norem ipsum dolor sit amet, consectetur',
        price: 23,
    },
    {
        img: img3,
        alt: 'BEEF STEAK',
        desc: 'Norem ipsum dolor sit amet, consectetur',
        price: 40,
    },
    {
        img: img4,
        alt: 'STRAWBERRY FINX',
        desc: 'Norem ipsum dolor sit amet, consectetur',
        price:  20,
    }
]
const Hero = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    function handleSetIndex(index:number) {
        setActiveIndex(index)
    }
    
  return (
    <>
    <div className="w-full flex items-center gap-12 justify-end mt-10 relative max-3xl:static max-3xl:mt-10 max-3xl:flex-col">
        <div className="flex items-center absolute left-48 top-0 max-3xl:static max-3xl:flex-col">
            <div className="flex flex-col gap-5 max-3xl:justify-center">
            <p className="playfair text-9xl font-bold max-3xl:text-7xl max-3xl:text-center max-xs:text-5xl">
                Food <br className="max-3xl:hidden " /> Zone
            </p>
            <div className="flex items-start gap-3">
                <span className="w-14 h-[1px] bg-hLink mt-3 max-xs:hidden"></span>
                <span className="inter text-hLink">
                Norem ipsum dolor sit amet, <br className="max-3xl:hidden" /> consectetur.
                </span>
            </div>
            </div>

            {activeIndex !== null && (
            <div className="flex flex-col items-center transition-all duration-700 ease-in-out">
                <img
                key={heroMenu[activeIndex].img}
                src={heroMenu[activeIndex].img}
                className="w-[900px] opacity-0 animate-fadeIn max-md:w-[600px] max-xs:w-[700px] max-xs:h-[300px] max-xs:object-contain z-10"
                alt={heroMenu[activeIndex].alt}
                />
                <button className="group flex items-center bg-mainColor gap-3 inter text-secondary py-3 px-5 rounded-3xl border border-mainColor hover:bg-secondary hover:text-mainColor hover:transition hover:duration-500">
                ${heroMenu[activeIndex].price}
                <span className="w-5 h-[1px] flex items-center bg-secondary group-hover:bg-mainColor"></span>
                ORDER NOW
                </button>
            </div>
            )}
        </div>

        <div className="flex flex-col gap-5 absolute right-0 top-0 
        max-3xl:static max-3xl:flex max-3xl:flex-row 
        max-3xl:justify-start max-3xl:overflow-x-auto 
        max-3xl:max-w-full max-3xl:pb-2">
            {heroMenu.map((item, inx) => (
            <div
                key={inx}
                className={`flex items-center cursor-pointer py-5 rounded-l-full flex-shrink-0 ${
                activeIndex === inx
                    ? "active transition duration-500 bg-mainColor text-secondary"
                    : "bg-secondary"
                } max-3xl:flex-col max-3xl:gap-4 max-3xl:rounded-lg max-3xl:min-w-[100px] max-sm:min-w-[60px] max-sm:py-3 max-sm:gap-1`} 
                onClick={() => handleSetIndex(inx)}
            >
                <img className="w-56 h-32 object-contain rounded-full max-3xl:w-64 max-sm:w-48 max-sm:px-5" src={item.img} alt={item.alt} />
                <div className="flex flex-col items-start max-3xl:items-center">
                <span className="text-[18px] font-bold text-hLink inter pr-5 max-3xl:pr-0 max-3xl:text-center ">{item.alt}</span>
                <span className="inter text-[14px] text-hLink pr-5 max-3xl:hidden">{item.desc}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default Hero;    

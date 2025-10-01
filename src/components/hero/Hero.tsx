import img1 from "@/assets/hero/img1.png";
import img2 from "@/assets/hero/img2.png";
import img3 from "@/assets/hero/img3.png";
import img4 from "@/assets/hero/img4.png";
import React, { useState } from "react";

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
      <div className="w-full flex items-center gap-12 justify-end mt-10 relative">
        <div className="flex items-center absolute left-48 top-0">
            <div className="flex flex-col gap-5"> 
            <p className="playfair text-9xl font-bold">
                Food <br /> Zone
            </p>
            <div className="flex items-start gap-3">
                <span className="w-14 h-[1px] bg-hLink mt-3"></span>
                <span className="inter text-hLink">
                Norem ipsum dolor sit amet, <br /> consectetur.
                </span>
            </div>
            </div>

            {
                activeIndex !== null && (
                <div className="flex flex-col items-center transition-all duration-700 ease-in-out">
                <img key={heroMenu[activeIndex].img}  src={heroMenu[activeIndex].img} className="w-[900px] opacity-0 animate-fadeIn" alt={heroMenu[activeIndex].alt} />
                <button className="group flex items-center bg-mainColor gap-3 inter text-secondary py-3 px-5 rounded-3xl border border-mainColor hover:bg-secondary hover:text-mainColor">
                    ${heroMenu[activeIndex].price}
                    <span className="w-5 h-[1px] flex items-center bg-secondary group-hover:bg-mainColor"></span>
                    ORDER NOW
                </button>
                </div>
                )
            }
            
        </div>

        <div className="flex flex-col gap-5 absolute right-0 top-0">
            {heroMenu.map((item, inx) => (
                <div key={inx} className={`flex items-center cursor-pointer py-5  rounded-l-full ${ activeIndex === inx ? "active transition duration-500 bg-mainColor text-secondary " : "bg-secondary " }`} onClick={() => handleSetIndex(inx)}>
                <img className="w-56 h-32 object-contain rounded-full" src={item.img} alt={item.alt}/>
            <div className="flex flex-col items-start">
                <span className="text-[18px] font-bold inter  pr-5">
                {item.alt}
                </span>
                <span className="inter text-[14px] pr-5">{item.desc}</span>
            </div>
                </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Hero;    

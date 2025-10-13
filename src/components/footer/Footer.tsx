import logo from '@/assets/head/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-hLinkHover py-20 border-b border-secondary mt-20">
          <div className="container">
            <div className="w-full flex flex-col gap-5 items-center justify-center">

              <div className="flex flex-col text-center gap-2">
                <p className="text-secondary inter text-4xl">Are you on the list</p>
                <p className="text-secondary text-xs">Join to get exclusive offers & discount</p>
              </div>     

              <form action="" className="flex flex-col gap-2">
                <p className="inter text-secondary">Email*</p>
                <div className="flex items-center gap-5 max-sm:flex flex-col">
                  <input type="email"  className="w-64 h-10 px-5 border bg-hLinkHover text-secondary rounded-lg"/>
                  <button className="h-10 bg-secondary flex items-center justify-center inter py-3 px-7 rounded-lg">Join</button>
                </div>
              </form>

            </div>         
          </div>
        </div>

        <div className="bg-hLinkHover py-10">
        <div className='container'>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-10  max-xs:grid-cols-1 max-sm:gap-10">

          <div>
            <img src={logo} alt="logo (XUM)" className='brightness-0 invert'/>
          </div>

          <div className='text-secondary flex flex-col gap-5 inter'>
            <span className='text-2xl text-mainColor inter'>Our Store</span>
            <p>500 Terry France Street <br /> SanFransico CA94158</p>
            <p>Monday-Friday:11am-10pm <br /> Saturday-Sunday:11am-12pm</p>
            <p>Tel:123-456-7890 <br /> Email:info@gmail.com</p>
          </div>

          <div className='text-secondary flex flex-col'>
            <p className='text-2xl text-mainColor inter'>Policy</p>
            <a href="#">Payment Metods</a>
            <a href="#">FAQ</a>
          </div>

          <div className='text-secondary flex flex-col gap-2 inter'>
            <span className='text-2xl inter text-mainColor'>Customer Service</span>
            <div className='flex items-center gap-8'>
            <a href="#"><FaFacebook className='text-2xl'/></a>
            <a href="#"><FaYoutube className='text-2xl'/></a>
            <a href="#"><FaTwitter className='text-2xl'/></a>
            <a href="#"><RiInstagramFill className='text-2xl'/></a>
            </div>
          </div>

          </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { FaBeer, FaFacebook, FaInstagram, FaWifi, FaYoutube } from 'react-icons/fa'
import DeskTopNav from "./DeskTopNav"
export default function Nav (){
    return(
        <header id="masthead" className="">
        
        <div className="mx-12 md:hidden">
          <div className="">
            <div className="">
              <div className="grid grid-cols-[auto_auto] items-center gap-x-5 [overflow-wrap:anywhere]">
                <div className="flex-wrap  min-h-0 items-center flex ">
                  <div  className="flex items-center flex-wrap px-0">
                    <div className="inline-flex align-middle items-center transition-[0.2s] duration-[linear] leading-none self-center px-0 py-[1em]">
                      <span className="pr-[1em]">
                        <a className="text-[#4169e1] no-underline bg-transparent hover:text-[#191970] focus:text-[#191970] focus-visible:outline-dotted " href="https://websitedemos.net/food-blogger-04/?customize=template">
                          <img  alt="Food Blogger & Influencer" className="max-w-full w-16 transition-[0.2s] duration-[linear] h-auto align-middle border-0 lg:w-12 lg:max-w-12 " src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg" height={34} width={64} />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-wrap  min-h-0 items-center justify-end flex">
                  <div  className="items-center flex flex-wrap px-0 ">
                    <div className="inline-block">
                      <button  className="font-normal text-[1.5em] leading-[1.85714] text-white border overflow-visible normal-case cursor-pointer align-middle shadow-none w-auto h-auto text-center flex items-center m-0 p-[0.5em] rounded-full border-solid border-white focus:text-white hover:text-white roun [background:#be7c68] [appearance:button] [-webkit-font-smoothing:antialiased] lg:text-[0.9375rem]" type="button">
                       
                        <span className="inline-flex self-center">
                          <span className="inline-flex self-center items-center flex-wrap content-center">
                            <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg" version="1.1" fill="currentColor" className="ast-mobile-svg ast-menu-svg">
                              <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                            </svg>
                          </span>
                          
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>)
    

    
}
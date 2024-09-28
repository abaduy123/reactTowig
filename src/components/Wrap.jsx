
import Nav from './Nav'
import Featured from './Featured'
import LatestR from "./LatestR"
import BestR from "./BestR"
import Mail from "./Mail"
import Lvideos from "./Lvideos"
import Hero from "./Hero"
import FooterL from "./FooterL"
import MobileNav from "./MobileNav"
import DeskTopNav from "./DeskTopNav"
export default function Wrap() {
  return (
    <div id="page">
      <div  className="bg-no-repeat bg-[url('../public/food-blogger-hero-bg-grad.svg')] bg-contain bg-[74vw]">
        <Nav />
        <DeskTopNav />
        <Hero />
      </div>
      <div id="content" className="site-content">
        <div className="flex max-w-full px-5 py-0 lg:flex-col">
          <div
            id="primary"
            className="w-full p-0 my-[4em] lg:my-0 lg:py-[1.5em] "
          >
            <main id="main" className="block">
              <article>
                
                <div className="after:clear-both after:content-['']">
                  <div className="">
                    
                    <Featured />
                    <LatestR />
                    <BestR />
                    <Mail />
                    <Lvideos />
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
      <div className=" bg-[#be7c68] text-white">
        <div className="w-full h-[439px] flex items-center justify-center">
          <div className="text-center px-12">
            <h2 className="font-semibold text-5xl lg:text-5xl mb-5">
              Invite me to your restaurant.
              <br />
              Get exposure of millions food lovers.
            </h2>
            <p className="text-[#f6ecea] text-center text-wrap mb-12">
              Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.
            </p>
            <a
              href="#"
              className="text-[#BE7C68]  bg-white font-bold text-[15px] uppercase tracking-[2px] px-6 py-3 rounded-[3px] border border-white hover:text-white hover:bg-transparent"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      <MobileNav />
      <FooterL />
    </div>
  );
  }
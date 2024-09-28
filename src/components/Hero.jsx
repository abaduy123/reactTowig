import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { FaBeer, FaFacebook, FaInstagram, FaWifi, FaYoutube } from 'react-icons/fa'
export default function Hero (){

    return (
        <div className="mt-[4em] px-6  flex flex-col-reverse md:flex-row items-center justify-center relative">
            <div className="absolute inset-0  md:right-0" />
            <div className="relative md:w-1/2 p-8 z-10">
                <div className="mb-4">
                    <span className="text-[#be7c68] text-sm font-semibold uppercase tracking-wider">
                        Welcome
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2 md:text-6xl">
                    I’m Dianna Adams
                </h1>
                <h3 className="text-2xl font-semibold text-gray-600 mb-4 md:text-4xl">
                    Food Critic / Influencer / Blogger
                </h3>
                <p className="text-gray-600 mb-6">
                    Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
                    nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
                    pharetra, ac porttitor orci.
                </p>
                <a
                    href="#"
                    className="inline-block bg-transparent border border-[#be7c68] text-[#be7c68] font-bold uppercase px-6 py-3 rounded hover:bg-[#be7c68] hover:text-white"
                >
                    Join Insider
                </a>
                <div className="flex mt-10 space-x-8">
                    <div className="text-center">
                        <FaYoutube className="text-[#be7c68] text-4xl mx-auto mb-2" />
                        <h3 className="font-semibold text-xl text-gray-600">1.2M+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider">Subscribers</p>
                    </div>
                    <div className="text-center">
                        <FaInstagram className="text-[#be7c68] text-4xl mx-auto mb-2" />
                        <h3 className="font-semibold text-xl text-gray-600">1.8M+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider">Followers</p>
                    </div>
                    <div className="text-center">
                        <FaWifi className="text-[#be7c68] text-4xl mx-auto mb-2" />
                        <h3 className="font-semibold text-xl text-gray-600">800K+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider">Readers</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 p-8 z-10">
                <img
                    src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
                    alt="Dianna Adams"
                    className="shadow-lg"
                    width={552}
                    height={552}
                />
            </div>
        </div>
    )
}
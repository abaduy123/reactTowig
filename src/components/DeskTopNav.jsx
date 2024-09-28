import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
export default function DeskTopNav (){

    return (
        <header className="hidden md:flex md:py-4 px-8 justify-between items-center">
            <div className="flex items-center space-x-8">
                <a href="/" className="text-2xl font-bold text-[#be7c68]">
                    <img
                        alt="Food Blogger & Influencer"
                        className="max-w-full w-16 h-auto align-middle border-0 lg:w-12 lg:max-w-12"
                        src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                        height={34}
                        width={64}
                    />
                </a>

                <nav className="flex space-x-4">
                    <a
                        key="home"
                        className="text-xs font-bold font-mono text-[#BE7C68] hover:text-[#191970] uppercase"
                        href="#"
                    >
                        Home
                    </a>
                    {['About', 'Reviews', 'Videos', 'Contact'].map((item) => (
                        <a
                            key={item}
                            className="text-xs font-bold font-mono text-[#131516] hover:text-[#191970] uppercase"
                            href="#"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                    <a href="#" className="text-white hover:text-[#0274be]">
                        <FaYoutube />
                    </a>
                    <a href="#" className="text-white hover:text-[#0274be]">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white hover:text-[#0274be]">
                        <FaFacebook />
                    </a>
                </div>
                <a
                    href="#"
                    className="text-white border border-white py-2 px-4 hover:bg-white hover:text-[#191970] transition"
                >
                    Let's Talk
                </a>
            </div>
        </header>
    )
}
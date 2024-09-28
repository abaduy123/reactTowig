export default function Mail(){
    return (
        <div className=" mx-auto my-8 p-8 border-2 border-gray-200 bg-white flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img
                    src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
                    alt="Join Mailing List"
                    className="w-full h-auto rounded"
                />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
                <h2 className="text-2xl font-semibold text-5xl text-gray-700">Join Mailing List</h2>
                <p className="text-gray-600 my-4">
                    Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row items-center">
                    <input
                        type="email"
                        placeholder="Email address"
                        required
                        className="w-full sm:w-auto flex-grow bg-[#FAFAFA] p-2 border border-gray-300 rounded-md mb-4 sm:mb-0 sm:mr-4"
                    />
                    <button className="p-2 w-full text-[#D2A79B]  border-[1px] border-[#D2A79B]  hover:bg-[#D2A79B] hover:text-white transition-colors md:w-auto">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}
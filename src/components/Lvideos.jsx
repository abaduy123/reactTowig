import { FaCirclePlay } from "react-icons/fa6";

export default function Lvideos (){
    
        const videos = [
          {
            title: "Family Dinner - Latea pulvinar scelerisque diam tempus facilisi",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg",
          },
          {
            title: "Lobortis turpis turpis vehicula laoreet egestas enim ornare",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg",
          },
          {
            title: "Tempus quis ac viverra condimentum sit nulla viverra",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg",
          },
          {
            title: "Quis mauris egestas enim urna dictum",
            description: "Enim imperdiet fames nisl, purus et diam aliquet",
            image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg",
          },
        ];
        return (
            <div className="mx-auto my-16 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Videos</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <div
                            className="bg-cover bg-center h-80 flex items-center justify-center"
                            style={{
                                backgroundImage:
                                    "url('https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg')",
                            }}
                        >
                            <button className=" text-red-500 p-4 rounded-full shadow-lg">
                            <FaCirclePlay className="text-white"/>
                            </button>
                        </div>
                        <h3 className="text-xl font-semibold mt-4">
                            Dianna Adams visits the Sooto Restaurant | Uncovered Miami
                        </h3>
                        <p className="text-gray-600 mt-2">
                            A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis
                            ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat
                        </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        { videos.map((video, index) => (
                            <div key={index} className="flex gap-4">
                                <img
                                    src={video.image}
                                    alt={video.title}
                                    className="w-24 h-16 object-cover rounded"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold">{video.title}</h4>
                                    <p className="text-gray-600">{video.description}</p>
                                </div>
                            </div>
                        ))}
                        <button className="mt-4  text-[#D2A79B] font-bold py-2 px-4 rounded hover:bg-[#D2A79B] hover:text-white">
                            View All Videos
                        </button>
                    </div>
                </div>
            </div>
        )
}
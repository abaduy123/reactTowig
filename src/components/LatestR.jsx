export default function LatestR (){
    const reviews = [
        {
          title: "Grilled Flank Steak with Chimichurri",
          description: "Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg",
        },
        {
          title: "Mushroom Penne with Walnut Pesto",
          description: "Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg",
        },
        {
          title: "Garlic Butter White Wine Shrimp Linguine",
          description: "Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg",
        },
      ];

    return (
        <div className="max-w-screen-xl mx-auto py-16 px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Latest Reviews</h2>
                <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-4 py-2 uppercase text-sm hover:bg-gray-800 hover:text-white transition">
                    View All
                </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col">
                        <img
                            src={review.image}
                            alt={review.title}
                            className="w-full h-60 object-cover mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{review.title}</h3>
                        <p className="text-gray-600 mb-4">{review.description}</p>
                        <a href="#" className="text-gray-800 font-bold uppercase text-sm hover:underline">
                            Read More →
                        </a>
                    </div>
                ))}
            </div>
        </div>

        
        

    );
}
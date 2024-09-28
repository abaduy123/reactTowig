export default function BestR (){
    const restaurants = [
        {
          name: "Bern's Steak House",
          description: "Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg",
        },
        {
          name: "Eewak Korean Restaurant",
          description: "Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg",
        },
        {
          name: "The Ramban Vegan House",
          description: "Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg",
        },
        {
          name: "Maniest Bake & Cake",
          description: "Diam lacus nunc est commodo nunc, velit et amet eu vitae sem.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg",
        },
        {
          name: "Crush Los Angeles",
          description: "Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg",
        },
        {
          name: "The Mike Winery",
          description: "Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis.",
          image: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg",
        },
      ];
    return (
        <div className="bg-[#F3EFEE] py-16 px-20 ">
            <h2 className="text-5xl font-bold text-center text-gray-700 mb-8 ">Best in Class Restaurant</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center">
                {restaurants.map((restaurant, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-full h-60 object-cover mb-4"
                        />
                        <h3 className="font-semibold text-3xl text-gray-700 mb-2">{restaurant.name}</h3>
                        <p className="text-gray-600 ">{restaurant.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
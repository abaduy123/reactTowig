export default function Featured () {
    const logos = [
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg'
      ];
    return (
        
        
          
            <div className="max-w-lg py-8 md:max-w-none">
              <h6 className="font-semibold text-gray-500 uppercase text-center tracking-widest mb-5">As Featured In</h6>
              <div className="flex justify-center items-center flex-wrap md:gap-6">
                {logos.map((logo, index) => (
                  <div key={index} className="w-1/2 sm:w-20 md:w-40 lg:w-40 xl:w-52  flex justify-center items-center">
                    <img src={logo} alt={`logo-${index}`} width={177} height={100} className="max-h-24 md:max-h-32 lg:max-h-44"/>
                  </div>
                ))}
              </div>
            </div>
          
    )
}
export default function Featured () {
    const logos = [
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg',
        'https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg'
      ];
    return (
        
        
          
            <div className="max-w-screen-lg mx-auto py-8">
              <h6 className="font-semibold text-gray-500 uppercase text-center tracking-widest mb-5">As Featured In</h6>
              <div className="flex justify-center items-center flex-wrap gap-5">
                {logos.map((logo, index) => (
                  <div key={index} className="w-1/5 md:w-24 sm:w-20 flex justify-center items-center">
                    <img src={logo} alt={`logo-${index}`} className="max-h-12"/>
                  </div>
                ))}
              </div>
            </div>
          
    )
}
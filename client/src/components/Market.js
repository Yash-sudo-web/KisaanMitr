import React from 'react'
const products = [
    {
      id: 1,
      name: 'TrustBasket Neem Oil for Plants ',
      href: 'https://www.amazon.in/TrustBasket-neem-Oil-Plants-200ml/dp/B07F8R7JPP/ref=sr_1_2_sspa?crid=2A3MGKN15GWRV&keywords=pestisides&qid=1686462525&sprefix=pestidi%2Caps%2C247&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      imageSrc: 'https://m.media-amazon.com/images/I/51EksoT1BzL._SX679_.jpg',
      imageAlt: 'Neem Oil',
    },
    {
      id: 2,
      name: 'Pure Neem Oil Spray On Plants ',
      href: 'https://www.amazon.in/Natural-Organic-Pressed-Plants-Measuring/dp/B075THM1T3/ref=sr_1_6?keywords=pestisides&qid=1686462616&sr=8-6',
      imageSrc: 'https://m.media-amazon.com/images/I/81AfNRzeCvL._SX679_.jpg',
      imageAlt: 'Neem Spray.',
    },
    {
      id: 3,
      name: 'Pidilite Terminator',
      href: 'https://www.amazon.in/Pidilite-Terminator-Preservative-Solution-Termite/dp/B08BPNN4CY/ref=sr_1_10?keywords=pestisides&qid=1686462616&sr=8-10',
      imageSrc: 'https://rukminim2.flixcart.com/image/850/1000/kp5sya80/baking-sparkle-topper/8/m/n/terminetor-spary-shyam-original-imag3g93eqzyytqj.jpeg?q=20',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Pure Neem Oil ',
      href: 'https://www.amazon.in/IRAS-GARDEN-Neem-Pesticides-Liter/dp/B09RVY56TN/ref=sr_1_25?keywords=pestisides&qid=1686462616&sr=8-25',
      imageSrc: 'https://m.media-amazon.com/images/I/61TR1mFO-tL._SX679_.jpg',
      imageAlt: 'Neem Oil',
    },
    {
      id: 5,
      name: 'TrustBasket Neem Oil for Plants ',
      href: 'https://www.amazon.in/TrustBasket-neem-Oil-Plants-200ml/dp/B07F8R7JPP/ref=sr_1_2_sspa?crid=2A3MGKN15GWRV&keywords=pestisides&qid=1686462525&sprefix=pestidi%2Caps%2C247&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      imageSrc: 'https://m.media-amazon.com/images/I/51EksoT1BzL._SX679_.jpg',
      imageAlt: 'Neem Oil',
    },
    {
      id: 6,
      name: 'Pure Neem Oil Spray On Plants ',
      href: 'https://www.amazon.in/Natural-Organic-Pressed-Plants-Measuring/dp/B075THM1T3/ref=sr_1_6?keywords=pestisides&qid=1686462616&sr=8-6',
      imageSrc: 'https://m.media-amazon.com/images/I/81AfNRzeCvL._SX679_.jpg',
      imageAlt: 'Neem Spray.',
    },
    {
      id: 7,
      name: 'Pidilite Terminator',
      href: 'https://www.amazon.in/Pidilite-Terminator-Preservative-Solution-Termite/dp/B08BPNN4CY/ref=sr_1_10?keywords=pestisides&qid=1686462616&sr=8-10',
      imageSrc: 'https://rukminim2.flixcart.com/image/850/1000/kp5sya80/baking-sparkle-topper/8/m/n/terminetor-spary-shyam-original-imag3g93eqzyytqj.jpeg?q=20',
      imageAlt: '',
    },
    {
      id: 8,
      name: 'Pure Neem Oil ',
      href: 'https://www.amazon.in/IRAS-GARDEN-Neem-Pesticides-Liter/dp/B09RVY56TN/ref=sr_1_25?keywords=pestisides&qid=1686462616&sr=8-25',
      imageSrc: 'https://m.media-amazon.com/images/I/61TR1mFO-tL._SX679_.jpg',
      imageAlt: 'Neem Oil',
    }
  ]
export const Market = () => {
  return (
    <>
<div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-indigo-600 font-medium">
                         Products for everyone
                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                    Empowering Farmers, Growing Communities  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">& Harvesting a Brighter Future</span>
                    </h2>  
                </div>
                
            </div>

    
   
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-8 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-4">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-64 h-64 rounded-lg overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="max-w-full h-full object-cover rounded-lg border-4"
                />
              </div>
              <h3 className="mt-4 text-lg text-gray-900 font-bold">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
</>
  )
}


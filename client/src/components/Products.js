import React from 'react'
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      price: 3000,
      href: '#',
      imageSrc: 'https://www.allaboutgardening.com/wp-content/uploads/2022/03/Best-Organic-Fertilizers-1200x667.jpg',
      imageAlt: 'Pump',
    },
    {
      id: 2,
      name: '',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'XYZ',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'ABC',
      href: '#',

      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
        id: 4,
        name: 'ABC',
        href: '#',

        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
        id: 4,
        name: 'ABC',
        href: '#',

        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
        id: 4,
        name: 'ABC',
        href: '#',

        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
        id: 4,
        name: 'ABC',
        href: '#',

        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
  ]

export default function Products() {
    return (
        <div>
            <div className='container text-center pt-10'>
        <span className="bg-clip-text xl:px-16 font-semibold text-[80px] text-600">
          Products
        </span>
            </div>

            <div className='container text-center pb-10'>
        <span className="bg-clip-text xl:px-16 font-light text-[20px] text-600">
          Enhancing agricultural productivity with innovative tools and equipment for farming, irrigation, and crop management.
        </span>
            </div>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-8 px-8 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-4">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="w-full h-64 rounded-lg overflow-hidden">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="max-w-full h-full object-cover rounded-lg border-4"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
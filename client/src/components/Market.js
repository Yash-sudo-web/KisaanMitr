import React from "react";
const products = [
    {
      id: 1,
      name: 'XXX',
      href: 'https://cropaia.com/blog/rust-diseases/',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/products/chillisplgeolife_280x.webp?v=1671110705',
      imageAlt: 'rust',
    },
    {
      id: 2,
      name: 'XXX',
      href: 'https://www.epicgardening.com/blight-on-plants/',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/products/1_10_07cb51ba-c7c7-4b3b-9f91-a83a32da8e3d_280x.webp?v=1671451008',
      imageAlt: 'Olive.',
    },
    {
      id: 3,
      name: 'Powdery Mildew',
      href: 'https://www.gardendesign.com/how-to/powdery-mildew.html',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/files/1_2489a9ef-d924-4979-9dcd-83a394face29_280x.webp?v=1684479981',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Fusarium Wilt',
      href: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetnatural.com%2Fpest-problem-solver%2Fplant-disease%2Ffusarium-wilt%2F&psig=AOvVaw3qf47iyFIQ5OsaDWMG2AIp&ust=1685628969416000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD0-LHfn_8CFQAAAAAdAAAAABAE',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/products/mango-harvester-pack-1-removebg-preview_280x.png?v=1676448916',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
        id: 5,
        name: 'Verticillium Wilt',
        href: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fag.umass.edu%2Fvegetable%2Ffact-sheets%2Fsolanaceous-verticillium-wilt&psig=AOvVaw2BntYNBPAKtfioF5MudwNS&ust=1685629056477000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND_utvfn_8CFQAAAAAdAAAAABAJ',
  
        imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/files/2_1a869c10-48a6-43ab-a0e5-3ad458f4f048_280x.webp?v=1683792115',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
        id: 6,
        name: 'Bacterial Spot',
        href: 'https://u.osu.edu/vegetablediseasefacts/files/2014/06/bacterialLeafSpot01-1pprt5r-300x225.jpg',
  
        imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/files/2_1a869c10-48a6-43ab-a0e5-3ad458f4f048_280x.webp?v=1683792115',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },{
      id: 6,
      name: 'Bacterial Spot',
      href: 'https://u.osu.edu/vegetablediseasefacts/files/2014/06/bacterialLeafSpot01-1pprt5r-300x225.jpg',
  
      imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/files/2_1a869c10-48a6-43ab-a0e5-3ad458f4f048_280x.webp?v=1683792115',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },{
    id: 6,
    name: 'Bacterial Spot',
    href: 'https://u.osu.edu/vegetablediseasefacts/files/2014/06/bacterialLeafSpot01-1pprt5r-300x225.jpg',
  
    imageSrc: 'https://cdn.shopify.com/s/files/1/0722/2059/files/2_1a869c10-48a6-43ab-a0e5-3ad458f4f048_280x.webp?v=1683792115',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  ]

const Market = () => {
  return (
    <>
    <div className="mx-auto container px-6 xl:px-0 py-12">
      <div className="flex flex-col">
        <div className="relative">
          <img
            className="hidden sm:block w-full h-80"
            src="https://cdn.pixabay.com/photo/2015/08/03/10/27/banner-873111_960_720.jpg"
            alt="bohot maka derahe hai"
          />
          <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-slate-100">
              Our Products
            </p>
          </div>
        </div>
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
  );
};

export default Market;

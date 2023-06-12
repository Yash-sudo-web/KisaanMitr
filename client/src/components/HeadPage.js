/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import './Footer.css';
import '.././App.css'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import gurmann from "../static/gur.jpg"
import yash from "../static/yash.jpeg"
import har from "../static/harsh.jpg"

const products = [
  {
    id: 1,
    name: 'Rust',
    href: 'https://cropaia.com/blog/rust-diseases/',
    imageSrc: 'https://www.cropscience.bayer.us/-/media/Bayer-CropScience/Country-United-States-Internet/Images/Learning-Center/Articles/Heros/Leaf-rust.ashx?w=770&sc_lang=en&hash=B5620D7EB0B8F5193EC46ED7B9877828',
    imageAlt: 'rust',
  },
  {
    id: 2,
    name: 'Blight',
    href: 'https://www.epicgardening.com/blight-on-plants/',
    imageSrc: 'https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg',
    imageAlt: 'Olive.',
  },
  {
    id: 3,
    name: 'Powdery Mildew',
    href: 'https://www.gardendesign.com/how-to/powdery-mildew.html',
    imageSrc: 'https://www.gardendesign.com/pictures/images/400x320Exact_0x0/site_3/powdery-mildew-powdery-mildew-on-squash-leaf-shutterstock-com_13365.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Fusarium Wilt',
    href: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetnatural.com%2Fpest-problem-solver%2Fplant-disease%2Ffusarium-wilt%2F&psig=AOvVaw3qf47iyFIQ5OsaDWMG2AIp&ust=1685628969416000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD0-LHfn_8CFQAAAAAdAAAAABAE',
    imageSrc: 'https://www.planetnatural.com/wp-content/uploads/2012/12/fusarium-wilt-tomato.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },{
      id: 5,
      name: 'Verticillium Wilt',
      href: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fag.umass.edu%2Fvegetable%2Ffact-sheets%2Fsolanaceous-verticillium-wilt&psig=AOvVaw2BntYNBPAKtfioF5MudwNS&ust=1685629056477000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND_utvfn_8CFQAAAAAdAAAAABAJ',

      imageSrc: 'https://ag.umass.edu/sites/ag.umass.edu/files/fact-sheets/images/eggplant_verticillium_wilt.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },{
      id: 6,
      name: 'Bacterial Spot',
      href: 'https://u.osu.edu/vegetablediseasefacts/files/2014/06/bacterialLeafSpot01-1pprt5r-300x225.jpg',

      imageSrc: 'https://u.osu.edu/vegetablediseasefacts/files/2014/06/bacterialLeafSpot01-1pprt5r-300x225.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },{
    id: 7,
    name: 'Bacterial ring rot',
    href: 'https://ipm.ucanr.edu/agriculture/potato/bacterial-ring-rot/#:~:text=The%20bacterial%20ring%20rot%20bacterium,commonly%20when%20seed%20is%20cut.',

    imageSrc: 'https://www.growingproduce.com/wp-content/uploads/2013/05/41851.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
},{
  id: 8,
  name: 'Tan spot',
  href: 'https://cropwatch.unl.edu/plantdisease/wheat/tan-spot',

  imageSrc: 'https://content.peat-cloud.com/w400/tan-spot-wheat-1582621602.jpg',
  imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
},
]
export default function HeadPage() {
  return (
    <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              </nav>
            </div>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-amber-400 sm:text-5xl md:text-6xl">
                <span className="block xl: text-600 xl:inline" style={{ marginLeft: '100px' }}>किसान </span>
                <br></br>
              </h1>

              <h1 className="text-4xl tracking-tight font-extrabold text-400 sm:text-5xl md:text-6xl">
                <span className="block xl: text-600 xl:inline" style={{ marginLeft: '220px' }}> मित्र</span>
                <br></br>
              </h1>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              At KisanMitra, we revolutionize crop disease detection and management with CropCheck. Our web application utilizes advanced technology, AI, and deep learning algorithms to efficiently identify and combat crop diseases, ensuring food security and sustainable agriculture. </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/Cropchecker"
                    className="transition ease-in-out delay-150 bg-amber-400 text-white hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 duration-300 w-full flex content-centre justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full animate-[wiggle_1s_ease-in-out_infinite]"
          src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?cs=srgb&dl=pexels-alejandro-barr%C3%B3n-96715.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
    <div>
    <div className="container my-24 px-6 mx-auto">

<section className="mb-32 text-gray-800 text-center">

  <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

  <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
    <div className="carousel-inner relative w-full overflow-hidden">
      <div className="carousel-item active relative float-left w-full">
        <img className="rounded-full shadow-lg mb-6 mx-auto"
          src="https://thumbs.dreamstime.com/b/new-delhi-india-january-indian-poor-man-came-to-see-preparations-day-parade-portrait-103167033.jpg" alt="avatar" style={{"width":"150px"}} />
        <div className="flex flex-wrap justify-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
            <h5 className="text-lg font-bold mb-3">Bhajan lal</h5>
            <p className="font-medium text-gray-700 mb-4">Farmer</p>
            <p className="text-gray-500 mb-6">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                </path>
              </svg>मैं एक किसान के रूप में एक फसल के रोग की पहचान करने वाले ऐप के बारे में अपनी समीक्षा प्रस्तुत करना चाहूंगा। यह ऐप मेरे लिए एक महत्वपूर्ण साधारण कर्तव्य को सुनिश्चित करने में मदद करता है - मेरी फसलों को स्वस्थ रखने और रोगों की पहचान करने के लिए।
            </p>
            <ul className="flex justify-center mb-0">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                  </path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img className="rounded-full shadow-lg mb-6 mx-auto"
          src="https://media.istockphoto.com/id/1163985476/photo/portrait-of-schoolgirl-standing-at-school-campus.jpg?s=612x612&w=0&k=20&c=TnJrtqufrvW4zvF1_aklh3Zj7B5wnSYqXVrEUMnjZzg=" alt="avatar" />
        <div className="flex flex-wrap justify-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
            <h5 className="text-lg font-bold mb-3">Lakshmi</h5>
            <p className="font-medium text-gray-700 mb-4">Student</p>
            <p className="text-gray-500 mb-6">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                </path>
              </svg>
              यह वेबसाइट बहुत ही उपयोगी है और किसानों के लिए एक महत्वपूर्ण स्रोत है। इसका उपयोग करके, हम कृषि फसलों को पहचानने में मदद प्राप्त कर सकते हैं। इस वेबसाइट के द्वारा, हम अपने फसलों की जानकारी दर्ज करके उन्हें पहचान सकते हैं और संभावित बीमारियों, कीटों, या पोषक तत्वों की जांच कर सकते हैं।
            </p>
            <ul className="flex justify-center mb-0">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512">
                  <path fill="currentColor"
                    d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z">
                  </path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img className="rounded-full shadow-lg mb-6 mx-auto"
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="avatar" />
        <div className="flex flex-wrap justify-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
            <h5 className="text-lg font-bold mb-3">Anna Deynah</h5>
            <p className="font-medium text-gray-700 mb-4">UX Designer</p>
            <p className="text-gray-500 mb-6">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                </path>
              </svg>Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
              ligula felis, sagittis eget nisi vitae.
            </p>
            <ul className="flex justify-center mb-0">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                  className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                  </path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

</section>

</div>
    </div>
    <div>
            <div className='container text-center pt-10'>
        <span className="bg-clip-text xl:px-16 font-semibold font-serif text-[40px] text-600 text-amber-400 animate-pulse">
          CROP DISEASES YOU SHOULD KNOW
        </span>
            </div>

            <div className='container text-center pb-10'>
        <span className="bg-clip-text xl:px-16 font-light text-[20px] text-600">
        Crop diseases are a significant concern for farmers as they can cause significant damage to crops, leading to reduced yields and economic losses. 
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
                                <h3 className="mt-4 text-lg text-gray-900 font-bold">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>



        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-amber-400">MEET OUR TEAM</h2>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <img className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-80 mx-auto" src={yash} alt="Image Description" />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Yash Mathur
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Backend Developer
            </p>
          </div>
        </div>
        {/* End Col */}
        
        <div className="text-center">
          <img className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-80 mx-auto" src={gurmann}  alt="Image Description" />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
              Gurmann Singh Jaggi
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              ML developer
            </p>
          </div>
        </div>
        {/* End Col */}
        
        <div className="text-center">
          <img className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-80 mx-auto" src={har} alt="Image Description" />
          <div className="mt-2 sm:mt-4">

            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">

              Harsh Mahajan
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Frontend Developer
            </p>
          </div>
        </div>
        {/* End Col */}
        
        {/* Repeat the above code for the remaining grid items */}
        
      </div>
      {/* End Grid */}
    </div>



<section className="bg-white border-spacing-2 border-s-violet-50">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center">
      <h2 className="mb-4 text-3xl font-extrabold text-center text-amber-400 sm:text-4xl">
        Sign up for our newsletter
      </h2>
      <p className=" text-amber-500 text-center md:mb-12 sm:text-xl">
        Stay up to date with the roadmap progress, announcements, and exclusive discounts.
        Feel free to sign up with your email.
      </p>
      <form action="#">
        <div className="flex flex-col items-center space-y-4 max-w-screen-sm sm:flex-row sm:space-y-0">
          <div className="relative w-full items-center">
            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              className="block w-full p-3 pl-10 text-right text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter your email"
              type="email"
              id="email"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-5 py-3 w-full text-sm font-medium text-amber-500 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm mt-4 text-sm text-gray-500 newsletter-form-footer">
          We care about the protection of your data.{" "}
          <a href="#" className="font-medium text-black dark:text-primary-500 hover:underline">
            Read our Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  </div>
</section>
        <div className=" bg-amber-900 text-white py-8 px-4" id="login">
  <div className="max-w-4xl mx-auto flex justify-between items-center">
    <div className="w-1/2">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-2">K-37, H-block, Vikas Puri</p>
      <p className="text-lg mb-2">+91 9289039721</p>
      <p className="text-lg mb-2">+91 8595288895</p>
    </div>

    <div className="w-1/2">
      <p className="text-lg mb-4">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
      <div className="flex">
        <div className="mr-4">
          <FiFacebook className="text-2xl" />
        </div>
        <div className="mr-4">
          <FiTwitter className="text-2xl" />
        </div>
        <div>
          <FiInstagram className="text-2xl" />
        </div>
      </div>
    </div>

    <div className="w-1/2 px-6">
      <h1 className="text-3xl font-bold mb-4">Join Us</h1>
      <p className="text-lg mb-2">Monday-Friday:</p>
      <p className="text-lg mb-2">08:00 am - 12:00 am</p>
      <p className="text-lg mb-2">Saturday-Sunday:</p>
      <p className="text-lg mb-2">07:00 am - 11:00 pm</p>
    </div>
  </div>

  <div className="max-w-4xl mx-auto border-t border-white pt-4 mt-8">
    <p className="text-center text-sm">&copy; 2023 Team-UpperMoons. All Rights reserved.</p>
  </div>
</div>
    </>
  )
}

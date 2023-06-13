import React from 'react'
import ladki from "../static/ladki.jpg"
import ladka from "../static/giphy.gif"

export const Cropchecker = () => {
  return (
    <>
    <br></br>
    <div className="flex flex-wrap py-[30px] p-[20px] ">
      <div className="flex items-center w-full lg:w-1/2 ">
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl font-bold px-3 leading-snug tracking-tight text-amber-400 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
            What Disease Does Your Crop Have?
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl p-3">
          CropChecker employs state-of-the-art image analysis techniques to detect subtle visual cues indicative of crop diseases. It can identify various types of diseases, including fungal, bacterial, and viral infections, as well as pest infestations and nutrient deficiencies.
          </p>

          <div className="flex flex-col items-starts space-y-10 px-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://dis-43yb.onrender.com"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
              Try It!
            </a>
            
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <img src={ladka}></img>
        </div>
      </div>
    </div>
    <div>
      <div className="flex flex-col justify-center">
        <div className="text-md text-center text-gray-700 ">
          The Results shown may not be accurate <span className="text-indigo-600">always</span>{" "}
        </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-wrap py-[80px]">
  <div className="flex items-center w-full lg:w-1/2">
    <div className="flex items-center justify-center w-full lg:w-3/4">
      <div>
        <img src={ladki} alt="Crop Image" />
      </div>
    </div>
  </div>
  <div className="max-w-2xl mb-8">
    <h1 className="text-3xl font-bold leading-snug tracking-tight text-blue-400 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
    Crop Recommendation
    </h1>
    <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl p-3">
    Crop recommendation based on machine learning models can assist farmers in making informed decisions regarding the suitable crop for their land. By analyzing various factors such as temperature, humidity, pH, and rainfall, the model can predict the most appropriate crop to maximize yield and optimize agricultural practices.
    </p>

    <div className="flex flex-col items-start text-right space-y-3 px-32 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
      <a
        href="https://flask-mv0p.onrender.com/"
        target="_blank"
        rel="noopener"
        className="px-8 py-4 text-lg text-right ml-auto font-medium text-white bg-amber-400 rounded-md"
      >
         Explore
      </a>
    </div>
  </div>
</div>

  </>
  )
}


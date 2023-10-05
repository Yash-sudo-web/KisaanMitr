import React from 'react'
import BasicTabs from './Tabs'
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
            <BasicTabs></BasicTabs>
          </div>
        </div>
      </div>
    </>
  )
}

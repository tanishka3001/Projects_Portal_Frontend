import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Grids = () => {
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
    return (
        <div>
        <div className="md:hidden relative mx-4 my-8 rounded-xl border-4 border-gray-200 shadow-xl overflow-hidden">
        <div className="relative h-80 w-full bg-gray-100">
          <div className="flex h-full items-center justify-center p-4">
            <img 
              src={images[currentIndex]} 
              alt={`Project ${currentIndex + 1}`}
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all"
          >
            <FiChevronLeft className="text-gray-700 text-xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all"
          >
            <FiChevronRight className="text-gray-700 text-xl" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

        <div className="hidden md:flex md:mb-[600px] md:mt-[600px]  md:flex-col justify-center items-center h-screen gap-14 ">
    <div className="flex flex-row items-start gap-24 mt-24">
        <div className="flex flex-col gap-4">
            <div className="w-96 h-96 bg-white border border-black rounded-lg flex items-center justify-center">
                Box 1
            </div>
            <div className="mt-4 w-96 h-14 bg-black rounded-lg flex items-center justify-center">
                Box 2
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="w-[500px] h-56 bg-white border border-black rounded-lg flex items-center justify-center">
                Box 3
            </div>
            <div className="flex gap-10">
                <div className="w-56 h-56 bg-white border border-black rounded-lg flex items-center justify-center">
                    Box 4
                </div>
                <div className="w-56 h-56 bg-white border border-black rounded-lg flex items-center justify-center">
                    Box 5
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-row gap-10 mt-10">
        <div className="flex flex-col mr-3">
            <div className="w-80 h-80 mr-4 bg-white border border-black rounded-lg flex items-center justify-center mb-6">
                Column A
            </div>
            <div className="w-80 h-64 bg-white border border-black rounded-lg flex items-center justify-center">
                Column B
            </div>
        </div>

        <div className="flex flex-col">
            <div className="w-[500px] h-[400px] bg-white border border-black rounded-lg flex items-center justify-center">
                Column C
            </div>
            <div className="mt-12 w-[500px] h-36 bg-[#27A5EF] border border-black rounded-lg flex items-center justify-center">
            </div>
        </div>
    </div>

    <div className="flex flex-row gap-8 mt-10">
        <div className="flex flex-col">
            <div className="w-96 h-64 bg-white border border-black rounded-lg flex items-center justify-center">
                col1 box1
            </div>
            <div className="mt-6 w-96 h-10 bg-[#27A5EF] border border-black rounded-lg flex items-center justify-center">
            </div>
        </div>

        <div className="w-[500px] h-80 ml-2 bg-white border border-black rounded-lg flex items-center justify-center">
            col2 box
        </div>
    </div>
    <div className="flex flex-row text-lg font-serif mt-12 mb-10">
        ⚫ More Projects Coming Soon ⚫
    </div>
</div>
  </div>
    );
};

export default Grids;
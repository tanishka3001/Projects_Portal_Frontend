import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Grids = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            image: "https://i.ibb.co/6c9tsC8H/Whats-App-Image-2025-03-31-at-11-54-19-PM.jpg",
            github: "https://github.com/ISTE-VIT/TexAR"
        },
    ];

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
                <div className="relative h-96 w-full bg-gray-100">
                    <div className="flex h-full items-center justify-center p-4">
                        <img
                            src={images[currentIndex]}
                            alt={`Project ${currentIndex + 1}`}
                            className="h-full w-full object-contain rounded-lg"
                        />
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all"
                    >
                        <FiChevronLeft className="text-gray-700 text-lg" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all"
                    >
                        <FiChevronRight className="text-gray-700 text-lg" />
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
    <div className="hidden md:flex md:my-[60vw] md:flex-col justify-center items-center h-screen gap-14">
      <div className="grid grid-cols-2 mt-24">
        {/* Box 1 */}
        <div className="flex flex-col gap-10 ">
          <a
            href={projects[0].github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36vw] aspect-square bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
                View on GitHub
              </span>
            </div>
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </a>
          <div className="w-[36vw] h-14 bg-black rounded-lg flex items-center justify-center text-white">
            Box 2
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col gap-10">
          <a href="#" className="w-[43vw] h-[20vw] bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
            Box 3
          </a>
          <div className="flex gap-10">
            <a href="#" className="w-[20vw] aspect-square bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              Box 4
            </a>
            <a href="#" className="w-[20vw] aspect-square bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              Box 5
            </a>
          </div>
        </div>
      </div>

      {/* Additional Boxes */}
      <div className="flex flex-row gap-16 mt-10">
                    <div className="flex flex-col gap-10 mr-3">
                        <a href="#" className="w-[32vw] aspect-[4/3] mr-4 bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
                                    View on GitHub
                                </span>
                            </div>
                            Column A
                        </a>
                        <a href="#" className="w-[32vw] aspect-[4/3] bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
                                    View on GitHub
                                </span>
                            </div>
                            Column B
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <a href="#" className="w-[46vw] aspect-[5/4]  bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
                                    View on GitHub
                                </span>
                            </div>
                            Column C
                        </a>
                        <div className="mt-10 w-[46vw] h-36 bg-[#27A5EF] border border-black rounded-lg flex items-center justify-center">
                        </div>
                    </div>
                </div>

      {/* Last Row */}
      <div className="flex flex-row gap-20 mt-10">
        <div className="flex flex-col">
          <a href="#" className="w-[32vw] aspect-[4/3] bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
            col1 box1
          </a>
          <div className="mt-10 w-[32vw] h-10 bg-[#27A5EF] border border-black rounded-lg flex items-center justify-center"></div>
        </div>

        <a href="#" className="w-[46vw] h-[66vh] bg-white border border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
          col2 box
        </a>
      </div>

      {/* Footer */}
      <div className="flex flex-row text-lg font-serif mt-12 mb-10">
        ⚫ More Projects Coming Soon ⚫
      </div>
    </div>

        </div>
    );
};

export default Grids;
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import '../index.css'
const Grids = () => {
  const projects = [
    {
      id: 1,
      title: "TexAR",
      image: "https://i.ibb.co/fGtQfVpV/Middle-1.png",
      github: "https://github.com/ISTE-VIT/TexAR",
      tag: "/AR.png"

    },
    {
      id: 2,
      title: "PaymentX",
      image: "https://i.ibb.co/QFgn58Qg/Middle.png",
      github: "https://github.com/ISTE-VIT/PaymentX",
      tag: "/App.png"
    },
    {
      id: 3,
      title: "Smart_Home_Bot",
      image: "https://i.ibb.co/WW0F91xg/smartbot.png",
      github: "https://github.com/ISTE-VIT/Smart-Home-Bot",
      tag: "/electrical.png"
    },
    {
      id: 6,
      title: "Inferno",
      image: "https://i.ibb.co/27G2Hg3k/Middle-3.png",
      github: "https://github.com/ISTE-VIT/Inferno",
      tag: "/VR.png"
    },
    {
      id: 5,
      title: "Armed_Rover",
      image: "https://i.ibb.co/s94bN5jH/Middle-2.png",
      github: "https://github.com/ISTE-VIT/4DOF-ARMED-ROVER",
      tag: "/electrical.png"
    },
     {
      id: 6,
      title: "ReviveAI",
      image: "https://i.ibb.co/0Vt1hHpk/Middle-4.png",
      github: "https://github.com/ISTE-VIT/ReviveAI",
      tag: "/AI.png"
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div className="md:hidden relative mx-4 my-8 rounded-xl border-4 border-gray-200 shadow-xl overflow-x-hidden">
        <div className="relative h-96 w-full bg-gray-100">
          <div className="flex h-full items-center justify-center p-4 overflow-hidden">
            <a href={projects[currentIndex].github} target="_blank" rel="noreferrer" >
              <img
                src={projects[currentIndex].image}
                alt={`Project ${projects[currentIndex].id}`}
                className="h-full w-full object-contain rounded-lg"
              />
              <img
                src={projects[currentIndex].tag}
                alt=" tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
            </a>
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
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" hidden md:flex md:flex-col justify-center items-center gap-14">
        <div className="grid grid-cols-2 mt-24">
          <div className="flex flex-col gap-10 ">
            <a
              href={projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36vw] aspect-square bg-white border-4 border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105"
            >
              <img
                src={projects[0].tag}
                alt="AR tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </a>
            <div className="w-[36vw] h-14 bg-black rounded-lg flex items-center justify-center text-white">
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col gap-10">
            <a href={projects[1].github} target="_blank" rel="noopener noreferrer" className="w-[43vw] h-[20vw] bg-white border-4 border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              <img
                src={projects[1].tag}
                alt="App tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src="/portalpaymentx.png"
                alt={projects[1].title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300 "
              />
            </a>
            <div className="flex gap-10">
              <a href={projects[2].github} target="_blank" rel="noopener noreferrer" className="w-[20vw] aspect-square bg-white border-4 border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              <img
                src={projects[2].tag}
                alt="tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              </a>
              <a href={projects[3].github} target="_blank" rel="noopener noreferrer" className="w-[20vw] aspect-square bg-white border-4 border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              <img
                src={projects[3].tag}
                alt="tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src={projects[3].image}
                alt={projects[3].title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-16 mt-10">
          <div className="flex flex-col gap-10 mr-3">
            <a href={projects[4].github} target="_blank" rel="noopener noreferrer" className="w-[36vw] h-[120%] mr-4 bg-white border-4 border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src={projects[4].tag}
                alt="tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src={projects[4].image}
                alt={projects[4].title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </div>

          <div className="flex flex-col">
            <a href={projects[5].github} target="_blank" rel="noopener noreferrer" className="w-[43vw] aspect-[5/4]  bg-white border-4 border-black rounded-lg flex items-center justify-center overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src={projects[5].tag}
                alt="tag"
                className="absolute bottom-2 right-2 w-10 h-10 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
              </div>
              <img
                src="/reviveai.png"
                alt={projects[5].title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </a>
            <div className="mt-10 w-[43vw] h-[22%] bg-[#27A5EF] border-4 border-black rounded-lg flex items-center justify-center">
            </div>
          </div>
        </div>

        <div className="flex flex-row text-lg font-serif mt-8 mb-12  " style={{ fontFamily: 'Hamlin' ,fontWeight: 900}}>
          ⚫ More Projects Coming Soon ⚫
        </div>
      </div>

    </div>
  );
};

export default Grids;
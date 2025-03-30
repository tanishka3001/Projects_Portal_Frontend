import React from "react";

const Grids = () => {
  return (
    <div className="mt-8 flex flex-col justify-center items-center h-screen gap-12 ">
      {/* First Row (your existing layout) */}
      <div className="flex flex-row items-start gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-3">
          <div className="w-56 h-56 bg-white border border-black rounded-lg flex items-center justify-center">
            Box 1
          </div>
          <div className="mt-2 w-56 h-10 bg-black rounded-lg flex items-center justify-center">
            Box 2
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3">
          <div className="w-80 h-32 bg-white border border-black rounded-lg flex items-center justify-center">
            Box 3
          </div>
          <div className="flex gap-8">
            <div className="w-36 h-36 bg-white border border-black rounded-lg flex items-center justify-center">
              Box 4
            </div>
            <div className="w-36 h-36 bg-white border border-black rounded-lg flex items-center justify-center">
              Box 5
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        {/* Column 1 */}
        <div className="w-40 h-64 bg-white border border-black rounded-lg flex items-center justify-center mb-5">
          Column A
        </div>

        {/* Column 2 */}
        <div className="w-48 h-48 bg-white border border-black rounded-lg flex items-center justify-center">
          Column B
        </div>

        {/* Column 3 */}
        <div className="w-48 h-48 bg-white border border-black rounded-lg flex items-center justify-center">
          Column C
        </div>
      </div>
    </div>
  );
};

export default Grids;
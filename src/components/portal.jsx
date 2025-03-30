import React from "react";

const Grids = () => {
    return (
        <div className="hidden md:flex mb-80 mt-80 flex flex-col justify-center items-center h-screen gap-12 ">
            <div className="flex flex-row items-start gap-8">
                <div className="flex flex-col gap-3">
                    <div className="w-56 h-56 bg-white border border-black rounded-lg flex items-center justify-center">
                        Box 1
                    </div>
                    <div className="mt-2 w-56 h-10 bg-black rounded-lg flex items-center justify-center">
                        Box 2
                    </div>
                </div>

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
                <div className="flex flex-col mr-3">
                    <div className="w-52 h-52 bg-white border border-black rounded-lg flex items-center justify-center mb-5">
                        Column A
                    </div>

                    {/* Column 2 */}
                    <div className="w-52 h-52 bg-white border border-black rounded-lg flex items-center justify-center">
                        Column B
                    </div>
                </div>


                <div className="flex flex-col">
                    {/* Column 3 */}
                    <div className="w-80 h-80 bg-white border border-black rounded-lg flex items-center justify-center">
                        Column C
                    </div>
                    <div className="mt-5 w-80 h-24 bg-[#27A5EF] border border-black  rounded-lg flex items-center justify-center">
                    </div>
                </div>
            </div>


            <div className="flex flex-row gap-3">
                <div className="flex flex-col">
                <div className="w-44 h-52 bg-white border border-black rounded-lg flex items-center justify-center">
                        col1 box1
                    </div>
                    <div className="mt-5 w-44 h-7 bg-[#27A5EF] border border-black  rounded-lg flex items-center justify-center">
                    </div>

                </div>

                <div className="w-96 h-64 bg-white border border-black rounded-lg flex items-center justify-center">
                        col2 box
                    </div>
                </div>
<div className="flex flex-row text-lg font-serif">
⚫ More Projects Coming Soon ⚫
</div>

        </div>
    );
};

export default Grids;
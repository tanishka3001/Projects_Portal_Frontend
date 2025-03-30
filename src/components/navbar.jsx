import '../index';
import { FiLogIn } from "react-icons/fi"; 

const Nav = () => {
    return (
        <nav className="bg-black flex flex-col items-center w-full p-4">
            <div className="flex justify-between items-center w-full">
                <img src="/iste_logo.png" alt="ISTE logo" className="w-12 h-12" />
                <div className="flex items-center space-x-2">
                    <p className="text-white">Home</p>
                    <FiLogIn className="text-white text-xl" />
                </div>
            </div>
            <div className="text-center text-white mt-4">
                <p className="text-4xl py-3 font-serif">welcome to the</p>
                <p className="text-5xl pb-20 font-bold">ISTE Projects Portal</p>
            </div>
        </nav>
    );
};

export default Nav;

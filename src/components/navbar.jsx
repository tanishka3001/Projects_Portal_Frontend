import '../index';

const Nav = () => {
    return (
        <nav className="bg-black flex flex-col items-center w-full p-4 overflow-x-hidden">
            <div className="flex justify-between items-center w-full">
                <img src="/iste_logo.png" alt="ISTE logo" className="w-12 h-12" />
            </div>
            <div className="text-center text-white mt-4">
                <p className="text-2xl md:text-4xl py-3 font-serif">welcome to the</p>
                <p className="text-3xl md:text-5xl pb-10 md:pb-20 font-bold">ISTE Projects Portal</p>
            </div>
        </nav>
    );
};

export default Nav;

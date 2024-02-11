import Navbar from "./Navbar/Navbar";

const NavHeader = () => {
    return (
        <div className={`bg-cover  bg-center object-cover  h-screen w-full flex flex-col justify-between `} style={{ backgroundImage: `url('https://feugjay.com/wp-content/uploads/2020/11/shopping-banniere.jpg')` }}  >
            <nav className="bg-white h-16 flex items-center justify-center  py-2">
                <div className="container flex mx-auto  items-center px-4 py-2  justify-between">

                    <div className="text-gray-800   flex gap-4 justify-around ">
                        <h1 className='text-2xl tracking-wide font-bold'>CEIN.</h1>
                        <ul className="flex ml-10 text-gray-800 space-x-10 text-gy">
                            <li>Shop</li>
                            <li>New Arrivals</li>
                            <li>Sales</li>
                            <li>Journal</li>
                        </ul>
                    </div>

                    <div className='flex'>
                        <BsSearch 
                            className="cursor-pointer mt-3 text-gray-900"
                            size={20}
                        />
                        {/* <NavInput/> */}
                    </div>

                    <div className=" text-gray-800 flex gap-4 justify-around ">
                       

                        <BsPersonCircle
                            className="cursor-pointer"
                            size={20} />
                        <Link to="/Panier" className="flex items-center">
                            <span className="mr-2">
                                <ShoppingCartIcon className="w-6 h-6" />
                            </span>
                        </Link>
                    </div>

                </div>
            </nav>

            <div className='mb-5 w-80 h-32 flex flex-col justify-center items-center ' >
                <h1 className='text-md text-white '>Mon text ajouter,kjkjhrkjhkjhkhhk</h1>
                <button className='bg-white text-sm '>Shop Now</button>
            </div>
        </div>
    );
}


export default NavHeader;

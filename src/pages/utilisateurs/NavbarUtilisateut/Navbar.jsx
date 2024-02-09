
import React, { useState } from 'react';
import image1 from '../../../assets/images/Imag_banier.avif';
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import NavInput from './NavInput';
import ComponentButton from '../../../usersComponents/button/ComponentButton';
import "../../../utils/styles/index.css"
import ImgLigo from "../../../assets/images/kaay-Solu.png"


const NavHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className={`bg-cover bg-center h-[50rem] w-full flex flex-col justify-between `} style={{ backgroundImage: `url(${image1})` }}>
            <nav className="bg-white py-0">
                <div className="container mx-auto items-center px-4 flex justify-between">
                    <div className="text-gray-800 flex gap-4 justify-around items-center">
                       <img src={ImgLigo} alt="img" className='w-40 h-32'/>
                        <ul className="hidden text-xl lg:flex ml-10 text-gray-800 space-x-10">
                        <Link to="/Shop" className="flex items-center cursor-pointer "><li>Shop</li></Link>
                        <Link to="/NewArrivals" className="flex items-center cursor-pointer "><li>New Arrivals</li></Link>
                        <Link to="/Sales" className="flex items-center cursor-pointer "><li>Sales</li></Link>
                        <Link to="/Journal" className="flex items-center cursor-pointer "><li>Journal</li></Link>
                        </ul>
                    </div>

                    <div className=" flex mt-4">
                        <BsSearch className="hidden sm:flex cursor-pointer text-gray-900" size={20} />
                        <NavInput className="md:mt-8" />

                    </div>
                    <div className="hidden md:flex text-gray-800 flex gap-4 justify-around items-center">
                        <BsPersonCircle className="cursor-pointer" size={20} />
                        <Link to="/Panier" className="flex items-center">
                            <span className="mr-2">
                                <ShoppingCartIcon className="w-6 h-6" />
                            </span>
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <FaBars
                                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                            />
                            
                            <BsX 
                                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                            />
                    
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="container mx-auto mt-4">
                        <ul className="flex flex-col text-gray-800 space-y-2">
                        <Link to="/ListShop" className="flex items-center cursor-pointer"><li>Shop</li></Link>
                            <li>New Arrivals</li>
                            <li>Sales</li>
                            <li>Journal</li>
                        </ul>
                        <div className="flex gap-2 mt-4">
                            <BsPersonCircle className="cursor-pointer" size={20} />
                            <Link to="/Panier" className="flex items-center">
                                <span className="mr-2">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <div className='mb-5 w-80 h-32 flex flex-col justify-center'>
                <h1 className='text-md text-white pl-5 text-xl'>Elevate Your style <br /> Timeless Fashion, Sustainable Choice</h1>
                <ComponentButton className='bg-white ml-5 text-md text-black w-40 h-12 my-5 text-xl rounded-lg' texte='Shop Now' />

            </div>
        </div>
    );
}

export default NavHeader;

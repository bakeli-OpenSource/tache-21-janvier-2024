import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../../usersComponents/footer/Footer";
import { Link } from "react-router-dom";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import img0 from "../../../../assets/images/img.jpg";
import img1 from "../../../../assets/images/imgShop1.jpg";
import img2  from "../../../../assets/images/imgShop2.webp";
import img3 from "../../../../assets/images/imgShop3.jpg";
import img4  from "../../../../assets/images/imgShop4.jpg";
import img5 from "../../../../assets/images/imgShop5.webp";
import img6 from "../../../../assets/images/imgShop6.webp";
import img7 from "../../../../assets/images/imgShop7.jpg";
import img8 from "../../../../assets/images/imgShop8.webp";
import img9 from "../../../../assets/images/imgShop9.webp";

const Shop = () => {
    const [heartColors, setHeartColors] = useState(Array(10).fill('white'));

    // Fonction pour changer la couleur du bouton "j'aime" au clic
    const changeHeartColor = (index) => {
        const newHeartColors = [...heartColors];
        newHeartColors[index] = newHeartColors[index] === 'white' ? 'red' : 'white';
        setHeartColors(newHeartColors);
    };

    return (
        <>
            <div className="mb-9">
                <Navbar className="border-2 bg-white  border-b-gray-400 z-50 fixed top-0 w-full"/>
            </div>
            <div className=" bg-white px-9 mx-auto z-0 flex flex-col  ">
                <h1 className="mt-9 text-2xl">Shop</h1>
                <div
                    className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
                     max-w-sm  md:max-w-none md:mx-auto py-16 justify-center content-center"
                >
                    {[img0, img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
                        <div key={index} className=" items-center justify-center w-full h-full static border">
                            <div className="relative">
                                <img className="h-[20rem] w-[50rem]" src={img} alt="image" />
                                <div className="flex flex-col items-center justify-center p-1 transition-all ">
                                    <button className="absolute top-3 right-2 ">
                                        <div className="flex items-center justify-center text-black w-7 h-7">
                                            <BsSuitHeartFill className='text-3xl cursor-pointer' style={{ color: heartColors[index] }} onClick={() => changeHeartColor(index)} />
                                        </div>
                                    </button>
                                    <button className="absolute bottom-3 right-2 ">
                                        <div className="flex items-center justify-center text-black w-7 h-7">
                                            <BsPlus className='text-5xl cursor-pointer bold' />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className=" p-3">
                                <div className="mb-1 text-gray-500 capitalize text-md">Vetement de MISS</div>
                                <div className="font-semi-bold">17500 FCFA</div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
          
        </>
    );
}

export default Shop;

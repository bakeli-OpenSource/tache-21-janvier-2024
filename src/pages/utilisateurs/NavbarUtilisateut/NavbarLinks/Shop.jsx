import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import image6 from "../../../../assets/images/img.jpg";
const Shop = () => {
    return (
        <>
            <div className="border-2 bg-white  border-b-gray-400">
                <Navbar />
            </div>
            <div className=" bg-white px-9 mx-auto z-0 flex flex-col items-center justify-center ">
                <h1 className="mt-9">Shop</h1>
                <div
                    className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
                     max-w-sm  md:max-w-none md:mx-auto py-16 justify-center content-center"
                >
                    <div className=" mt-9">
                        <div className="">
                            <div className="flex items-center justify-center w-full h-full">
                                {/* image */}
                                <div >
                                    <img
                                        className="h-[25rem] w-[52rem]"
                                        src={image6}
                                        alt="image"
                                    />
                                    <div className="border p-3">
                                        <div className="mb-1 text-gray-500 capitalize text-md">
                                            Vetement de MISS
                                        </div>
                                        <div className="font-semi-bold">17500 FCFA</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-1 transition-all ">

                                        <button className="absolute top-2 -right-0">
                                            <div className="flex items-center justify-center text-white w-7 h-7">
                                                <BsPlus
                                                    className="text-3xl bg-indigo-900"
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-content="Ajouter au panier"
                                                />
                                                <Tooltip
                                                    id="my-tooltip"
                                                    style={{ backgroundColor: "skyblue" }}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                    {/* boutons */}
                                    {/* <div className="flex flex-col items-center justify-center p-1 transition-all "> */}
                                    {/* <button className="absolute top-2 -right-0">
                                        <div className="flex items-center justify-center text-white w-7 h-7">
                                            <BsPlus
                                                className="text-3xl bg-indigo-900"
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content="Ajouter au panier"
                                            />
                                            <Tooltip
                                                id="my-tooltip"
                                                style={{ backgroundColor: "skyblue" }}
                                            />
                                        </div>
                                    </button> */}
                                    <Link
                                        to={"/"}
                                        className="absolute flex items-center justify-center bg-pink-500 bottom-2 -right-0 w-7 h-7 text-primary drop-shadow-xl"
                                    >
                                        <BsEyeFill
                                            className="text-white"
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Voir details"
                                        />
                                        <Tooltip id="my-tooltip" style={{ backgroundColor: "skyblue" }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* catégorie, titre et prix */}

                    </div>
                </div>
            </div>

        </>
    );
}

export default Shop;
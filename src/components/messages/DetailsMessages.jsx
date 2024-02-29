import React, { useEffect, useState } from "react";
import useSidebare from "../../utils/hooks/useSidebare";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader";
import axiosInstance from "../../utils/axiosInstance";


const DetailsMessages = () => {

    const { id } = useParams();
	const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMessage = async (id) => {
            try {
                const response = await axiosInstance.get(
                    '/messages/' + id,
                );
                setData(response.data);
                // console.log(data.length);
            } catch (error) {
                console.error('Erreur lors de la récupération des Messages:', error);
            }
        };
        fetchMessage(id);
      }, [data]);

	
    const { open } = useSidebare();

  return (
    <div className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4`}>        
        {data.length !== 0 ? (
            <div className="flex items-center justify-center flex-col mt-5 ">
                <section className="w-[100%] mx-auto bg-white rounded-lg">
                    <header className="py-3 rounded-t-lg flex justify-center font-semibold w-full bg-slate-800 text-white">
                    Détail du message
                    </header>
                    <div className="text-center mt-10 flex flex-col gap-3">
                    <h1 className="text-3xl font-semibold">
                        Prospect: {""}
                        <span className="relative">
                        {data.prenomNom}
                        <div className="h-[3px] w-[100%] bg-[#365CCE] absolute left-1 -bottom-2"></div>
                        </span>
                    </h1>
                    </div>
                    <main className="mt-8 px-5 sm:px-10">
                    <h2>
                        {data.message}
                    </h2>
                    </main>
                    <footer className="mt-8">
                    <div className="bg-gray-300/60 h-[200px] flex flex-col gap-3 justify-center items-center">
                        <div className="text-center flex flex-col ">
                        <h1 className="text-[#365CCE] pb-2 font-semibold tracking-wide text-lg">
                            {data.prenomNom}
                        </h1>
                        <a
                            href={data.telephone}
                            className="text-gray-500 rounded-lg py-1 px-3 hover:bg-blue-700 hover:text-white"
                            alt="Votre Téléphone"
                        >
                            {data.telephone}
                        </a>
                        <a
                            href={`mailto:${data.email}`}
                            className="text-gray-500 rounded-lg py-1 px-3 hover:bg-blue-700 hover:text-white"
                            alt="Votre Mail"
                        >
                            {data.email}
                        </a>
                        </div>
                    </div>
                    </footer>
                </section>
            </div>) : <Loader />
        }
    </div>
  );
};
export default DetailsMessages;


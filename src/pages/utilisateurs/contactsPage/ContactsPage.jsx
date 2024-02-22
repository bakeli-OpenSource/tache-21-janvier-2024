import React from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { DiGhostSmall } from "react-icons/di";
import CompteComponent from "../../../usersComponents/compteComponent/CompteComponent";
import CommandePage from "../commandesPage/CommandePage";
import FavorisPage from "../favorisPage.jsx/FavorisPage";
import useGlobal from "../../../utils/hooks/useGlobal";

const ContactsPage = () => {
  const { client, handleLogoutUser, setClient } = useGlobal();

  const tokenClient = localStorage.getItem("tokenclient");

  const navigate = useNavigate();
  //   const { client, setClient } = useGlobal();
  //   const [formData, setFormData] = useState({
  //     prenom: "",
  //     nom: "",
  //     telephone: "",
  //     email: "",
  //     adresse: "",
  //     password: "",
  //   });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deconnexion = () => {
    if (tokenClient === null) {
      Navigate("/connexion");
    } else {
      handleLogoutUser();
    }
  };
  return (
    <div className="mt-[70px] px-9">
      <div className="container px-9 pb-3 mx-auto ">
        <div className="flex flex-col  pt-9 md:flex-row gap-9">
          <div
            className={` w-full md:w-1/4  shadow-sm    bg- px-  border border-gray-200 rounded-md  py-4`}
          >
            <div className="px-5 ">
              <h1 className="font-medium flex items-center gap-3">
                <div className=" bg-slate-800 text-white p-3 rounded-full">
                  <BsTelephone size={18} />
                </div>
                Appelez-nous
              </h1>
              <p className="text-sm my-5">
                Nous sommes disponibles 24h/24 et 7j/7
              </p>
              <p className="text-sm pb-9 border-b-2 border-slate-800">
                Téléphone: 33 870 48 76{" "}
              </p>
              <h1 className="font-medium mt-7 flex items-center gap-3">
                <div className=" bg-slate-800 text-white p-3 rounded-full">
                  <VscMail size={18} />
                </div>
                Ecrivez-nous
              </h1>
              <p className="text-sm my-5">
                Remplissez notre formulaire et nous vous contacterons sous 24h
              </p>
              <p>Emails: kaysolu@gmail.com</p>
            </div>
          </div>
          <div className="border px-9 shadow-sm py- w-full md:w-3/4">
            <h1 className="border font-medium border-t-0 border-s-0 border-e-0 pb-2 pt-4 ">
              Contactez-nous
            </h1>
            <form className="w-full px- py-4 mx-auto" onSubmit={handleSubmit}>
              <div className="mt-">
                <div className="flex flex-col justify-center w-full gap-5 mt-5 align-center md:flex-row">
                  <div className="w-full mt- mb-5 md:w-1/3">
                    <input
                      required
                      type="text"
                      id="prenom"
                      placeholder="Votre prenom"
                      name="prenom"
                      className="w-full p-2 px- mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mt- mb-5 md:w-1/3">
                    <input
                      required
                      type="tel"
                      id="nom"
                      placeholder="Votre numero"
                      name="nom"
                      className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 mt- md:w-1/3">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Votre email"
                      className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
                  <textarea
                    required
                    rows={8}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full mb-5 bg-gray-200 border p-5 pt-3 rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-end mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

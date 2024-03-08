import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../utils/axiosInstance";
import useGlobal from "../../../utils/hooks/useGlobal";
import ScrollingText from "../../../usersComponents/cards/ScrollingText";

const ContactsPage = () => {
  const [client, setClient] = useState({
    email: "",
    prenomNom: "",
    message: "",
    telephone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { closeDropdown } = useGlobal();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/messages", client);
      console.log(response);
      if (response.status === 201) {
        toast.success("Message envoyé avec succès!");
        setClient({
          prenomNom: "",
          telephone: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'ajout du produit");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
      toast.error("Erreur lors de l'envoie du message");
    } finally {
      setIsLoading(false);
    }
  };

  const updateButtonDisabled = () => {
    if (
      client.prenomNom.trim() !== "" &&
      client.email.trim() !== "" &&
      client.message.trim() !== "" &&
      client.telephone.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [client.email, client.prenomNom, client.message, client.telephone]);

  return (
    <div
      onClick={closeDropdown}
      className="mt-[60px] pt-0 md:pt-6 w-full"
    >
      <div className=" px-4 md:px-2 w-full">
        <div className="flex flex-col w-full pt-4 md:px-9 sm:px-0 md:flex-row gap-4 md:gap-9">
          <div
            className={`w-full md:w-1/4 shadow-sm border border-gray-200 rounded-md py-4`}
          >
            <div className="px-5 ">
              <h1 className="font-medium flex items-center gap-3">
                <div className=" bg-slate-800 text-white p-3 rounded-full">
                  <BsTelephone size={18} />
                </div>
                Appelez-nous
              </h1>
              <p className="text-sm my-5">
                Nous sommes disponibles 6j/7 de 9h à 19h
              </p>
              <p className="text-sm pb-9 border-b-2 border-slate-800">
                Téléphone: +221 77 982 54 32{" "}
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
          <div className="border px-3 md:px-9 shadow-sm py- w-full md:w-3/4">
            <h1 className="border font-medium border-t-0 border-s-0 border-e-0 pb-2 pt-4 ">
              Contactez-nous
            </h1>
            <form className="w-full py-4 mx-auto" onSubmit={handleSubmit}>
              <div className="mt-">
                <div className="flex flex-col justify-center w-full gap-5 mt-5 align-center md:flex-row">
                  <div className="w-full mb-0 md:mb-5 md:w-1/3">
                    <input
                      required
                      type="text"
                      id="prenom"
                      placeholder="Prénom et Nom"
                      name="prenomNom"
                      className="w-full p-2 px- mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={client.prenomNom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mt- mb-0 md:mb-5 md:w-1/3">
                    <input
                      required
                      type="tel"
                      id="tel"
                      placeholder="Téléphone"
                      name="telephone"
                      className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={client.telephone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 mt- md:w-1/3">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={client.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
                  <textarea
                    required
                    rows={8}
                    name="message"
                    placeholder="Votre message"
                    className="w-full mb-5 bg-gray-200 border px-2 p-5 pt-3 rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                    value={client.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-end mt-2">
                <button
                  type="submit"
                  disabled={isButtonDisabled || isLoading}
                  className={` px-4 py-2 text-white rounded-md  flex gap-4 items-center justify-center ${
                    isButtonDisabled || isLoading
                      ? "bg-gray-800 opacity-85 cursor-not-allowed text-disabled text-black relative"
                      : "bg-gray-900 text-active text-white hover:bg-gray-900"
                  } ${isLoading ? "relative" : ""}`}
                >
                  Envoyer le message
                  {isLoading && (
                    <div className="border-4 border-solid border-gray-300 border-t-4 border-t-slate-800 rounded-full w-5 h-5  animate-spin mr-2"></div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="px-9 md:px-1 sm:px-0">
          <ScrollingText />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactsPage;

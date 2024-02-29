import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    adresse: "",
    password: "",
  });

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateButtonDisabled = () => {
    if (
      formData.prenom.trim() !== "" &&
      formData.nom.trim() !== "" &&
      formData.telephone.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.adresse.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://kay-solu-api.onrender.com/api/authclient/signup",
        formData
      );
      setFormData({
        prenom: "",
        nom: "",
        telephone: "",
        email: "",
        adresse: "",
        password: "",
      });
      alert("Inscription réussi");
	  toast.success("Inscription réussi!");
      navigate("/connexion");
      console.log(response.data);
    } catch (error) {
      console.error(error);
	  toast.error("Merci de remplir correctement le formulaire ");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full md:w-3/4" onSubmit={handleSubmit}>
      <h1 className="text-2xl text-center">Inscription</h1>
      <div className="mt-5">
        <div className="flex flex-col justify-center w-full gap-5 mt-5 align-center md:flex-row">
          <div className="w-full mt-5 mb-5 md:w-1/2">
            <label htmlFor="prenom" className="block text-sm font-medium ">
              Prénom
            </label>
            <input
              required
              type="text"
              id="prenom"
              name="prenom"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mt-5 mb-5 md:w-1/2">
            <label htmlFor="nom" className="block text-sm font-medium ">
              Nom
            </label>
            <input
              required
              type="text"
              id="nom"
              name="nom"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
          <div className="w-full mb-4 mt- md:w-1/2">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full relative mb-5 mt- md:w-1/2">
            <label htmlFor="password" className="block text-sm font-medium ">
              Mot de pass
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.password}
              onChange={handleChange}
            />
            {showPassword ? (
              <FaEye
                onClick={updateShowPassword}
                className="absolute right-7 bottom-3 flex flex-col justify-center items-center cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={updateShowPassword}
                className="absolute right-7 bottom-3 flex flex-col justify-center items-center cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
          <div className="w-full mb-4 mt- md:w-1/2">
            <label htmlFor="adresse" className="block text-sm font-medium ">
              Adresse
            </label>
            <input
              required
              type="adresse"
              id="adresse"
              name="adresse"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.adresse}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-5 mt- md:w-1/2">
            <label htmlFor="telephone" className="block text-sm font-medium ">
              Telephone
            </label>
            <input
              required
              type="tel"
              id="telephone"
              name="telephone"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-2">
        <button
          type="submit"
          disabled={isButtonDisabled || isLoading}
          className={` px-4 py-2 text-white rounded-md  flex gap-4 items-center justify-center ${
            isButtonDisabled || isLoading
              ? "bg-gray-800 opacity-85 cursor-not-allowed text-disabled text-black relative"
              : "bg-gray-900 text-active text-white hover:bg-gray-900"
          } ${isLoading ? "relative" : ""}`}
        >
          Enregistrer
          {isLoading && (
            <div className="border-4 border-solid border-gray-300 border-t-4 border-t-slate-800 rounded-full w-5 h-5  animate-spin mr-2"></div>
          )}
        </button>
      </div>
      <p className="py-2 text-center">
        Vous avez deja un compte ?{" "}
        <Link
          to="/connexion"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Se connecter
        </Link>{" "}
      </p>
    </form>
  );
};

export default Form;

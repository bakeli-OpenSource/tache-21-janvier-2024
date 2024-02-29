import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useGlobal from "../../utils/hooks/useGlobal";
import axiosInstance from "../../utils/axiosInstance";

const Form = () => {
  const navigate = useNavigate();
  const {profileUser} = useGlobal()
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    profileUser()
  })

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateButtonDisabled = () => {
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/authclient/login", formData)
      .then((response) => {
        console.log(response.data); // Connexion réussie, vous pouvez gérer le token ici
        const token = response.data.token;
        // Stocker le token dans le local storage
        localStorage.setItem("tokenclient", token);
        // Rediriger l'utilisateur vers une autre page par exemple
        navigate("/Panier");
      })
      .catch((error) => {
        console.error(error); // Gérer les erreurs ici
        alert("Email ou mot de passe incorrect");
      });
      profileUser()
  };

  return (
    <form
      className="w-full transition-all duration-700 md:w-3/4 translate-x-"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-center">Connexion</h1>
      <div className="w-full mx-auto mt-5 md:w-1/2">
        <div className="w-full mb-4 mt- ">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full relative mb-5 mt- ">
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
              className="absolute right-7 bottom-3 flex flex-col justify-center items-center"
            />
          ) : (
            <FaEyeSlash
              onClick={updateShowPassword}
              className="absolute right-7 bottom-3 flex flex-col justify-center items-center"
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full px-4 py-2 text-white  rounded-md md:w-1/2  ${
            isButtonDisabled
              ? "bg-gray-800 opacity-85 cursor-not-allowed text-disabled text-black"
              : "bg-gray-900 text-active text-white hover:bg-gray-900"
          }`}
        >
          Se connexion
        </button>
      </div>
      <p className="py-2 text-center">
        Vous n'avez pas de compte?{" "}
        <Link
          to="/inscription"
          className="text-blue-500 underline hover:text-blue-700"
        >
          S'inscrire
        </Link>{" "}
      </p>
    </form>
  );
};

export default Form;


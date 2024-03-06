import React, { useState, useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useGlobal from "../../../utils/hooks/useGlobal";
import icone from "../../../assets/images/icone.jpg";

const AdminConnexion = () => {
  const { email, setEmail, password, setPassword, handleLogin, isLoading } =
    useGlobal();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const updateButtonDisabled = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [email, password]);

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex  items-center  justify-center min-h-screen  bg-gray-100 ">
      <form
        className="w-full flex  items-center  justify-center text-center w-full  "
        onSubmit={handleSubmit}
      >
        <div className="min-w-96 bg-white px-4 md:px-0 rounded-2xl shadow-2xl flex flex-col-reverse flex-row md:flex-row w-2/3 max-w-4xl">
          <div className="md:w-3/5 py-5">
            <div className="py-10">
              <h2 className="text-2xl font-bold text-slate-800 md:text-center">
                Connectez-vous au compte
              </h2>
              <div className="border-2 w-10 border-slate-800 inline-block mb-2"></div>

          <div className="w-full mx-auto mt-5 ">

              <div className="mb-4 md:px-6 mx-auto">
                <label htmlFor="email" className="block text-sm font-medium  left-6 w-1/6  ">
                  Email

                </label>
                <input
                  required
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100   w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  
                />
            </div>
              <div className="relative md:px-6 mx-auto">
          <label htmlFor="password" className="block text-sm font-medium  left-5 w-1/5  min-w-24 ">
            Mot de passe
          </label>
          <input
            required
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="bg-gray-100 w-full p-2 mt-1 px-2 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <FaEye
              onClick={updateShowPassword}
              className="absolute right-7 pr-3 text-3xl bottom-1 md:pl-0 flex flex-col justify-center items-center"
            />
          ) : (
            <FaEyeSlash
              onClick={updateShowPassword}
              className="absolute right-7 pr-3 text-3xl bottom-1 md:pl-0 flex flex-col justify-center items-center"
            />
          )}
        </div>

              </div>
              <div className=" items-center text-center text-xs mt-3">
                <label htmlFor="default-checkbox" className="text-center ">
                  {" "}
                  Mot de passe oublié ?
                </label>
              </div>
              <div className="mt-4 md:px-4">
               
                <button
                  type="submit"
                  disabled={isButtonDisabled || isLoading}
                  className={`bg-gray-100 w-full flex gap-4 items-center  justify-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-6 mx-auto py-3 focus:outline-none${
                    isButtonDisabled || isLoading
                      ? "bg-gray-800 opacity-85 cursor-not-allowed text-disabled text-black relative "
                      : "bg-gray-900 text-active text-white bg-gray-900"
                  } `}
                >
                  connexion
                  {isLoading && (
                    <div className="border-4 border-solid border-gray-300 border-t-4 border-t-slate-800 rounded-full w-5 h-5  animate-spin mr-2"></div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 min-w-65 min-h-80 min-w-[220px] bg-slate-800 text-white hidden md:block rounded-tr-2xl rounded-br-2xl py-[50px] px-5">
            {/* <p className="mb-2">
              Remplissez vos informations personnelles et connectez vous sur votre
              appli
            </p> */}
            <img src={icone} alt="icone page "
            
            />
            {/* <h2 className="text-3xl font-bold mb-2">Bienvenue</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminConnexion;



  {/* <div className="mt-5 mb-7 ">
                <label
                  className={`absolute left-17 py-1 transition-all duration-300 flex  items-center text-center px-10 ${
                    focused || value || email !== "" 
                      ? "text-sm text-black  transform -translate-y-5 border-none ml-1 text-center"
                      : ""
                  }`}
                  htmlFor="text"
                >
                  E-mail
                </label>
                <input
                  id={label}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required="@"
                  className={`bg-gray-100  md:w-96 min-w-80  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-2 ml-3 py-3 focus:outline-none  ${
                    focused || value ? "border-transparent" : "border-gray-300"
                  }`}
                  placeholder={focused || value ? "" : placeholder}
                />
              </div> */}


               {/* <div className=" mb-4 relative">
                <label
                  className={`absolute left-15  text-end py-1 transition-all duration-300 peer-focus:-translate-y-5 flex flex-col items-center text-center px-10 ${
                    active || value || password !== ""
                      ? "text-sm text-black  transform -translate-y-5 border-none ml-1 "
                      : ""
                  }`}
                  htmlFor="text"
                >
                  Mot de passe
                </label>
                <input
                  id={label}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  onFocus={handleActive}
                  onBlur={handleRue}
                  className={`bg-gray-100  md:w-96 min-w-80  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-2 ml-3 py-3 focus:outline-none   ${
                    focused || value ? "border-transparent" : "border-gray-300"
                  }`}
                  placeholder={active || value ? "" : placeholder}
                />
                {showPassword ? (

            <FaEye
              onClick={updateShowPassword}
              className="absolute right-8 bottom-3 flex flex-col justify-center items-center"
            />
          ) : (
            <FaEyeSlash
              onClick={updateShowPassword}
              className="absolute right-7 bottom-3  flex flex-col justify-center items-center"
            />
          )}
              </div> */}

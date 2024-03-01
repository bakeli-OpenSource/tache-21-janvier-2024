import React, { useState, useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useGlobal from "../../../utils/hooks/useGlobal";

const AdminConnexion = ({ label, placeholder, value }) => {
  const { email, setEmail, password, setPassword, handleLogin, isLoading } =
    useGlobal();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };
  const handleActive = () => {
    setActive(true);
  };

  const handleRue = () => {
    if (!value) {
      setActive(false);
    }
  };

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
    <div className="flex flex-col items-center  justify-center min-h-screen h-[100px] py-2 bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center  justify-center flex-row-reverse w-full  px-30 text-center"
      >
        <div className="min-w-96 bg-white rounded-2xl shadow-2xl flex flex-col-reverse flex-row md:flex-row w-2/3 max-w-4xl">
          <div className="md:w-3/5 py-5">
            <div className="py-10">
              <h2 className="text-2xl font-bold text-slate-800 md:text-center">
                Connectez-vous au compte
              </h2>
              <div className="border-2 w-10 border-slate-800 inline-block mb-2"></div>
              <div className="mt-5 mb-7 ">
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
              </div>
              <div className=" mb-4 relative">
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
                    className="absolute right-7 bottom-3 flex flex-col justify-center items-center"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={updateShowPassword}
                    className="absolute right-7 bottom-3  flex flex-col justify-center items-center"
                  />
                )}
              </div>
              <div className=" items-center text-center text-xs mt-3">
                <label htmlFor="default-checkbox" className="text-center ">
                  {" "}
                  Mot de passe oublié ?
                </label>
              </div>
              <div className="mt-4">
               
                <button
                  type="submit"
                  disabled={isButtonDisabled || isLoading}
                  className={`bg-gray-100  md:w-96 min-w-80 flex gap-4 items-center  justify-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-2 mx-auto py-3 focus:outline-none ${
                    isButtonDisabled || isLoading
                      ? "bg-gray-100 cursor-not-allowed text-disabled text-black "
                      : "bg-slate-800 text-active text-white"
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
          <div className="md:w-2/5 min-w-65 min-h-80 min-w-[220px] bg-slate-800 text-white rounded-tr-2xl rounded-br-2xl py-[129px] px-5  ">
            <h2 className="text-3xl font-bold mb-2">Bienvenue</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
              Remplissez vos informations personnelles et connecter sur votre
              appli
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminConnexion;

import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="w-full md:w-3/4">
      <h1 className="text-2xl text-center">Inscription</h1>
      <div className="mt-5">
        <div className="flex w-full mt-5 align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt-5 w-full md:w-1/2">
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-600"
            >
              Prénom
            </label>
            <input
              required
              type="text"
              id="prenom"
              name="prenom"
              className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-5 mt-5 w-full md:w-1/2">
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-600"
            >
              Nom
            </label>
            <input
              required
              type="text"
              id="nom"
              name="nom"
              className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex w-full mt- align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-5 mt- w-full md:w-1/2">
            <label
              htmlFor="password"
              className="block  text-sm font-medium text-gray-600"
            >
              Mot de pass
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex w-full mt- align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="adresse"
              className="block text-sm font-medium text-gray-600"
            >
              Adresse
            </label>
            <input
              required
              type="adresse"
              id="adresse"
              name="adresse"
              className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-5 mt- w-full md:w-1/2">
            <label
              htmlFor="telephone"
              className="block  text-sm font-medium text-gray-600"
            >
              Telephone
            </label>
            <input
              required
              type="tel"
              id="telephone"
              name="telephone"
              className="mt-1 p-2 bg-gray-200 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-2">
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Enregistrer
        </button>
      </div>
      <p className="text-center py-2">
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

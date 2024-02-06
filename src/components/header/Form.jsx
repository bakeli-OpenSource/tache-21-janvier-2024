import React from "react";
import { FaCamera } from "react-icons/fa";

const Form = ({ editedUser, handleSubmit, handleChange, user }) => {

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 flex items-center justify-between">
        <label
          htmlFor="fileInput"
          className="block text-sm font-medium text-gray-600 cursor-pointer"
        >
          <div className="md:relative">
            <img
              src={
                editedUser.profileImage
                  ? URL.createObjectURL(editedUser.profileImage)
                  : user?.profileImage ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&usqp=CAU"
              }
              alt="img profil"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div
              onChange={handleImageClick}
              className="md:absolute md:inset-0  flex items-center md:items-end justify-center md:justify-end  rounded-full cursor-pointer"
            >
              <FaCamera className="text-[white] w-6 h-6 mr-1 bg-black p-1 rounded-lg " />
            </div>
            <input
              type="file"
              id="fileInput"
              name="imgProfile"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </label>
      </div>

      <div className="mt-5">
        <div className="flex w-full mt-5 align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt-5 w-full md:w-1/2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              FullName
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={editedUser.fullName}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-5 mt-5 w-full md:w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              LastName
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={editedUser.lastName}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex w-full mt- align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt- w-full md:w-1/2">
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-600"
            >
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={editedUser.telephone}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default Form;

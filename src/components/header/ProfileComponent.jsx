import React, { useEffect, useState } from "react";
import useSidebare from "../../utils/hooks/useSidebare";
import Form from "./Form";
import Loader from "../loader/loader";

const ProfileComponent = () => {
  const { user, updateUserProfile, profile, setUser } = useSidebare();
  const [editedUser, setEditedUser] = useState({ ...user, profileImage: null });

  useEffect(() => {
    profile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(user);
    alert("profile modifie");
  };

  const handleChange = (e) => {
    if (e.target.name === "imgProfile") {
      const selectedImage = e.target.files[0];
      setEditedUser({ ...user, profileImage: selectedImage });
    } else {
      const { name, value } = e.target;
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <div className=" p-6 bg-white rounded-md shadow-md  mt-">
      {user ? <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        editedUser={editedUser}
        user={user}
      /> : <Loader />}
    </div>
  );
};

export default ProfileComponent;

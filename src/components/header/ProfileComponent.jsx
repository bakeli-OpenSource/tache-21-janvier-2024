import React, { useState } from "react";


import useSidebare from "../../utils/hooks/useSidebare";
import Form from "./Form";

const ProfileComponent = () => {
  const { user, updateUserProfile } = useSidebare();
  const [editedUser, setEditedUser] = useState({ ...user, profileImage: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(editedUser);
    alert("profile modifie");
  };

  const handleChange = (e) => {
    if (e.target.name === "imgProfile") {
      const selectedImage = e.target.files[0];
      setEditedUser({ ...editedUser, profileImage: selectedImage });
    } else {
      setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    }
  };

  

  return (
    <div className=" p-6 bg-white rounded-md shadow-md  mt-">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        editedUser={editedUser}
        user={user}
      />
    </div>
  );
};

export default ProfileComponent;

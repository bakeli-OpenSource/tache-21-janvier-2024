import React from "react";
import BoutonAdmin from "./BoutonAdmin";

const LoginButon = ({className }) => {
  return (
    <div>
      <BoutonAdmin
        type="submit"
        className={className}
        children="Se connecter"
       
      />
    </div>
  );
};

export default LoginButon;

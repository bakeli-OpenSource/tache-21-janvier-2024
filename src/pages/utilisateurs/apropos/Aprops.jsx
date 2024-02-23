import React from "react";
import imagePropos from "../../../assets/images/bgImage.png";

const Aprops = () => {
  return (
    <div className="ps-9 md:ps-0 pe-9 py-5 mt-[25px] flex items-center gap-9 mb-9 px-9">
      <div
        style={{
          backgroundImage: `url(${imagePropos})`,
        }}
        className="bg-gray-800 bg-bottom bg-no-repeat w-2/4 hidden md:block h-[503px] rounded-e-[80px] p-6 text-center text-"
      ></div>
      <div className="w-1/2">
        <h1 className="font-medium mb-4">Qu'est-ce que le Lorem Ipsum?</h1>
        <div className="mb-7">
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression.
          </p>
          <p>
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les
            années 1500, quand un imprimeur anonyme assembla ensemble des
            morceaux de texte pour réaliser un livre spécimen de polices de
            texte.
          </p>
        </div>
        <div className="mb-7">
          <p>
            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à
            la bureautique informatique, sans que son contenu n'en soit modifié.
          </p>
          <p>
            Il a été popularisé dans les années 1960 grâce à la vente de
            feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
            récemment, par son inclusion dans des applications de mise en page
            de texte, comme Aldus PageMaker.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aprops;

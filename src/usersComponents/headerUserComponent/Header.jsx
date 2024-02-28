import React from "react";
import ComponentButton from "../button/ComponentButton";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: slide1,
    title: "Bienvenue sur Kaay-Solu !",
    description:
      "Découvrez un univers de possibilités où chaque clic vous rapproche de l'extraordinaire",
  },
  {
    id: 2,
    img: slide2,
    title: "Parcourez nos collections",
    description:
      "Elles sont soigneusement sélectionnées. Et laissez-vous séduire par des produits qui transcendent l'ordinaire.",
  },
  {
    id: 3,
    img: slide3,
    title: "Nous sommes ravis de vous accueillir",
    description:
      "Préparez-vous à vivre une expérience de shopping exceptionnelle dans notre communauté en ligne !",
  },
];

const Header = () => {

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative shadow-lg sm:pt-8 overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center pl-[25px] duration-200">
      {/* background */}
      <div className="h-[700px] w-[700px] bg-slate-800 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* section bannière */}
      <div className="container pb-8 sm:pb-0 sm:pt-4 sm:mt-6">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* section contenu texte */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  > 
                  <Link to={"/boutique"} >
                    <ComponentButton className='bg-slate-800 text-white w-auto px-3 py-2 my-5 text-xl tracking-widest rounded' texte='Shop Now'/>
                  </Link>   
                  </div>
                </div>
                {/* section image */}
                <div className="order-1 sm:order-2 sm:mt-6">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="tofs bg"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
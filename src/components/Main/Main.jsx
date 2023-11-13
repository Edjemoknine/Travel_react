import React from "react";
import "./Main.scss";

import { BsClipboard } from "react-icons/bs";

// import img from "../../img/architecture-1868667_1280.jpg";
import img1 from "../../img/architecture-1868667_1280.jpg";
import img2 from "../../img/architecture-3095716_1280.jpg";
import img3 from "../../img/bora-bora-3023437_1280.jpg";
import img4 from "../../img/hamburg-3846525_1280.jpg";
import img5 from "../../img/houses-4093227_1280.jpg";
import img6 from "../../img/island-3542290_1280.jpg";
import img7 from "../../img/japan-2014618_1280.jpg";
import img8 from "../../img/maldives-1993704_1280.jpg";
import img9 from "../../img/maldives-3220702_1280.jpg";

const Main = () => {
  const data = [
    {
      id: 1,
      img: img1,
      destination: "Hawai",
      name: "Hiking part",
      description:
        "Hawai is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 5000,
    },
    {
      id: 2,
      img: img2,
      destination: "France",
      name: "View",
      description:
        "Prais is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 7000,
    },
    {
      id: 3,
      img: img3,
      destination: "Island",
      name: "Explore",
      description:
        "Island is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 4000,
    },
    {
      id: 4,
      img: img4,
      destination: "Ploand",
      name: "Discover",
      description:
        "Poland is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 3000,
    },
    {
      id: 5,
      img: img5,
      destination: "Canada",
      name: "Hiking part",
      description:
        "Canada is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 5500,
    },
    {
      id: 6,
      img: img6,
      destination: "Grace",
      name: "Hiking part",
      description:
        "Grace is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 6700,
    },
    {
      id: 7,
      img: img7,
      destination: "Japan",
      name: "Hiking part",
      description:
        "Japan is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 8000,
    },
    {
      id: 8,
      img: img8,
      destination: "China",
      name: "Hiking part",
      description:
        "China is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 9000,
    },
    {
      id: 9,
      img: img9,
      destination: "Maldive",
      name: "Swimming part",
      description:
        "Maldive is the most popular dierection to many pepole, We will Shaw you amazing view and picturesque placees you never seen in your life, you will enjoy with us , Let is Go !",
      price: 10000,
    },
  ];

  return (
    <section>
      <div className="container">
        <h1 data-aos="fade-up" className="title">
          Our Trip
        </h1>
        <div className="Main_Content">
          {data.map(({ id, price, description, destination, name, img }) => {
            return (
              <div data-aos="fade-up" key={id} className="card">
                <div className="ImgDiv">
                  <img src={img} alt={destination} />
                </div>
                <div className="Trip_Content">
                  <div className="intro">
                    <h3>{destination}</h3>
                    <p>{name}</p>
                    <div className="p">
                      <span>
                        Good Deal <p className="btn">+1</p>
                      </span>{" "}
                      <b>${price}</b>
                    </div>
                    <div className="desc">{description}</div>
                    <div className="details btn">
                      Details <BsClipboard className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Main;

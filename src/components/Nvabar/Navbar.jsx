import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { MdTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <section
      className={isActive === true ? "sectionheader active" : "sectionheader"}
    >
      <header className="container ">
        {/* top navbar part  */}
        <div className="logo flex" data-aos="fade-right">
          <a href="/" className="flex">
            <MdTravelExplore className="icon" />
            <h1 className="logoText">Travel</h1>
          </a>
        </div>

        {/* bottom navbar part */}
        <div className={`${isOpen === false ? "navbar active" : "navbar"}`}>
          <ul className=" flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="btn">Boking Now</button>
        </div>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <TbGridDots className="icon" data-aos="fade-left" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

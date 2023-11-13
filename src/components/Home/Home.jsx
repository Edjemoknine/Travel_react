import React from "react";
import video from "../../img/vid.mp4";
import "./Home.scss";
import { GoLocation } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { BiSolidFilterAlt } from "react-icons/bi";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="home_content container">
        <div className="textdiv">
          <span className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="reserve_Form">
          <div data-aos="fade-up" data-aos-delay="200" className="search">
            <label htmlFor="searchText">Search your destination:</label>
            <div className="input">
              <input type="text" placeholder="Enter name here" />
              <GoLocation className="icon" />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="date">
            <label htmlFor="dateText">Select your Date:</label>
            <div className="input">
              <input type="date" />
              <CiCalendarDate className="icon" />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="price">
            <p className="priceText">
              <span>Max price:</span> <h2>$5000</h2>
            </p>
            <div className="input">
              <input type="range" />
            </div>
          </div>
          <div class="btn filterBtn">
            <BiSolidFilterAlt className="icon" />
            <span>More Filter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

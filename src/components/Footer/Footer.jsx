import React from "react";
import { BsSendCheck } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { BsFacebook, BsYoutube, BsTwitter, BsTwitch } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import video1 from "../../img/vid.mp4";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="vidiv">
        <video src={video1} autoPlay muted loop></video>
      </div>

      <div className="secContent container">
        <div date-aos="fade-up" className="HitMeBack">
          <h1>Stay In Touch</h1>
          <div className="input">
            <input type="email" placeholder="Your message" />
            <BsSendCheck className="icon" />
          </div>
        </div>

        <div className="footerCard">
          <div className="prim">
            <div data-aos="fade-up" className="intro">
              <div className="footerLogo">
                <MdTravelExplore className="icon" />
                <h1 className="logoText">Travel</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                aliquid. Animi magni impedit voluptatibus. Nobis, qui at. Ipsam,
                cupiditate commodi laboriosam possimus ipsa, quod, quisquam
                placeat labore explicabo quo quia?
              </p>
              <div className="social">
                <BsFacebook className="icon" />
                <BsTwitch className="icon" />
                <BsYoutube className="icon" />
                <BsTwitter className="icon" />
              </div>
            </div>

            <div className="linkGroup">
              <div data-aos="fade-up" className="group">
                <h2>Our Agency</h2>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Services
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Insurance
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Tourism
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Payment
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Services
                </div>
              </div>
              {/*  */}

              <div data-aos="fade-up" className="group">
                <h2>Last Minute</h2>
                <div>
                  <IoIosArrowForward className="arrow" />
                  London
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  California
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Indonesia
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Europe
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Oceania
                </div>
              </div>
              <div data-aos="fade-up" className="group">
                <h2>Partners</h2>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Bookings
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Rentcars
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  HostelWorld
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  Trivago
                </div>
                <div>
                  <IoIosArrowForward className="arrow" />
                  TripAdvisor
                </div>
              </div>
            </div>
          </div>
          <div className="copyRight">
            <p>CoryRight &copy; 2023 , All Reserved By Moknine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

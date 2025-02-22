import React from "react";
import { Link } from "react-router-dom";

import bgImg from "../../assets/img/footer/bg-1-1.jpg";
import Logo from "../../assets/img/logo/logo-black.png";

const Footer = (props) => {
  const { footerClass, footerLogo, copyrightTextClass } = props;

  return (
    <footer>
      <div
        className={
          footerClass
            ? footerClass
            : "it-footer-area it-footer-bg black-bg pt-120 pb-70"
        }
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link to="/">
                    <img src={footerLogo ? footerLogo : Logo} alt="" />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    Interdum velit laoreet id donec ultrices <br />
                    tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu.
                  </p>
                </div>
                <div className="it-footer-social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-footer-widget footer-col-2">
                <h4 className="it-footer-title">our services:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="http://www.fstg-marrakech.ac.ma/FST/E-services.html">
                        <i className="fa-regular fa-angle-right"></i>
                        E-services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        Consultation des notes du T.C
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>UC@Mobile /
                        UC@Student
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Accès au
                        réseau wifi de la F.S.T
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">quick links:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="https://www.men.gov.ma/Fr/Pages/Accueil.aspx">
                        <i className="fa-regular fa-angle-right"></i>
                        M.E.N.F.P.E.S.R.S
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>H.C.P
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        C.N.R.S.T
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>I.M.I.S.T
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              {/* <div className="it-footer-widget footer-col-4">
                <h4 className="it-footer-title">Gallery</h4>
                <div className="it-footer-gallery-box">
                  <div className="row gx-10">
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb mb-10">
                        <a href="#">
                          <img src={footerImg1} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb mb-10">
                        <a href="#">
                          <img src={footerImg2} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-4 mb-10">
                      <div className="it-footer-thumb">
                        <a href="#">
                          <img src={footerImg3} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb">
                        <a href="#">
                          <img src={footerImg4} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb">
                        <a href="#">
                          <img src={footerImg5} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="it-footer-thumb">
                        <a href="#">
                          <img src={footerImg6} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : "it-copyright-text text-center"
                }
              >
                <p>
                  Copyright &copy; 2024 <a href="#">edunity </a> || All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import React from "react";
import SectionTitleSpecial from "../../components/SectionTitle/SectionTitleSpecial";

import shapeImg1 from "../../assets/img/choose/shape-1-1.png";
import shapeImg2 from "../../assets/img/choose/shape-1-2.png";
import shapeImg3 from "../../assets/img/choose/shape-1-3.png";
import shapeImg4 from "../../assets/img/choose/shape-1-4.png";
import doyen from "../../assets/img/choose/doyen.jpg";
import RightArrow from "../../components/SVG";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="it-choose-area p-relative fix pt-180 pb-110">
      <div className="it-choose-shape-4 d-none d-md-block">
        <img src={shapeImg4} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 mb-30 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-choose-left">
              <h1
                className="it-choose-title-box mb-30"
                //subTitle="WHY CHOOSE US"
                // preTitle="Mot du Doyen"
                // highlightText="Learners."
              >
                Mot du Doyen
              </h1>

              <div className="it-choose-text pb-15">
                <p>
                  Après seulement 45 ans d’existence, l'Université Cadi Ayyad
                  est le cœur battant d’un territoire en marche. Avec quinze
                  établissements abritant plus de 120 000 étudiants et
                  dispensant une variété de disciplines dans tous les champs du
                  savoir, l’UCA est profondément ancrée dans son écosystème.
                  Elle constitue à la fois un fleuron et une locomotive des
                  quatre villes emblématiques de la Région Marrakech-Safi, qui
                  l’enrichissent de leur histoire exceptionnelle et rehaussent
                  sa situation géographique et stratégique: Marrakech, El Kelaa
                  des Sarghna, Safi et Essaouira. Grâce à l’abnégation de ses
                  enseignant.es chercheur.es et au dévouement de ses corps
                  administratif et technique, notre université est l'une des
                  universités les plus prestigieuses du Royaume. L’année
                  universitaire 2023-2024 est marquée par ....{" "}
                </p>
              </div>
              <div className="it-choose-content-box">
                {/*<div className="row gx-20">
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>World
                        className Trainers
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>Easy
                        Learning
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>Flexible
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>Affordable
                        Price
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer</p>
                    </div>
                  </div>
                </div>
                */}
              </div>
              <Link className="ed-btn-theme" to="/about-us">
                Load More
                <i>
                  <RightArrow />
                </i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 mb-30 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
            style={{ marginLeft: "5cm" }}
          >
            <div className="it-choose-thumb-box text-center text-lg-end">
              <div className="it-choose-thumb p-relative">
                <img src={doyen} alt="" />
                <div className="it-choose-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="it-choose-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="it-choose-shape-3 d-none d-lg-block">
                  <img src={shapeImg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;

import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.scss";

const Services = () => {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);

  const toggleList1 = () => {
    setShowList1((prev) => !prev);
  };

  const toggleList2 = () => {
    setShowList2((prev) => !prev);
  };

  const toggleList3 = () => {
    setShowList3((prev) => !prev);
  };

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head" onClick={toggleList1}>
            <h3>Backend services</h3>
          </div>
          <ul className={`service__list ${showList1 ? "show" : ""}`}>
            <li>
              <BiCheck className="service__icon" />
              <p>Database setting and maintanance.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>APIs management.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Server optimization</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Authentications.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head" onClick={toggleList2}>
            <h3>Web development</h3>
          </div>
          <ul className={`service__list ${showList2 ? "show" : ""}`}>
            <li>
              <BiCheck className="service__icon" />
              <p>Landing pages.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>E-commerce websites.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Personal blogs.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Online portfolios.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Web applications.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Search engine optimization.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head" onClick={toggleList3}>
            <h3>Soft Skills</h3>
          </div>
          <ul className={`service__list ${showList3 ? "show" : ""}`}>
            <li>
              <BiCheck className="service__icon" />
              <p>Fast learner.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Team worker.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Assertive communication.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Adaptabilty to changes.</p>
            </li>
            <li>
              <BiCheck className="service__icon" />
              <p>Highly organised.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

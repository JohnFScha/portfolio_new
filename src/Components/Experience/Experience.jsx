import React from "react";
import { BsFillPatchCheckFill as Check } from "react-icons/bs";
import CubicSlider from '../CubicSlider/CubicSlider'
import "./Experience.scss";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have:</h5>
      <h2>My Experience:</h2>
      <div>
        <CubicSlider />
      </div>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>Tailwind.css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>MondoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-detail">
              <Check className="detail-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

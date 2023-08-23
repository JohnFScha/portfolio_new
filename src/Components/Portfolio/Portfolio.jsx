import React from "react";
import img1 from '../../Assets/portfolio1.jpg'
import img2 from '../../Assets/portfolio2.jpg'
import img3 from '../../Assets/portfolio3.jpg'
import img4 from '../../Assets/portfolio4.jpg'
import img5 from '../../Assets/portfolio5.png'
import img6 from '../../Assets/portfolio6.jpg'

import "./Portfolio.scss";

const data = [
  {
    id: 1,
    thumbnail: img1,
    title: "Project 1 Title",
    github: "https://github.com",
    demo: "https://vercel.com"
  },
  {
    id: 2,
    thumbnail: img2,
    title: "Project 2 Title",
    github: "https://github.com",
    demo: "https://vercel.com"
  },
  {
    id: 3,
    thumbnail: img3,
    title: "Project 3 Title",
    github: "https://github.com",
    demo: "https://vercel.com"
  },
  {
    id: 4,
    thumbnail: img4,
    title: "Project 4 Title",
    github: "https://github.com",
    demo: "https://vercel.com"
  },
  {
    id: 5,
    thumbnail: img5,
    title: "Project 5 Title",
    github: "https://github.com",
    demo: "https://vercel.com"
  },
  {
    id: 6,
    thumbnail: img6,
    title: "Project 6 Title",
    github: "https://github.com",
    demo: "https://vercel.com"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, thumbnail, title, github, demo}) => 
          <article className="portfolio__item" key={id}>
            <div className="portfolio__image">
              <img src={thumbnail} alt={title}/>
            </div>           
            <h3>{title}</h3>
            <div className="portfolio__cta">
              <a               
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import img1 from '../../Assets/portfolio1.png'
import img2 from '../../Assets/portfolio2.png'
import img3 from '../../Assets/portfolio3.png'
import img4 from '../../Assets/portfolio4.png'
import img5 from '../../Assets/portfolio5.png'
import img6 from '../../Assets/portfolio6.png'

import "./Portfolio.scss";

const data = [
  {
    id: 1,
    thumbnail: img1,
    title: "Movie search app",
    github: "https://github.com/JohnFScha/movieSearchApp",
    demo: "https://movie-search-app-smoky-nine.vercel.app/"
  },
  {
    id: 2,
    thumbnail: img2,
    title: "One Click English",
    github: "https://github.com/JohnFScha/OneClickEnglish",
    demo: "https://johnfscha.github.io/OneClickEnglish/"
  },
  {
    id: 3,
    thumbnail: img3,
    title: "Marvel character search ",
    github: "https://github.com/JohnFScha/MarvelCharacterSearchApp",
    demo: "https://marvel-character-search-nztfw8hab-sonicfran99.vercel.app/"
  },
  {
    id: 4,
    thumbnail: img4,
    title: "Mock used PS store",
    github: "https://github.com/JohnFScha/MockPsUsedStore",
    demo: "https://proyecto-final-react-schallibaum.vercel.app/"
  },
  {
    id: 5,
    thumbnail: img5,
    title: "Newsletter sign-up",
    github: "https://github.com/JohnFScha/Sign-up",
    demo: "https://sign-up-swart.vercel.app/"
  },
  {
    id: 6,
    thumbnail: img6,
    title: "Language Time Landing",
    github: "https://github.com/JohnFScha/EnglishTimeLandingPage",
    demo: "https://johnfscha.github.io/EnglishTimeLandingPage/index.html"
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

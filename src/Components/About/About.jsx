import React from 'react'
import './About.scss'
import Me from '../../Assets/me.jpg'
import {FaBrain, FaUsers} from 'react-icons/fa'
import {RiUserStarFill} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBrain className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years of Experience</small>
            </article>
            <article className="about__card">
              <RiUserStarFill className='about__icon'/>
              <h5>Clients</h5>
              <small>VIP handling</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>+5 projects</small>
            </article>
          </div>

          <p className='about__content-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias fugiat, mollitia repellat, quibusdam itaque animi laborum quis dolore deleniti quasi illum explicabo iure expedita id consequuntur impedit earum ipsum?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
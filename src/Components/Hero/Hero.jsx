import React from 'react'
import './Hero.css'
import profile_img from '../../assets/off_pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='subham-img' src={profile_img} alt="" />
      <h1><span>I'm Ayushraj Jadhav,</span> fullstack Developer </h1>
      <p>I'm Ayushraj Jadhav, Fullstack Developer. I create modern, responsive web applications and manage the full process from development to deployment, ensuring smooth performance and scalability.</p>
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className='al' href='#contact' offset={50}>
            Connect with me
          </AnchorLink>
        </div>
        <a className="hero-resume al" href="https://drive.google.com/file/d/1HEdENKnG0aD7Lep7gveX_EygDfhS1N3g/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          My resume
        </a>
      </div>
    </div>
  )
}

export default Hero

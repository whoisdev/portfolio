import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              I am a graduate from the University of Victoria (April 2021), I have experience working on large scale enterprise software at Amazon(AbeBooks Inc.) and Real Estate Webmaster.
              <br />
              <br />
              I love building things. While hard engineering problems are often intrinsically fun to tackle, I'm most attracted to solving real customer problems with a business justification.
              <br />
              <br />
              I am currently looking for a Software Developer role where I can gain experience with architecture and development
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

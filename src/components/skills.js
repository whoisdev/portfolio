import React from "react"
import data from "../yourdata"
import { Grid } from "@material-ui/core";
const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <Grid container spacing={4} className="skills-grid">
            {data.skills.map((skill, index) => (
              <Grid key={index} item xs={3} md={3} className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.heading}</p>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Skills

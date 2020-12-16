import React from "react"
import data from "../yourdata"
import { Grid } from "@material-ui/core";
const Skills = () => {
  return (
    <div className="section">
      <div style={{ width: "100%", height: "100%" }}>
        <div className="skills-container">
          <h1>Skills</h1>
          <Grid container spacing={4}>
            {data.skills.map((skill, index) => (
              <Grid key={index} item xs={3} md={3} key={skill.id}>
                <img src={skill.img} alt={skill.heading}></img>
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

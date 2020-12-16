import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
    // style={{
    //   backgroundImage:
    //     "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
    //     imgUrl +
    //     ")",
    // }}
    >
      <div className="content">
        <img className="image" src={imgUrl}></img>
        <h1 className="header">{heading}</h1>
        <ul>
          {paragraph.map(el => {
            return (
              <li index={el}>👉 {el}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Card

import React from "react"

import WebWorkStyles from "./webWork.module.css"

function WorkText(props) {
  return(
  <div className={WebWorkStyles.textContainer}>
    <h1 className={WebWorkStyles.title}>{props.title}</h1>
    <p className={WebWorkStyles.text}>{props.intro}</p>
    <p className={WebWorkStyles.text}>{props.description}</p>
    <p className={WebWorkStyles.text}>{props.tech}</p>
    <a className={props.btnStyle} href={props.github}>View on Github</a>
  </div>
  )
}

export default WorkText

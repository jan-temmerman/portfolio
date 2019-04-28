import React from "react"

import WebWorkStyles from "./webWork.module.css"

function WorkText(props) {
  return(
  <div className={WebWorkStyles.textContainer}>
    <h1 className={WebWorkStyles.title}>{props.title}</h1>
    <p className={WebWorkStyles.text}>{props.description}</p>
  </div>
  )
}

export default WorkText

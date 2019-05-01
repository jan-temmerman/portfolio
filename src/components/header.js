import { Link } from "gatsby"
import React from "react"

import headerStyles from "./header.module.css"

export default() => (
  <header>
    <div className={headerStyles.container}>
    <Link className={headerStyles.linklogo} to="/"> <h1 className={headerStyles.logo}>JAN TEMMERMAN</h1> </Link>
      <div className={headerStyles.linkContainer}>
        <Link className={headerStyles.link} to="/">Home</Link>
        <Link className={headerStyles.link} to="/contact">Contact</Link>
        <Link className={headerStyles.link} to="/about">About</Link>
      </div>
    </div>
  </header>
) 

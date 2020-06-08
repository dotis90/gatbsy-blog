import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = () => (

  <div className={headerStyles.topnav} id="myTopnav">
    <Link to="/" className={headerStyles.title}>
      <span className={headerStyles.app}>app</span>.
      <span className={headerStyles.get}>get</span>(
      <span className={headerStyles.dotis}>'/dotis'</span>)
    </Link>
    <div className={headerStyles.navItems}>
      <div className={headerStyles.pagelinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
)

export default Header

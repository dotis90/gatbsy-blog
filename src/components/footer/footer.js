import React from "react"
import { IconContext } from 'react-icons'
import { FaGoogle } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <IconContext.Provider value={{ size: '2rem' }}>
        <a aria-label="link" className={footerStyles.icon} href="mailto:dotis90@gmail.com"><FaGoogle /></a>
        <a aria-label="link" className={footerStyles.icon} href="https://github.com/dotis90"><FaGithubSquare /></a>
        <a aria-label="link" className={footerStyles.icon} href="https://www.twitter.com/Dotis90/"><FaTwitterSquare /></a>
        <a aria-label="link" className={footerStyles.icon} href="https://www.linkedin.com/in/daniel-otis-542043113/"><FaLinkedin /></a>
      </IconContext.Provider>

      <p className={footerStyles.copyright}>Made by Daniel Otis</p>
    </div>
  )
}

export default Footer

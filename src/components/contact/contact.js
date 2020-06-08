import React from "react"
import { IconContext } from 'react-icons'
import { FaGoogle } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import contactImage from '../../images/111-coding.png'
import contactStyles from './contact.module.scss'

const Contact = () => {

    return (
        <div style={{ textAlign: 'center' }} className={contactStyles.contactSection}>
            <h1 className={contactStyles.contactMe}>Contact Me</h1>

            <img className={contactStyles.image} src={contactImage}></img>

            <div className={contactStyles.message}>
                <p>Questions? Comments? Want to Collaborate?</p>
                <p>Contact me through any of the means below.</p>
            </div>
            <div className={contactStyles.iconSection}>
                <IconContext.Provider value={{ size: '5rem' }}>
                    <a aria-label="link" href="mailto:dotis90@gmail.com"><FaGoogle /></a>
                    <a aria-label="link" href="https://github.com/dotis90"><FaGithubSquare /></a>
                    <a aria-label="link" href="https://www.twitter.com/Dotis90/"><FaTwitterSquare /></a>
                    <a aria-label="link" href="https://www.linkedin.com/in/daniel-otis-542043113/"><FaLinkedin /></a>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Contact
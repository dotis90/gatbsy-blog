import React from 'react'
import titleImage from "../../images/title-image.svg"
import heroStyles from './hero.module.scss'

const Hero = () => {
    return (
        <div className={heroStyles.titleHeading}>
            <h1>
                <span className={heroStyles.app}>app</span>.<span className={heroStyles.get}>get</span>(
          <span className={heroStyles.dotis}>'/dotis'</span>)
        </h1>

            <h2>A Programming Blog</h2>
            <img className={heroStyles.heroImage} alt='Man working' src={titleImage} />
        </div>
    )
}

export default Hero
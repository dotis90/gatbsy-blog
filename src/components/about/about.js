import React from 'react'
import about from './about-config'
import Avatar from 'avataaars'
import aboutStyles from './about.module.scss'

const About = () => {
    return (
        <div className={aboutStyles.aboutSection}>
            <h1>About Me</h1>
            <div className={aboutStyles.avatar}>
                <Avatar
                    avatarStyle='Circle'
                    topType='ShortHairShortCurly'
                    accessoriesType='Blank'
                    hairColor='Blonde'
                    facialHairType='Blank'
                    clotheType='ShirtCrewNeck'
                    clotheColor='Blue03'
                    eyeType='Default'
                    eyebrowType='DefaultNatural'
                    mouthType='Smile'
                    skinColor='Light'
                />
            </div>
            <p className={aboutStyles.info}>{about}</p>
        </div >
    )
}

export default About
import React from 'react'
import gitlogo from '../assets/iconmonstr-github-3.svg'
import linkedinlogo from '../assets/iconmonstr-linkedin-3.svg'
import arrowup from '../assets/arrow_upward_FILL0_wght400_GRAD0_opsz48.svg'

const Footer = () => {
    return (
    <div className='footer'>
        <div className='backtop'>
            <a href='#nav-bar' className='backtop-btn'><img className='arrow-img' src={arrowup} alt='arrowUp' /></a>
        </div>
        <div className='footer-socials'>
            <a href='https://www.linkedin.com/in/thiago-neves-43ab52a4/'> <img src={linkedinlogo} alt="linkedinlogo" /></a>
            <a href='https://github.com/Thignvs'> <img src={gitlogo} alt="githublogo" /> </a>
        </div>
    </div>
    )
}

export default Footer
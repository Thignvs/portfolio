import React from 'react'
import gitlogo from '../assets/iconmonstr-github-3.svg'
import linkedinlogo from '../assets/iconmonstr-linkedin-3.svg'
import arrowup from '../assets/arrow_upward_FILL0_wght400_GRAD0_opsz48.svg'
import whatsbadge from '../assets/whatsapp-svgrepo-com.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <a href='/' className='backtop-btn-fixed'><img className='arrow-img' src={arrowup} alt='arrowUp' /></a>
            <div className='backtop'>
                <a href='/' className='backtop-btn'><img className='arrow-img' src={arrowup} alt='arrowUp' /></a>
            </div>
            <div className='footer-socials'>
                <a target='_blank' rel='noreferrer' href='https://web.whatsapp.com/send?phone=5522998083192'> <img src={whatsbadge} alt="whatsapp" /></a>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/thiago-neves-43ab52a4/'> <img src={linkedinlogo} alt="linkedinlogo" /></a>
                <a target='_blank' rel='noreferrer' href='https://github.com/Thignvs'> <img src={gitlogo} alt="githublogo" /> </a>
            </div>
        </div>
    )
}

export default Footer
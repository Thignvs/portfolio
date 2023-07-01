import React from 'react'
import logo from '../assets/logo.webp'
import gitlogo from '../assets/iconmonstr-github-3.svg'
import linkedinlogo from '../assets/iconmonstr-linkedin-3.svg'
import whatsbadge from '../assets/whatsapp-svgrepo-com.svg'



function toggleMenu(){
        const nav = document.querySelector('.nav')
        const hamburger = document.querySelector('.hamburger')
        nav.classList.toggle('active')
        hamburger.classList.toggle('close')
    }
function handleResize(){
    const windowSize = window.innerWidth;
    if (windowSize >= 1000){
        const nav = document.querySelector('.nav')
        const hamburger = document.querySelector('.hamburger')
        nav.classList.remove('active')
        hamburger.classList.remove('close')
    }
}
window.addEventListener('resize', handleResize)

const navBar = () => {

    return (
    <nav id='nav-bar'>
        <img className='logo' src={logo} alt="logo" />
        <div className='hamburger' onClick={toggleMenu}>
            <span className='bars'></span>
            <span className='bars'></span>
            <span className='bars'></span>
        </div>
        <div className='nav'>
            <ul className='nav-list'>
                <li><a href='#about' className='nav-links'>Sobre</a></li>
                <li><a href='#skills' className='nav-links'>Skills</a></li>
                <li><a href='#portfolio' className='nav-links'>Portfólio</a></li>
            </ul>
            <a href='https://drive.google.com/uc?export=download&id=1utaJCTthOqIT3ws41hgZimS2YjNGHJNq' className='cv'>DOWNLOAD CV</a>
        </div>
        <div className='socials'>
            <a target='_blank' rel='noreferrer' href='https://web.whatsapp.com/send?phone=5522998083192'> <img src={whatsbadge} alt="whatsapp" /></a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/thiago-neves-43ab52a4/'><img src={linkedinlogo} alt='linkedin'/></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/Thignvs'> <img src={gitlogo} alt="github" /></a>
        </div>
    </nav>
    )
}

export default navBar
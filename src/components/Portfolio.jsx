import React from 'react'
import bmiss from '../assets/bmi-calc-screenshot.png'
import html from '../assets/512px-HTML5_Badge.svg.png'
import css from '../assets/CSS3_logo.svg.png'
import java from '../assets/javascript-seeklogo.com.svg'
import react from '../assets/React-icon.svg.png'
import cellphone from '../assets/cell-phone-svgrepo-com.svg'
import tablet from '../assets/tablet-material-4-svgrepo-com.svg'
import desktop from '../assets/desktop-svgrepo-com.svg'
import skilled from '../assets/skilledScreenShot.png'
import artgallery from '../assets/artgalleryscreenshot.png'
import maker from '../assets/makerprelaunch.png'
import singlepage from '../assets/singlepagescreenshot.png'
import blogr from '../assets/blogrscreenshot.png'
import testimonial from '../assets/testimonialscreenshot.png'
import sunny from '../assets/sunnysidescreenshot.png'
import tailwind from '../assets/Tailwind_CSS_Logo.svg.png'
import meet from '../assets/meetscreenshot.png'
import vite from '../assets/Vitejs-logo.svg.png'


const Portfolio = () => {
    return (
    <section id='portfolio'>
        <div className='portfolio-ttl'>
            <h3>Portfólio</h3>
        </div>
        <div className='bmi'>
            <p className='page-ttl'>Calculadura de IMC (BMI Calculator)</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/BMI-Calculator/'><img src={bmiss} alt="pageScreenshot"/></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img src={html} alt="htmllogo" />
                        <img src={css} alt="csslogo" />
                        <img src={java} alt="javalogo"/>
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={tablet} alt='tabletimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/BMI-Calculator/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/BMI-Calculator'>Link Código</a>
            </div>
        </div>

        <div className='meet'>
            <p className='page-ttl'>Meet Landing Page</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/meet-landingpage/'><img src={meet} alt="meetScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img id='reactbadge' src={react} alt="reactbadge" />
                        <img id='vitebadge' src={vite} alt="vitebadge" />
                        <img id='tailwindbadge' src={tailwind} alt="tailwindbadge" />
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={tablet} alt='tabletimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/meet-landingpage/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/meet-landingpage'>Link Código</a>
            </div>
        </div>

        <div className='skilled'>
            <p className='page-ttl'>Skilled Landing Page</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/skilled-e-learning-landingpage-REACT/'><img src={skilled} alt="skilledScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img id='reactbadge' src={react} alt="reactbadge" />
                        
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={tablet} alt='tabletimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/skilled-e-learning-landingpage-REACT/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/skilled-e-learning-landingpage-REACT'>Link Código</a>
            </div>
        </div>

        <div className='sunny'>
            <p className='page-ttl'>Sunnyside Agency Landing Page</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/Sunnyside-agency-landingpage/'><img src={sunny} alt="sunnysidecreenshot"/></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img src={html} alt="htmllogo" />
                        <img src={css} alt="csslogo" />
                        <img src={java} alt="javalogo"/>
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/Sunnyside-agency-landingpage/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/Sunnyside-agency-landingpage'>Link Código</a>
            </div>
        </div>

        <div className='maker'>
            <p className='page-ttl'>Maker Pre-Launch Landing Page</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/Make-prelaunch-landingpage-REACT/'><img src={maker} alt="makerScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img id='reactbadge' src={react} alt="reactbadge" />
                        
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={tablet} alt='tabletimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/Make-prelaunch-landingpage-REACT/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/Make-prelaunch-landingpage-REACT'>Link Código</a>
            </div>
        </div>

        <div className='designportfolio'>
            <p className='page-ttl'>Single Page Design Portfolio</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/singlepage-design-portfolio/'><img src={singlepage} alt="singlepageScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img id='reactbadge' src={react} alt="reactbadge" />
                        
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={tablet} alt='tabletimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/singlepage-design-portfolio/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/singlepage-design-portfolio'>Link Código</a>
            </div>
        </div>

        <div className='blogr'>
            <p className='page-ttl'>Blogr Landing Page</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/blogr-landingpage/'><img src={blogr} alt="blogrScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img src={html} alt="htmllogo" />
                        <img src={css} alt="csslogo" />
                        <img src={java} alt="javalogo"/>
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/blogr-landingpage/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/blogr-landingpage'>Link Código</a>
            </div>
        </div>

        <div className='art'>
            <p className='page-ttl'>Art Gallery</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/Art-Gallery/index.html'> <img src={artgallery} alt="artScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img src={html} alt="htmllogo" />
                        <img src={css} alt="csslogo" />
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={tablet} alt='tabletimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/Art-Gallery/index.html'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/Art-Gallery'>Link Código</a>
            </div>
        </div>

        <div className='testimonial'>
            <p className='page-ttl'>Testimonials Grid Section</p>
            <a target='_blank' rel='noreferrer' href='https://thignvs.github.io/Testimonials-grid-section/'><img src={testimonial} alt="testimonialScreenshot" /></a>
            <div className='languages'>
                <div className='langDescrip'>
                    <p>Linguagem</p>
                    <div className='langBadges'>
                        <img src={html} alt="htmllogo" />
                        <img src={css} alt="csslogo" />
                    </div>
                </div>
                <div className='sizes'>
                    <div className='sizeDescrip'>
                        <p>Tamanhos</p>
                    </div>
                    <div className='sizeBadges'>
                        <img src={desktop} alt='desktopimg'/>
                        <img src={cellphone} alt='cellphoneimg'/>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://thignvs.github.io/Testimonials-grid-section/'>Link Página</a>
                <a className='portfolio-link' target='_blank' rel='noreferrer' href='https://github.com/Thignvs/Testimonials-grid-section'>Link Código</a>
            </div>
        </div>
    </section>
    )
}

export default Portfolio
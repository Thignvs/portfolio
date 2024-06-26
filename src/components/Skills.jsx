import React from 'react'
import html from '../assets/512px-HTML5_Badge.svg.png'
import css from '../assets/CSS3_logo.svg.png'
import java from '../assets/javascript-seeklogo.com.svg'
import react from '../assets/React-icon.svg.png'
import bootstrap from '../assets/Bootstrap_logo.svg.png'
import firebase from '../assets/512px-Firebase_Logo.svg.png'
import mongo from '../assets/MongoDB_Logo.svg.png'
import node from '../assets/512px-Node.js_logo.svg.png'
import tailwinds from '../assets/Tailwind_CSS_Logo.svg.png'
import AWS from '../assets/512px-Amazon_Web_Services_Logo.svg.png'
import vite from '../assets/Vitejs-logo.svg.png'
import gitIcon from '../assets/Git-Icon.svg'
import biIcon from '../assets/power-bi-icon-seeklogo.svg'
import powerApps from '../assets/power-apps.svg'
import powerAutomate from '../assets/icons8-microsoft-power-automate-2020-250.svg'

const Skills = () => {
    return (
    <section id='skills'>
        <div className='skills-ttl'>
            <h3>Skills</h3>
        </div>
        <div className='powerbi'>
            <p>Power B.I.</p>
            <img src={biIcon} alt='biIcon' /> 
        </div>
        <div className='powerapps'>
            <p>Power Apps</p>
            <img src={powerApps} alt='appsIcon' /> 
        </div>
        <div className='powerbi'>
            <p>Power Automate</p>
            <img src={powerAutomate} alt='automateIcon' /> 
        </div>
        <div className='html'>
            <p>HTML</p>
            <img src={html} alt='htmlbadge' /> 
        </div>
        <div className='css'>
            <p>CSS</p>
            <img src={css} alt='cssbadge'/>
        </div>
        <div className='java'>
            <p>JavaScript</p>
            <img src={java} alt='javabadge' />
        </div>
        <div className='react'>
            <p>React Js</p>
            <img src={react} alt='reactbadge'/>
        </div>
        <div className='vite'>
            <p>Vite Js</p>
            <img src={vite} alt='vitebadge'/>
        </div>
        <div className='aws'>
            <p>Amazon Web Services</p>
            <img src={AWS} alt='awsbadge'/>
        </div>
        <div className='git'>
            <p>Git</p>
            <img src={gitIcon} alt='gitbadge'/>
        </div>
        <div className='bootstrap'>
            <p>Tailwind CSS</p>
            <img src={tailwinds} alt='tailwindsbadge'/>
        </div>
        <div className='bootstrap'>
            <p>Bootstrap</p>
            <img src={bootstrap} alt='bootstrapbadge'/>
        </div>
        
        <div className='node'>
            <p>NodeJS</p>
            <img src={node} alt="nodejsbadge" />
        </div>
        <div className='firebase'>
            <p>Firebase</p>
            <img src={firebase} alt="firebasebadge" />
        </div>
        <div className='nodejs'>
            <p>MongoDB</p>
            <img src={mongo} alt="mongobadge" />
        </div>
    </section>
    )
}

export default Skills
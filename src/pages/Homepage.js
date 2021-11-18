import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import {Skills, NavItems} from '../components/MenuItems'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import FadeIn from 'react-fade-in'
import './css/Homepage.css'

const MainPage = () => {
        return(
            <div>
                <Navbar transparent={true} />
                <div className='page-container'>
                <div className='content-wrap-image'>
                <div className='image-text'>
                    <FadeIn>
                        <p className='large-text'>MICHAEL D. SIM</p>
                        <p className='small-text'>an aspiring developer passionate about innovative technology and software</p>
                    </FadeIn>
                    </div>
                    <div className='home-link-container'>
                    <FadeIn>
                    <AnchorLink className='home-link' href='#more' offset='150'>Read more<img src={process.env.PUBLIC_URL+'/images/double-arrow-down-white.svg'} alt='arrow'/></AnchorLink>
                    </FadeIn>
                    </div>
                </div>
            </div>
            <div id='more' className='content-wrap-home'>
            <div className='aboutme'>
            <img src={process.env.PUBLIC_URL+'/images/IMG_1813.jpg'} alt='Myself'/>
            {console.log('process env', process.env.PUBLIC_URL)}
            <p className='aboutme-text'>
            Hi there! My name is Michael. Welcome to my website. I am a Software Engineer with a strong focus on Java as that is what I've used primarily in my professional career as well as in school. Aside from this, I like to pick up personal projects using new frameworks and/or languages in order to step out of my comfort zone and grow my skill set to constantly improve as a developer. I actually built this website as a way to teach myself about React.js.
            </p>
            </div>
          </div>
          <div className='content-wrap-skills'>
            <p className='skillsTitle'>SKILLS</p>
            <div className='skills'>
                {Skills.map((item, index) => {
                    return(
                        <div className='box' key={index}>
                            <h3 className='title'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
                </div>
            <div className="jump-link">
                <a href={process.env.PUBLIC_URL+ '/#' +NavItems[1].url}>Learn more</a>
            </div>
          </div>
                <Footer />
            </div>
        )
}

export default MainPage;

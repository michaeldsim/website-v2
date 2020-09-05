import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import {Skills, NavItems} from '../components/MenuItems'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './css/Homepage.css'
import FadeIn from 'react-fade-in'

const MainPage = () => {
        return(
            <div>
                <FadeIn>
                <Navbar />
                </FadeIn>
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
                    <AnchorLink className='home-link' href='#more' offset='150'>Read more<img src='/website-v2/images/double-arrow-down-white.svg' alt='arrow'/></AnchorLink>
                    </FadeIn>
                    </div>
                </div>
            </div>
            <div id='more' className='content-wrap-home'>
            <div className='aboutme'>
            <img src='/website-v2/images/IMG_1813.jpg' alt='Myself'/>
            <p className='aboutme-text'>
            Hi there! My name is Michael. Welcome to my website. I am currently an undergraduate student at Georgia State University studying Computer Science. Over the years, I have completed a few small personal projects to improve my skills as a developer along with my course work. I have a strong knowledge in Java which is what I mainly used for most of my courses. I also have experience in Python, HTML, CSS, JS, and ReactJS (which I used to create this website).
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
                <a href={NavItems[1].url}>Learn more</a>
            </div>
          </div>
                <Footer />
            </div>
        )
}

export default MainPage;

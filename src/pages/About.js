import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './css/About.css'

const About = () => 
{
    return(
        <div>
            <Navbar />
            <div className='page-container'>
                <div className='content-wrap'>
                <div className='about-me-box'>
                    <img src='/images/image0.jpg' alt='Me and my girlfriend'/>
                    <div className='intro-text'>
                    <h3>Introduction</h3>
                    <p>
                    Hello again and thank you for visiting my page! My name is Michael and I was born and raised in Lawrenceville, GA. I am currently a student at Georgia State University planning to graduate in Fall 2020 with a BS in Computer Science. I enjoy spending my free time on programming, fitness, and learning about new technology. I also like to unwind by playing video games (on a PC that I built) and watching TV shows.                    </p>
                    </div>
                </div>
                <div className='bottom-text'>
                <h3>
                    Why Computer Science?
                </h3>
                <p>
                    I have always been a very curious person ever since I was a little kid. I would always take apart my toys and try to figure out how each part worked and I feel like a lot of that problem solving and logic is used when I started to program. It is very fun to see how smaller things can work together and create something much greater. I have also been very into computers ever since middle school. This was mainly because I was a huge fan of Minecraft at the time and I modded my game pretty often. This showed me a new perspective on how files worked together in a game and how it changes.
                </p>
                </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default About;
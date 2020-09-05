import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import {Jobs} from '../components/MenuItems'
import './css/Work.css'

const Work = () => {
    return(
        <div>
            <Navbar />
            <div className='page-container'>
                <div className='content-wrap'>
                    <div className='work-container'>
                        {Jobs.map((itm, idx) => {
                            return(
                                <div className='work'>
                            <img src={itm.image}  alt='job'/>
                            <div className='work-text' key={idx}>
                                <div className='title-box'>
                                    <h3 className='work-title'>
                                        {itm.job + ' // '}
                                    </h3>
                                    <p className='work-title'>
                                        {itm.title}
                                    </p>
                                    <p>
                                        {itm.duration}
                                    </p>
                            </div>
                            <p>
                                {itm.desc}
                            </p>
                            </div>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default Work;
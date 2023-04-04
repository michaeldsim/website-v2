import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import {PDFObject} from 'react-pdfobject'
import './css/Resume.css'

const Resume = () => {
    return (
        <div>
            <Navbar />
            <div className='page-container'>
                <div className='content-wrap'>
                <div className='resume'>
                <PDFObject url={process.env.PUBLIC_URL+"/images/MichaelSim_ResumeATS.pdf"} height='60vh'/>
                </div>
                <a className='download-button' href={process.env.PUBLIC_URL+"/images/MichaelSim_ResumeATS.pdf"} download="MichaelSim_ResumeATS.pdf">Download</a>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Resume;
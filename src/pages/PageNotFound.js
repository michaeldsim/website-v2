import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './css/PageNotFound.css'

const PageNotFound = () => {
        return(
            <div className='page-container'>
                <Navbar />
                <div className='content-wrap'>
                    <h3>
                        404
                    </h3>
                    <p>
                        Page was not found!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }


export default PageNotFound;
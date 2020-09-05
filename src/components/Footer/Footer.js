import React, {Component} from 'react'
import {FooterItems} from '../MenuItems'
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer className='FooterItems'>
                <p className='footer-text'>Feel free to contact me on any of my social media!</p>
                <div>
                    <ul className='footer-menu'>
                        {FooterItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        <img className='footer-image' src={item.image} alt={item.title} />
                                    </a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </footer> 
        )
    }
}

export default Footer;

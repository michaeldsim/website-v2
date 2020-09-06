import React, {Component} from 'react';
import { NavItems } from '../MenuItems';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false, scrolledPast: false}


    listener = document.addEventListener("scroll", e => {
        
        if(!this.state.scrolledPast) {
            if(window.scrollY > 80) {
                this.setState({
                    scrolledPast: true
                })
            }
    }

        if(this.state.scrolledPast) {
            if(window.scrollY < 80) {
                this.setState({
                    scrolledPast: false
                })
            }
    }
    })


    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className={!this.state.scrolledPast && window.location.pathname === process.env.PUBLIC_URL+'/' ? 'NavbarItems' : 'NavbarItemsColored'}>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={process.env.PUBLIC_URL + item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;
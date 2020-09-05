import React, {Component} from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './css/Projects.css'

class Projects extends Component {

    state = { 
        loading: true,
        data: []
    }

    componentDidMount() {
        fetch('https://api.github.com/users/michaeldsim/repos')
        .then(response => response.json())
        .then(json => {
          this.setState({data: json})  
        })
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className='page-container'>
                    <div className='content-wrap'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Language
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                    {this.state.data.map((item) => (
                        <tr key={item.id} className='row'>
                            <td className='projects-title'>
                                <a href={item.html_url}>
                                    {item.name}
                                    </a>
                            </td>
                            <td>
                                {item.description}
                            </td>
                            <td className='projects-language'>
                                {item.language}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }

}

export default Projects;
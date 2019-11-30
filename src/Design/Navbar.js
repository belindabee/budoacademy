import React, {Component} from 'react'
import '../asset/scss/Navbar.scss'

//pic
import konshinbukai from '../asset/images/konshinbukai.png'

export default class Navbar extends Component {
    render() {
        return(
            <div>
                <div>
                    <div><img src={konshinbukai} alt='logo'  className='logo' />Budo Academy</div>
                </div>
                    <div className='navbar-container'>
                        <div className='grid-1'>
                            <a href='#' className='navLink'>Home</a>
                        <div className='grid-2'>
                            <a href='#' className='navLink'>Tentang Budo Academy</a>
                         </div> 
                         <div className='grid-3'>
                            <a href='#' className='navLink'>Program</a>
                         </div>   
                         <div className='grid-4'>
                             <a href='#' className='navLink'>Anak Berkebutuhan Khusus</a>
                         </div>
                         <div className='grid-5'>
                            <a href='#' className='navLink'>Instruktur</a>
                         </div>
                        </div>
                    </div>
            </div>

        )
    }
}
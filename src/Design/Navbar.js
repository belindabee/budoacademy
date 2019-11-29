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
                    <div className='navbar'>
                        <div className='grid1'>Home</div>
                        <div className='grid2'>Tentang Budo Academy</div>
                        <div className='grid3'>Program</div>
                        <div className='grid4'>Anak Berkebutuhan Khusus</div>
                        <div>Instruktur</div>
                    </div>
            </div>

        )
    }
}
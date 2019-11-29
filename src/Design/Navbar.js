import React, {Component} from 'react'

export default class Navbar extends Component {
    render() {
        return(
            <div>
                <div>
                    <div className='logo'><img src='koshinbukai-icon1.png' alt='logo' /></div>
                </div>
                <div>
                    Home
                </div>
                <div>
                    Tentang Budo Academy
                </div>
                <div>
                    Program
                </div>
                <div>
                    Anak Berkebutuhan Khusus
                </div>
                <div>
                    Instruktur
                </div>
                
            </div>
        )
    }
}
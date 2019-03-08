import React from 'react'
import './header.scss'
import flower_background from './flower_background.jpg'


const Header = () => {
    return (
        <div className="header">
            <div className="header__image-container">
                <img className="header__image" src={flower_background} alt="bouquet in background"/>
            </div>
            <div className="header__content">
                <h1 className="header__title">
                    Nem oversigt over gemte hilsner
                </h1>
            </div>
        </div>
    )
}

export default Header
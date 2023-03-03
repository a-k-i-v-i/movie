import React from "react";
import { NavLink } from "react-router-dom";
import {MdDarkMode} from 'react-icons/md';


const Header = ()=>{
    return(
        <header id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}><div className="header--logo">КИНО и ПОИСК</div></NavLink>
                    <div className="header--menu">
                        <NavLink className='header--menu--a' to={'/'}>Popular</NavLink>
                        <NavLink className='header--menu--a' to={'/topRated'}>topRated</NavLink>
                    </div>
                  <div className="header--serve">
                
                    <select name="" id="">
                        <option value="En-en">English</option>
                        <option value="Ru-ru">Russian</option>
                        <option value="Tr-tr">Turkish</option>
                    </select>
                    
                       <MdDarkMode className="darkMode"/>
               
                  </div>
                </div>
            </div>
        </header>
    )
}

export default Header
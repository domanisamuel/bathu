import React from 'react'
import styles from './navigation.module.scss'
import className from 'classnames'

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Shoppingbag } from '../../assets/icons/shopping-bag.svg';


const Navigation: React.FC =()=> {
    return (
        <div>
            <nav className={className("navbar navbar-default", styles.navbar)}>
                <div className={className("container")}>
                    <div className={className("navbar-header")}>
                        <button type="button" className={className("navbar-toggle")} data-toggle="collapse" data-target="#myNavbar">
                            <span className={className("icon-bar")}></span>
                            <span className={className("icon-bar")}></span>
                            <span className={className("icon-bar")}></span>                        
                        </button>
                        <div className={styles.brand}>
                            <img src={Logo} alt='logo' className={styles.logo} height='40'/> <b>Bathu Sneakers</b>
                        </div>
                    </div>
                    <div className={className("collapse navbar-collapse")} id="myNavbar">
                        <ul className={className("nav navbar-nav navbar-right")}>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/'><button>Shop</button></NavLink></li>
                            <li><NavLink to='/'>Explore</NavLink></li>
                            <li><NavLink to='/'><Shoppingbag/><span className={styles.bag__count}>{0}</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation
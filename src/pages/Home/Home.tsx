import React from 'react'
import styles from './Home.module.scss'

import Navigation from '../../components/navigation/navigation';
import MainSlide from '../../components/main-slide/main-slide';

const HomePage: React.FC =()=> {
    return (
        <div className={styles.home}>
            <Navigation/>
            <MainSlide/>
        </div>
    )
}
export default HomePage
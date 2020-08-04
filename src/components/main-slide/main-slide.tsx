import React from 'react'
import styles from './main-slide.module.scss'
// import className from 'classnames'

const MainSlide =()=> {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [{
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }]
      };
    return (
        <div className={styles.main__slide}>
             {/* <h1>Welcome to Bathu Sneakers! <span role='img' aria-label=''> 👟</span></h1> */}
             <video {...videoJsOptions}/>

        </div>
    )
}
export default MainSlide
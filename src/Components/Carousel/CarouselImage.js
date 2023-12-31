import React from 'react'

import styles from './CarouselImage.module.css'

const CarouselImage = (props) => {

    const { img, description, align } = props;

    const imgStyle= {
        width: '100%',
        maxWidth: '100vw',
        minHeight:'70vh',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: 'center center'
    }

    const descriptionAlign = {textAlign: align}

  return (
    <div style={imgStyle}>

      <img src="assets/piatti_logo.png" className={styles.logo} alt="logo" />
      <div className={styles.description} style={descriptionAlign}>
          {description.split(" ").map( word => { return <div key={word}>{word}</div> })}
      </div>
      
    </div>
  )
}

export default CarouselImage
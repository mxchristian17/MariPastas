import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CarouselImage.module.css'

const CarouselImage = (props) => {

    const { img, description } = props;

    const imgStyle= {
        width: '100%',
        minHeight:'70vh',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: 'center center'
    }

  return (
    <div style={imgStyle}>

      <div className={styles.descriptionStyle}>{description}</div>
      <Link to="/products" className={styles.labelStyle}>Conocé nuestros productos</Link>
      
    </div>
  )
}

export default CarouselImage
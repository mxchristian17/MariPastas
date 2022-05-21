import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <h1 className={styles.title}>Piatti</h1>
        <h3 className={styles.subTitle}>PASTAS FRESCAS CASERAS</h3>
    </div>
  )
}

export default Banner
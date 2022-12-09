import {  } from 'phosphor-react'
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'

import styles from '../styles/pages/portfolio.module.css'

export function Portfolio() {
  return (
    <>
     <Header text="Alguns projetinhos meus <3" image={portfolioImg} />
     <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        <p></p>

      </div>
      <div className={styles.cardContainer}>
        <p></p>

      </div>
      <div className={styles.cardContainer}>
        <p></p>

      </div>
     </div>
    </>
  )
}
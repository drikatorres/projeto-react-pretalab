import { AirplaneTakeoff, YinYang, UsersFour, Trophy, Volleyball, TreeStructure } from 'phosphor-react'
import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
     <Header text="Um pouco sobre mim aqui ♡" image={sobreImg} />
     <div className={styles.homeContainer}>
     <div className={styles.cardContainer}>
        <YinYang size={50} color="#686AAC" weight="bold" />
        <p className={styles.cardText}>Sou nascida e criada em Taguatinga, uma R.A aqui do quadradinho do DF. Sou profundamente apaixonada pelo cerrado.</p>
      </div>
      <div className={styles.cardContainer}>
        <AirplaneTakeoff size={50} color="#686AAC" weight="bold" />
        <p className={styles.cardText}>Amo viajar, principalmente sozinha. Gosto muito da liberdade de poder fazer o que quero na hora que quero, além de conhecer novas pessoas.</p>
      </div>
      <div className={styles.cardContainer}>
        <UsersFour size={50} color="#686AAC" weight="bold" />
        <p className={styles.cardText}>Sou filha da Maria de Fátima, tenho 7 irmãos e sobrinhos que amo demais.</p>
      </div>
      <div className={styles.cardContainer}>
        <Trophy size={50} color="#686AAC" weight="bold" />
        <p className={styles.cardText}>Sou orgulhosamente formada em Ciências Contábeis pela Universidade de Brasília e estou cursando Análise e Desenvolvimento de Sistemas.</p>
      </div>
      <div className={styles.cardContainer}>
        <Volleyball size={50} color="#686AAC" weight="bold" />
        <p className={styles.cardText}>Gosto demais do mundo da tecnologia e descobri na programação possibilidades incríveis de criação.</p>
      </div>
      <div className={styles.cardContainer}>
        <TreeStructure size={50} color="#686AAC" weight="bold" />
        <p className={styles.cardText}>Gosto muito de praticar atividades físicas, principalemte vôlei, Yoga e musculação.</p>
      </div>
     </div>
    </>
  )
}
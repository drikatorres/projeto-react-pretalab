import { GithubLogo, Coffee, GraduationCap, ListChecks, Car, At } from 'phosphor-react'
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'

export function Portfolio() {
  return (
    <>
     <Header text="Alguns projetinhos meus ♡" image={portfolioImg} />
     <section className={styles.homeContainer}>
      <div className={styles.titulo}>
        <h3>O link do meu Github é esse se você quiser dar uma olhadinha:</h3>
        <br />
        <GithubLogo size={30} color="black" weight="bold" />
        <a href="https://github.com/drikatorres" target="blank">Github</a>
      </div>
      <h2>Esse aqui são alguns projetos que eu tenho um carinho especial:</h2>
      <div className={styles.divContainer}>
        <p>Meu conversor de temperatura feito em Java</p>        
        <Coffee size={30} color="black" weight="bold" />
        <a href="https://github.com/drikatorres/conversor-temperatura-coding-tank-java" target="blank">Link</a>
      </div>
      <div className={styles.divContainer}>
        <p>Modelo de escola feito em Java</p>        
        <GraduationCap size={30} color="black" weight="bold" />
        <a href="https://github.com/drikatorres/projeto-final-poo-modulo-ii-escola" target="blank">Link</a>
      </div>
      <div className={styles.divContainer}>
        <p>To-do list feita em Javascript</p>
        <ListChecks size={30} color="black" weight="bold" />
        <a href="https://github.com/drikatorres/to-do-list-pretalab" target="blank">Link</a>
      </div>
      <div className={styles.divContainer}>
        <p>Sistema de corrida feito em Java</p>
        <Car size={30} color="black" weight="bold" />
        <a href="https://github.com/drikatorres/sistema-corrida-deva-lets-code" target="blank">Link</a>
      </div>
      <div className={styles.divContainer}>
        <p>Meu primeiro portfólio feito com HTML e CSS</p>
        <At size={30} color="black" weight="bold" />
        <a href="https://github.com/drikatorres/portfolio-drika-torres-pretalab" target="blank">Link</a>
      </div>
     </section>
     
    </>
  )
}
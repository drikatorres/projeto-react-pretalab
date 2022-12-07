import { useState } from 'react'
import { Header } from '../components/Header'
import contatoImg from '../assets/contato.svg'
import { database } from '../services/firebase'
import { ref, push, set } from 'firebase/database'

import styles from '../styles/pages/contato.module.css'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputName(event) {
    setNome(event.target.value)
  }

  function handleInputEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputMessage(event) {
    setMensagem(event.target.value)
  }

  function createMessage(event) {
    event.preventDefault()
   
    console.log('nome: ', nome)
    console.log('email: ', email)
    console.log('mensagem: ', mensagem)

    const mensagensListRef = ref(database, 'mensagens')
    const novaMensagemRef = push(mensagensListRef)

    set(novaMensagemRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return(
    <>
      <Header text="Para você entrar em contato comigo, digita suas infos aqui embaixo =)" image={contatoImg} />
      <div className={styles.formContainer}>
        <form onSubmit={createMessage} className={styles.form}>
          <input onChange={handleInputName} placeholder="Por favor, digite seu nome: " className={styles.formInput} value={nome} />
          <input onChange={handleInputEmail} placeholder="Agora digite seu e-mail: " className={styles.formInput} value={email} />
          <textarea onChange={handleInputMessage} placeholder="Agora você pode escrever a sua mensagem para mim :)" className={styles.formTextArea} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem  ♡ :) ♡ </button>
        </form>
      </div>
    </>
  )
}  
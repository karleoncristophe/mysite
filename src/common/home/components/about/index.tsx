import React from 'react'
import styles from './styles.module.scss'

export const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <article>
        <h2>Karleon Cristophe</h2>
        <p>
          Atualmente estudando/trabalhando com Frontend, Backend e Mobile. Amo
          aprender novas tecnologias e enfrentar novos desafios na programação.
          Iniciei minha carreira como programador visando desenvolvimento de
          jogos, que é algo que gosto muito, mas com o decorrer do tempo me
          apaixonei por desenvolvimento Web e Mobile. Estudo/Trabalho com
          ReactJS, React-Native e NodeJS.
        </p>
      </article>
    </section>
  )
}

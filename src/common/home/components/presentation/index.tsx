import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

export const Presentation: React.FC = () => {
  return (
    <main className={styles.container}>
      <section>
        <Image alt="Profile" height={150} src="/profile.png" width={150} />
        <h1>DESENVOLVEDOR FULL-STACK</h1>
        <p>
          Construindo o futuro da web <br /> com{' '}
          <span className={styles.creative}>CRIATIVIDADE</span> e{' '}
          <span className={styles.expertise}>EXPERTISE</span>.
        </p>
      </section>
    </main>
  )
}

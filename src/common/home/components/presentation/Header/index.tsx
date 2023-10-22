import React, { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

export const Header: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>
          Parcele multas, IPVA, Licenciamento, DPVAT, ITBI e muito mais em até
          12x no cartão de crédito de forma rápida e segura.
        </h1>
        <Image
          src={'/person.png'}
          width={319}
          height={418}
          alt="Logo da empresa Parcele Hoje"
        />
      </div>
    </section>
  )
}

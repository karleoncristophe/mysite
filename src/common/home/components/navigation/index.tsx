'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Navigation: FC = () => {
  return (
    <div className={styles.fullContainer}>
      <header className={`${styles.container}`}>
        <div className={styles.wrapper}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#ffff',
              textTransform: 'uppercase',
              gap: 18,
            }}
          >
            <Image
              src={'./logo.svg'}
              width={34}
              height={40}
              alt="Logo da empresa Parcele Hoje"
            />
            Karleon C.
          </Link>
          <ul>
            <li>
              <Link href="/about">Home</Link>
            </li>
            <li>
              <Link href="/about">Quem sou</Link>
            </li>
            <li>
              <Link href="/contact">Habilidades</Link>
            </li>
          </ul>
          <button>Contato</button>
        </div>
      </header>
    </div>
  )
}

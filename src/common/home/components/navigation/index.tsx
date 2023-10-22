'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

export const Navigation: FC = () => {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        setActive('active')
      } else {
        setActive('')
      }
    })
  }, [active])

  useEffect(() => {
    const distance =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop

    if (distance > 1) {
      setActive('active')
    } else {
      setActive('')
    }
  }, [])

  const sizeWidth = 110

  return (
    <div className={styles.fullContainer}>
      <header className={`${styles.container} ${active && styles.active}`}>
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
              src={active ? './logo.svg' : './logo.svg'}
              width={34}
              height={40}
              alt="Logo da empresa Parcele Hoje"
            />
            Karleon C.
          </Link>
          <div className="flex-1" />
          <ul>
            <li>
              <Link href="/about">Quem sou</Link>
            </li>
            <li>
              <Link href="/contact">Habilidades</Link>
            </li>
            <li>
              <Link href="/faq">Contato</Link>
            </li>
          </ul>
        </div>
      </header>
      {open && (
        <div className={styles.navigationMobile} onClick={() => setOpen(false)}>
          <ul>
            <li>
              <Link href="/about">Quem Somos</Link>
            </li>
            <li>
              <Link href="/contact">Fale conosco</Link>
            </li>
            <li>
              <Link href="/faq">Ajuda</Link>
            </li>
          </ul>
        </div>
      )}
      <div style={{ width: '300px', height: '200px', background: 'red' }} />
    </div>
  )
}

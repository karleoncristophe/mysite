import React from 'react'
import { Navigation } from './components/navigation'
import { Presentation } from './components/presentation'
import styles from './styles.module.scss'
import { About } from './components/about'

export const Home: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Navigation />
      <Presentation />
      <About />
    </main>
  )
}

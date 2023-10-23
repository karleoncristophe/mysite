import React from 'react'
import { Navigation } from './components/navigation'
import { Presentation } from './components/presentation'

export const Home: React.FC = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Presentation />
    </main>
  )
}

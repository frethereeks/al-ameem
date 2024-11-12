import { AboutSection, HappyClientSection, Newsletter } from '@/components'
import React from 'react'

export default function AboutPage() {
  return (
      <main className='relative flex flex-col'>
          <AboutSection />
          <HappyClientSection />
          <Newsletter />
    </main>
  )
}

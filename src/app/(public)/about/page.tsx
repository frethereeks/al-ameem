import { AboutSection, HappyClientSection, Newsletter } from '@/components'
import React from 'react'

export default function AboutPage() {
  return (
    <main className='relative flex flex-col'>
      <div className="bg-primary">
        <AboutSection main={true} />
      </div>
      <HappyClientSection />
      <Newsletter />
    </main>
  )
}

import { PopularSection } from '@/components'
import { Header1, Header2, Para1 } from '@/components/ui/Typography'
import React from 'react'

export default function MenuPage() {
  return (
    <main className='relative flex flex-col bg-background'>
      <section className="relative py-10 lg:py-20 px-4 text-center bg-white shadow-lg shadow-text/10">
        <div className="container mx-auto flex flex-col items-center gap-2 md:gap-4">
          <Header2 className='text-secondary font-inspiration'>Our Menu</Header2>
          <Header1 className={`text-primary font-medium font-eugusto max-w-md`}>We Provide <span className="flex items-center gap-4 lg:gap-6">Healthy Food</span></Header1>
          <Para1 className={`font-urbanist text-text text-lg lg:text-xl max-w-xl`}>Foor for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture, it has a history, it has a story and a relationship.</Para1>
        </div>
      </section>
      <section className="bg-light-secondary/50">
        <PopularSection />
      </section>
    </main>
  )
}

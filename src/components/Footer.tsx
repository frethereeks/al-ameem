// import { ASSETS_URL } from '@/constants'
// import Image from 'next/image'
import { appRoutePaths } from '@/routes/paths'
import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'
import { Header3, Header4, Para2 } from './ui/Typography'

export default function Footer() {
  return (
    <footer className='bg-background py-10 px-4'>
      <div className="container mx-auto relative grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-text">
        <aside className="flex flex-col gap-3 md:gap-6">
          <Header3 className='text-text'>Al-Ameen<span className='text-secondary'>.</span></Header3>
          <Header4 className='text-text'>Location</Header4>
          <Para2 className="opacity-90 leading-loose">110, along NYSC road, adjacent Gidan-Megishiri, Birnin-Kebbi, Kebbi, Nigeria</Para2>
          {/* <Link href={appRoutePaths.googleMap} target='_blank' referrerPolicy='no-referrer' className='bg-secondary hover:bg-white hover:text-secondary py-2 px-6 text-text rounded-sm w-max'>Directions</Link> */}
        </aside>
        <aside className="flex flex-col sm:justify-end gap-6">
          <Header4 className='text-text'>Quick Links</Header4>
          <div className="flex flex-col text-base md:text-base opacity-90">
            <Link href={appRoutePaths.home} className="leading-loose">Home</Link>
            <Link href={appRoutePaths.about} className="leading-loose">About</Link>
            <Link href={appRoutePaths.menu} className="leading-loose">Menu</Link>
            <Link href={appRoutePaths.contact} className="leading-loose">Contact</Link>
          </div>
        </aside>
        <aside className="flex flex-col sm:justify-end gap-3 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-6">
            <Header4 className='text-text'>Opening Hours</Header4>
            <div className="flex flex-col text-base md:text-base opacity-90">
              <p className="leading-loose">Monday - Friday</p>
              <p className="leading-loose">08:30 AM - 05:00 PM</p>
              <Link href={"tel: +2348038976335"} className="leading-loose">Tel: +2348038976335</Link>
            </div>
          </div>
          <Header4 className='text-text'>Socials</Header4>
          <div className="flex gap-4 text-base md:text-base opacity-90">
            <Link href={'https://www.facebook.com/al-ameen'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoFacebook /></Link>
            <Link href={'https://www.twitter.com/al-ameen'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoTwitter /></Link>
            <Link href={'https://www.instagram.com/al-ameen'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoInstagram /></Link>
            <Link href={'https://www.youtube.com/al-ameen'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoYoutube /></Link>
          </div>
        </aside>
      </div>
    </footer>
  )
}

"use client"

import React from 'react'
import Link from 'next/link'
import { headerLinks } from '@/data'
import { appRoutePaths } from '@/routes/paths'
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";
import { usePathname } from 'next/navigation'

export default function Header() {
    const [navshow, setNavshow] = React.useState(false)
    const [fixed, setFixed] = React.useState(false)
    const location = usePathname();

    React.useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 60) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        }
        return () => {
            setNavshow(false);
        }
    }, [location])

    return (
        <header className={`${fixed ? 'fixed shadow-md shadow-black/20' : 'relative shadow-none'} z-40 w-full px-4 py-4 md:py-6 bg-white`}>
            <div className="container mx-auto flex justify-between gap-4">
                <nav className={`flex-1 flex flex-col lg:flex-row lg:items-center gap-2 z-50 absolute lg:static top-0 w-full min-h-screen lg:min-h-max ${navshow ? 'right-0' : 'right-full'}`}>
                    <div onClick={() => setNavshow(!navshow)} className={`${navshow ? 'flex lg:hidden' : 'hidden'} transition-none duration-0 fixed top-0 left-0 w-screen h-screen bg-text/50`}></div>
                    <div className="relative flex flex-col lg:flex-row justify-center lg:justify-start h-screen lg:h-max lg:items-center gap-2 max-w-[20rem] lg:max-w-max bg-white">
                        <div onClick={() => setNavshow(!navshow)} className="absolute top-2 right-3 lg:hidden bg-text/30 text-primary text-3xl cursor-pointer p-1 grid place-items-center font-extrabold rounded-xl">
                            <IoCloseOutline />
                        </div>
                        <form action="" className={`flex absolute top-12 left-0 w-[90%] mx-4 lg:hidden gap-2 border-b-2 border-primary`}>
                            <input type="search" name="search" id="search" placeholder='Search...' required className="flex-1 p-4 text-sm lg:text-base text-text" />
                            <button className="bg-transparent grid place-items-center text-primary text-lg md:text-2xl cursor-pointer"><IoSearchOutline /></button>
                        </form>
                        {
                            headerLinks.map(link => (
                                <Link key={link.id} href={link.url} className="lg:flex-1 p-2 font-semibold lg:text-center text-primary hover:text-white bg-white hover:bg-primary lg:rounded-lg capitalize">{link.title}</Link>
                            ))
                        }
                    </div>
                </nav>
                <div className="flex-1 flex lg:justify-center items-center flex-shrink-0">
                    <Link href={appRoutePaths.home} className='text-primary text-xl md:text-3xl lg:text-5xl font-medium font-eugusto'>Al-Ameen</Link>
                </div>
                <div className='flex-1 flex-shrink-0 flex justify-end items-center gap-4'>
                    <form action="" className={`hidden lg:flex gap-2 border-b-2 border-primary max-w-lg`}>
                        <input type="search" name="search" id="search" placeholder='Search...' required className="flex-1 p-2 text-sm lg:text-base text-text" />
                        <button className="bg-transparent grid place-items-center text-primary text-lg md:text-xl cursor-pointer"><IoSearchOutline /></button>
                    </form>
                    <div className="relative text-primary text-2xl lg:text-2xl cursor-pointer p-2">
                        <HiOutlineShoppingCart />
                        <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-secondary text-white text-xs grid place-items-center">5</div>
                    </div>
                    {/* <div onClick={() => setNavshow(!navshow)} className="relative lg:hidden text-primary text-lg lg:text-2xl cursor-pointer w-6 "> */}
                    <div onClick={() => setNavshow(!navshow)} className="relative lg:hidden bg-text/10 text-primary text-2xl md:text-3xl cursor-pointer xs:w-7 xs:h-7 w-9 h-9 grid place-items-center font-extrabold rounded-md">
                        <HiMenuAlt3 />
                    </div>
                </div>
            </div>
        </header>
    )
}

import React from 'react'
import { Header1, Header5, Header4, Para2 } from './ui/Typography'
import Link from 'next/link'
import { appRoutePaths } from '@/routes/paths'
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function PopularSection() {
    return (
        <>
            <section className="py-5 md:py-10 lg:py-20 px-4">
                <div className="container mx-auto flex flex-col gap-8">
                    <Header1 className="text-primary text-center pb-4 font-medium">Popular Dishes</Header1>
                    <div className="px-4 md:px-8 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        <aside className="relative flex flex-col gap-2 max-w-md bg-white rounded-xl hover:shadow-lg overflow-hidden">
                            <div className="min-h-40 flex-shrink-0 relative bg-primary"></div>
                            <div className="flex-1 flex flex-col justify-between gap-2 lg:gap-3 p-4">
                                <div className="flex-1 flex flex-col">
                                    <Header4 className='text-primary font-medium font-eugusto'>Tuwo Chinkafa &amp; Black Soup</Header4>
                                    <Para2 className="font-urbanist text-text text-balance line-clamp-3">A unique combination of protein and carbohydrate, yam and egg is a delicious food eaten by native Nigerian to get their day started on an elegant note.</Para2>
                                </div>
                                <div className="flex justify-between items-center gap-3 py-2">
                                    <Header5 className='text-secondary font-urbanist'>&#8358;550.00</Header5>
                                    <Link href={appRoutePaths.menu} className="group flex-shrink-0 flex justify-center items-center h-8 w-8 rounded-xl bg-text/10 text-primary hover:bg-text/20 text-lg md:text-xl cursor-pointer font-urbanist"><HiOutlineShoppingBag /></Link>
                                </div>
                            </div>
                        </aside>
                        <aside className="relative flex flex-col gap-2 max-w-md bg-white rounded-xl hover:shadow-lg overflow-hidden">
                            <div className="min-h-40 flex-shrink-0 relative bg-primary"></div>
                            <div className="flex-1 flex flex-col justify-between gap-2 lg:gap-3 p-4">
                                <div className="flex-1 flex flex-col">
                                    <Header4 className='text-primary font-medium font-eugusto'>Yam &amp; Egg Sauce</Header4>
                                    <Para2 className="font-urbanist text-text text-balance line-clamp-3">A unique combination of protein and carbohydrate, yam and egg is a delicious food eaten by native Nigerian to get their day started on an elegant note.</Para2>
                                </div>
                                <div className="flex justify-between items-center gap-3 py-2">
                                    <Header5 className='text-secondary font-urbanist'>&#8358;800.00</Header5>
                                    <Link href={appRoutePaths.menu} className="group flex-shrink-0 flex justify-center items-center h-8 w-8 rounded-xl bg-text/10 text-primary hover:bg-text/20 text-lg md:text-xl cursor-pointer font-urbanist"><HiOutlineShoppingBag /></Link>
                                </div>
                            </div>
                        </aside>
                        <aside className="relative flex flex-col gap-2 max-w-md bg-white rounded-xl hover:shadow-lg overflow-hidden">
                            <div className="min-h-40 flex-shrink-0 relative bg-primary"></div>
                            <div className="flex-1 flex flex-col justify-between gap-2 lg:gap-3 p-4">
                                <div className="flex-1 flex flex-col">
                                    <Header4 className='text-primary font-medium font-eugusto'>Akpu &amp; White Soup</Header4>
                                    <Para2 className="font-urbanist text-text text-balance line-clamp-3">White soup is a dish from the Eastern part of Nigeria. It is a rich-soup populated with assorted fish and meat components geared at enhancing the eating experience of whoever takes it on.</Para2>
                                </div>
                                <div className="flex justify-between items-center gap-3 py-2">
                                    <Header5 className='text-secondary font-urbanist'>&#8358;1,200.00</Header5>
                                    <Link href={appRoutePaths.menu} className="group flex-shrink-0 flex justify-center items-center h-8 w-8 rounded-xl bg-text/10 text-primary hover:bg-text/20 text-lg md:text-xl cursor-pointer font-urbanist"><HiOutlineShoppingBag /></Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

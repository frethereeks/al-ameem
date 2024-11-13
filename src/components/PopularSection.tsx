"use client"

import React from 'react'
import { Header1, Header5, Header4, Para2 } from './ui/Typography'
import Link from 'next/link'
import { appRoutePaths } from '@/routes/paths'
import { HiOutlineShoppingBag } from "react-icons/hi";
import AppSlider from './ui/AppSlider';
import toast from 'react-hot-toast';
import { popularFoods } from '@/data'

type TFoodProps = {
    id: string;
    image: string;
    slug: string;
    title: string;
    description: string;
    price: number;
}

export default function PopularSection() {
    
    
    const handleAddToCart = (food: TFoodProps) => {
        toast.success(`${food.title} successfully added to cart.`)
    }
    return (
        <>
            <section className="py-10 md:py-10 lg:py-20 px-4">
                <div className="container mx-auto flex flex-col gap-6 md:gap-8">
                    <Header1 className="text-primary text-center py-4 font-medium">Popular Dishes</Header1>
                    <div className="px-4 md:px-8 lg:px-10">
                        <AppSlider
                            key={"8256015asdkjlvcqa0p25"}
                            breakpoints={{
                                360: { slidesPerView: 1, spaceBetween: 10 },
                                650: { slidesPerView: 2, spaceBetween: 20 },
                                1042: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                            items={popularFoods.map(food => (
                                <aside key={food.id} className="relative flex flex-col gap-2 max-w-md bg-white rounded-xl hover:shadow-lg overflow-hidden">
                                    <Link href={`${appRoutePaths.menu}/${food.slug}`} className="min-h-40 flex-shrink-0 relative bg-primary"></Link>
                                    <div className="flex-1 flex flex-col justify-between gap-2 lg:gap-3 p-4">
                                        <Link href={`${appRoutePaths.menu}/${food.slug}`} className="flex-1 flex flex-col">
                                            <Header4 className='text-primary font-medium font-eugusto'>{food.title}</Header4>
                                            <Para2 className="font-urbanist text-text text-balance line-clamp-3">{food.description}</Para2>
                                        </Link>
                                        <div className="flex justify-between items-center gap-3 py-2">
                                            <Header5 className='text-secondary font-urbanist'>&#8358;{food.price}</Header5>
                                            <button onClick={() => handleAddToCart(food)} className="group flex-shrink-0 flex justify-center items-center h-8 w-8 rounded-xl bg-text/10 text-primary hover:bg-text/20 text-lg md:text-xl cursor-pointer font-urbanist"><HiOutlineShoppingBag /></button>
                                        </div>
                                    </div>
                                </aside>
                            ))
                            }
                        />
                    </div>


                    <div className="px-4 md:px-8 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    </div>
                </div>
            </section>
        </>
    )
}

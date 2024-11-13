import { Header2, Header3, Para1 } from '@/components/ui/Typography';
import { popularFoods } from '@/data'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2';

type TPageParams = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const foods = await popularFoods.map(el => ({ slug: el.slug }))
    return foods;
}

export async function generateMetadata({ params: { slug } }: TPageParams) {
    const data = await fetchFood(slug)
    return {
        title: `${data?.title}'s Details`,
        description: data?.description
    }
}

export const fetchFood = async (slug: string) => {
    const food = await popularFoods.find(el => el.slug === slug)
    return food;
}



export default async function SingleFoodPage({ params: { slug } }: TPageParams) {
    const data = await fetchFood(slug)

    return (
        <main className='relative flex flex-col bg-primary'>
            <section className="py-5 md:py-10 lg:py-20 px-4">
                <div className="container mx-auto lg:px-10 grid lg:grid-cols-2 gap-8 lg:justify-center">
                    <aside className="relative bg-light rounded-xl">

                    </aside>
                    <aside className="relative flex flex-col gap-2 md:gap-4 py-10">
                        <Header3 className='text-secondary font-inspiration'>Food Details</Header3>
                        <Header2 className={`text-white font-medium font-eugusto max-w-sm`}>{data?.title}</Header2>
                        <Para1 className={`font-urbanist text-white text-lg lg:text-xl text-balance max-w-md`}>{data?.description}</Para1>
                        <button className="group flex-shrink-0 flex items-center gap-3 w-max px-6 lg:px-8 py-2 lg:py-3 mt-2 rounded-[2rem] bg-secondary text-white text-lg md:text-xl cursor-pointer font-urbanist">Add to Cart <HiOutlineShoppingBag className="text-xl md:text-3xl group-hover:-translate-x-1" /></button>
                    </aside>
                </div>
            </section>
        </main>
    )
}

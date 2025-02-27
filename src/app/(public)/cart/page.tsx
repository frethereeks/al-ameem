"use client"
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { changeInCart, emptyCart, removeFromCart } from '@/lib/features/reducers/cartSlice'
import { CartProp } from '@/types'
import { Modal } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoCloseOutline, IoWalletOutline } from 'react-icons/io5'
// import { changeInCart, removeFromCart } from '../features/reducers/cartSlice'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export default function PublicCartPage() {
    const cartContents: CartProp[] = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleCheckout = async () => {
        dispatch(emptyCart())
        setShowModal(!showModal)
    }

    return (
        <>
            <Modal
                open={showModal}
                title={
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className="h-14 w-14 md:h-20 md:w-20 text-4xl md:text-6xl text-primary mx-auto bg-primary/20 rounded-full grid place-items-center">
                            <MdOutlineShoppingCartCheckout />
                        </div>
                        <h4 className="text-xl md:text-2xl text-center text-primary mb-4">Are you sure you want to proceed?</h4>
                    </div>
                }
                onCancel={() => setShowModal(!showModal)}
                onOk={handleCheckout}
                okText="Proceed"
            >

            </Modal>
            <main className="relative before:absolute before:h-2/3 before:w-2/3 before:bg-primary/80 before:-top-32 before:-right-72 before:-rotate-45 before:rounded-full after:absolute after:h-[100vh] after:w-[100vh] after:bg-secondary after:-bottom-32 after:-left-20 after:-rotate-45 after:rounded-full py-20 px-4 min-h-[70vh] overflow-hidden">
                <section className="container mx-auto relative z-40">
                    <div className="bg-white shadow-[0_0_15px_-4px_#0003] rounded-md p-4 max-w-screen-md mx-auto relative">
                        <div className="flex items-center gap-4 justify-between border-b border-slate-300 py-4 px-2">
                            <h3 className="text-2xl md:text-4xl font-semibold text-primary">BC Lounge <span className="text-secondary">Cart</span></h3>
                            <div className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative md:scale-125 -translate-x-1">
                                <HiOutlineShoppingBag />
                                <div className="absolute h-4 w-4 grid place-items-center text-white bg-secondary rounded-full -top-0.5 -right-0.5 text-xs">{cartContents.length}</div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 divide-y divide-slate-200">
                            {
                                cartContents.map((el) => (
                                    <aside key={el.id} className="p-2 flex items-center gap-2 justify-between relative">
                                        <button onClick={() => dispatch(removeFromCart(el.id))} className="h-5 w-5 text-lg grid place-items-center bg-secondary text-white cursor-pointer absolute top-0.5 -right-0.5 rounded-full">
                                            <IoCloseOutline />
                                        </button>
                                        <div className="flex gap-2 items-center flex-1 relative">
                                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-md relative overflow-hidden">
                                                <Image src={el.image} alt={el.name} className="object-cover flex-shrink-0" fill />
                                            </div>
                                            <div className="flex flex-col text-primary">
                                                <h4 className="text-lg md:text-xl font-semibold">{el.name}</h4>
                                                <p className="text-sm md:text-base text-secondary opacity-70 font-medium">&#8358;{el.price.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm md:text-base opacity-70 font-medium flex-1 text-center">&#8358;{((el.qty * el.price)).toLocaleString()}</p>
                                        <div className="border border-slate-200 rounded-md w-10 h-8 overflow-hidden">
                                            <input onChange={e => dispatch(changeInCart({ id: el.id, qty: Number(e.target.value) }))} type="number" min={1} value={el.qty} className="bg-transparent w-16 px-2 outline-none pt-0.5 pl-2.5 text-sm md:text-base" />
                                        </div>
                                    </aside>
                                ))
                            }
                        </div>
                        <div className="flex flex-col border-t border-secondary/20 border-solid divide-y divide-slate-200 text-text/80 py-2">
                            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
                                <p className="opacity-60">Subtotal:</p>
                                <p className="font-semibold">&#8358;{cartContents.reduce((total, el) => el.price * el.qty + total, 0).toLocaleString()}</p>
                            </div>
                            {/* <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
                                <p className="opacity-60">Discount Applied:</p>
                                <p className="font-semibold text-primary">(&#8358;2,000)</p>
                            </div> */}
                            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
                                <p className="opacity-60">Electricity VAT:</p>
                                <p className="font-semibold">0</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
                                <p className="opacity-60">Grand Total:</p>
                                <p className="text-base md:text-lg font-bold">&#8358;{(cartContents.reduce((total, el) => el.price * el.qty + total, 0)).toLocaleString()}</p>
                            </div>
                            <button onClick={() => setShowModal(!showModal)} className='bg-primary hover:bg-primary/80 text-white text-base md:text-lg rounded-md flex justify-center items-center gap-2 mt-2 p-2 '><IoWalletOutline /> Proceed to Checkout</button>
                            <p className="opacity-60 text-xs text-center pt-1">100% Secure with MasterCard, Paystack and Flutter Technology</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}


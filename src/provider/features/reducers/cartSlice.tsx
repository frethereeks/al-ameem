"use client"
// import { Menu } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

// JSON - JavaScript Object Notation
export type TCartProps = {
    id: string
    name: string
    qty: number
    slug: string
    image: string
    price: number
    popular: boolean
}

const initialState = localStorage.getItem("al-ameem__cart") ? JSON.parse(localStorage.getItem("al-ameem__cart")!) as unknown as TCartProps[] : []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(el => el.id === action.payload.id)
            if (findProduct) {
                toast.error(`This product is already in your cart`, {id: "123"})
            }
            else {
                action.payload.qty = 1
                state.push(action.payload)
                toast.success("New product added to cart", { id: "123" })
                localStorage.setItem("al-ameem__cart", JSON.stringify(state))
            }
        },
        changeInCart: (state, action) => {
            state.forEach((cart,i) => {
                if (cart.id === action.payload.id) {
                    state[i].qty = action.payload.qty
                }
            })
            localStorage.setItem("al-ameem__cart", JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            state.splice(action.payload, 1)
            toast.success("Product removed from cart", { id: "123" })
            localStorage.setItem("al-ameem__cart", JSON.stringify(state))
        }
    }
})

export const { addToCart, changeInCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
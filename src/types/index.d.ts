type TFoodProps = {
    id: string
    image: string
    title: string
    price: number
    qtyAvailable: number
    status: "PENDING" | "ACTIVE" | "DISABLE"
    description: string
    createdAt: string
    updatedAt: string
}
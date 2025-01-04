import { TableColumnsType } from "antd";
// import { ItemType } from "antd/es/menu/interface";
import Image from "next/image";

export const MENU_COLUMNS = (): TableColumnsType<TFoodProps> => {
    return [
        {
            key: "Product Details",
            title: "Product Details",
            render: (_, val) => (
                <div className="flex gap-2 items-center flex-1">
                    <div className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 relative bg-primary rounded-md overflow-hidden">
                        <Image src={val.image} alt={val.title} fill className="absolute left-0 top-0 h-full w-full rounded-md object-cover flex-shrink-0" />
                    </div>
                    <div className="flex flex-col text-secondary">
                        <h4 className="text-sm md:text-base font-semibold whitespace-nowrap text-primary">{val.title}</h4>
                        <p className="text-xs md:text-sm text-dark/60 opacity-70 font-medium">&#8358;{val.price.toLocaleString()}</p>
                    </div>
                </div>
            )
        },
        {
            key: "Quantity Available",
            title: "Quantity Available",
            render: (_, val) => (
                <span>{val.qtyAvailable.toLocaleString()}</span>
            )
        },
        {
            key: "Date Added",
            title: "Date Added",
            render: (_, val) => (
                <span>{new Date(val.createdAt!).toDateString()}</span>
            )
        },
        {
            key: "Status",
            title: "Status",
            render: (_, val) => (
                <button className={`py-1 px-4 ${val.status === "ACTIVE" ? 'text-teal-700 bg-secondary/30' : 'bg-grey/60'} rounded-[2rem] text-xs md:text-sm`}>
                    {val.status}
                </button>
            )
        },
        // {
        //     key: "Action",
        //     title: "Action",
        //     colSpan: 2,
        //     render: (_, val) => (
        //         <aside className="flex-1 flex justify-center gap-4" >
        //             {action(val.id)}
        //         </aside>
        //     )
        // },
    ]
}

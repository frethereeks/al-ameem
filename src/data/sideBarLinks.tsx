import { appRoutePaths } from "@/routes/paths"
import { GrDashboard, GrLineChart, GrPersonalComputer } from "react-icons/gr"
import { IoFastFoodSharp } from "react-icons/io5";

type SidebarProps = {
    id: string
    title: string
    icon: React.ReactNode
    link: string
}

export const sideBarLinks: SidebarProps[] = [
    {
        id: '8q2s03x5068q20',
        title: 'Dashboard',
        icon: <GrDashboard />,
        link: appRoutePaths.admindashboard,
    },
    {
        id: '8q2s03x5068q21',
        title: 'Sales',
        icon: <GrLineChart />,
        link: appRoutePaths.adminsales,
    },
    {
        id: '8q2s03x5068q22',
        title: 'Menu',
        icon: <IoFastFoodSharp />,
        link: appRoutePaths.adminmenu,
    },
    {
        id: '8q2s03x5068q23',
        title: 'Profile',
        icon: <GrPersonalComputer />,
        link: appRoutePaths.adminprofile,
    },
]
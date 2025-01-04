"use client"
import React, { useState } from 'react'
import { Flex, Layout, Menu } from 'antd'
import Link from 'next/link'
import { LuText } from 'react-icons/lu'

import Footer from './Footer'
import { sideBarLinks } from '@/data/sideBarLinks'
import { appRoutePaths } from '@/routes/paths'
import { usePathname } from 'next/navigation'

export default function DashLayout({ children }: { children: React.ReactNode }) {
    const [openSideBar, setOpenSidebar] = useState<boolean>(false)
    const [siderShow, setSiderShow] = useState<"xs" | "lg">("xs")
    const pathname = usePathname()

    // useEffect(() => {
    //     // window.onresize = () => {
    //     //     const { width } = window.screen
    //     // }
    // }, [window.screen.width])

    return (
        <main className='flex flex-col'>
            <Flex vertical>
                <Layout className='min-h-screen light flex flex-col'>
                    <Layout.Header className='fixed w-full left-0 top-0 p-0' style={{ padding: 0, margin: 0, zIndex: 60, position: "fixed" }}>
                        <div className="bg-white flex justify-between gap-8 w-full p-4">
                            <div className="flex lg:justify-center items-center flex-shrink-0 border-b border-b-slate-200">
                                <Link href={appRoutePaths.home} className='text-primary text-lg md:text-xl lg:text-2xl font-medium font-eugusto leading-none'>Al-Ameen <span className='text-secondary flex text-sm lg:text-base text-center md:tracking-tight uppercase -my-1 lg:-my-2'>Confectionary</span></Link>
                            </div>
                            {/* <form className="flex items-center gap-2 border-b-[2px] border-primary ml-52 w-full max-w-lg md:max-w-xl">
                                <input type='search' placeholder='What would you like to eat?' className='flex-1 text-sm lg:text-sm border-transparent hover:border-transparent bg-transparent text-primary outline-none hover:outline-none' />
                                <button type="submit" className='p-2'>
                                    <IoSearchOutline className='text-secondary' />
                                </button>
                            </form> */}
                            {/* <button onClick={() => setOpenSidebar(!openSideBar)} className='group p-2 bg-secondary/20 hover:bg-primary text-primary hover:text-white text-xl rounded-md ml-auto mx-4'> */}
                            <button onClick={() => setSiderShow(prev => prev === "xs" ? "lg" : "xs")} className={`group py-1 px-2 bg-secondary/50 hover:bg-primary text-primary hover:text-white text-xl rounded-md ml-auto mx-4`}>
                                <LuText className={`${siderShow ? 'scale-100' : '-scale-100'}`} />
                            </button>
                        </div>
                    </Layout.Header>
                    <Layout className='flex' style={{marginTop: 50}}>
                        <Layout.Sider
                            breakpoint={siderShow}
                            collapsible
                            trigger={null}
                            collapsedWidth={0}
                            theme={"light"}
                            // collapsed={openSideBar}
                            style={{ padding: 0 }}
                            className='flex flex-col p-4 pt-28'
                        >
                            <Flex vertical justify='space-between' className='sticky top-0 left-0 h-full py-10 px-4 bg-white flex flex-col gap-10'>
                                <div className="flex-1 flex flex-col sticky top-0 left-0 h-full w-full pt-20">
                                    {/* <Menu mode='inline' defaultSelectedKeys={[`8206339`]} className='overflow-hidden bg-transparent border-0'>

                                    </Menu> */}
                                        {
                                            sideBarLinks.map(el => (
                                                <Link key={el.id} href={el.link} className={`button ${pathname.includes(el.link) ? "bg-primary/50 text-white" : "bg-white text-primary"} flex items-center gap-2 py-3`}>
                                                    <span className="w-20">{el.icon}</span>
                                                    <p>{el.title}</p>
                                                </Link>
                                            ))
                                        }
                                </div>
                            </Flex>
                        </Layout.Sider>
                        <Flex vertical className='w-full' style={{ paddingTop: 20 }}>
                            <Layout.Content className='bg-background p-4 pt-12'>{children}</Layout.Content>
                            <Footer />
                        </Flex>
                    </Layout>
                </Layout>
            </Flex>
        </main>
    )
}

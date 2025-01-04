"use client"
import { useState } from "react"
import { Modal, Table, TableProps } from 'antd'
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MENU_COLUMNS } from './column'
import { menuData } from './constants';
import Link from "next/link";
import { appRoutePaths } from "@/routes/paths";
import MenuUpload from "./components/MenuUpload";
import { Header3 } from "@/components/ui/Typography";
// import { config } from "@/config";

// const handleEdit = async(id) => {}
// const handleDelete = async(id) => {}

export default function MenuContainer() {

    // console.log({
    //     cloud_name: config.CLOUDINARY.CLOUD_NAME,
    //     api_key: config.CLOUDINARY.API_KEY,
    //     api_secret: config.CLOUDINARY.API_SECRET,
    // })

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [rowType, setRowType] = useState<"checkbox" | "radio">("checkbox")
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [uploadModal, setUploadModal] = useState<boolean>(false)

    const rowSelection: TableProps<TFoodProps>["rowSelection"] = {
        selectedRowKeys,
        type: rowType,
        onChange(keys: React.Key[]) {
            setSelectedRowKeys(keys)
            console.log({ selectedRowKeys })
        }
    }

    const handleDelete = async () => {
        alert(`The Foods with IDs: ${selectedRowKeys.join(",")} have been deleted`)
        setSelectedRowKeys([])
        setDeleteModal(!deleteModal)
    }
    // const actionButtons = () => <>
    //     <button onClick={() => handleEdit(id)} className="group cursor-pointer h-8 w-9 grid place-items-center rounded-md text-base relative bg-secondary/10 hover:bg-secondary/30 text-primary hover:text-dark" >
    //         <BsPencil />
    //     </button>
    //     <button onClick={} title="Delete Msg" className="group cursor-pointer h-8 w-9 grid place-items-center rounded-md text-xl relative bg-danger/10 hover:bg-danger/15 text-danger hover:text-danger" >
    //         <AiOutlineDelete />
    //     </button>
    // </>
    return (
        <>
            <Modal open={deleteModal} onCancel={() => setDeleteModal(!deleteModal)} onOk={handleDelete} className="py-6">
                <Header3 className="py-4">Confirm Delete</Header3>
                <p className="text-sm sm:text-base md:text-lg text-dark/80 font-medium">Are you sure you want to proceed with this? This action is not reversible</p>
            </Modal>
            <Modal open={uploadModal} onCancel={() => setUploadModal(!uploadModal)} cancelButtonProps={{ style: {width: "93.5%", marginLeft: "0", marginRight: "1rem"}}} okButtonProps={{ style: {display: "none"}}}>
                <MenuUpload />
            </Modal>
            <section className='flex flex-col gap-4 min-w-96 overflow-x-scroll'>
                <div className="flex bg-white justify-between gap-4 p-4">
                    <div className="flex items-center gap-2">
                        <h4 className="heading-one font-semibold">Menu Contents</h4>
                        <button onClick={() => setUploadModal(!uploadModal)} className="button">Upload</button>
                        <button onClick={() => setRowType(prev => (prev === "checkbox" ? "radio" : "checkbox"))} className={`button`}>{rowType === "checkbox" ? "Edit Mode" : "Delete Mode"}</button>
                    </div>
                    <div className="flex gap-2">
                        {(selectedRowKeys.length > 0 && rowType === "radio") && <Link href={appRoutePaths.adminmenuEdit(selectedRowKeys[0].toString())} className="button flex items-center gap-2"><BsPencil /> Edit</Link>}
                        {(selectedRowKeys.length > 0 && rowType === "checkbox") && <button onClick={() => setDeleteModal(!deleteModal)} className="button bg-secondary flex items-center gap-2"><AiOutlineDelete /> Delete Selected</button>}
                    </div>
                </div>
                <div className="card bg-white flex flex-col p-4">
                    <Table
                        pagination={{
                            hideOnSinglePage: true,
                            // pageSize: 10,
                            showSizeChanger: false,
                            showQuickJumper: false,
                        }}
                        scroll={{ x: "max-content" }}
                        rowSelection={{ ...rowSelection }}
                        dataSource={menuData.map(el => ({ ...el, key: el.id }))}
                        columns={MENU_COLUMNS()}
                    />
                </div>
            </section>
        </>
    )
}

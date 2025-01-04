"use client"
import { Header3 } from '@/components/ui/Typography'
import React from 'react'
import { Form, Input, InputNumber, Select } from "antd"
import { CldUploadWidget } from 'next-cloudinary'
import { fileUpload } from '@/lib'
import TextArea from 'antd/es/input/TextArea'

const STATUS = ["VISIBLE", "HIDDEN"] as const
type TFormDataProps = {
    name: string
    description: string
    image: string | File
    price: number
    qtyAvailable: number
    status: (typeof STATUS)[number]
}

/* 
import { CldUploadWidget } from 'next-cloudinary';
 
<CldUploadWidget signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>">
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>

*/

export default function MenuUpload() {
    const [form] = Form.useForm<TFormDataProps>()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [image, setImage] = React.useState<{ name: string, value: string }>({
        name: "Click to Upload Image",
        value: ""
    })

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files![0]
        setImage((prev) => ({ ...prev, name: file.name }))
        const data = await fileUpload(file) as unknown as string
        form.setFieldValue("image", data)
        setImage(prev => ({ ...prev, value: data }))
    }

    const handleSubmit = async (data: TFormDataProps) => {
        console.log('data', data)
    }

    return (
        <main className='flex flex-col'>
            <section className="pt-10 px-4">
                <div className="container mx-auto">
                    <Header3>Food Upload</Header3>
                    <Form
                        form={form}
                        onFinish={(data) => {
                            handleSubmit(data)
                        }}
                        className="flex flex-col mt-4">
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label htmlFor="image" className="text-slate-400 text-sm">Food Image</label>
                                <label htmlFor="image" className="border bg-light-secondary rounded-md h-20 p-8 cursor-pointer grid place-items-start text-slate-400 relative" style={{ padding: 32, marginBottom: 8 }}>
                                    <input type="file" onChange={handleFileUpload} name="image" id="image" accept='image/jpeg, image/png' className="absolute left-0 top-0 w-full h-full opacity-0 hidden cursor-pointer" required style={{ opacity: 0 }} /> {image.name}
                                    <div style={{ height: "100%", width: 96 }} className="bg-secondary top-0 right-0 z-20 absolute overflow-hidden">
                                        <img src={image.value} alt="" className={`w-20 h-full relative object-contain object-center flex-shrink-0 ${image.value ? 'flex' : 'hidden'}`} />
                                    </div>
                                </label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-slate-400 text-sm">Food Name</label>
                                <Form.Item<TFormDataProps> name="name">
                                    <Input type='text' placeholder='Enter Food Name' />
                                </Form.Item>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="price" className="text-slate-400 text-sm">Food Price</label>
                                <Form.Item<TFormDataProps> name="price">
                                    <InputNumber type='number' placeholder='Enter Food Price' min={100} style={{ width: '100%' }} className='w-full' />
                                </Form.Item>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="qtyAvailable" className="text-slate-400 text-sm">Quantity Available for Sale</label>
                                <Form.Item<TFormDataProps> name="qtyAvailable">
                                    <InputNumber type='number' placeholder='Enter Food Price' min={1} required style={{ width: '100%' }} className='w-full' />
                                </Form.Item>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="qtyAvailable" className="text-slate-400 text-sm">Visibility Status</label>
                                <Form.Item<TFormDataProps> name="status">
                                    <select
                                        id='status'
                                        style={{ border: "1px solid #ddd", color: "#aaa", padding: ".51rem"}}
                                        className='relative z-40 bg-white rounded-md w-full cursor-pointer'
                                        onChange={(e) => form.setFieldValue("status", e.target.value)}
                                    >
                                        {
                                            STATUS.map(item => <option className='relative'>{item}</option>)
                                        }
                                    </select>
                                </Form.Item>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="text-slate-400 text-sm">Food Description</label>
                                <Form.Item<TFormDataProps> name="description">
                                    <TextArea cols={10} rows={5} placeholder='Enter Food Description' />
                                </Form.Item>
                            </div>
                            <button className="py-2 px-6 rounded-md cursor-pointer bg-primary text-white">Create Food</button>
                        </div>
                    </Form>
                </div>
            </section >
        </main >
    )
}

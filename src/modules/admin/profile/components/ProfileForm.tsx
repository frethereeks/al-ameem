"use client"
import React from 'react'
import { Button, Form, Input } from 'antd'
import { fileUpload } from '@/lib'

type TProfileProps = {
    id: string
    firstname: string
    lastname: string
    email: string
    image: string
    password: string
    confirmPassword: string
    verifyPassword: string
}

export default function ProfileForm() {
    const [form] = Form.useForm<TProfileProps>()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [image, setImage] = React.useState<{name: string, value: string}>({
        name: "Click to Upload Image",
        value: ""
    })

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files![0]
        setImage((prev) => ({...prev, name: file.name }))
        const data = await fileUpload(file) as unknown as string
        form.setFieldValue("image", data)
        setImage(prev => ({...prev, value: data}))
    }

    const handleSubmit = async (data: TProfileProps) => {
        setLoading(true)
        try {
            
        } catch (error) {
            
        }
        finally {
            // setLoading(false)
        }
    }

    return (
        <>
            <aside className="relative bg-white rounded-md p-4 shad flex justify-between items-center gap-4">
                <div className="flex-1">
                    <h2 className="font-semibold text-text text-xl md:text-2xl">Ugwu Faith</h2>
                    <p className="text-xxsmall">This is your profile information as seen by others.</p>
                </div>
                <div className="h-10 w-10 flex bg-primary rounded-full relative flex-shrink-0">
                    {/* <Image src={form.getFieldValue("image")} className='absolute h-full w-full left-0 top-0 object-cover' /> */}
                    <img src={image.value} alt="" className={`w-20 h-20 relative object-cover object-center flex-shrink-0 ${image.value ? 'flex' : 'hidden'}`} />
                </div>
            </aside>
            <aside className='rounded-md shad'>
                <Form
                    onFinish={(values) => {
                        handleSubmit(values)
                    }}
                    disabled={loading}
                    form={form}
                    size='middle'
                    className='grid md:grid-cols-2 gap-4'
                >
                    <div className="bg-white flex flex-col p-4">
                        {/* <Form.Item<TProfileProps> name="image">
                        <input type='file' placeholder='Upload Image' onChange={handleFileUpload} />
                        </Form.Item> */}
                        <div className="h-20 mb-4">
                            <label htmlFor="image" className="border bg-light-secondary rounded-md h-20 p-8 cursor-pointer grid place-items-center text-slate-400 relative" style={{ padding: 32, marginBottom: 8}}>
                                <input type="file" onChange={handleFileUpload} name="image" id="image" accept='image/jpeg, image/png' className="absolute left-0 top-0 w-full h-full opacity-0 hidden cursor-pointer" required style={{opacity: 0}} /> {image.name}
                            </label>
                        </div>
                        <Form.Item<TProfileProps> name="firstname" required className='mt-2'>
                            <Input placeholder='Enter First Name' required />
                        </Form.Item>
                        <Form.Item<TProfileProps> name="lastname" required>
                            <Input placeholder='Enter Last Name' required />
                        </Form.Item>
                        <Form.Item<TProfileProps> name="email" required>
                            <Input type='email' placeholder='Enter Email' />
                        </Form.Item>
                    </div>
                    <div className="bg-white flex flex-col p-4 h-max">
                        <Form.Item<TProfileProps> name="password">
                            <Input type='password' placeholder='Enter Password (Leave empty to keep your current password)' />
                        </Form.Item>
                        <Form.Item<TProfileProps> name="confirmPassword">
                            <Input type='password' placeholder='Confirm Password' />
                        </Form.Item>
                        <Form.Item<TProfileProps> name="verifyPassword" required>
                            <Input type='password' placeholder='Verify Password to Save Changes' />
                        </Form.Item>
                        <Button disabled={loading} type='default' onClick={() => form.submit()} className='button w-max'>Update Profile</Button>
                    </div>
                </Form>
            </aside>
        </>
    )
}

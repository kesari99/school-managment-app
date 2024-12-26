"use client";

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import CustomFieldComponent from '../CustomFieldComponent';
import Image from 'next/image';

const schema = z.object({
    username: z.string()
        .min(3, { message: 'Username must be atleast 2 characters long ' })
        .max(20, { message: 'Username must be most 20 characters long ' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(4, { message: 'Password must be atleast 4 characters long ' }),
    firstName: z.string().min(2, { message: 'Firstname is required ' }),
    lastName: z.string().min(2, { message: 'Firstname is required ' }),
    phone: z.string().min(2, { message: 'Firstname is required ' }),
    address: z.string().min(2, { message: 'Firstname is required ' }),
    bloodType: z.string().min(2, { message: 'BloodType is required ' }),
    birthday: z.string().min(2, { message: 'Firstname is required ' }),
    sex: z.enum(["male", "female"], { message: 'Sex is required' }),
    img: z.instanceof(File, { message: 'Image is required' })
});

type Inputs = z.infer<typeof schema>;
const StudentForm = ({ type, data }: { type: "create" | "update", data?: any }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })
    console.log(register)

    return (

        <form className="flex flex-col gap-8 p-4 max-h-[80vh] overflow-y-scroll remove-scrollbar" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Create a new Student</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <CustomFieldComponent
                    label="Username"
                    placeholder='Enter username'
                    type="text"
                    name="username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />

                <CustomFieldComponent
                    label="Password"
                    type="password"
                    name="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />


            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <CustomFieldComponent
                    label="Email"
                    placeholder='Enter email'
                    type="text"
                    name="email"
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />

                <CustomFieldComponent
                    label="Phone Number"
                    type="text"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors?.phone}
                />


            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <CustomFieldComponent
                    label="FirstName"
                    type="text"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors?.firstName}
                />

                <CustomFieldComponent
                    label="LastName"
                    type="text"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors?.lastName}
                />


            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <CustomFieldComponent
                    label="Gender"
                    type="select"
                    name="sex"
                    defaultValue={data?.sex}
                    register={register}
                    error={errors?.sex}
                />


                <CustomFieldComponent
                    label="Address"
                    type="text"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors?.address}
                />


            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <CustomFieldComponent
                    label="Blood Type"
                    type="text"
                    name="bloodType"
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors?.bloodType}
                />

                <CustomFieldComponent
                    label="Birthday"
                    type="date"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors?.birthday}
                />


            </div>

            <div className="flex flex-col w-full justify-end">



                <label
                    className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                    htmlFor="img"
                >
                    <Image src="/upload.png" alt="" width={28} height={28} />
                    <span className="text-md">Upload a photo</span>
                </label>
                <input type="file" id="img" {...register("img")} className="hidden" />
                {errors.img?.message && (
                    <p className="text-xs text-red-400">
                        {errors.img.message.toString()}
                    </p>
                )}

            </div>

            <span className="text-xs text-gray-400 font-medium">Authentication Information</span>


            <Button
                className="bg-blue-400 text-white p-2 rounded-md"

            >{type === "create" ? "Create" : "Update"}</Button>



        </form>
    )
}

export default StudentForm
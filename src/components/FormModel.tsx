"use client";


import React, { useState } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import dynamic from 'next/dynamic';

// import TeacherForm from './forms/TeacherForm';
// import StudentForm from './forms/StudentForm';

const TeacherForm = dynamic(() => import('./forms/TeacherForm'),{
    loading : () => <h1>Loading</h1>
}
)


const StudentForm = dynamic(() => import('./forms/StudentForm'),{
    loading : () => <h1>Loading</h1>
}
)




const forms:{[key:string]: (type : "create" | "update" , data?:any) => JSX.Element} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
}
  

const FormModel = ({table, type, data, id}:{
    table: 
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?:number;
}) => {

    const bgColor = type === "create" ? "bg-lamaYellow  hover:none hover:bg-[#f3f36a]" : 
                    type === "update" ? "bg-lamaSky  hover:none  hover:bg-lamaSky" :
                    "bg-lamaPurple  hover:none hover:bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === 'delete' && id ? (
            <form action="" className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium" >{`All data will be lost.Are you sure you want to delete this ${table}`}</span>
                <Button className="bg-red-700 hover:bg-red-500 text-white py-2 px-2 rounded-md border-none w-max self-center" >Delete</Button>

            </form>
           
        ) : type === 'create' || type === 'update' ? (
            forms[table](type, data) 
          
        )
          : "Form not found"
    }

    
  return (
    <>
    <Button 
        className={`flex items-center justify-center rounded-full ${bgColor}`} 
        size="sm"
        onClick={() => setOpen(true)}
    >
        <Image  src={`/${type}.png`} alt="" width={16} height={16} />
        

    </Button>

    {/* {
       <Dialog open={open} onOpenChange={setOpen}>
       <DialogContent>
         <DialogHeader>
           <DialogTitle>Are you absolutely sure?</DialogTitle>
           <DialogDescription>
             This action cannot be undone. This will permanently delete your account
             and remove your data from our servers.
           </DialogDescription>
         </DialogHeader>
       </DialogContent>
     </Dialog>
     
    } */}


    {
        open &&(
            <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col items-center justify-center">
               
                <div className="bg-white p-4 rounded relative w-[90%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]">
                    <Form />
                    <div className="absolute top-4 right-4 cursor-pointer">
                        <Image src="/close.png" alt="" width={16} height={16} onClick={() => setOpen(false)} />
                    </div>
                </div>
            </div>
        )
    }

</>
  )
}

export default FormModel
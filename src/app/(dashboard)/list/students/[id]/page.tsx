import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalender'
import PerformanceChart from '@/components/PerformanceChart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StudentSinglePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 xl:flex-row p-4">

      {/* LEFT */}
      <div className="w-full xl:w-2/3" >

      {/* TOP */}
      <div className="flex flex-col lg:flex-row gap-4">
         {/* USER INFO CARD */}
         <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 ">
         <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
          </div>
          <div className="w-2/3 flex flex-col justify-between gap-4">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, facere?</p>

            <div className="flex item-center justify-between gap-2 flex-wrap tezt-xs font-medium">
              <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <Image src="/blood.png" alt="" width={14} height={14}  />
                <span>A+</span>
              </div>

              <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3  lg-w-full  flex items-center gap-2">
                <Image src="/date.png" alt="" width={14} height={14}  />
                <span>Janaury 2025</span>
              </div>

              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                <Image src="/mail.png" alt="" width={14} height={14}  />
                <span>kesari@gmail.com</span>
              </div>

              <div className=" w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                <Image src="/phone.png" alt="" width={14} height={14}  />
                <span>9381756966</span>
              </div>
            </div>

          </div>

         </div>


         {/* SMALL CARDS */}
         <div className="flex-1 flex gap-4 justify-between flex-wrap">

          <div className="w-full md:w-[48%] bg-white p-4 rounded-md flex gap-4 xl:w-[45%] 2xl:w-[48%]">
            <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"  />
            <div className="">
              <h1 className="text-xl font-semibold">90%</h1>
              <span className="text-sm text-gray-400">Attendences</span>
            </div>
          </div>

          <div className="w-full md:w-[48%] bg-white p-4 rounded-md flex gap-4 xl:w-[45%] 2xl:w-[48%]">
            <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"  />
            <div className="">
              <h1 className="text-xl font-semibold">6th</h1>
              <span className="text-sm text-gray-400">Grade</span>
            </div>
          </div>

          <div className="w-full md:w-[48%] bg-white p-4 rounded-md flex gap-4 xl:w-[45%] 2xl:w-[48%]">
            <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"  />
            <div className="">
              <h1 className="text-xl font-semibold">20</h1>
              <span className="text-sm text-gray-400">Lessons</span>
            </div>
          </div>

          <div className="w-full md:w-[48%] bg-white p-4 rounded-md flex gap-4 xl:w-[45%] 2xl:w-[48%]">
            <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"  />
            <div className="">
              <h1 className="text-xl font-semibold">90%</h1>
              <span className="text-sm text-gray-400">Attendences</span>
            </div>
          </div>

           

           

            
          

         </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-4 bg-white rounded-md p-4 h-[800px]">

          <h1 className="">Student&apos;s Schedule</h1>
          <BigCalendar />

      </div>
      
      
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">

      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-400">
          <Link href="/" className="p-3 rounded-md bg-lamaSkyLight" >Student &apos;s Clasess</Link>
          <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight">Student&apos;s Students</Link>
          <Link href="/" className="p-3 rounded-md bg-lamaYellowLight" >Student&apos;s Exams</Link>
          <Link href="/" className="p-3 rounded-md bg-lamaSkyLight" >Student&apos;s Results</Link>
          <Link href="/" className="p-3 rounded-md bg-pink-100">Student&apos;s Assignments</Link>
        </div>
      </div>

      <PerformanceChart  />

      <Announcements />
      
      </div>
      

    </div>
  )
}

export default StudentSinglePage
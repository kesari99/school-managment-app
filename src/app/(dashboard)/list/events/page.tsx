import Pagination from '@/components/Pagination'
import ListTable from '@/components/ListTable'
import TableSearch from '@/components/TableSearch'
import { Button } from '@/components/ui/button'
import {  eventsData,  role,  } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import FormModel from '@/components/FormModel'


type Event = {
  id: number,
  title: string,
  class:string,
  date: string,
  startTime:'string',
  endTime:'string',

 
}


const columns = [
  {
    header: "Title",
    accessor: "title",
  },
 
  {
    header: "Class",
    accessor: "class",

    
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",

    
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",

    
  },
  
  {
    header:"Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];


const EventsListPage = () => {

  const renderRow = (item: Event) => (
    <TableRow key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      
      <TableCell className=" px-4 py-4">{item.title}</TableCell>
      <TableCell className="  px-4 py-4">{item.class}</TableCell>
      <TableCell className="hidden md:table-cell x-4 py-4">{item.date}</TableCell>
      <TableCell className="hidden md:table-cell x-4 py-4">{item.startTime}</TableCell>
      <TableCell className="hidden md:table-cell px-4 py-4">{item.endTime}</TableCell>
      <TableCell className="px-4 py-4">
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <Button className="flex items-center justify-center rounded-full bg-lamaSky hover:bg-lamaSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </Button>
          </Link> */}
          {role === 'admin' && (
            // <Button className="flex items-center justify-center rounded-full bg-lamaSky hover:bg-lamaSky">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </Button>
            <>
              <FormModel table="event" type="update" id={item.id}   />
              <FormModel table="event" type="delete" id={item.id}   />
            
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
  

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">

      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold"> All Events</h1>
      

      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <TableSearch />

        <div className=" flex items-center gap-4 self-end">
          <Button  size="sm" className='bg-lamaYellow  hover:none hover:bg-[#f3f36a] rounded-full'>
            <Image src="/filter.png" alt="" width={14} height={14}  />
            
          </Button>
          <Button  size="sm" className='bg-lamaYellow  hover:none hover:bg-[#f3f36a] rounded-full'>
            <Image src="/sort.png" alt="" width={14} height={14}  />
            
          </Button>
          {role === 'admin' && 
          //  <Button  size="sm" className='bg-lamaYellow  hover:none hover:bg-[#f3f36a] rounded-full'>
          //   <Image src="/plus.png" alt="" width={14} height={14}  />
            
          // </Button>

          <FormModel table="event" type="create" />
          
          }

        </div>
      </div>
    </div>

      {/* LIST */}
      <div className="">
        <ListTable columns={columns} renderRow={renderRow} data={eventsData}  />
      </div>

      {/* PAGINATION */}
      <Pagination />
      
    </div>
  )
}

export default EventsListPage

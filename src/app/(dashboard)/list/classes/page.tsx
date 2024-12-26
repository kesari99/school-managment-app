import Pagination from '@/components/Pagination'
import ListTable from '@/components/ListTable'
import TableSearch from '@/components/TableSearch'
import { Button } from '@/components/ui/button'
import { classesData, parentsData, role, subjectsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import FormModel from '@/components/FormModel'


type Class = {
  id: number;
  name: string;
  capacity:number,
  grade:number,
  supervisor: string;
 
}


const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    
  },
  {
    header:"Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header:"Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];


const ClasessListPage = () => {

  const renderRow = (item: Class) => (
    <TableRow key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      
      <TableCell className="flex items-center gap-4 px-4 py-4">{item.name}</TableCell>
      <TableCell className=" px-4 py-4">{item.capacity}</TableCell>
      <TableCell className="hidden md:table-cell x-4 py-4">{item.grade}</TableCell>
      <TableCell className="hidden md:table-cell px-4 py-4">{item.supervisor}</TableCell>
      <TableCell className="px-4 py-4">
        <div className="flex items-center gap-2">
         
          {role === 'admin' && (

          <>
          <FormModel table="class" type="update" id={item.id}   />

           <FormModel table="class" type="delete" id={item.id}   />
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
        <h1 className="hidden md:block text-lg font-semibold"> All Classes</h1>
      

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
          // <Button  size="sm" className='bg-lamaYellow  hover:none hover:bg-[#f3f36a] rounded-full'>
          //   <Image src="/plus.png" alt="" width={14} height={14}  />
            
          // </Button>
          <FormModel table="subject" type="create"    />

          }

        </div>
      </div>
    </div>

      {/* LIST */}
      <div className="">
        <ListTable columns={columns} renderRow={renderRow} data={classesData}  />
      </div>

      {/* PAGINATION */}
      <Pagination />
      
    </div>
  )
}

export default ClasessListPage

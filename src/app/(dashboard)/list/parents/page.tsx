import Pagination from '@/components/Pagination'
import ListTable from '@/components/ListTable'
import TableSearch from '@/components/TableSearch'
import { Button } from '@/components/ui/button'
import { parentsData, role, studentsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import FormModel from '@/components/FormModel'


type Parents = {
  id: number;
  name: string;
  email?: string;
  students:string[];
  phone?: string;
  address: string;
}


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },

  
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];


const ParentsListPage = () => {

  const renderRow = (item: Parents) => (
    <TableRow key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <TableCell className="px-4 py-4">
        <div className="flex items-center gap-2">
         
          <div className="flex flex-col">
            <h1 className="font-semibold">{item.name}</h1>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell px-4 py-4">{item.students.join(',')}</TableCell>
      <TableCell className="hidden lg:table-cell px-4 py-4">{item.phone}</TableCell>
      <TableCell className="hidden lg:table-cell px-4 py-4">{item.address}</TableCell>
      <TableCell className="px-4 py-4">
        <div className="flex items-center gap-2">
            {/* <Button className="flex items-center justify-center rounded-full bg-lamaSky hover:bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </Button> */}

          {role === 'admin' && (
            // <Button className="flex items-center justify-center rounded-full bg-lamaSky hover:bg-lamaSky">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </Button>
            <>
            <FormModel table="parent" type="update" id={item.id}   />
            <FormModel table="parent" type="delete" id={item.id}   />
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
        <h1 className="hidden md:block text-lg font-semibold"> All Parents</h1>
      

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
          <FormModel table="parent" type="create"   />
          }

        </div>
      </div>
    </div>

      {/* LIST */}
      <div className="">
        <ListTable columns={columns} renderRow={renderRow} data={parentsData}  />
      </div>

      {/* PAGINATION */}
      <Pagination />
      
    </div>
  )
}

export default ParentsListPage
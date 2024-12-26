import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { role } from '@/lib/data'

const ListTable = ({ columns, data,renderRow }: {
  columns: { header: string, accessor: string, className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {

  return (
    <Table className="w-full mt-4 border-collapse">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="text-gray-500 text-sm ">
          {columns.map((column, index) => (
            <TableHead
              key={index}
              className={` ${column.className} ${index === columns.length - 1 ? '' : ''}`}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y divide-gray-200">
        {data.map((item) => (
          renderRow(item)
         
        ))}
      </TableBody>
    </Table>
  )
}

export default ListTable

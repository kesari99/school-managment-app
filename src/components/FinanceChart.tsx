"use client"

import Image from 'next/image'

import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,

    expenses: 2400,
    
  },
  {
    name: 'Feb',
    income: 3000,

    expenses: 1398,
    
  },
  {
    name: 'Mar',
    income: 2000,

    expenses: 9800,
    
  },
  {
    name: 'April',
    income: 2780,

    expenses: 3908,
    
  },
  {
    name: 'May',
    income :1890,
    expenses: 3908,

  },
  { 
    name: 'June',
    income: 2390,

    expenses: 3800,

  },


   
  {
    name: 'July',
    income: 3490,

    expenses: 4300,
    
  },
  {
    name: 'Auguest',
    income: 3490,

    expenses: 4300,
    
  },
  {
    name: 'September',
    income: 3490,

    expenses: 4300,
    
  },
  {
    name: 'October',
    income: 3490,

    expenses: 4300,
    
  },
  {
    name: 'December',
    income: 3490,

    expenses: 4300,
    
  },
 
];






const FinanceChart = () => {
  return (
    <div className='w-full h-full rounded-xl p-4 bg-white'>
         {/* TITLE */}
         <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Finance</h1>
            <Image src="/moreDark.png" alt="dark" width={20} height={20}  />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis dataKey="income"  axisLine={false} tick={{fill:"#ad1d5db"}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill:"#ad1d5db"}} tickLine={false}  tickMargin={20} />
          <Tooltip />
          <Legend 
            align="center" 
            verticalAlign='top' 
            wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}
            
         />
          <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={5} />
          <Line type="monotone" dataKey="expenses" stroke="#C3EBFA" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default FinanceChart
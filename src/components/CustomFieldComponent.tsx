import React from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type InputProps = {
  label: string,
  type: string,
  register: any,
  name: string,
  defaultValue?: any,
  error: any,
  placeholder?: string,
  showTimeSelect?: boolean,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  dateFormat?: string
}

const CustomFieldComponent = (props: InputProps) => {
  const { label, type, register, name, defaultValue, error, inputProps } = props


  const renderForm = (props: InputProps) => {
    const { type, register, name, defaultValue, inputProps, placeholder } = props
    switch (type) {
      case 'text':
        return <Input
          type="input"
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 rounded-md text-sm p-5 placeholder:text-dark-600 focus:outline-none"
          defaultValue={defaultValue}
          {...inputProps}

        />
      case 'password':
        return <Input
          type="password"
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 -2 rounded-md text-sm  p-5 outline-none"
          defaultValue={defaultValue}
          {...inputProps}
        />
      case 'date':
         return <Input
        type="date"
        placeholder={placeholder}
        name={name}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 rounded-md text-sm p-5 placeholder:text-dark-600 focus:outline-none"
        defaultValue={defaultValue}
        {...inputProps}
      />

      case  'select':
         return  <select
         className="ring-[1.5px] ring-gray-300 rounded-md text-sm p-4 placeholder:text-dark-600 focus:outline-none"
         {...register("sex")}
         defaultValue={defaultValue}
     >
         <option value="male">Male</option>
         <option value="female">Female</option>
     </select>
     


case 'file':
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative items-end">
      <Input
        type="file"
        ref={fileInputRef}
        placeholder={placeholder}
        name={name}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 -2  rounded-md text-sm opacity-0 absolute top-0 left-0 pointer-events-none"
        defaultValue={defaultValue}
        {...inputProps}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className=" text-blue-500 bg-none  p-2 rounded-md"
      >
        Upload File
      </button>
    </div>
  );

       
        


      default:
        return <Input
          type="input"
          id = {label}
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 -2 rounded-md text-sm hidden"
          defaultValue={defaultValue}
          {...inputProps}
        />
    }

  }

  return (

    <div className="flex flex-col  gap-4 w-full ">
      <Label id={label} className={`text-md text-gray-500 ${label === 'Upload Image' ? 'hidden' : ''}`}>{label}</Label>
      {
        renderForm(props)
      }
      {error?.message && <p className="text-xs text-red-700">{error?.message.toString()}</p>}
    </div>
  )
}

export default CustomFieldComponent
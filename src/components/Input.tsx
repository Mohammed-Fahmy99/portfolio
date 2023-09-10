import {InputHTMLAttributes} from "react"

type inputProps = {
    type:string,
    name:string,
    label:string,
    placeholder:string
} & InputHTMLAttributes<HTMLInputElement>

function Input({type,name,label,placeholder,...rest}:inputProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="uppercase text-sm py-2">{label}</label>
      <input className="border-2 rounded-lg p-3 w-full border-gray-300" type={type} name={name} placeholder={placeholder} {...rest}/>
    </div>
  )
}

export default Input

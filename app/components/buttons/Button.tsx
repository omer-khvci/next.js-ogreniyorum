'use client'
import {IconType} from 'react-icons';

type ButtonProps ={
    onSubmit: (e:React.MouseEvent<HTMLButtonElement>) => void,
    btnLabel:string,
    outline?:boolean,
    icon?:IconType
}
const Button: React.FC<ButtonProps> = ({
    onSubmit,
    btnLabel,
    outline,
    icon: Icon
}) => {
  return (
    <button className={`w-full h-12 ${outline ?"border border-black":"bg-black text-white"} rounded flex items-center justify-center gap-2 cursor-pointer`} onClick={onSubmit}>
        {
            Icon && <Icon size={25} />
        }
        {btnLabel}
    </button>
  )
}

export default Button
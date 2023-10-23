'use client'
import { useRouter } from '@/node_modules/next/navigation'
import { IconType } from '@/node_modules/react-icons/lib/esm/iconBase'
import React from 'react'
type CategoriesItemProps = {
    name: string,
    icon: IconType,
    selected: boolean
}

const CategoriesItem:React.FC<CategoriesItemProps> = ({
    name,
    icon: Icon,
    selected
}) =>{
    const router = useRouter();
    return(
        <div onClick={()=> router.push(`?category=${name}`)} className={`${selected ? "border-b-2 border-black" : ""} flex items-center gap-2 cursor-pointer`}>
            <Icon size={20} />
            <div className='tracking-wider'>{name}</div>
        </div>
    )
}


export default CategoriesItem
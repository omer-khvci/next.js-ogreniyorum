'use client'
import { useForm,FieldValues, SubmitHandler } from 'react-hook-form'
import React from 'react'
import Modal from './Modal'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { elementModalFunc } from '@/app/redux/modalSlice';
import { useRouter } from 'next/navigation';
import { categories } from '../navbar/Categories';
import CategorySelect from '../listings/CategorySelect';

const ElementModal = () => {
    const {register, handleSubmit, watch, setValue,reset, formState:{errors}} =useForm<FieldValues>({
     defaultValues:{
        imageSrc:'',
        category:'',
        roomCount:1,
        location:null
     }
    });
    const router = useRouter()
    const {elementModal} =useAppSelector(state => state.modal);
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
     
    } 
    const category = watch('category');
    const imageSrc = watch('imageSrc');
    const roomCount = watch('roomCount');
    const location = watch('location');
    const customSetValue = (id:string, value:any)=>{
        setValue(id,value,{
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true
        })
    }
    const dispatch = useAppDispatch();
    const bodyElement = (
        <div className='flex items-center gap-10 mb-5'>
            {
                categories.map((cat,i)=>(
                    <CategorySelect 
                        key={i}
                        name= {cat.name}
                        icon={cat.icon}
                        onClick= {(category) =>{customSetValue('category',category)}}
                        selected= {category === cat.name}
                    />
                ))
            }
        </div>
    )
  return (
    <div>
        <Modal isOpen={elementModal} onSubmit={handleSubmit(onSubmit)} onClose={()=>{dispatch(elementModalFunc())}} btnLabel="Create Element" title='Create Element' bodyElement={bodyElement} 
        />
    </div>
  )
}

export default ElementModal
'use client'
import { useForm,FieldValues, SubmitHandler } from 'react-hook-form'
import React from 'react'
import Modal from './Modal'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { elementModalFunc } from '@/app/redux/modalSlice';
import { useRouter } from 'next/navigation';

const ElementModal = () => {
    const {register, handleSubmit, watch, formState:{errors}} =useForm<FieldValues>({
     defaultValues:{

     }
    });
    const router = useRouter()
    const {loginModal} =useAppSelector(state => state.modal);
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
     
    } 
    const dispatch = useAppDispatch();
    const bodyElement = (
        <div>
            asdasd
        </div>
    )
    const footerElement = (
        <div className='mt-5'>
            dsfafs
        </div>

    )
  return (
    <div>
        <Modal isOpen={loginModal} onSubmit={handleSubmit(onSubmit)} onClose={()=>{dispatch(elementModalFunc())}} btnLabel="Create Element" title='Create Element' bodyElement={bodyElement} 
        footerElement={footerElement}
        />
    </div>
  )
}

export default ElementModal
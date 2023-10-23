import { useForm,FieldValues, SubmitHandler } from 'react-hook-form'
import React from 'react'
import Modal from './Modal'
import Input from '../input/Input';
import Button from '../buttons/Button';
import {FcGoogle} from "react-icons/fc"
import { useAppSelector } from '@/app/redux/hooks';

const RegisterModal = () => {
    const {register, handleSubmit, watch, formState:{errors}} =useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    });
    const {registerModal} =useAppSelector(state => state.modal);
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data);
    } 
    const bodyElement = (
        <div>
            <Input 
                id='name'
                type='text'
                placeholder='Name'
                register ={register}
                errors={errors}
                required
            />
            <Input 
                id='email'
                type='text'
                placeholder='Email'
                register ={register}
                errors={errors}
                required
            />
            <Input 
                id='password'
                type='password'
                placeholder='password'
                register ={register}
                errors={errors}
                required
            />
        </div>
    )
    const footerElement = (
        <div className='mt-5'>
        <Button 
            btnLabel='Google ile Giriş'
            outline
            icon={FcGoogle}
            onSubmit={()=>{}}
        />
        </div>

    )
  return (
    <div>
        <Modal isOpen={registerModal} onSubmit={handleSubmit(onSubmit)} onClose={()=>{}} btnLabel="Register" title='Register' bodyElement={bodyElement} 
        footerElement={footerElement}
        />
    </div>
  )
}

export default RegisterModal
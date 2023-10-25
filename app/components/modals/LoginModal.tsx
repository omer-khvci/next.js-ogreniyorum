'use client'
import { useForm,FieldValues, SubmitHandler } from 'react-hook-form'
import React from 'react'
import Modal from './Modal'
import Input from '../input/Input';
import Button from '../buttons/Button';
import {FcGoogle} from "react-icons/fc"
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { loginModalFunc, registerModalFunc } from '@/app/redux/modalSlice';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginModal = () => {
    const {register, handleSubmit, watch, formState:{errors}} =useForm<FieldValues>({
        defaultValues:{
            email:"",
            password:""
        }
    });
    const router = useRouter()
    const {loginModal} =useAppSelector(state => state.modal);
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        signIn('credentials',{
            ...data,
            redirect: false
        })
        .then((callback)=>{
            if(callback?.ok){
                dispatch(loginModalFunc())
                router.refresh();
                toast.success('login işlemi başarılı');
            }
            if(callback?.error){
                toast.error('login işlemi hatalı');
            }
        })
    } 
    const dispatch = useAppDispatch();
    const bodyElement = (
        <div>
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
                placeholder='Password'
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
            onSubmit={()=>{signIn('google')}}
        />
        </div>

    )
  return (
    <div>
        <Modal isOpen={loginModal} onSubmit={handleSubmit(onSubmit)} onClose={()=>{dispatch(loginModalFunc())}} btnLabel="Login" title='Login' bodyElement={bodyElement} 
        footerElement={footerElement}
        />
    </div>
  )
}

export default LoginModal
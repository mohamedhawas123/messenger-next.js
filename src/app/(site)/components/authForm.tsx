'use client';

import Button from "@/app/components/button";
import Input from "@/app/components/inputs/input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./authSocialButton";
import {BsGithub, BsGoogle} from 'react-icons/bs'

type Variant = 'LOGIN' | 'REGISTER';


const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [loading, setLoading] = useState(false)

    const toggleVariant = useCallback(() => {
            if(variant === 'LOGIN') {
               setVariant('REGISTER')
       }else {
           setVariant('LOGIN')
       }
       return (
           <div>
               form
           </div>
       )
    }, [variant])

    const {register,handleSubmit,formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });

    const onsubmit: SubmitHandler<FieldValues> =(data) => {
        setLoading(true)
        if(variant==='LOGIN') {

        }

        if(variant === 'REGISTER') {
            
        }
    }

    const socialAction = (data: string) => {
        ///Next Auth
    }

    return (
        <div className="mt-8
        sm:mx-auto 
        sm:w-full 
        sm:max-w-md
        ">
            

            <div  className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10" >
        <form  onSubmit={handleSubmit(onsubmit)}  className="space-y-6" >

            {variant ==='REGISTER' && (
        <Input id="name" label="Name" register={register} errors={errors} />

            )}

<Input id="email" label="Email Address" type="email"  register={register} errors={errors} />

<Input id="password" label="Password" type="password"  register={register} errors={errors} />

<div>
    <Button disabled={loading} fullWidth >{variant == 'LOGIN' ? "Login" : "Registerf"} </Button>
</div>
        </form>

                <div className="mt-6" >
                    <div className="relative" >
                <div className="absolute inset-0 flex items-center" >
                <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex jusity-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                        Or Continue with 
                    </span>
                </div>
                
                    </div>

                    <div className="mt-6 flex gap-2" >
                    <AuthSocialButton icon={BsGithub} />

                    </div>

                    <div className="mt-6 flex gap-2" >
                    <AuthSocialButton icon={BsGoogle} />

                    </div>
                </div>

                

            </div>


        </div>
        
    )




}

export default AuthForm
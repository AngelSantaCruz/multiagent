'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'

function Register () {
  const router = useRouter()

  const schema = yup.object({
    email: yup.string().email('Correo inválido').required('Correo es requerido'),
    company: yup.string().min(8, 'min 8 caracteres').required('compañia es requerido'),
    password: yup.string().min(8, 'min 8 caracteres').max(12, 'max 12 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.:$%^&*])(?=.{8,})/, 'Debe contener almenos una mayúscula, una minúscula, un número y un caracter especial ').required('Contraseña es requerida'),
    username: yup.string().min(4, 'min 4 caracteres').max(10, 'max 10 caracteres').required('Usuario es requerido')
  })
  const { handleSubmit, formState: { errors }, register, getValues } = useForm({ resolver: yupResolver(schema) })

  const submitchange = async (e:any) => {
    // try {
    //   const signupResponse = await fetch('/api/signup', {
    //     method: 'POST',

    //     body: JSON.stringify({
    //       email: getValues('email'),
    //       password: getValues('password'),
    //       username: getValues('username'),
    //       company: getValues('company'),
    //       rol: 'company'
    //     })
    //   })

    //   if (signupResponse?.ok) {
    //     return router.push('/auth/signin')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <main
    className="bg-teal-400 w-full h-screen pt-0 p-8">

      <section className='shadow-lg rounded-lg bg-white w-full h-full flex flex-row items-center p-10'>
        <div className='basis-1/2 hidden md:flex items-center justify-center p-16'>
          <Image src={'/register.svg'} width={300} height={400} alt='register image' className='w-3/4 h-3/4 min-w-[250px]'/>
        </div>
        <div className='md:basis-1/2 flex items-center justify-center w-full h-3/4 '>

          <form method='POST' onSubmit={handleSubmit(submitchange)} className='rounded-lg p-6 bg-white flex flex-col w-full lg:w-3/4 h-full justify-center gap-4 shadow-lg  '>
            <h2 className='text-4xl text-teal-500 font-semibold'>Regístrate</h2>
            <div className='flex flex-col'>
            <label className='' >Usuario</label>
            <span className='text-red-500 text-md'>{errors?.username?.message}</span>
            <input
             {...register('username', { required: true })}
            className='rounded-lg border-2 border-teal-100 text-md p-2'
            type='text'
            name='username'></input>
            </div>
            <div className='flex flex-col'>
            <label className='' >Empresa</label>
            <span className='text-red-500 text-md'>{errors?.company?.message}</span>
            <input
             {...register('company', { required: true })}
            className='rounded-lg border-2 border-teal-100 text-md p-2'
            type='text'
            name='company'></input>
            </div>
            <div className='flex flex-col'>
            <label className='' >Correo</label>
            <span className='text-red-500 text-md'>{errors?.email?.message}</span>
            <input
             {...register('email', { required: true })}
            className='rounded-lg border-2 border-teal-100 text-md p-2'
            type='email'
            name='email'></input>
            </div>

            <div className='flex flex-col '>
            <label className='' >Contraseña</label>
            <span className='text-red-500 text-md'>{errors?.password?.message}</span>
            <input
             {...register('password', { required: true })}
            className=' rounded-lg border-2 border-teal-100 text-md p-2'
            type='password'
            name='password'></input>
            </div>
            <Button
            type='submit'
            className='rounded-lg p-2 text-white bg-teal-500'
            >Regístrate</Button>
            <span className='' >ya tienes una cuenta? <Link style={{ color: '#00ADB5' }} href={'/auth/signin'}>Inicia sesión</Link></span>
          </form>

        </div>
      </section>

    </main>
  )
}

export default Register

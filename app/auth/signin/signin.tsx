'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'
import { EventCallbacks } from 'next-auth'

function Signin () {
  const [error, setError] = useState('')

  const router = useRouter()

  const schema = yup.object({
    password: yup.string().min(8, 'min 8 characters').max(12, 'usuario invalido').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.:\\$%\\^&\\*])(?=.{8,})/, 'debe contener minimo 8 caracteres y contener una mayúscula, minúscula y un caracter especial ').required('Contaseña es requerida'),
    username: yup.string().min(4, 'min 4 characters').max(10, 'contraseña invalida').required('usuario es requerido')
  })

  const { handleSubmit, formState: { errors }, register, getValues } = useForm({ resolver: yupResolver(schema) })

  const Submit = async (event:any) => {
    // const res = await signIn('credentials', {
    //   username: getValues('username'),
    //   password: getValues('password'),
    //   redirect: false
    // })
    // if (res?.error) return setError('Invalid credentials!')

    // return router.push('/dashboard')
  }

  return (
    <main className='bg-teal-400 w-full h-screen pt-0 p-8'>
      <section className='shadow-lg rounded-lg bg-white w-full h-full flex flex-row items-center'>
        <div className='basis-1/2 hidden md:flex items-center justify-center p-10'>
          <Image src={'/signiin.svg'} width={300} height={400} className='w-3/4 h-3/4' alt='signin image' />
        </div>
        <div className='basis-1/2 flex items-center justify-center w-full h-3/4 '>

          <form onSubmit={handleSubmit(Submit)} className='rounded-lg p-6 bg-white flex flex-col w-3/4 h-3/4 gap-4 shadow-lg '>
            <h2 className='text-4xl text-teal-400 font-semibold'>Iniciar sesión</h2>
            <div className='flex flex-col'>
            <span className='text-danger'>{error}</span>
            <label className='' >Usuario</label>
            <span className='text-red-400 text-sm '>{errors?.username?.message}</span>
            <input
             {...register('username', { required: true })}
            className='text-lg rounded-lg text-slate-700 p-2 border-2 border-teal-100'
            type='text'
            name='username'></input>
            </div>

            <div className='flex flex-col '>
            <label className='' >Constraseña</label>
            <span className='text-red-400 text-sm'>{errors?.password?.message}</span>
            <input
             {...register('password', { required: true })}
            className=' text-lg rounded-lg text-slate-700 p-2 border-2 border-teal-100'
            type='password'
            name='password'></input>
            </div>
            <Button
            type='submit'
            className='rounded p-2 bg-teal-500 text-white'
            >Iniciar sesión</Button>
            <span className=''>¿No tienes una cuenta? <Link href={'/auth/register'} style={{ color: '#00ADB5' }}>Regístrate</Link></span>
          </form>

        </div>
      </section>
    </main>
      
  
  )
}

export default Signin

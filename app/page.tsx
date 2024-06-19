'use client'

import Triangule from '@/components/ornaments/Triangule'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'
import Footer from '@/components/footer'
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react"

export default function Page() {
  const [animate,setanimated]=useState('opacity-0 translate-y-[40vh]')
  const [sections,setSection]=useState(0)

  const { scrollY,scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
  
      setSection(()=>{
        return (scrollYProgress.get()>0.10 && scrollYProgress.get()<0.34 )?1:(scrollYProgress.get()>0.34 && scrollYProgress.get()<0.54 )?2:(scrollYProgress.get()>0.54)?3:0
      })
    
  })
  
  useEffect(()=>{
    setanimated('opacity-100 transition-all ease-in-out duration-700 translate-y-0 ')
  },[])
  
  return (
 
    <main className="flex flex-col w-full h-fit relative overflow-x-hidden" >
      <Navbar />
      <section className={` p-10 pt-20 w-full h-screen bg-teal-50 relative overflow-hidden flex md:flex-row flex-col justify-between`}>
        <Triangule className={`${animate} z-20 w-[40vw] h-[40vw] min-h-[400px] min-w-[400px] rounded-[18%] bg-gradient-to-r from-transparent to-teal-300 absolute bottom-5 right-10 rotate-[30deg]`} />
        <Triangule className={`${animate} z-20 w-[20vw] h-[20vw] min-h-[100px] min-w-[100px] rounded-[8%] bg-gradient-to-r from-transparent to-teal-100 absolute top-16 left-10 rotate-[150deg]`} />
        <Image src={'/olas.svg'} alt="decor" width={180} height={150} className={`${animate} absolute bottom-10 right-[50%] z-30 hidden lg:flex`}/>
        <Image src={'/arrow.svg'} alt="decor" width={150} height={150} className={`${animate} absolute bottom-[30%] md:bottom-20 left-0 z-30`}/>

        <div className=" relative z-20 basis-1/2 h-full pt-16 md:p-10 flex flex-col gap-4 justify-center">
          <h1 className={`${animate} delay-100 text-teal-400 text-5xl lg:text-6xl font-bold  `}>La mejor CRM Para tu negocio</h1>
          <span className={`${animate} delay-200 text-neutral-700 text-md`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.</span>    
          <div className={`${animate} flex flex-row gap-4 delay-300`} >
            <button className="p-2 w-fit h-fit rounded-lg text-md bg-teal-400 text-white font-bold hover:scale-105 transition-transform duration-600 ease-in-out hover:shadow-lg">Empieza ya </button>
            <button className="p-2 w-fit h-fit rounded-lg text-md text-teal-400 border-2 border-teal-400 font-bold bg-white hover:scale-105 transition-transform duration-600 ease-in-out hover:shadow-lg">Precios</button>
            
          </div>
        </div>
        <div className=" relative z-20 basis-1/2 ">
          <Image src={'/home.svg'} alt="rocket" width={100} height={100} className={`${animate} delay-300 w-full h-full min-w-[350px] min-h-[350px] absolute -bottom-20 -right-20 md:right-0`}/>
        </div>
      </section>
      <section className="w-full h-[20vh] bg-customGreen relative"></section>
      <section className="w-full h-[90vh] bg-teal-50 relative flex flex-col md:flex-row overflow-hidden">
      <Triangule className={`${sections>=1 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700 z-20 w-[40vw] h-[40vw] min-h-[400px] min-w-[400px] rounded-[18%] bg-gradient-to-r from-transparent to-teal-200 absolute -top-5 left-10 -rotate-[150deg]`} />
       
        <div className="basis-1/2 hidden md:flex flex-col items-center relative ">
        <Image src={'/graficas.svg'} alt="decor" width={300} height={300} className={`${sections>=1 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700 w-[25vw] h-[25vw] delay-300  absolute bottom-[5%] right-[15%] z-30 hidden md:flex`}/>
        <Image src={'/Decor1.svg'} alt="decor" width={100} height={100} className={`${sections>=1 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700 delay-200 w-[8vw] h-[8vw] absolute  top-[25%] right-[8%] z-30 hidden md:flex`}/>
        <Image src={'/Decor.svg'} alt="decor" width={100} height={100} className={`${sections>=1 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700 delay-300 w-[12vw] h-[12vw] absolute  top-[8%] left-[30%] z-30 hidden md:flex`}/>
        
        </div>
        <div className="basis-1/2 p-16 flex flex-col items-start justify-center gap-4 relative z-30  md:mt-0 mt-28"> 
          <h3 className={`${sections>=1 ? 'translate-x-0 ': 'translate-x-[100vw] '} transition-transform ease-in-out duration-700 text-teal-400 text-5xl font-bold text-center md:text-start`}>
          Automatiza tus procesos
          </h3>
          <ul className={`${sections>=1 ? 'translate-x-0 ': 'translate-x-[100vw] '} transition-transform ease-in-out duration-700  flex flex-col gap-4 md:p-10 `}>
            <li className="flex flex-row gap-4 ">
              <Image src={'/favorite-chart.svg'} alt="icon" className="" width={50} height={50}/>
              <div className="flex flex-col gap-2">
                <span className="text-neutral-600 text-xl font-bold">Analisis de ventas</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum </p>
              </div>
            </li>
            <li className="flex flex-row gap-4 ">
              <Image src={'/presention-chart.svg'} alt="icon" className="" width={50} height={50}/>
              <div className="flex flex-col gap-2">
                <span className="text-neutral-600 text-xl font-bold">Analisis de marketings</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum </p>
              </div>
            </li>
            <li className="flex flex-row gap-4 ">
              <Image src={'/chart.svg'} alt="icon" className="" width={50} height={50}/>
              <div className="flex flex-col gap-2">
                <span className="text-neutral-600 text-xl font-bold">Analisis de empleados</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum </p>
              </div>
            </li>
            
          </ul>

        </div>
      </section>
      <section className="w-full h-screen bg-teal-50 relative justify-center flex flex-col md:flex-row">
        
       
          <div className="basis-1/2 md:pl-24 p-16 flex flex-col items-center md:items-start justify-center gap-8 relative z-30 "> 
            <h3 className={`${sections>=2 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700 text-teal-400 text-5xl font-bold text-center md:text-start `}>
            Programa tu bot de respuestas automaticas
            </h3>
            <div className={`${sections>=2 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700  flex flex-col gap-4 `}>
              
              <h4 className='text-2xl font-semibold text-slate-600 md:text-start text-center'>Con total integracion con tu negocio </h4>
              <p className='text-md font-semibold text-slate-400 md:text-start text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.

              </p>
            </div>

          </div>
       
        <div className="basis-1/2 p-10 flex items-center justify-center">
           <Image src={'/chatbot.svg'} alt="decor" width={150} height={100} className={`${sections>=2 ? 'translate-x-0 ': 'translate-x-[100vw] '} transition-transform ease-in-out duration-700 delay-100 w-3/4 h-3/4`}/>
        </div>
      </section>
      <section className="w-full h-screen bg-teal-50 relative  flex flex-row">
        <div className="basis-1/2 p-10  flex items-center justify-center">
          <Image src={'/dashboard.svg'} alt="decor" width={150} height={100} className={`${sections>=3 ? 'translate-x-0 ': '-translate-x-[100vw] '} transition-transform ease-in-out duration-700 delay-100 w-3/4 h-3/4  `}/>
        </div>
        <div className="basis-1/2 md:pl-24 p-16 flex flex-col items-center md:items-start justify-center gap-8 relative z-30 ">
          
        
        <h3 className={`${sections>=3 ? 'translate-x-0 ': 'translate-x-[100vw] '} transition-transform ease-in-out duration-700 text-teal-400 text-5xl font-bold text-center md:text-start `}>
            Programa tu bot de respuestas automaticas
            </h3>
            <div className={`${sections>=3 ? 'translate-x-0 ': 'translate-x-[100vw] '} transition-transform ease-in-out duration-700  flex flex-col gap-4 `}>
              
              <h4 className='text-2xl font-semibold text-slate-600 md:text-start text-center'>Con total integracion con tu negocio </h4>
              <p className='text-md font-semibold text-slate-400 md:text-start text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.

              </p>
            </div>

          

        </div>
        
          
      </section>
      <section className="w-full h-screen bg-teal-500  relative flex overflow-hidden ">
       
        <div className=" w-full h-full rounded-b-[12rem]  bg-[#cefdff] flex md:flex-row flex-col gap-4 p-10 pt-20">
          <div className="basis-1/2 md:flex hidden relative ">
            <span  className="w-[35vw] h-[35vw] min-w-[400px] min-h-[400px] absolute -bottom-1/4 left-1/4  bg-teal-500 rounded-full"/>
            <div className="absolute top-[10%] left-1/4 flex flex-col gap-4">
              <h4 className="text-teal-400 text-4xl font-bold">Contáctanos</h4>
              <p className="text-md text-neutral-700 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.</p>
            </div>
            <Image src={'/persona.svg'} alt="person" className="w-3/4 h-3/4 min-w-[400px] min-h-[400px] absolute -bottom-10  left-1/4 z-10" width={100} height={100}/>

          </div>
          <div className="basis-1/2 flex flex-col gap-6 justify-center items-center">
              <div className="flex flex-col gap-4 md:hidden items-center ">
                  <h4 className="text-teal-400 text-4xl font-bold">Contáctanos</h4>
                  <p className="text-md text-neutral-700 w-3/4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi at ex rutrum semper interdum eget enim. Sed rutrum eu libero et ultrices.</p>
              </div>
             <Form/>
            
          </div>
        </div>

      </section>
      <Footer/>
    </main>
  );
}

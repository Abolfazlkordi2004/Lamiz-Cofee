import Image from 'next/image'
import React from 'react'

type IContactComp={
    img:string,
    header:string,
    text:string
}

function ContactComp({img,header,text}:IContactComp) {
  return (
    <div className='flex flex-col justify-center items-center w-[295px] h-[220px]'>
        <div className='w-[50px] h-[50px] bg-[#8E6145] flex justify-center items-center rounded-full'>
            <Image src={img} alt='Icon-Contact' width={20} height={20} className=''/>
        </div>
        <div className='mt-5'>
            <h2 className='text-2xl font-bold'>{header}</h2>
        </div>
        <div className='mt-5 w-full h-[55px] text-center'>
            <p className='text-center text-lg text-wrap'>{text}</p>
        </div>
    </div>
  )
}

export default ContactComp
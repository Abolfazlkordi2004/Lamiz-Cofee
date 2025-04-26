import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
    <div>
        <div className='relative w-full h-[650px]'>
            <Image src="/img/background-img.webp" alt='background-lamiz' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default HomePage
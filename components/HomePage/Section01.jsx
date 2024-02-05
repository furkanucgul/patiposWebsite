import Image from 'next/image'
import React from 'react'

const Section01 = () => {
    return (
        <div className='w-full md:h-screen flex flex-col-reverse md:flex-row md:justify-center items-center'>
            <div className='text-center md:text-left flex flex-col gap-3 mt-10 md:mt-0'>
                <h2 className='text-[#e81c53] font-semibold text-lg md:text-xl'>
                    DAHA GÜÇLÜ, DAHA GÜVENLİ
                </h2>
                <h1 className='text-[#2c2c2c] font-semibold text-3xl md:text-5xl'>
                    Restoran için en iyi POS sistemi
                </h1>
                <p className=''>
                    Restoran, fast-food, pastane ve zincir işletmeler için yeni nesil sipariş ve satış otomasyonu.
                </p>
                <div className='mt-5 md:mt-10 flex flex-col md:flex-row items-center gap-3'>
                    <a
                        className='bg-[#e81c53] border border-[#e81c53] px-3 py-2 rounded-md text-white hover:bg-white hover:text-[#e81c53] transition-all delay-75'
                        href="#"
                    >
                        Teklif iste
                    </a>
                    <a
                        className='border border-[#696f85] px-4 py-2 md:py-5 rounded-md text-[#696f85] hover:bg-[#696f85] hover:text-white transition-all delay-75'
                        href="#"
                    >
                        videoyu izle
                    </a>
                </div>
            </div>
            <div>
                <img
                    src="https://www.menulux.com/assets/images/banner/menulux-restaurant-pos.webp"
                    alt="img"
                    className='object-contain w-full'
                />
            </div>
        </div>
    )
}

export default Section01
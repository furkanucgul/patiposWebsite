import React from 'react'

const Section02 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img
                    className='object-contain w-full md:pr-[72px]'
                    src="https://www.menulux.com/assets/images/pos/menulux-restoran-pos-terminal-1.webp"
                    alt="img"
                />
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[#e81c53] font-medium'>
                    Menulux Restoran POS Sistemini keşfedin
                </h2>

                <div>
                    <h2 className='text-[#2c2c2c] text-lg font-semibold pb-3'>
                        Hemen satış yapmaya başlayın
                    </h2>
                    <p className='text-[#646464] text-sm'>
                        Menulux POS ile ürün, menü ve kategorilerinizi dakikalar içinde tanımlayabilir, hemen ödeme ve sipariş almaya başlayabilirsiniz.
                    </p>
                </div>

                <div>
                    <h2 className='text-[#2c2c2c] text-lg font-semibold pb-3'>
                        Kolay kullanımı ile hızlıca sipariş alın
                    </h2>
                    <p className='text-[#646464] text-sm'>
                        Restoran POS'un dokunmatik ekranı ve kolay kullanılabilen arayüzü sayesinde işlemlerinizi çok hızlı yapabilirsiniz. Size müşterilerinizle ilgilenmeniz için daha fazla vakit kalır.
                    </p>
                </div>

                <div>
                    <h2 className='text-[#2c2c2c] text-lg font-semibold pb-3'>
                        Gelişmiş ve yetenekli POS sistemi
                    </h2>
                    <p className='text-[#646464] text-sm'>
                        Menulux Restoran POS birçok gelişmiş özelliği ile ihtiyaçlarınız için tasarlandı. Siparişlerinizi ve ödemelerinizi yönetirken, günlük iş akışınızı daha rahat koordine edebilirsiniz. Menulux POS sizin için önemli bir yardımcı
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section02
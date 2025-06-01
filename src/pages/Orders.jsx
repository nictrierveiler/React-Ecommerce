import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';


const Orders = () => {

  const { products, moeda} = useContext(ShopContext);

  return (
    <div className='border- pt-16'>
      <div className="text-2xl">
        <Title text1={'MEUS'} text2={'PEDIDOS'} />
      </div>
      <div>
        {
          products.slice(1,4).map((item,index) => (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div className='flex items-start gap-6 text-sm'>
                      <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                      <div>
                        <p className='sm:text-base font-medium'>{item.name}</p>
                        <div className='flex items-center gap-2 mt-2 text-base text-gray-700'>
                          <p text-lg>{moeda}{item.price}</p>
                          <p>Quantidade: 1</p>
                          <p>Tamanho: M</p>
                        </div>
                        <p className='mt-2'>Data da Compra: <span className="text-gray-400">25 de Outubro | 2025</span></p>
                      </div>
                  </div>
                  <div className='md:w-1/2 flex justify-between'>
                          <div className="flex items-center gap-2">
                              <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                              <p className='text-sm md:text-base'>Pronto para Envio</p>
                          </div>
                          <button className='border px-4 py-2 text-sm font-medium rounded-sm'>RASTREAR PEDIDO</button>
                      </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
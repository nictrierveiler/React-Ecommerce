import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

function Contact() {
  return (
    <div>
      <div className='text-center text-2x1 pt-10 border-t'>
        <Title text1={'NOSSO'} text2={'CONTATO'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nossa Loja</p>
          <p className='text-gray-500'>Endereço Generico Aqui <br /> 4545, Florianopolis</p>
          <p className='text-gray-500'>WhatsApp: (48)1234-5678 <br /> Email: teste123@teste.com</p>
          <p className='font-semibold text-xl text-gray-600'>Lorem, ipsum dolor.</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus, dignissimos.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
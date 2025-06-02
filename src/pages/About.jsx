import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'SOBRE'} text2={'NÓS'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis omnis ratione deserunt molestias illum unde ullam nulla fugiat aliquid ipsam beatae, numquam corporis laboriosam quisquam vel nam dolor dolorum. Repudiandae adipisci corporis exercitationem eos aut corrupti soluta aliquid necessitatibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores labore, maxime sint rem pariatur sit quia a consectetur laboriosam sapiente maiores aliquam earum id possimus repellat doloribus expedita placeat. Ipsam sequi odio, animi quibusdam quam fugiat magni consequuntur et quas eveniet. Corporis, facilis dolores!</p>
              <b className='text-gray-800'>Nossa Missão</b>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic perferendis facere molestiae? Repellat debitis minus officia voluptate asperiores deleniti, recusandae quidem odio quas rem atque aut amet expedita eligendi earum beatae quasi illo delectus.</p>
          </div>
      </div>

      <div className='text-4xl py-4'>
          <Title text1={'PORQUE'} text2={'COMPRAR COM A GENTE'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Garantia de Qualidade:</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, velit adipisci accusamus dolorem fugiat eos!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Conveniencia:</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, velit adipisci accusamus dolorem fugiat eos!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Cuidado com o cliente</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, velit adipisci accusamus dolorem fugiat eos!</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
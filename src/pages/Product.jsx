import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {

  const {productId} = useParams();
  const {products, moeda} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
      }
    });
  }

  useEffect(()=>{
      fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*Dados do Produto*/}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

          {/* Imagens do Produto */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.4%] w-full'>
                {
                  productData.image.map((item,index)=>(
                    <img onClick={()=>setImage(item)} src={item} key={index} className='w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
                  ))
                }
            </div>
            <div className='w-full sm:w-[80%]'>
                <img className='w-full h-auto' src={image} alt="" />
            </div>
       </div>
                               {/*Informações de Produto*/}

      <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <p className='pl-2'>(122)</p>
          </div>
           <p className='mt-5 text-3x1 font-medium'>{moeda}{productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
                <p>Selecione a Variação</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''} `} key={index}>{item}</button>
                  ))}
                </div>
           </div>
           <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Adicione ao Carrinho</button>
           <hr className='mt-8 sm:4/5'/>
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>[Detalhe do produto 1] Lorem ipsum dolor sit amet.</p>
              <p>[Detalhe do produto 2] Lorem ipsum dolor sit amet consectetur.</p>
              <p>[Detalhe do produto 3] Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
           </div>
        </div>
      </div>

      {/* Descrições e Review */}
      <div className="mt-20">
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Descrição</b>
          <p className='border px-5 py-3 text-sm'>Avaliações(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis repudiandae repellendus sequi itaque dolorum obcaecati molestiae alias! Reprehenderit praesentium optio cum reiciendis enim doloremque.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis tempore natus, impedit commodi nam iste incidunt, facilis hic nostrum delectus corporis? Porro voluptatem animi iste excepturi, sunt reiciendis distinctio!</p>
        </div>
      </div>

      {/*Produtos Relacionados*/}

      

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
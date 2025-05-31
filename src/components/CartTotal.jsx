import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

    const { moeda,taxa_entrega,getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
         <div className="text-2xl">
            <Title text1={'VALOR'} text2={'TOTAL'}/>
         </div>

         <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{moeda} {getCartAmount()}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Taxa de Entrega</p>
                    <p>{moeda} {taxa_entrega}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total:</b>
                    <b>{moeda} {getCartAmount() === 0 ? 0 : getCartAmount()+ taxa_entrega}</b>
                </div>
         </div>
    </div>
  )
}

export default CartTotal
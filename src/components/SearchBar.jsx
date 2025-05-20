import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';

function SearchBar() {

    const {search, setSearch, showSearch, setShowSeach} = useContext(ShopContext);

  return showSearch ? (
    <div className='border-t border-b py-4 bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Pesquise seu produto' />
        <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const links = [
    { to: '/', label: 'HOME' },
    { to: '/collection', label: 'PRODUTOS' },
    { to: '/about', label: 'SOBRE NÓS' },
    { to: '/contact', label: 'CONTATO' },
  ];

  return (
    <div className='flex items-center justify-between py-2 font-medium'>
      <img src={assets.logo} className='w-24 ml-5' alt='Logo' />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? 'text-black' : ''}`
            }>
            {({ isActive }) => (
              <>
                <p>{label}</p>
                <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    isActive ? '' : 'hidden'
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center gap-6'>
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt="search icon" srcset="" />
       
          <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile icon"/>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>Meu Perfil</p>
                <p className='cursor-pointer hover:text-black'>Pedidos</p>
                <p className='cursor-pointer hover:text-black'>Sair</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5' alt="Carrinho"/>
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu"/>
      </div>
      {/* Sidebar Responsiva */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p3">
          <img src={assets.dropdown_icon} alt="dropdown_icon" className={`h-4 transition-transform duration-300 ${visible ? 'rotate-180' : 'rotate-0'}`}/>
           <p>Voltar</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl6 border' to='/collection'>PRODUTOS</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl6 border' to='/about'>SOBRE NÓS</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl6 border' to='/contact'>CONTATO</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar
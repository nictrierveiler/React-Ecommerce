import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-18' alt="Logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quos culpa tenetur officia voluptatibus voluptate!
                </p>
            </div>

            <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>[Link do ZAP aqui]</li>
                <li>email@email.com</li>
              </ul>
            </div>
        </div>

        <div>
              <hr />
              <p className='py-5 text-sm text-center'>Copyright Nicolas Trierveiler 2025@ La Veilleuse (La Veluz) - All Rights Reserved</p>
            </div>

    </div>
  )
}

export default Footer
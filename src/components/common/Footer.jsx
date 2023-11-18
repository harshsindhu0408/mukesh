import React from 'react'
import logo from '../../assets/Path 774.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-between'>

        <div className='w-11/12 lg:w-8/12 md:w-11/12 flex md:flex-row sm:flex-col items-start justify-between sm:gap-y-10 mb-16'>
            {/* Logo div */}
            <div className='flex gap-x-2 flex-row items-center justify-center'>
                <div className='flex flex-col items-center justify-center mx-auto'>
                    <img src = {logo} alt='Logo'/>
                    <div>natura</div>
                    <div className='font-semibold'>A V O N</div>
                </div>

                <div className='w-1 h-14 bg-red-600'></div>

                <div className='flex flex-col items-start justify-center'>
                    <p className='font-bold text-3xl'>consultoria</p>
                    <p className='text-2xl'>de beleza</p>
                </div>
            </div>

            {/* 1st col */}
            <div className='flex flex-col items-start gap-y-2 justify-center'>
                <h3 className='text-purple-900 font-bold text-lg'>A Consultoria</h3>
                <ul className='flex flex-col items-start gap-y-2 justify-center'>
                    <li>Como funciona</li>
                    <li>Sustentabilidade</li>
                </ul>
            </div>

            {/* 2nd col */}
            <div className='flex flex-col items-start gap-y-2 justify-center'>
                <h3 className='text-purple-900 font-bold text-lg'>Atendimento</h3>
                <ul className='flex flex-col items-start gap-y-2 justify-center'>
                    <li>Encontre uma consultora</li>
                    <li>Ajuda e contato</li>
                    <li>Ouvidoria</li>
                </ul>
            </div>  

            {/* 3rd col */}
            <div className='flex flex-col items-start gap-y-2 justify-center'>
                <h3 className='text-purple-900 font-bold text-lg'>Suporte</h3>
                <ul className='flex flex-col items-start gap-y-2 justify-center'>
                    <li>Políticas de cookies</li>
                    <li>Aviso de privacidade</li>
                    <li>Políticas de compras</li>
                </ul>

                <div className='flex flex-row items-start gap-x-4'>
                    <FaFacebook size="20px" />
                    <FaInstagramSquare size="20px" />
                    <AiFillTwitterCircle size="20px" />
                    <FaTiktok size="20px" />
                </div>
            </div> 
        </div>
      
    </div>
  )
}

export default Footer

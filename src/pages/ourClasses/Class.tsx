import React from 'react'

type Props = {
    name:string,
    description?:string,
    image:string
}

const Class = ({name,description,image}: Props) => {
  return (
    <li className='relative  mx-5 inline-block h-[380px] w-[450px]'>
        <div className='p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90'>
        <h3 className="text-2xl">{name}</h3>
        <p className="mt-5">{description}</p>
        </div>
        <img alt={`${image}`} src={image} />
        
            </li>
  )
}

export default Class
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-sky-800 pt-20'>
      <div className="mx-auto max-w-7xl grid grid-cols-4 gap-4">
        <div className="h-30 bg-amber-200"></div>
        <div className="h-30 bg-amber-200"></div>
        <div className="h-30 bg-amber-200"></div>
        <div className="h-30 bg-amber-200"></div>
      </div>
      <div className="w-full bg-black">
        <div className='flex h-16 justify-between items-center mx-auto max-w-7xl px-3'>
            <div className="text-white">© 2018 Pixels. All Rights Reserved.</div>
            <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
Footer
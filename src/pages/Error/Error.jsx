import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import error1 from "../../assets/error1.jpg"

const Error = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        

        <div className='max-w-md text-center'>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <img src={error1} alt="" />
          <div><Link
            to='/'
            className='px-8 py-3 mt- font-semibold rounded bg-black	 text-white'
          >
            Back to homepage
          </Link></div>
        </div>
      </div>
    </section>
  )
}

export default Error;
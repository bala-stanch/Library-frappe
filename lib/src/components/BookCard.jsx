import React from 'react'
import { Link } from 'react-router-dom'

export const BookCard = ({ item }) => {

    return (
        <Link to={`/details/${item.name}`} className="mt-5 w-[90%] sm:w-52 relative  h-40  hover:shadow-2xl hover:scale-105 duration-300 ">
            <img src={item.book_image} alt=""  className=' w-full object-cover rounded-t-lg' />
            {/* <h2 className='font-semibold capitalize text-xl w-full'>{item.name}</h2> */}
            {/* <p className='text-sm'>by {item.author},</p> */}
            {/* <p className='text-sm opacity-80'>{item.publisher}</p> */}
            {item.status === 'Available' ?
             <p className='font-semibold text-white bg-green-800 rounded-sm p-2 text-center absolute  top-0'>{item.status}</p>
                : <p className='font-semibold bg-red-600 text-white rounded-sm p-2 text-center absolute top-0 '>{item.status}</p>
            }



        </Link>
    )
}

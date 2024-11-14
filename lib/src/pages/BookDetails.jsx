import { useFrappeGetDoc } from 'frappe-react-sdk'
import React, { useState } from 'react'
import { useFrappeUpdateDoc } from 'frappe-react-sdk'

import { useParams } from 'react-router-dom'
import axios from 'axios'

export const BookDetails = () => {
    const params = useParams()
    const [bookStatus, setBookStatus] = useState("")
    const fetchid = params.id
    const { data } = useFrappeGetDoc('Book', fetchid)
    console.log(data)
    const db=useFrappeUpdateDoc()
    console.log(db)
    const updateStatus = async () => {
        // const {}=useFrappeUpdateDoc('Book',data.name,{
        //     status:"Available"
        // })

        // const res = await axios.put(`/api/resource/Book/${data.name}`, {
        //     status: data.status === "Available" ? 'Checked-out' : 'Available'
        // })
        
        // setBookStatus(res.data?.message?.status || "Available")
        // setBookStatus(res.data?.message?.status)

    }




    return (

        <div className=" h-12 ">
            {data ? <div className="flex flex-col sm:flex-row">
                <div className="">{data.book_image && <img src={data.book_image} alt="" className='object-cover w-56' />}</div>
                <div className="flex flex-col w-1/2 pl-2 pt-4">
                    <h1 className='text-2xl font-semibold  text-start'>{data.name}</h1>
                    <h2 className='text-sm text-gray-400'>{data.author}</h2>
                    <h2 className='text-sm text-gray-400'>{data.publisher}</h2>
                    <h2 className='text-sm text-gray-400'>{data.isbn}</h2>
                    {/* {bookStatus === '' ? (
                        data.status==='Available'?
                        <p className='font-semibold  text-green-800   mt-2'>{data.status}</p>
                        : <p className='font-semibold text-red-600  mt-2 '>{data.status}</p>):
                        (bookStatus==='Available'?
                            <p className='font-semibold  text-green-800   mt-2'>{bookStatus}</p>
                            : <p className='font-semibold text-red-600  mt-2 '>{bookStatus}</p>)
                        
                    } */}
                    { data.status==='Available'?
                        <p className='font-semibold  text-green-800   mt-2'>{data.status}</p>
                        : <p className='font-semibold text-red-600  mt-2 '>{data.status}</p>}   

                    <button onClick={() => (updateStatus())} className='bg-blue-400 rounded px-2 py-1 text-white font-semibold w-[150px]'>Change status</button>

                </div>
            </div> : <p>Loading..</p>}


        </div>
    )
}

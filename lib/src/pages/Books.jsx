import React, { useEffect } from 'react'
import bgimg from '../assets/bg.jpg'
import bkimg from '../assets/book.jpg'
import { BookCard } from '../components/BookCard'
import { useFrappeAuth, useFrappeGetCall, useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk'
import { Link } from 'react-router-dom'
export const Books = () => {
    const[books,setbooks]=[]
    const {currentUser} = useFrappeAuth()
    // console.log(currentUser)
    const { data, error, isValidating } =useFrappeGetDocList('Book',{
        fields:["*"]
    });
    console.log(hookeg) 
    
    
    
    // data.map((doc_name)=>())
        // console.log(data)
    const sample_data = [
        {
            bookname: "rich dad poor dad",
            author: "henry",
            image: bkimg,
            publisher: "NN publications",
            status: "Available"
        },
        {
            bookname: "rich dad poor dad",
            author: "henry",
            image: bkimg,
            status: "Available",
            publisher: "NN publications"
        },
        {
            bookname: "rich dad poor dad",
            author: "henry",
            image: bkimg,
            status: "Available",

            publisher: "NN publications"
        },
        {
            bookname: "rich dad poor dad",
            author: "henry",
            image: bkimg,
            status: "Available",

            publisher: "NN publications"
        },
        {
            bookname: "rich dad poor dad",
            author: "henry",
            image: bkimg,
            status: "Checked-out",

            publisher: "NN publications"
        },
    ]
    return (
        <div className='bg-slate-50'>

            <div className="bg-hero-pattern w-full h-lvh"></div>
                <div className='hidden sm:flex sm:flex-col absolute left-0 right-0 gap-7 text-center justify-center mx-auto  text-2xl text-white font-semibold top-24'>
                    <p className='font-thin text-5xl'><span className='font-semibold text-7xl'>MR</span>Library</p>
                    <p className='font-thin text-7xl'>Get your <span className='font-semibold'>Dreams in hands</span></p>
                   <p>Let's Explore our new articles</p> 
                    <a href="#explore" className='text-[15px]  border-2 max-w-sm mx-auto px-5 py-2 mt-3 hover:bg-white hover:text-black font-semibold capitalize duration-100 opacity-90 hover:opacity-100'>Explore Now</a>
                </div>
                <h1 className='font-bold mt-2 sm:mt-4 ml-2 text-2xl mb-10'>Our Books </h1>
               {data ? <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-5 gap-4" id='explore'>
                    {data?.map((book, i) => (<BookCard item={book} key={i} />))}
                </div>:<h2>Loading...</h2>}
                


        </div>
    )
}

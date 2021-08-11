import React from 'react'


function Menu({image,name,category,description}) {
    return (
        <div>
            <div className='bg-gray-100 p-5 w-full rounded-lg h-full'>
                <h6>{category}</h6>
                <h2 className='text-5xl pt-3 pb-3'>{name}</h2>
                <p className='text-sm text-gray-600'>{description} </p>
                <div className=' flex space-x-3 items-center pt-3 pb-3 '>
                    <div className='w-32 bg-gray-800 h-1'></div>
                    <h4>Read More</h4>
                </div>
                <img src={image} alt='' className='w-full h-32 p-3'></img>
                <button className='border-2 rounded-xl border-black p-2'>Order Now</button>
            </div>
        </div>
    )
}

export default Menu

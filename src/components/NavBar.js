import React from 'react'

const Navbar = ({menuList,filterItem}) => {
    return (
        <nav className='p-5'>
            {menuList.map((item) => {
                return ( <button className='p-3 bg-white hover:bg-red-300 hover:text-white border-b-4 border-red-600' onClick={() => filterItem(item)}>{item}</button>)
            })}    
        </nav>
    )
}

export default Navbar

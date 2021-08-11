import React,{useState} from 'react'
import Menu1 from './components/MenuApi'
import Menu from './components/Menu'


const MainMenu = () => {
    

    //setting the data as hooks which can be later filtered 
    const [menuData ,setMenuData] = useState(Menu1)


    const filterItem = (category1) => {
        const updateList = Menu1.filter((item) => {
            return item.category === category1
        }
        )
        setMenuData(updateList)

    };

    const showItem = () => {
        setMenuData(Menu1)
    }

    
    return (
        <div className='flex flex-col items-center justify-center'>
        <nav className='p-5 '>
            <div className=' bg-yellow-50 rounded-3xl  p-5 w-96 flex justify-center justify-content-center items-center'>
                <button className='p-3 bg-white hover:bg-red-300 hover:text-white border-b-4 border-red-600' onClick={() => filterItem('breakfast')}>Breakfast</button>
                <button className='p-3 bg-white hover:bg-red-300 hover:text-white border-b-4 border-red-600' onClick={() => filterItem('lunch')}>Lunch</button>
                <button className='p-3 bg-white hover:bg-red-300 hover:text-white border-b-4 border-red-600' onClick={() => filterItem('dinner')}>Dinner</button>
                <button className='p-3 bg-white hover:bg-red-300 hover:text-white border-b-4 border-red-600' onClick={showItem}>All</button>

            </div>
        </nav>
        <div className='h-full p-32'>
            <div className='grid grid-cols-3 grid-rows-auto gap-4'>
                {menuData.map((item) => (
                    <Menu
                        id = {item.id}
                        image ={item.image}
                        description = {item.description}
                        category = {item.category}
                        name ={item.name}
                     />
                ))}
            </div>
            
        </div>
        </div>
    )
}

export default MainMenu

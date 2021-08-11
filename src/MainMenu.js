import React,{useState} from 'react'
import Menu1 from './components/MenuApi'
import Menu from './components/Menu'
import NavBar from './components/NavBar'




const uniqueList = [
    ...new Set(
      Menu1.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  

const MainMenu = () => {
    

    //setting the data as hooks which can be later filtered 
    const [menuData ,setMenuData] = useState(Menu1)

    const [menuList, setMenuList] = useState(uniqueList);


    const filterItem = (category1) => {
        if (category1 === "All"){
            setMenuData(Menu1)
        }
        else{
        const updateList = Menu1.filter((item) => {
            return item.category === category1
        }
        )
        setMenuData(updateList)}

    };

    return (
        <div className='flex flex-col items-center justify-center'>
        
           <NavBar filterItem={filterItem} menuList={menuList} />
        
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

import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X']);
function onAddCategory(newCategory){
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
}

  return (
    <>

      <h1>Gif Expert app</h1>

        <AddCategory 
        onNewCategory={(value)=>onAddCategory(value)}
        />
      
      {
      categories.map(category => (
        <GifGrid key={category}
        category={category} />
      ))
      }
      
    </>
    
  )
}

export default GifExpertApp
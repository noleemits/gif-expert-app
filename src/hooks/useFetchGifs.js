import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

function useFetchGifs(category) {

    const [images, setImages] = useState([]);  
    const [isLoading, SetIsLoading] = useState(true);


    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);  
      SetIsLoading(false);
    }
    
    useEffect(() => {
        getImages();
    }, [])  
    
return {
    images,
    isLoading
 }
}

export default useFetchGifs
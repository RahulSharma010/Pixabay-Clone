import PixabayContext from "./PixabayContext";
import React, { useEffect, useState } from 'react'

const PixabayState = (props) => {

    const [imageData,setImageData] = useState([]);
    const [query,setQuery] = useState("london");
    const api_key = "48438350-089d6bd2113609ac1645175d3";

    useEffect(() => {
        const fetchData = async () => {
            // const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=yellow+flowers&image_type=photo&pretty=true&per_page=100`);
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
            const data = await api.json();
            setImageData(data.hits);
            // console.log(data.hits);
        }
        fetchData();
    },[query])

    const fetchImageByCategory = async (cat) => {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`);
      const data = await api.json();
      setImageData(data.hits);
      //  console.log(data);
      
    }

  return (
    <PixabayContext.Provider value={{imageData,fetchImageByCategory,setQuery}}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState

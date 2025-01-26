import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Images = () => {
    // const data = useContext(PixabayContext);
    const { imageData } = useContext(PixabayContext);
    return (
        <div className="container my-5">
            <div className='flex'>
                {imageData.map((data) => <div key={data.id}>
                    <div className="item">
                        <img src={data.largeImageURL} alt="photo" />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Images

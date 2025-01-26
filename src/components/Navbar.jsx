import React, { useContext } from 'react';
import PixabayContext from '../context/PixabayContext';

const Navbar = () => {
    const { fetchImageByCategory, setQuery } = useContext(PixabayContext);

    return (
        <>
            {/* Button Group Container */}
            <div className='container text-center my-3'>
                <div className='row row-cols-2 row-cols-md-4 row-cols-lg-4 g-2'>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('nature')}
                            type='button'
                            className='btn btn-outline-info w-100'
                        >
                            Nature
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('science')}
                            type='button'
                            className='btn btn-outline-success w-100'
                        >
                            Science
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('computer')}
                            type='button'
                            className='btn btn-outline-primary w-100'
                        >
                            Computer
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('religion')}
                            type='button'
                            className='btn btn-outline-danger w-100'
                        >
                            Religion
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('food')}
                            type='button'
                            className='btn btn-outline-warning w-100'
                        >
                            Food
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('travel')}
                            type='button'
                            className='btn btn-outline-info w-100'
                        >
                            Travel
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('building')}
                            type='button'
                            className='btn btn-outline-light w-100'
                        >
                            Building
                        </button>
                    </div>
                    <div className='col'>
                        <button
                            onClick={() => fetchImageByCategory('business')}
                            type='button'
                            className='btn btn-outline-success w-100'
                        >
                            Business
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className='container my-3' style={{ maxWidth: '600px' }}>
                <input
                    type='text'
                    onChange={(e) => setQuery(e.target.value)}
                    className='form-control bg-dark text-light'
                    placeholder='Search images...'
                />
            </div>
        </>
    );
};

export default Navbar;

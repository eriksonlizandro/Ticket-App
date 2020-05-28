import React from 'react';

const searchBox = () => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue w-30 br2'
                type='search'
                placeholder='search events'
                //onChange={searchChange} 
                />
         
        </div>
    );
}

export default searchBox; 
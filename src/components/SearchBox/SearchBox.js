import React from 'react';

const searchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue w-30'
                type='search'
                placeholder='search events'
                onChange={searchChange} />
         
        </div>
    );
}

export default searchBox; 
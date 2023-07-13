import * as React from 'react'


const Header = () => {
    return (
        <header className='container justify-between items-center flex flex-row space-x-4 py-10'>
            <div className='text-2xl font-extrabold	 text-white'>Winglore</div>
            <a href='https://github.com/SamOsman/Winglore' target='_blank' className='text-white font-bold'>Github</a>
        </header>
    )
}

export default Header
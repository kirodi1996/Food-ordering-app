import { useEffect, useState } from "react";
import { HEADER_LOGO } from "../constants/header-constants"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if no dependency array => useEffect will be called on every render
    // if depedency array is empty [] => useEffect is called on initial render
    // if dependency array is [isLoggedIn] => called everytime isLoggedIn is updated
    useEffect(() => {
        console.log('useEffect called');
    }, [isLoggedIn])

    return (
        <div className='flex items-center justify-between p-4 bg-gray-100'>
            <div >
                <img className='w-20 h-auto' src={HEADER_LOGO}/>
            </div>
            <div className=''>
                <ul className='flex text-gray-700'>
                    <li className='mr-6'>Home</li>
                    <li className='mr-6'>About us</li>
                    <li className='mr-6'>Contact us</li>
                    <li className='mr-6'>Cart</li>
                    <li className='cursor-pointer' onClick={() => {setIsLoggedIn(!isLoggedIn)}}>
                        {isLoggedIn? 'Logout' : 'Login'}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
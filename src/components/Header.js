import { HEADER_LOGO } from "../constants/header-constants"

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
};

export default Header;
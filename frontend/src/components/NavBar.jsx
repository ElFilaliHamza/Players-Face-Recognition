import React from "react";
import { AiTwotoneHome,AiOutlineLogin } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { MdAirplanemodeActive,MdOutlineContactless,MdOutlineSupervisorAccount } from 'react-icons/md';
import logo from '../images/logo.png';



const MyListItem = ({name, className, icon}) => {
    return (
        <li className={`${className} group flex flex-row justify-between  items-center
         text-white m-2 p-3 cursor-pointer hover:text-[#1baa73] transition-all duration-200 ease-linear`}>
            {icon}
            {name}
        </li>
    )
}


const NavBar = () => {

    return (
        <nav className="px-4 w-full flex flex-row justify-between bg-[#041d20]">
            <div className="flex flex-initial justify-center items-center">
                <img src={logo} alt="agence de voyage" className="w-32 cursor-pointer"/>
            </div>
            <div className="">
                <ul className="flex flex-row text-white justify-center items-center">
                    <MyListItem name={<input type="text" className="outline-none bg-transparent text-white 
                    white-glassmorphism rounded-full px-3 py-1 scale-0 group-hover:scale-100 focus:scale-100 focus:border-[#15885c] transition-all duration-200 ease-linear"/>} icon={<BiSearchAlt fontSize={21} className="mr-4" />}/>
                    <MyListItem name="Home" icon={<AiTwotoneHome fontSize={21} className="mr-4" />}/>
                    <MyListItem name="Destinations" icon={<MdAirplanemodeActive fontSize={21} className="mr-4"/>}/>
                    <MyListItem name="Types des voyages" />
                    <MyListItem name="Contact" icon={<MdOutlineContactless fontSize={21} className="mr-4"/>}/>
                    <MyListItem name="Inscription" icon={<MdOutlineSupervisorAccount fontSize={21} className="mr-4"/>}/>
                    <MyListItem name="Login" icon={<AiOutlineLogin fontSize={21} className="mr-4"/>} className="border-solid border-x-2 
         border-opacity-25 hover:border-opacity-50 border-[#1baa73] 
         rounded-3xl hover:rounded-full transition-all duration-500 ease-linear"/>
                    
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/user/userController";
import { useSelector } from "react-redux";
import "./header.scss";

import logo from "../logo.jpeg";
import { TiShoppingCart } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";


const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin , setIsAdmin] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { user, status , isAuthenticate } = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticate === true) {
      setIsLogin(true);
    }else{
      setIsLogin(false)
    }

    if(user.roal === 'admin'){
      setIsAdmin(true)
    }else{
      setIsAdmin(false)
    }
  }, [status , isAuthenticate]);
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="p-3 w-full flex justify-between lg:pl-20 lg:pr-20 md:pl-3 md:pr-3  bg-[#083b3b0f] border  border-[#8090c038] ">
    <div className="text-3xl font-serif"> Apna Bazar </div>
   
    <nav className="flex items-center justify-center gap-2">
      
    {isLogin ? (
              <button className="btn login-logout-button" onClick={logoutHandle}>
                Log out 
              </button>
            ) : (
              <button className="btn login-logout-button" onClick={()=>{console.log("log in component");
               navigate('/login')}}>
                Login 
              </button>
            )}
    {/* <Link className="overflow-hidden"> <img className="h-7 w-7 border rounded-[50%] " src={dp} alt="" /> </Link> */}
    
    {
      menuOpen ? <MdOutlineClose className="size-7 cursor-pointer" onClick={toggleMenu}  />:<CgDetailsMore className="size-7 cursor-pointer" onClick={toggleMenu} />
    }
    </nav>
    {menuOpen && (
      <div className="absolute p-2 top-16 right-3 w-40  shadow-lg flex gap-2 flex-col border rounded bg-slate-300">
            <NavLink className="link" to={'/'}> <IoHomeSharp/> Home </NavLink>
            <NavLink className="link" to={'/cart'}> <TiShoppingCart/> Cart </NavLink>
            <NavLink className="link" to={'/profile'}> <IoSettingsSharp/> Profile </NavLink>
     {isAdmin? (<><button className="btn" onClick={()=>navigate('/add')} >Add Product</button>
                <button className="btn" onClick={()=>navigate('/dashboard')} >Dashboard</button></> ):""}

      </div>
    )}
    </header>
  );
};

export default Header;


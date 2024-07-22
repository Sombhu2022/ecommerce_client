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


const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin , setIsAdmin] = useState(false)
  const [isHambergerOn , setIsHambergerOn] = useState(false)
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
    <header>
      <img src={logo} alt="logo" />
      <div>
 
       {isAdmin? (<button className="btn" onClick={()=>navigate('/add')} >Add Product</button>):""}
        {isLogin ? (
          <button className="btn login-logout-button" onClick={logoutHandle}>
            Log out 
          </button>
        ) : (
          <button className="btn login-logout-button" onClick={()=>navigate('/login')}>
            Login 
          </button>
        )}
      </div>
      <nav>
        <NavLink className="link" to={'/'}> <IoHomeSharp/> </NavLink>
        <NavLink className="link" to={'/cart'}> <TiShoppingCart/>  </NavLink>
        <NavLink className="link" to={'/profile'}> <IoSettingsSharp/>  </NavLink>
      </nav> 

    </header>
  );
};

export default Header;

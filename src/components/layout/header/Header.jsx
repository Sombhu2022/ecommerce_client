import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../redux/user/userController'
import {useSelector} from 'react-redux'

const Header = () => {
  
  const { status } = useSelector((state)=> state.user )

  const dispatch = useDispatch()
  const logoutHandle =()=>{
       dispatch(logoutUser())
  }

  return (
    <header>
      <img src="" alt="" />
      <nav>
        <NavLink to={"/"}>Product </NavLink>
        <NavLink to={"/add"}>Product Add </NavLink>
        <NavLink to={"/login"}>Login </NavLink>
        <a onClick={logoutHandle}>Log out </a>
      </nav>
    </header>
  )
}

export default Header
import React from 'react'
import { useDispatch } from 'react-redux'
import service from '../../appwrite/config';
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        try {
            await service.logout()
            dispatch(logout())
        } catch (error) {
            console.log("Logout :: logoutHandler :: error", error);
        }
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
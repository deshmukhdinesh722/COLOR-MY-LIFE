import { Button } from '@/components/ui/button'
import { logoutUser, resetTokenAndCredentials } from '@/store/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AdminLogout() {
    const dispatch =useDispatch()
    const navigate=useNavigate()

function handlleLogout(){
        dispatch(resetTokenAndCredentials())
        sessionStorage.clear();
        navigate('/auth/login')
}
    return (
        <>
        <Button className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950' onClick={handlleLogout}>
            Logout
        </Button>
        </>
    )
}

export default AdminLogout

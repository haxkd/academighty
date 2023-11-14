import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(sessionStorage.getItem("admin")==null){
            navigate("/admin/login");
        }
    });
  return (
    <div>AdminHome</div>
  )
}

export default AdminHome
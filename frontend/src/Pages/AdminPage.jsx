import React,{ Suspense } from 'react'
import {Outlet} from 'react-router-dom'

const Leader = React.lazy(()=>import('../Components/Registration/Leader'));
const Team = React.lazy(()=>import('../Components/Registration/TeamName'));
const AdminLogin = React.lazy(()=>import('../Components/AdminPanel/AdminLogin'));

function AdminPage({ setIsLoggedIn }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
                <AdminLogin setIsLoggedIn={setIsLoggedIn} />  
            </Suspense>  

    </div>
  )
}



export default AdminPage


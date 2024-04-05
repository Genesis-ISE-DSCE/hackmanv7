import React,{ Suspense } from 'react'

const Leader = React.lazy(()=>import('../Components/Registration/Leader'));
const Team = React.lazy(()=>import('../Components/Registration/TeamName'));

function RegistrationPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
                <Leader />   
            </Suspense>  
            
    </div>
  )
}

export default RegistrationPage

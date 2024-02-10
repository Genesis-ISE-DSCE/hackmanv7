import React, { Suspense } from 'react';
const Profile = React.lazy(()=>import('../Components/Profile'));


function ProfilePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
                <Profile />
            </Suspense>  
    </div>
  )
}

export default ProfilePage

import React from 'react'

import TopAppBar from './componets/NavBar';
import UserForm from './componets/UserForm';

function Home() {
  return (
    <div style={{display:'flex',flexDirection:"column",gap:'1rem',}}>
      <div>
      <TopAppBar/>
      </div>
      This is home Page
      <div style={{padding:"2rem 0"}}>
      <UserForm/>
      </div>
    </div>
  )
}

export default Home;
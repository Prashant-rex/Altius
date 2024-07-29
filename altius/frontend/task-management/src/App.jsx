import { useState } from 'react'
import './App.css'
import UserRegistration from './UserRegistration'
import Login from './Login'

function App() {

  const [page, setPage] = useState('Registration')

  const setRegistrationPage = () => {
    setPage('Registration')
  }

  const setLoginPage = () => {
    setPage('Login')
  }
  return (
    <>
      <div>
        <button style={{color: 'white'}} title='Registration Form' onClick={setRegistrationPage}></button>
        <button style={{color: 'white'}} title='Login Form' onClick={setLoginPage}></button>
      </div>
      {page == 'Registration' ?  <UserRegistration /> : < Login />}
    </>
  )
}

export default App

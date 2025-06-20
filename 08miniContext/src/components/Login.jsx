import React, {useState, useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setuser] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handlesubmit = (e)=>{
        e.preventDefault();
        setUser({username},{password})
    }

  return (
    <div>
        <input 
        type="text" 
        value={username}
        onChange={(e)=>{setuser(e.target.value)}}
        placeholder='username' />
        {"   "}
        <input 
        type="password" 
        value={password}
        onChange={(e)=>{setpassword(e.target.value)}}
        placeholder='password' />
        <button type="submit" onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
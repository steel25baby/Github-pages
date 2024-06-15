import React from 'react'
import "./Header.css"
import { useState } from 'react'
import Profile from '../../Pages/Home/Profile'

const Header = () => {
  const [userdata, setuserdata]=useState("steel25baby")
  const [userdatafetch, setuserdatafetch]=useState(null)
  const [error, seterror]=useState(false)
  const HandleGituser = async(e)=>{
    e.preventDefault()
    setuserdatafetch(null)
    try {
      const responceuser=await fetch(`https://api.github.com/users/${userdata}`)
console.log (responceuser)
if (responceuser.ok===true){
  const datauser=await responceuser.json()
  console.log(datauser)
  setuserdatafetch(datauser)
}
    } catch (error) {
      seterror("there was an error")
    }
  }
  return (
    <section className='NavBar'>
        <div className='Heading'>
            <h1>GITHUB FINDER</h1>
            <p>By <a href="">Bridget Gitonga</a></p>
            <div className='HeaderLabel'>
                <label htmlFor="username"></label>
                <input type ="text"
                id ='username'
                placeholder ='enter a username'
                 />
                 <button  onClick={HandleGituser} className='HeaderButton'>search</button>
            </div>
        </div>
        <div>
          <Profile />
        </div>
    </section>
  )
}

export default Header
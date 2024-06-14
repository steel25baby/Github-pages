import React from 'react'
import "./Header.css"

const Header = () => {
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
                 <button className='HeaderButton'>search</button>
            </div>
        </div>
        
    </section>
  )
}

export default Header
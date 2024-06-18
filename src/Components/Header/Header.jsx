import React, { useState } from 'react';
import Profile from '../../Pages/Home/Profile';
import "./Header.css";
// import Repositories from '../../Pages/Home/Profile';

const Header = () => {
  const [userdata, setuserdata] = useState("steel25baby");
  const [userdatafetch, setuserdatafetch] = useState([]);
  const [userRepositories, setUserRepositories] = useState([]);
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);
  const [error, seterror] = useState(false);

  const HandleGituser = async (e) => {
    e.preventDefault();
    setuserdatafetch([]);
    setUserRepositories([]);
    setUserFollowers([]);
    setUserFollowing([]);
    seterror(false);
    try {
      const responceuser = await fetch(`https://api.github.com/users/${userdata}`);
      console.log(responceuser);
      if (responceuser.ok) {
        const datauser = await responceuser.json();
        console.log(datauser);
        setuserdatafetch(datauser);
      } else {
        seterror("User not found");
      }
    } catch (error) {
      seterror("There was an error");
    }
    try {
         const responceRepos = await fetch (`https://api.github.com/users/${username}repos`)
         if(responceRepos.ok){
          const dataRepos = await responceRepos.json()
          setUserRepositories(dataRepos) 
         }
         else{
          seterror("user not found")
         }
      
    } catch (error) {
      seterror('there was an error')
    }
    try {
      const responceFollowers =await fetch(`https://api.github.com/users/${username}followers `)
      if(responceFollowers.ok){
        const dataFollowers =await responceFollowers.json()
        setUserFollowers(dataFollowers)
      }
      else{
        seterror("followers not found")
      }
      
    } catch (error) {
      seterror('there was an error')
    }
    try {
      const responceFollowing = await fetch(' https://api.github.com/users/${username}/following')
      if (responceFollowing.ok) {
        const dataFollowing = await responceFollowing.json()
        setUserFollowing(dataFollowing)
      }
      else{
        seterror("following not found")
      }
    } catch (error) {
      seterror("there was an error")
    }
  };

  return (
    <section className='NavBar'>
      <div className='Heading'>
        <h1>GITHUB FINDER</h1>
        <p>By <a href="">Bridget Gitonga</a></p>
        <div className='HeaderLabel'>
          <label htmlFor="username"></label>
          <input
            type="text"
            id='username'
            placeholder='Enter a username'
            value={userdata}
            onChange={(e) => setuserdata(e.target.value)}
          />
          <button onClick={HandleGituser} className='HeaderButton'>Search</button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <div>
        <Profile userdatafetch={userdatafetch} 
        userRepositories={userRepositories}
        userFollowers={userFollowers}
        userFollowing={userFollowing}
        />
      </div>
      <div>
        <h1>Repositories</h1>
        
      </div>
    </section>
  );
};

export default Header;
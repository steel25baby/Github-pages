import React, { useState } from 'react';
import Profile from '../../Pages/Home/Profile';

const Header = () => {
  const [userdata, setuserdata] = useState("steel25baby");
  const [userdatafetch, setuserdatafetch] = useState([]);
  const [error, seterror] = useState(false);

  const HandleGituser = async (e) => {
    e.preventDefault();
    setuserdatafetch([]);
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
        <Profile userdatafetch={userdatafetch} />
      </div>
    </section>
  );
};

export default Header;
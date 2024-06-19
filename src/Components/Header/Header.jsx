import React, { useState } from "react";
import Profile from "../../Pages/Home/Profile";
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
      const responceuser = await fetch(
        `https://api.github.com/users/${userdata}`,
      );
      const responceRepos = await fetch(
        `https://api.github.com/users/${userdata}/repos`,
      );
      const responceFollowers = await fetch(
        `https://api.github.com/users/${userdata}/followers `,
      );
      const responceFollowing = await fetch(
        `https://api.github.com/users/${userdata}/following`,
      );

      if (
        responceuser.ok ||
        responceRepos.ok ||
        responceFollowers.ok ||
        responceFollowing.ok
      ) {
        const datauser = await responceuser.json();
        const dataRepos = await responceRepos.json();
        const dataFollowers = await responceFollowers.json();
        const dataFollowing = await responceFollowing.json();

        // console.log(datauser);
        // console.log(dataRepos);
        // console.log(dataFollowers);
        console.log(dataFollowing);

        setuserdatafetch(datauser);
        setUserRepositories(dataRepos);
        setUserFollowers(dataFollowers);
        setUserFollowing(dataFollowing);
      } else {
        seterror("User not found");
      }
    } catch (error) {
      console.log(error);
      seterror("There was an error");
    }
  };

  return (
    <section className="NavBar">
      <div className="Heading">
        <h1>GITHUB FINDER</h1>
        <p>
          By <a href="">Bridget Gitonga</a>
        </p>
        <div className="HeaderLabel">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="Enter a username"
            value={userdata}
            onChange={(e) => setuserdata(e.target.value)}
          />
          <button onClick={HandleGituser} className="HeaderButton">
            Search
          </button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <div>
        <Profile
          userdatafetch={userdatafetch}
          userRepositories={userRepositories}
          userFollowers={userFollowers}
          userFollowing={userFollowing}
        />
      </div>
    </section>
  );
};

export default Header;

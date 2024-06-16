import React from 'react';
import profile from "../../assets/profile.jpeg";
import { MdLocationOn } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { VscRepoForked } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const Info = ({ Name, icon }) => {
  return (
    <div className="Info">
      <div className="Profile-icon-wrapper">{icon}
        <p>{Name}</p>
      </div>
    </div>
  );
};

const Profile = ({ userdatafetch }) => {
  if (!userdatafetch || Object.keys(userdatafetch).length === 0) {
    return <p>No user data found</p>;
  }

  return (
    <section className='HeroSection'>
      <div className='HomePage'>
        <div className='ProfileDetails'>
          <div className='ProfilePic'>
            <img src={userdatafetch.avatar_url || profile} alt="Profile" />
          </div>
          <div className='GithubDetails'>
            <h2>{userdatafetch.name || "No Name"}</h2>
            <h4>GitHub</h4>
            <p>{userdatafetch.bio || "No bio available"}</p>
            <a href={userdatafetch.html_url} target="_blank" rel="noopener noreferrer">
              <RiExternalLinkFill /> View on GitHub
            </a>
          </div>
          <div className='GithubInfo'>
            <Info icon={<MdLocationOn />} Name={userdatafetch.location || "No location"} />
            <Info icon={<GiTeacher />} Name={userdatafetch.company || "No company"} />
            <Info icon={<RiGitRepositoryFill />} Name={`${userdatafetch.public_repos} Repositories`} />
            <Info icon={<MdGroups />} Name={`${userdatafetch.followers} Followers`} />
            <Info icon={<MdGroups />} Name={`${userdatafetch.following} Following`} />
          </div>
        </div>
        <div className='Repositories'>
          {/* Add logic to display repositories if needed */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
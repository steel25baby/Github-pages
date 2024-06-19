import React from 'react';
import profile from "../../assets/profile.jpeg";
import { MdLocationOn } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { RiExternalLinkFill } from "react-icons/ri";
// import Repositories from '../Repositories';
import './Profile.css'
const Info = ({ Name, icon }) => {
  return (
    <div className="Info">
      <div className="Profile-icon-wrapper">{icon}
        <p>{Name}</p>
      </div>
    </div>
  );
};

const Profile = ({ userdatafetch, userRepositories, userFollowers}) => {
  
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
            <a href={userdatafetch.html_url} target="_blank" rel="noopener noreferrer" className='btn-link'>
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
          {userRepositories.map((repo, i)=>(
            <>
            <a href={repo.clone_url} target='_blank'>
            <div key={i} className='repo-card'>
              <h2>{repo.full_name}</h2>
              <p>{repo.description}</p>
              <div className='repo-card-icon-box'>
              <p>{repo.forks} forks</p>
              <p>{repo.stargazers_count} star</p>
              </div>
            </div>
            </a>
            </>
          ))}

          <div className='followers-container'>
            <div className='followers-info'>
            <h1>Followers {userFollowers.length}</h1>
            <div className="followers-profile">
          {userFollowers.map((follower, i)=>(
            <div key={i} className='followers-card'>
              <div className='followers-card-img'>
                <img src={follower.avatar_url} alt={`Profile picture of ${follower.login}`} />
              </div>
              <h2>{follower.login}</h2>
              <button>View {follower.login}</button>
            </div>
          ))}
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

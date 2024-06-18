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

        {/* <>
              <h2 className="headerRepo">{`Repositories ()`}</h2>
          {
                displayedRepos.map((repo) => (
                  <Repositories
                    key={repo.id}
                    linkToRepo={repo.html_url}
                    // repotitle={repo.name}
                    Descriptionrepo={repo.description}
                    forksRepo={repo.forks_count}
                    starsRepo={repo.stargazers_count}
                  />
                ))
          }
            </> */}
        {/* {loading && <h2>Loading repositories, please wait...</h2>} */}
          {/* {error && <h2>{error}</h2>} */}
          {/* {  (
            <>
              <h2 className="headerRepo">{`Repositories ()`}</h2>
              {repositoryCount === 0 ? (
                <h2>Oops...No Repositories yet</h2>
              ) : (
                displayedRepos.map((repo) => (
                  <Repositories
                    key={repo.id}
                    linkToRepo={repo.html_url}
                    // repotitle={repo.name}
                    Descriptionrepo={repo.description}
                    forksRepo={repo.forks_count}
                    starsRepo={repo.stargazers_count}
                  />
                ))
              )}
            </>
          )} */}

        </div>
      </div>
    </section>
  );
};

export default Profile;

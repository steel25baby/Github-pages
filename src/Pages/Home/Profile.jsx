import React from 'react'
import profile from "../../assets/profile.jpeg"
import { MdLocationOn } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { VscRepoForked } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const Info = ({ Name, icon  }) => {
    return (
         
      <div className="Info">
        <div className="Profile-icon-wrapper">{icon} 
        <p>{Name}</p>
        </div>
      </div>
    );
  };

const Profile = ({userdatafetch}) => {
  return (
    <>
    <section className='HeroSection'>
        <div className='HomePage'>
            <div className='ProfileDetails'>
                <div className='ProfilePic'>
                    <img src={profile} alt="" />
                </div>
                <div className='GithubDetails'> 
                  <h2>{userdatafetch.name}</h2>

                    <h4>GitHub</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> dipisicing elit. Architecto, aliquam.</p>
                    <a  href=""><RiExternalLinkFill /> View on GitHub</a>
                </div>
                <div className='GithubInfo'> 
                        <Info icon={<MdLocationOn/>} Name="Location"/>
                        <Info icon={<GiTeacher/>} Name="TEACH2GIVE"/>
                        <Info icon={<RiGitRepositoryFill/>} Name="Repositories"/>
                        <Info icon={<MdGroups/>} Name="Followers"/>
                        <Info icon={<MdGroups/>} Name="Following"/>
                </div>
            </div>
            <div className='Repositories'>
              <div className='RepositoryCard'>
                <h2>Air BnB Close</h2>
                <p>alx backend user data</p>
                <div className='RepositoryCardIcon'>
                  <Info icon={<VscRepoForked/>} Name="0 forks"/>
                  <Info icon={<FaStar/>} Name="0 stars"/>

                </div>
              </div>
            </div>
            
            
        </div>
    </section>
    </>
  )
}

export default Profile
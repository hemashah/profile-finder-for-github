import { Octokit } from 'octokit'
import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../Contexts/ProfileContext'
import RepoCard from '../repos-card/RepoCard'
import './Profile.css'
const Profile = () => {

  const  {profile} = useContext(ProfileContext)
  const [repos, setRepos] = useState(null)

  const searchRepos = async(user) => {
    const octokit = new Octokit({
      auth: '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'
    });

    const response = await octokit.request("GET /users/{owner}/repos", {
      owner: user,
    });
    setRepos(response.data)
}
  useEffect(() => {
    searchRepos(profile.login)
  }, [profile.login])
  
    return (
        <div>
            <div className="card-profile">
                <div className="name-section">
                    <img src={profile.avatar_url} alt="" className='profile-image me-3'/>
                    <div className="names">
                        <h3>{profile.name}</h3>
                        <p className='text-secondary'>@{ profile.login}</p>
                    </div>
                </div>
                <div className="details">
                    <div className="bio pt-4 info" >
                        <p>Bio</p>
                        <p>{profile.bio}</p>
                    </div>
                    <div className="worksat info">
                        <p>Works at</p>
                        <p>{profile.company}</p>
                    </div>
                    <div className="count ">
                        <div className="repos">
                            <p >Repositories</p>
                            <p>{parseInt(profile.public_repos) + parseInt(profile.total_private_repos)}</p>
                        </div>
                        <div className="follows">
                            <p>Followers</p>
                            <p>{profile.followers}</p>
                        </div>
                    </div>
                    <div className="repos info">
                        <p>Pinned Repositories</p>
                        {repos && 
                            repos.map((repo, index) => (<RepoCard key={index}  name={repo.name} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
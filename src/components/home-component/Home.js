import './Home.css';
import { FaGithub } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { Octokit } from 'octokit';
import Usercard from '../usercard-component/Usercard'
import { useNavigate } from 'react-router-dom';

import {ProfileContext} from '../../Contexts/ProfileContext'

function Home() {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const {setProfile, profile} = useContext(ProfileContext)

  const handleSubmit  = (e) => {
    e.preventDefault();
    searchRepos();
  }

  const searchRepos = async() => {
    setLoading(true);

    const octokit = new Octokit({
      auth: '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'
    });

    const response = await octokit.request("GET /users/{owner}", {
      owner: user,
    });
    setLoading(false)
    setProfile(response.data)
    console.log(response.data)
  }

  let navigate = useNavigate();
  const routeChange = () => {
    console.log('clicked')
    let path = `/profile`;
    navigate(path);
  };
  return (
    <div className="App">
      <div className="top">
        <div className="title">
        <FaGithub  style={{height: '45px', width: '45px'}}/>
          <h1>GitHub Profile Viewer</h1>
        </div>
        <div className="input">
          <FiSearch  style={{position: 'absolute', top: 185, marginLeft: 10, color: 'white'}}/>
          <AiOutlineClose  style={{position: 'absolute', top: 185, left: 655, marginLeft: 10, color: 'white', cursor: 'pointer'}} />
          <input 
            value={user}
            type="text" 
            placeholder='Search user'  
            className='search'
            onChange={e => setUser(e.target.value)}
            />
        <button type="submit" onClick={handleSubmit} className="ms-2">{loading ? 'Searching...' : 'Search'}</button>
        </div>
      </div>
      {profile && <div className="bottom ">
        <Usercard name={profile.name} bio={profile.bio} img={profile.avatar_url} className="userCard" onClick={routeChange}/>
      </div>}
    </div>
  );
}

export default Home;

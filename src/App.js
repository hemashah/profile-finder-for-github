import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home-component/Home';
import Profile from './components/profile-component/Profile';
import { ProfileContext } from './Contexts/ProfileContext'
import { useState } from 'react';
function App() {

  const [profile, setProfile] = useState(null)
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;

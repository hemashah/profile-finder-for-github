import React from 'react'
import './Repocard.css'
const RepoCard = ({name}) => {
  return (
    <div className='mt-3 repo-card'>
        <p className='fw-bold'>{name}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quaerat corporis quam voluptatum mollitia beatae atque rem animi harum in.</p>
    </div>
  )
}

export default RepoCard
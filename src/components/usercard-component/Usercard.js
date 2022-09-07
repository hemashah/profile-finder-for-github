import React from 'react'
import './usercard.css'
const userCard = ({ name, bio, img, onClick }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px", cursor:"pointer", }} onClick={onClick}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userCard
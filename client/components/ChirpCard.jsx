import React from 'react'

const ChirpCard = ({ username, content, created, location, handleEditChirp, handleDeleteChirp }) => {
    return (
        <div>
            <h2>{username}</h2>
            <p>{content}</p>
            <small>{created}</small>
            <small>{location}</small>
            <button className="btn btn-danger" onClick={() => handleEditChirp(id)}>Edit Chirp</button>
            <button className="btn btn-danger" onClick={() => handleDeleteChirp(id)}>Delete Chirp</button>
        </div>
    )
};

export default ChirpCard;
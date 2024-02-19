import React from 'react'
import { Button, Image } from 'react-bootstrap'

const UserProfile = ({ username, profilePhoto }) => {
    return (
        <div className="d-flex align-items-center">
            <Image
                src={profilePhoto}
                roundedCircle
                className="me-2"
                width={40}
                height={40}
            />
            <span>{username}</span>
        </div>
    )
}

export default UserProfile

import React from 'react'

const Member = (props) => {
    return (
        <div className="member list-item">
            <p className="member-name">{props.name}</p>
        </div>
    )
}

export default Member

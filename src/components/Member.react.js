import React from 'react'

const Member = (props) => {
    return (
        <div className="member list-item">
            <p className="member-name">Name: {props.name}</p>
            <ul className="list-inside">
                <li className="list-item">Email: {props.email}</li>
            </ul>
        </div>
    )
}

export default Member

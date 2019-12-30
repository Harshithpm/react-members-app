/* eslint-disable no-unused-expressions */
import React from 'react'
import Member from './Member.react'

class MembersList extends React.Component {
    render() {
        return (
            <div className="members-list container">
                {this.props.members.length === 0 ? (
                    <p className="content">No Members Yet!</p>
                ) : (
                    <ul className="list">
                    {this.props.members.map(function(m, index) {
                        return <Member key={index} name={m.name} email={m.email} />
                    })}
                </ul>
                )}
            </div>
        )
    }
}

export default MembersList

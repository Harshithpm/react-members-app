/* eslint-disable no-unused-expressions */
import React from 'react'
import Member from './Member.react'

class MembersList extends React.Component {
    render() {
        return (
            <div className="members-list">
                {this.props.members.length === 0 ? (
                    <p className="content">No Members Yet!</p>
                ) : (
                    <ul className="list">
                    {this.props.members.map(function(name, index) {
                        return <Member key={index} name={name} />
                    })}
                </ul>
                )}
            </div>
        )
    }
}

MembersList.defaultProps = {
    members: ['1', '2', '3']
}

export default MembersList

import React from 'react'

class AddMember extends React.Component {

    constructor(props) {
        super(props)
        this.setMembers = this.setMembers.bind(this)
    }

    setMembers(e) {
        let {_name} = this.refs
        e.preventDefault()
        this.props.AddMember(_name.value)
        _name.value = ''
    }

    render() {
        return (
            <div className="add-member">
                <form className="form section">
                    <input className="input is-primary" type="text" placeholder="Name..." ref="_name" /> <br />
                    <button className="button is-primary" onClick={this.setMembers}>Add Member</button>
                </form>
            </div>
        )
    }
}

export default AddMember


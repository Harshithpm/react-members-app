import React from 'react'

class AddMember extends React.Component {

    constructor(props) {
        super(props)
        this.setMembers = this.setMembers.bind(this)
    }

    setMembers(e) {
        let {_name, _email} = this.refs
        e.preventDefault()
        if (_email.value === '') {
            alert('email is required!')
            return
        }
        this.props.AddMember(_name.value, _email.value)
        _name.value = ''
        _email.value = ''
    }

    render() {
        return (
            <div className="add-member">
                <form className="form section" data-netlify="true">
                    <input className="input is-primary" type="text" placeholder="Name..." ref="_name" /> <br />
                    <input className="input is-primary" type="email" placeholder="Email..." ref="_email"/> <br />
                    <button className="button is-primary" onClick={this.setMembers}>Add Member</button>
                </form>
            </div>
        )
    }
}

export default AddMember


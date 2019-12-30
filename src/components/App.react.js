import React from 'react';
import '../stylesheets/App.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import v4 from 'uuid'
import AddMember from './AddMember.react';
import MembersList from './MembersList.react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.setMembers = this.setMembers.bind(this)
  }

  state = {
    members: []
  }

  setMembers(name, email) {
    if (name === '') {
      alert('name is empty!')
      return
    }
    if (email === '') {
      alert('email is empty!')
      return
    }
    const members = [
      ...this.state.members,
      {
        id: v4(),
        name,
        email
      }
    ]
    this.setState({ members })
  }

  render() {
    const members = this.state.members;

    return (
      <div className="App">
        <div className="hero section is-primary">
          <h1 className="title">Members</h1>
        </div>
        <div>
          <AddMember AddMember={this.setMembers}/>
          <div className="container"> 
            <MembersList members={members} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

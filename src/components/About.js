import React, { Component } from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends Component {
  constructor (props) {
    super(props);
    console.log("Parent constructor")
  }

  render () {
    console.log("Parent render")
   return ( 
   <div>
      <h1>About</h1>
      <h2>This is namaste react</h2>
      <User />
      <UserClass 
        name={'Rishabh kirodiwal'}
        location={'Rajasthan'}
        email={'r.rishabhkirodiwal@gmail.com'}
      />
    </div>
   )
  }
}

export default About;
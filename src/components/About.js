import React, { Component } from 'react'
import User from './User';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor (props) {
    super(props);
    console.log("Parent constructor")
  }

  render () {
    console.log("Parent render")
   return ( 
   <div>
    {/* <UserContext.Consumer>
      {({loggedInUser}) => <h1>{loggedInUser}</h1>}
    </UserContext.Consumer> */}
      <User />
      {/* <UserClass 
        name={'Rishabh kirodiwal'}
        location={'Rajasthan'}
        email={'r.rishabhkirodiwal@gmail.com'}
      /> */}
    </div>
   )
  }
}

export default About;
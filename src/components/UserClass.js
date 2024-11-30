import React from "react"

class UserClass extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            count: 0
        };
        console.log("Child constructor");
    }

    render () {
        console.log("Child render");
        const {name, location, email} = this.props
        const {count} = this.state
        return  (
            <div className='p-10 border-black'>
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count+1
                    })
                }}>
                    Increase counter
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {email}</h4>
            </div>
        )
    }
}

export default UserClass
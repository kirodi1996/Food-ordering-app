import React from "react"

class UserClass extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            userInfo: {
                name: '',
                location: '',
                avatar_url: ''
            }
        };
    }

    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/kirodi1996");
        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count !== prevState.count) {
            
        }
    }

    componentWillUnmount() {

    }

    render () {
        console.log("Child render");
        const {email} = this.props
        const {name, location, avatar_url} = this.state.userInfo
        return  (
            <div className='p-10 border-black'>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {email}</h4>
                <img src={avatar_url} />
            </div>
        )
    }
}

export default UserClass
import React, { Component } from 'react'
import './Auth.css'
import { withRouter } from 'react-router'
import axios from 'axios'
import houselogo from "../Images/mainauth_logo.png"

class Auth extends Component {
    constructor(props){
        super(props)

        this.state={
            userName: "",
            passWord: ""
        }
    
        this.handleuserName=this.handleuserName.bind(this)
        this.handlepassWord=this.handlepassWord.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
        this.handleRegister=this.handleRegister.bind(this)
    }

    handleLogin(){
        axios.post('/api/userlogin', this.state).then(() => {
            this.props.history.push(`/Dashboard/`)
        })
        .catch(()=> {
            alert('Dont think so Tim. Try REGISTERING to access these goodies.')
        })
    }

    handleuserName(e){
        console.log(this.state.userName)
        this.setState(
            {userName: e.target.value}
        )
    }

    handlepassWord(e){
        console.log(this.state.passWord)
        this.setState(
            {passWord: e.target.value}
        )
    }
    handleRegister(){
        axios.post('/api/userregister', this.state).then(() => {
            this.props.history.push(`/Dashboard/`)
        })
    }

    render() {
        return (
            <section>
                <div className="whitespace">
                    <div className="infobox">
                        <div className="infoinside">
                        <div>
                        <img src={houselogo} width="200" height="200"/>
                        </div>
                            <br/>
                            <h1>Username</h1>
                            <input type="text" onChange={this.handleuserName}/>
                            <br/>
                            <h1>Password</h1>
                            <input type="text" onChange={this.handlepassWord} />
                        </div>
                        <div className="loginRegHouse">
                            <div></div>
                            <div></div>
                            <button className="but1" onClick={this.handleLogin}>Login</button>
                            <button className="but1 one" onClick={this.handleRegister}>Register</button>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default withRouter(Auth)
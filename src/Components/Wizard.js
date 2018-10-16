import React, { Component } from 'react'
import HouseLogo from "../Images/headerlogo.png"
import { Link } from 'react-router-dom'
import './Wizard.css'
import Active from '../Images/step_active.png'
import Complete from '../Images/step_completed.png'
import Inactive from '../Images/step_inactive.png'
import { connect } from 'react-redux'
import store from '../ducks/store'



class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newName: '',
            newDescription: ''
        }
        this.changeDescription = this.changeDescription.bind(this)
        this.changeName = this.changeName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    changeDescription(e) {
        // console.log(this.state.newDescription)
        // this.setState({
        //     newDescription: e.target.value
        // })
        this.props.addDescription(e.target.value)
    }
    changeName(e) {
        // console.log(this.state.newName)
        // this.setState(
        //     { newName: e.target.value }
        // )
        this.props.addName(e.target.value)

    }
    handleSubmit() {
        // this.props.dispatch(
        //     {
        //         type: 'homes/ADD_NAME',
        //         payload: this.state.newName
        //     },
        //     {
        //         type: 'homes/ADD_DESCRIPTION',
        //         payload: this.state.newDescription
        //     }
        // )
    }

    render() {
        console.log('render', this.props)
        return (
            <div className="mainbody">
                <header className="header">
                    <div></div>
                    <div className="houserdashboard" >
                        <logos>
                            <Link to='/'>
                                <img src={HouseLogo} width="30" height="30" />
                            </Link>
                        </logos>
                        <texts>
                            <p className="housertext">Houser</p>
                            <p className="dashboardtext">Dashboard</p>
                        </texts>
                    </div>
                    <Link to="/">
                        <button className="logout">Logout</button>
                    </Link>
                    <div></div>
                </header>
                <div className="lowermainbody2">
                    <div className="whitespace2">
                        <div className="newlistings">
                            <div>
                                <p>Add new listing</p>
                            </div>
                            <div className="buttonbox">
                                <Link to='/dashboard/'>
                                    <button>Cancel</button>
                                </Link>
                            </div>
                        </div>
                        <div className="step1">Step 1</div>
                        <div className="circles">
                            <div><img src={Active} /></div>
                            <div><img src={Inactive} /></div>
                            <div><img src={Inactive} /></div>
                            <div><img src={Inactive} /></div>
                            <div><img src={Inactive} /></div>
                        </div>
                        <br />
                        <div className="propname">Property Name</div>
                        <div className="propnameinput">
                            <input type="text" value={this.props.name} onChange={this.changeName} />
                        </div>
                        <br />
                        <div className="propname">Property Description</div>
                        <div className="propnameinput2">
                            <textarea type="text" value={this.props.description} onChange={this.changeDescription} />
                        </div>
                        <br />
                        <div>
                            <Link to='/wizard/2'>
                                <button className="nextstepbut" onClick={this.handleSubmit}>Next Step</button>
                            </Link>
                        </div>
                        <div></div>

                        
                            <div className="lowerinput0" title="houses">{this.props.name}</div>

                            <div className="About" title="About" >{this.props.description}</div>
                        
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state =>({ // state is what is in the store
    // state coming in
    house: state.houses,   
    name: state.houses.name,
    description: state.houses.description
})

const mapDispatchToProps = dispatch => ({
    // values going out to state
    addName: value => dispatch({type: "ADD_NAME", value: value}),
    addDescription: value => dispatch({type: "ADD_DESCRIPTION", value: value})
})

export default connect(mapStateToProps,mapDispatchToProps)(Wizard)
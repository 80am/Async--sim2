import React, { Component } from 'react'
import HouseLogo from "../Images/headerlogo.png"
import { Link } from 'react-router-dom'
import './Wizard2.css'
import Active from '../Images/step_active.png'
import Complete from '../Images/step_completed.png'
import Inactive from '../Images/step_inactive.png'
import { connect } from 'react-redux'

class Wizard2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newName: '',
            newDescription: ''
        }
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.handleStates = this.handleStates.bind(this)

    }

    handleAddress(e) {
        console.log(e.target.value)
        // this.setState({
        //     newAddress: e.target.value
        // })
        this.props.addAddress(e.target.value)
    }

    handleCity(e) {
        // console.log(this.state.newName)
        // this.setState(
        //     { newCity: e.target.value }
        // )
        this.props.addCity(e.target.value)
    }
    handleZip(e) {
        // console.log(this.state.newName)
        // this.setState(
        //     { newZip: e.target.value }
        // )
        this.props.addZip(e.target.value)
    }
    handleStates(e) {
        // console.log(this.state.newName)
        // this.setState(
        //     { newStates: e.target.value }
        // )
        this.props.addState(e.target.value)
    }

    render() {
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
                            <div className="buttonbox2">
                            <Link to='/dashboard/'>
                                <button>Cancel</button>
                            </Link>
                            </div>
                        </div>
                        <div className="step2">Step 2</div>
                        <div className="circles">
                            <div><img src={Complete} /></div>
                            <div><img src={Active} /></div>
                            <div><img src={Inactive} /></div>
                            <div><img src={Inactive} /></div>
                            <div><img src={Inactive} /></div>
                        </div>
                        <br />
                        <div className="belowthecircles2">
                            <dir className="addresstext">
                                <div>Address</div>
                                <div>
                                    <input type="text"  value={this.props.address} onChange={this.handleAddress}></input>
                                </div>
                            </dir>
                            <div className="cityzipstate">
                                <div>City</div>
                                <div>
                                    <input type="text"  value={this.props.city} onChange={this.handleCity}></input>
                                </div>
                                <div>Zip</div>
                                <div>
                                    <input type="text"  value={this.props.zip} onChange={this.handleZip}></input>
                                </div>
                                <div>State</div>
                                <div>
                                    <input type="text"  value={this.props.state} onChange={this.handleStates}></input>
                                </div>
                            </div>
                            <br />
                            <div className="buttons">
                            <Link to='/wizard/1'>
                                <button>Previous Step</button>
                            </Link>
                            <Link to='/wizard/3'>    
                                <button>Next Step</button>
                            </Link>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

// function mapStateToProps(state) {
//     return{
//       address: state.address,
//       city: state.city,
//       zip: state.zip,
//       states: state.states
//     }
//   }


const mapStateToProps = state =>({ // state is what is in the store
    // state coming in
    house: state.houses,   
    address: state.houses.address,
    city: state.houses.city,
    state: state.houses.state,
    zip: state.houses.zip
})

const mapDispatchToProps = dispatch => ({
    // values going out to state
    addAddress: value => dispatch({type: "ADD_ADDRESS", value: value}),
    addCity: value => dispatch({type: "ADD_CITY", value: value}),
    addState: value => dispatch({type: "ADD_STATE", value: value}),
    addZip: value => dispatch({type: "ADD_ZIP", value: value})
})

export default connect(mapStateToProps, mapDispatchToProps)(Wizard2)
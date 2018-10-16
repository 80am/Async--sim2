import React, { Component } from 'react'
import HouseLogo from "../Images/headerlogo.png"
import { Link } from 'react-router-dom'
import './Wizard5.css'
import Active from '../Images/step_active.png'
import Complete from '../Images/step_completed.png'
import Inactive from '../Images/step_inactive.png'
import { connect } from 'react-redux'
import axios from 'axios'


class Wizard5 extends Component {

    constructor(props) {
        super(props)

        this.handleRent = this.handleRent.bind(this)
        this.recRent = this.recRent.bind(this)
        this.handleComplete = this.handleComplete.bind(this)

    }

    componentDidMount(){
        this.props.addrecRent((this.props.mortgage * (1.25)))
        
    }

    handleRent(e){
        console.log(this.props.dRent)
        this.props.adddRent(e.target.value)
        this.props.adddRents(e.target.value)

    }

    recRent(e){
        this.props.addrecRent(e.target.value)

    }

    handleComplete(){
        // console.log(this.props.house)
        axios.post('/api/complete', this.props.house).then(() => {
            this.props.history.push('/Dashboard/').then(()=> {(this.componentDidMount())
                // .then(()=> {this.props.resetState('')})
            })
        })
    }
            
    
    


    render() {
        var yourRent= ((this.props.mortgage * (1.25)))
        // this.props.addrecRent(yourRent)
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
                <div className="lowermainbody5">
                    <div className="whitespace5">
                        <div className="newlistings">
                            <div>
                                <p>Add new listing</p>
                            </div>
                            <div className="buttonbox5">
                                <Link to='/dashboard/'>
                                    <button>Cancel</button>
                                </Link>
                            </div>
                        </div>
                        <div className="step5">Step 5</div>
                        <div className="circles">
                            <div><img src={Complete} /></div>
                            <div><img src={Complete} /></div>
                            <div><img src={Complete} /></div>
                            <div><img src={Complete} /></div>
                            <div><img src={Active} /></div>
                        </div>
                        <br />
                        <br />
                        <div className="lowerthanbuttons">
                            <div className="recommendedrent">
                            <div className="recommendbox">
                            <p>Recommended Rent: $</p>
                                <input disabled={true} className="recommendedRent" onChange={this.recRent} onInput={this.recRent} value={yourRent}/>
                            </div>
                            </div>
                            <br/>
                                <div className="desiredrent">Desired Rent</div>
                            <div>
                                <div className="lowerinput">
                                    <input placeholder="$ 0.00" type="text"  value={this.props.dRent} onChange={this.handleRent}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="buttonss">
                            <Link to='/wizard/4'>
                                <button className="previousstep">Previous Step</button>
                            </Link>
                            <Link to='/dashboard'>
                                <button className="completebutton" onClick={this.handleComplete}>Complete</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}

function mapStateToProps(state) {
    return{
    house: state.houses,
    dRent: state.houses.dRent,
    recRent: state.houses.recRent,
    mortgage: state.houses.mortgage
     }
  }
  const mapDispatchToProps = dispatch => ({
    // values going out to state
    addLoan: value => dispatch({type: "ADD_LOAN", value: value}),
    adddRent: value => dispatch({type: "ADD_DRENT", value: value}),
    adddRents: value => dispatch({type: "ADD_DRENTS", value: value}),
    addrecRent: value => dispatch({type: "ADD_RECRENT", value: value}),
    resetState: value => dispatch({type: "RESET_STATE", value: value})
})

export default connect(mapStateToProps, mapDispatchToProps)(Wizard5)
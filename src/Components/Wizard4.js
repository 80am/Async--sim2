import React, { Component } from 'react'
import HouseLogo from "../Images/headerlogo.png"
import { Link } from 'react-router-dom'
import './Wizard4.css'
import Active from '../Images/step_active.png'
import Complete from '../Images/step_completed.png'
import Inactive from '../Images/step_inactive.png'
import { connect } from 'react-redux'

class Wizard4 extends Component {

    constructor(props) {
        super(props)

        this.handleLoan = this.handleLoan.bind(this)
        this.handleMortgage = this.handleMortgage.bind(this)

    }

    handleMortgage(e){
        this.props.addMortgage(e.target.value)
    }
    handleLoan(e){
        console.log(this.props.loan)
        this.props.addLoan(e.target.value)
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
                <div className="lowermainbody4">
                    <div className="whitespace4">
                        <div className="newlistings">
                            <div>
                                <p>Add new listing</p>
                            </div>
                            <div className="buttonbox4">
                            <Link to='/dashboard/'>
                                <button>Cancel</button>
                            </Link>
                            </div>
                        </div>
                        <div className="step4">Step 4</div>
                        <div className="circles">
                            <div><img src={Complete} /></div>
                            <div><img src={Complete} /></div>
                            <div><img src={Complete} /></div>
                            <div><img src={Active} /></div>
                            <div><img src={Inactive} /></div>
                        </div>
                        <br/>
                        <br />
                        <div className="loanmonthyamounts">
                                <div>Loan Amount</div>
                            <div>
                                <input placeholder="$ 0.00"type="text"  value={this.props.loan} onChange={this.handleLoan}/>
                            </div>
                            <br/>
                                <div>Monthly Mortgage</div>
                            <div>
                                <input placeholder="$ 0.00"type="text"  value={this.props.mortgage} onChange={this.handleMortgage}/>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link to='/wizard/3'>
                                <button>Previous Step</button>
                            </Link>
                            <Link to='/wizard/5'>    
                                <button>Next Step</button>
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
      loan: state.houses.loan,
      mortgage: state.houses.mortgage
    }
  }

  const mapDispatchToProps = dispatch => ({
    // values going out to state
    addLoan: value => dispatch({type: "ADD_LOAN", value: value}),
    addMortgage: value => dispatch({type: "ADD_MORTGAGE", value: value}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wizard4)

//for each component that sends to state needs, mapDispatchToProps,
//for each component that recieves state needs, mapStateToProps.
//each of my components need both so this is how you put both on one componenet.
//redux state is being passed in through props so you can call things off of props.
//example: this.props.loan that is beceause the "loan" is whats coming back from redux
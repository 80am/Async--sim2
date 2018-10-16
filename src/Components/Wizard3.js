import React, { Component } from 'react'
import HouseLogo from "../Images/headerlogo.png"
import { Link } from 'react-router-dom'
import './Wizard3.css'
import Active from '../Images/step_active.png'
import Complete from '../Images/step_completed.png'
import Inactive from '../Images/step_inactive.png'
import { connect } from 'react-redux'

class Wizard3 extends Component {

    constructor(props){
        super(props)

        this.handleImage=this.handleImage.bind(this)
    }

    handleImage(e){
        this.props.addImage(e.target.value)

    }

    render() {
        console.log(this.props)
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
                <div className="lowermainbody3">
                    <div className="whitespace3">
                        <div className="newlistings">
                            <div>
                                <p>Add new listing</p>
                            </div>
                            <div className="buttonbox3">
                            <Link to='/dashboard/'>
                                <button>Cancel</button>
                            </Link>
                            </div>
                        </div>
                        <div className="step3">Step 3</div>
                        <div className="circles">
                            <div><img src={Complete} /></div>
                            <div><img src={Complete} /></div>
                            <div><img src={Active} /></div>
                            <div><img src={Inactive} /></div>
                            <div><img src={Inactive} /></div>
                        </div>
                        <br />
                        <div className="belowthecircles3">
                            <div className='imagepreview'>
                                <div contentEditable={true}></div>
                                <img src={this.props.image} height='100%' width='100%'/>
                            </div>
                            <br/>
                            <div className="imageplace">
                            <div>Image URL</div>
                                <input type="text"  value={this.props.image} onChange={this.handleImage}/>
                            </div>
                            <br/> 
                        <div className="buttons">
                            <Link to='/wizard/2'>
                                <button>Previous Step</button>
                            </Link>
                            <Link to='/wizard/4'>    
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
//       image: state.image
//     }
//   }


const mapStateToProps = state =>({ // state is what is in the store
    // state coming in
    house: state.houses,   
    image: state.houses.image,
    
    
})

const mapDispatchToProps = dispatch => ({
    // values going out to state
    addImage: value => dispatch({type: "ADD_IMAGE", value: value})
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Wizard3)
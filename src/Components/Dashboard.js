import React, { Component } from 'react'
import './Dashboard.css'
import { withRouter } from 'react-router'
import HouseLogo from "../Images/headerlogo.png"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Delete from '../Images/deleteicon.png'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: "",
            userListings: [],
        }
        this.handleSaveReset = this.handleSaveReset.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)


    }
    componentDidMount() {
        axios.get(`/api/getuserdata`)
            .then(res => this.setState({
                userListings: res.data
                // productName: res.data[0].name, loan: res.data[0].loan, monthly_mortgage: res.data[0].monthly_mortgage, recommended_rent: res.data[0].recommended_rent, desired_rent: res.data[0].desired_rent, address: res.data[0].address, city: res.data[0].city, state: res.data[0].state, zip: res.data[0].zip, image: res.data[0].image
            }))
    }

    handleSaveReset(e) {
        console.log(this.state.filter)
        this.setState({
            filter: e.target.value
        })
    }

    handleReset() {
        this.setState({
            filter: 0
        })
        axios.post(`/api/filterstuff`, this.state).then(res => this.setState({ userListings: res.data }))

    }

    handleFilter() {
        axios.post(`/api/filterstuff`, this.state).then(res => this.setState({ userListings: res.data }))
    }

    handleDelete(id){
        axios.delete(`/api/dashboard/${id}`).then(res => this.componentDidMount())
    }

    render() {
        let houseInfo = this.state.userListings.map(house => {
            if (house.name == null) {

                return (
                    "There are no saved houses for you"
                )
            } else {
                return (
                    <React.Fragment key={house.id}>
                        <div className="biginfobox">
                            <div className="infoboxleft">{<img src={house.image} width='100%' height="100%" />}</div>
                            <div className="infoboxcenter">

                                <p><h1>{house.name}</h1></p>
                                <p>{house.description}</p>

                            </div>
                            <div className="infoboxright">
                                <p>Loan:   {house.loan}</p>
                                <p>Monthly Mortgage:</p>{house.monthly_mortgage}
                                <p>Recommended Rent:</p>{house.recommended_rent}
                                <p>Desired Rent:</p>{house.desired_rent}
                                <p>Address:</p>{house.address}
                                <p>City:</p>{house.city}
                                <p>State:</p>{house.state}
                                <p>Zip:</p>{house.zip}
                            </div>
                            <Link to='/Dashboard'>
                            <img onClick={()=>this.handleDelete(house.id)} src={Delete} width="15" height="15" />
                            </Link>
                        </div>
                        <br />
                    </React.Fragment>
                )
            }
        })
        // var {name, loan, monthly_mortgage, recommended_rent, desired_rent, address, city, state, zip, image}
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
                <div className="lowermainbody">
                    <div className="whitespace1">
                        <div className="addnewpropbutbox">
                            <Link to='/wizard/1'>
                                <button className="addnewbut">Add new proptery</button>
                            </Link>
                        </div>
                        <div className="inputbox">
                            <p>List properties with "desired rent" greator than: $</p>
                            <input type='text' onChange={this.handleSaveReset} placeholder="0" value={this.state.filter} />
                            <button className="button1" onClick={this.handleFilter}>Filter</button>
                            <button className="button2" onClick={this.handleReset}>Reset</button>
                        </div>
                        <div className="listingsbox">
                            <div className="text">Home Listings</div>
                        </div>

                        <div className="infomationbox">

                            {houseInfo}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Dashboard)

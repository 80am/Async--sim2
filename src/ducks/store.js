import { createStore } from 'redux'


const initialState = {
    houses:{
        name:'',
        loan:'',
        mortgage:'',
        recRent:'',
        dRent: '',
        address:'',
        city:'',
        state:'',
        zip:'',
        description:'',
        image:'',
        dRents:''
    }
}


const reducer= (state = initialState, action) => {
    switch(action.type){
       //-----repeat below for each piece of state you are sending to redux
        case 'ADD_NAME':
            var addName = action.value
            var newState = {...state, 
                            houses: { 
                                ...state.houses, name: addName
                                }
                            }    

            return newState
        //-----repeat above for each piece of state you are sending to redux
        case "ADD_DESCRIPTION":
            var addDescription = action.value
            var newState = Object.assign({}, state, {
               houses: Object.assign({}, state.houses, {description: addDescription})
            })
            console.log('newState: ', newState)
            return newState
                
            
        case "ADD_ADDRESS":
        console.log(action.value)
        var addAddress = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, address: addAddress
                            }
                        }    

        return newState

        case "ADD_CITY":
        var addCity = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, city: addCity
                            }
                        }    

        return newState

        case "ADD_STATE":
        var addState = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, state: addState
                            }
                        }    

        return newState

        case "ADD_ZIP":
        var addZip = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, zip: addZip
                            }
                        }    

        return newState
        
        case "ADD_IMAGE":
        var addImage = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, image: addImage
                            }
                        }    

        return newState

        case "ADD_LOAN":
        var addLoan = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, loan: addLoan
                            }
                        }    

        return newState

        case "ADD_MORTGAGE":
        var addMortgage = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, mortgage: addMortgage
                            }
                        }    

        return newState

        case "ADD_RECRENT":
        var addrecRent = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, recRent: addrecRent
                            }
                        }    

        return newState

        case "ADD_DRENT":
        var adddRent = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, dRent: adddRent
                            }
                        }    

        return newState

        case "ADD_DRENTS":
        var adddRents = action.value
        var newState = {...state, 
                        houses: { 
                            ...state.houses, dRents: adddRents
                            }
                        }    

        return newState


        
        case "RESET_STATE":
            return {
                houses:{
                    name:'',
                    loan:'',
                    mortgage:'',
                    recRent:'',
                    dRent:'',
                    address:'',
                    city:'',
                    state:'',
                    zip:'',
                    description:'',
                    image:'',
                    desiredRent:''
                }
            }

        default:
            return state
    }
}

export default createStore(reducer, initialState)
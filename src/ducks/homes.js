const ADD_NAME = 'homes/ADD_NAME'
const ADD_LOAN = 'homes/ADD_LOAN'
const ADD_MORTGAGE = 'homes/ADD_MORTGAGE'
const ADD_RECRENT = 'homes/ADD_RECRENT'
const ADD_DRENT = 'homes/ADD_DRENT'
const ADD_ADDRESS = 'homes/ADD_ADDRESS'
const ADD_CITY = 'homes/ADD_CITY'
const ADD_STATES = 'homes/ADD_STATE'
const ADD_ZIP = 'homes/ADD_ZIP'
const ADD_DESCRIPTION = 'homes/ADD_DESCRIPTION'
const ADD_IMAGE = 'homes/ADD_IMAGE'

export default function reducer(state, action){
    switch(action.type) {
        case ADD_NAME:
        var newName = action.payload
        var newHousesName = [newName]

        return{
            name: newHousesName
        }
        case ADD_LOAN:
        var newLOAN = action.payload
        var newHouses = [ newLOAN ]

        return{
            loan: newHouses
        }
        case ADD_MORTGAGE:
        var newMortgage = action.payload
        var newHouses = [ newMortgage ]

        return{
            mortgage: newHouses
        }
        case ADD_RECRENT:
        var newRecRent = action.payload
        var newHouses = [ newRecRent ]

        return{
            recRent: newHouses
        }
        case ADD_DRENT:
        var newDRent = action.payload
        var newHouses = [newDRent]

        return{
            dRent: newHouses
        }
        case ADD_ADDRESS:
        var newAddress = action.payload
        var newHouses = [newAddress]

        return{
            address: newHouses
        }
        case ADD_CITY:
        var newCity = action.payload
        var newHouses = [newCity]

        return{
            city: newHouses
        }
        case ADD_STATES:
        var newStates = action.payload
        var newHouses = [newStates]

        return{
            states: newHouses
        }
        case ADD_ZIP:
        var newZip = action.payload
        var newHouses = [newZip]

        return{
            zip: newHouses
        }
        case ADD_DESCRIPTION:
        var newDescription = action.payload
        var newHouses = [newDescription]

        return{
            description: newHouses
        }
        case ADD_IMAGE:
        var newImage = action.payload
        var newHouses = [newImage]

        return{
            image: newHouses
        }
        

        default:
            return state
    }
}

// export function addName(newName){
//     return{
//         type: ADD_NAME,
//         payload: newName
//     }
// }
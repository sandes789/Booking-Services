import {
    ECOM_API,
} from '../actions/type'

const initialState = {
    MenuItems : ["Home", "About Us", "News", "Contact Us"],
}

export default function ( state = initialState, action ){
    switch(action.type){
        case ECOM_API:
            return{
                ...state,
                
            }
        default:
            return state
    }
}
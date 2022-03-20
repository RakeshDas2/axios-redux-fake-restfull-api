import { FETCH_DATA, SELECT_DATA } from "../constants/constants"

const initialState={
    products:[],
   
}

const fetchDataReducer=(state=initialState,action)=>{

    switch(action.type){
        case FETCH_DATA: 
        return{
            ...state,
            products:action.payload
        }
        default : return state;
    }

}

export default fetchDataReducer;
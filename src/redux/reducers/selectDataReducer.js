import { SELECT_DATA } from "../constants/constants";

const initialState={
    product:{}
}
const selectDataReducer=(state=initialState,action)=>{
    switch(action.type){
        case SELECT_DATA:
            return{
                ...state,
                product:action.payload
            }
        default : return state;
    }
}

export default selectDataReducer;
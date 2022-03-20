import fakeStoreInstance from "../../axiosConfig/fakeStoreApi"
import { FETCH_DATA, SELECT_DATA } from "../constants/constants"

export const fetchingData = () => {

    return async (dispatch, getState) => {
        const response = await fakeStoreInstance.get('/products')
        console.log(response);
        dispatch({ type: FETCH_DATA, payload: response.data })
    }
}

export const productDetails=(payload)=>{
    return{
        type:SELECT_DATA,
        payload
    }
}

export const deleteData=(id)=>{
    return async(dispatch)=>{
        const response=await fakeStoreInstance.delete(`/products/${id}`)
        console.log(response)
       
    }
}



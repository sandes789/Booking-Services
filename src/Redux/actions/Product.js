import {
    ECOM_API,
} from './type'
import axios from 'axios'

export const getAPI = (search) => async dispatch => {
    console.log(search)

    const YOUR_APP_ID = `5f9073af`
    const YOUR_APP_KEY = `1d438a7cc244c65afcaab5280458f788`
    const url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

    const res = await axios.get(url)
    console.log(url)
    console.log(res.data)

    dispatch({
        type: ECOM_API,
        payload: res.data.hits
    })
}
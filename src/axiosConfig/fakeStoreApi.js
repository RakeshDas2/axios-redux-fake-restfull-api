import axios from "axios";

const fakeStoreInstance=axios.create({
    baseURL:'https://fakestoreapi.com'
})

export default fakeStoreInstance;
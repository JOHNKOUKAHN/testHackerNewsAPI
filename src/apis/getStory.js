import axios from 'axios'

const storyApi = axios.create({
    baseURL:  "http://www.paulgraham.com/mit.html" 
})



export default story
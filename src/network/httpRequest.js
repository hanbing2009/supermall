import axios from 'axios'
const http = axios.create({
  baseURL: "http://152.136.185.210:7878/api/m5",
  timeout: 5000
})

export default http

import axios from 'axios'

const axiosMicasa = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
})

export default axiosMicasa

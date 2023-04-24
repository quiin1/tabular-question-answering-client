import axios from 'axios'

export const predict = async (request) => {
  try {
    const response = await axios.post('http://localhost:8000/predict', request)
    // console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
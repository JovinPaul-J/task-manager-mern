import axios from 'axios'

const API_URL = "/api/users/"

const registerUser = async(userData) => {
  const response = await axios.post(API_URL+"signup", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const signinUser = async(userData) => {
  const response = await axios.post(API_URL+"signin", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const userHelper = {
  registerUser,
  signinUser,
}

export default userHelper
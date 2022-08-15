import axios from 'axios'

// const { api_url } = process.env
const api_url = "http://localhost:8080/"

export const register = newUser => {
  return axios
    .post(api_url + 'users/register', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword
    })
    .then(response => {
      return response
    })
}

export const login = user => {
  return axios
    .post(api_url + 'users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = token => {
  return axios
    .get('users/profile', {
      headers: { Authorization: token }
    })
    .then(response => {
      response.data.status = 'success';
      return response.data
    })
    .catch(err => {
      console.dir(err)
      return {'error':err.message,'status':'failed'};
    })
}



export const updatePassword = updatePasswordRequest => {
  return axios
    .put(
      `/users/password/`,
      {
        email:updatePasswordRequest.email,
        password: updatePasswordRequest.password,
        new_password: updatePasswordRequest.new_password
      },
      {
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': updatePasswordRequest.token 
        }
      }
    )
    .then(function(response) {
        return response.data;
    }).catch(err=>{
      console.dir("err",err);
      return err.message;
    })
}
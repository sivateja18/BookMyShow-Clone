import axios from 'axios'

export const axiosInstance  = axios.create({
    headers:{
        credentials: 'include',
        // method: 'post',
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    console.log('Interceptor Token:', token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// on login based on the particular user, we have to display particular user details
// here we encrypted the userid of the user in jwt(in userRoutes.js file in server unser login route), so while sending back the
// jwt token to the server, we would decrypt the token on which we find the userid, by which we know the which specific user calls
// accessing the client
// 1) how to send my jwt token from client to server
// ans) using Authorization header in which we attach token and send it back to the server, but here we have to send that in every request
// so that we know which user requests, so we declare it in axiosInstance as its common for all the requests.
// the syntax is : Authorization: `<type> <token>`
// there are other ways to authorize the requests, here we are using jwt, so to tell that we are using jwt token, we have to specify 
// jwt type. In case of jwt the type is called 'Bearer'
const {axiosInstance} = require('.')

// Register new users
export const RegisterUser = async (payload) => {
    try {
        const response = await axiosInstance.post('api/users/register', payload)
        return response.data
    } catch (error) {
        return error
    }
}

// Log users in
export const LoginUser = async (payload) => {
    try {
        console.log(payload);
        const response = await axiosInstance.post('api/users/login', payload)
        console.log(response.data);
        return response.data
    } catch (error) {
        return error
    }
}

// Get current user details on login
export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get('/api/users/currentUser')
        console.log(response.data);
        return response.data
    } catch (error) {
        return error
    }
}
const {axiosInstance} = require('.')

// Get all movies
export const GetAllMovies = async () => {
    try {
        const response = await axiosInstance.get('api/movies/getAllMovies')
        return response.data
    } catch (error) {
        return error
    }
}

export const GetMovieById = async (movieId) => {
    try {
        console.log(movieId)
        const response = await axiosInstance.get(`/api/movies/getMovieById/${movieId}`)
        return response.data
    } catch (error) {
        return error
    }    
}

// Add movie
export const AddMovie = async (payload) => {
    try {
        const response = await axiosInstance.post('api/movies/add', payload)
        return response.data
    } catch (error) {
        return error
    }
}

// // Delete movie using post http verb
// export const DeleteMovie = async (payload) => {
//     try {
//         const response = await axiosInstance.post('api/movies/delete', payload)
//         return response.data
//     } catch (error) {
//         return error
//     }
// }

// Delete movie using delete http verb
export const DeleteMovie = async (movieId) => {
    try {
        const response = await axiosInstance.delete(`api/movies/delete/${movieId}`)
        return response.data
    } catch (error) {
        return error
    }
}

// Add movie
export const UpdateMovie = async (payload) => {
    try {
        const response = await axiosInstance.put('api/movies/update', payload)
        return response.data
    } catch (error) {
        return error
    }
}
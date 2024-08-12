const { axiosInstance } = require('.')

export const GetAllTheatresByOwner = async (userId) => {
    try {
        const response = await axiosInstance.get(`api/theatres/getAllTheatresByOwnerId/${userId}`)
        return response.data
    } catch (error) {
        return error
    }    
}

export const GetTheatresByMovie = async (payload) => {
    try {
        const response = await axiosInstance.post('/api/theatres/getTheatresByMovieId', payload)
        return response.data
    } catch (error) {
        return error
    }
}

// export const GetShowById = async (payload) => {
//     try {
//         const response = await axiosInstance.post('api/theatres/getShowById', payload)
//         return response.data
//     } catch (error) {
//         return error.message
//     }
// }

export const GetAllTheatres = async () => {
    try {
        const response = await axiosInstance.get('api/theatres/getAllTheatres')
        return response.data
    } catch (error) {
        return error
    }    
}

export const AddTheatre = async (payload) => {
    try {
        const response = await axiosInstance.post("api/theatres/add", payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const DeleteTheatre = async (theatreId) => {
    try {
        const response = await axiosInstance.delete(`api/theatres/delete/${theatreId}`)
        return response.data
    } catch (error) {
        return error
    }
}

export const UpdateTheatre = async (payload) => {
    try {
        const response = await axiosInstance.put("api/theatres/update", payload)
        return response.data
    } catch (error) {
        return error
    }
}
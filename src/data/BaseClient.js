import axios from 'axios';
// TODO: Base version further refinement is needed

/**
 * Makes a GET request to the specified URL.
 * @param {Object} params - The parameters for the GET request.
 * @param {string} params.url - The URL to send the GET request to.
 * @returns {Promise<Object>} - The response object containing success status and data or error.
 */
async function get(params) {
    if (!params || !params.url) {
        return { success: false, error: new Error('URL parameter is required') };
    }

    try {
        const result = await axios.get(params.url);
        if (result.status === 200) {
            return { success: true, data: result.data };
        } else {
            throw new Error(`Unexpected response status: ${result.status}`);
        }
    } catch (error) {
        return { success: false, error: error.message || error };
    }
}

/**
 * Makes a POST request to the specified URL with the given data.
 * @param {Object} params - The parameters for the POST request.
 * @param {string} params.url - The URL to send the POST request to.
 * @param {Object} params.data - The data to include in the POST request body.
 * @returns {Promise<Object>} - The response object containing success status and data or error.
 */
async function post(params) {
    if (!params || !params.url || !params.data) {
        return { success: false, error: new Error('URL and data parameters are required') };
    }

    try {
        const result = await axios.post(params.url, params.data);
        if (result.status === 200 || result.status === 201) {
            return { success: true, data: result.data };
        } else {
            throw new Error(`Unexpected response status: ${result.status}`);
        }
    } catch (error) {
        return { success: false, error: error.message || error };
    }
}

export { get, post };
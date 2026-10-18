export const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299, 
    // SWR should catch it as an error.
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.');
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    const result = await res.json();
    return result.data; // Returns just the data array directly
};
export default function getUserLocation() {
    return new Promise((resolve, reject) => {
        // 1. Check if the browser supports Geolocation
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by your browser"));
            return;
        }

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        };

        // 2. Request the position and resolve/reject the Promise
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log(`latitude is ${latitude}`);
                console.log(`longitude is ${longitude}`);
                resolve([latitude, longitude]); // <--- Resolves the Promise with the array
            },
            (error) => {
                reject(error); // <--- Rejects the Promise if there's an error
            },
            options
        );
    });
}
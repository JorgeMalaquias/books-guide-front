export function config(token) {
    return {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }
}
export const API_URL='http://localhost:5000';
export const getUsersApi = async () => {
    return await fetch('http://localhost:8001/users')
}
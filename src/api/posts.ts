export const getPostsApi = async () => {
    return await fetch('http://localhost:8001/posts')
}
import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import fetchAllPosts from "../auth/fetchAllPosts"
import BlogCards from "../components/BlogCards"
import CheckToken from "../auth/checkToken"

function AllPosts() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await fetchAllPosts()
                setPosts(data)
                setLoading(false)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    },[])
    console.log("posts", posts);
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <Navbar />
            <CheckToken />
            <div className="container mt-5">
                <h1>All Posts</h1>
                <p>Welcome to all posts</p>
                <div className="row">
                    {posts ? (
                        posts.map((post) => (
                            <BlogCards key={post._id} post={post} />
                        ))
                    ) : (
                        <p>No posts yet</p>
                    )}
                </div>
            </div>
        </div>


    )
}

export default AllPosts
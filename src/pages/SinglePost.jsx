import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import fetchSinglePost from "../auth/fetchSinglePost"
import { useState, useEffect } from "react"
import { marked } from "marked"
import CommentCards from "../components/CommentCards"
import fetchAddComment from "../auth/fetchAddComment"
import CheckToken from "../auth/checkToken"


function SinglePost() {

    const { id } = useParams()
    const [ post, setPost ] = useState([])
    const [ comments, setComments ] = useState([])
    const [ content, setContent ] = useState('')
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await fetchSinglePost(id)
                setContent(marked(data.post.content))
                setComments(data.comments)
                console.log("datacomments", data.comments);
                setPost(data.post)
                console.log(data.post);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [id])


    async function handleAddComment(e) {
        e.preventDefault();
            const input = document.getElementById('addComment');
            const comment = input.value;
            const data = await fetchAddComment(id, comment);
            if(!data) {
                return
            } else {
                const commentObj = {
                    _id: data._id,
                    author: data.author,
                    content: data.content,
                    date: data.date
                }
                setComments([...comments, commentObj]);
                input.value = ''; 
            }
    }
    
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    console.log("comments", comments);

    return (
        <div>
            <Navbar />
            <CheckToken />

            <div className="container">
                <h1 className='text-decoration-underline text-center my-5'>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: content}}></div>

                <h3>Add a comment</h3>
                <form onSubmit={handleAddComment}>

                    <div className="mb-3 form-floating">
                        <textarea 
                            className="form-control" 
                            placeholder="Leave a comment here" 
                            id="addComment" 
                            rows="3">
                        </textarea>
                        <label 
                            htmlFor="addComment" 
                            className="form-label">
                            Comment
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Add Comment</button>
                </form>

                <h2 className='text-decoration-underline text-center my-5'>Comments</h2>
                {!comments ? 
                    <p>No comments yet</p>
                    :
                    comments.map(comment => <CommentCards key={comment._id} comment={comment} />)
                }
            </div>
        </div>
    )
}

export default SinglePost
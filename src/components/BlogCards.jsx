import { Link } from "react-router-dom";



function BlogCards({ post }) {


    function get20words(string) {
        const words = string.split(' ')
        return words.slice(0, 20).join(' ')
    }

    const subtitle = get20words(post.content)
    console.log("subtitle", subtitle);

    return (
        <div className="col-md-6 col-sm-12 mb-3">
            <div className="card" >
                <div className="card-header text-center">
                    <h4>{post.title}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text">{subtitle}</p>
                    <Link to={`/posts/${post._id}`} className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
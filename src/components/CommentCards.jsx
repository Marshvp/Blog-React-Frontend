import { format } from 'date-fns'

function CommentCards({ comment }) {
    function formatDate(date) {
        return format(new Date(date), 'dd-MM-yyyy HH:mm')
    }

    return (
        <div className="card my-3" key={comment._id}>
            <div className="card-body">
                <h5>{comment.author.name}</h5>
                <p className="card-text">{comment.content}</p>
                <p>{formatDate(comment.date)}</p>
            </div>
        </div>
    )
}


export default CommentCards
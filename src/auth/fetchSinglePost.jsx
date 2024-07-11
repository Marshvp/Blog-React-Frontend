

async function fetchSinglePost(id) {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        console.log("data",data);
        return {
            post: data.post,
            comments: data.comments
        }
    } catch(err){
        console.log(err);
    }
}

export default fetchSinglePost


async function fetchAddComment(id, comment) {

    try{
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:3000/posts/${id}/comments`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({
                comment
            })
        });
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        return data
    }
    catch(err){
        console.log(err);
    }
}

export default fetchAddComment
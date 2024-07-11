


async function fetchAllPosts(){
    try{
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:3000/posts', {
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
        return data.posts.published
    }
    catch(err){
        console.log(err);
    }
}

export default fetchAllPosts
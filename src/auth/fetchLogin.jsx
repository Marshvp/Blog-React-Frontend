

async function fetchLogin(username, password) {

    try{
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if(!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();

        localStorage.setItem('token', data.token)
        localStorage.setItem('username', data.username)
        localStorage.setItem('id', data.id)

        return true
    } catch(err){
        console.log(err);
        return false
    }
}

export default fetchLogin
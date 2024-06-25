import Navbar from "./Navbar"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
function Login() {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        console.log("before fetch", username, password);

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            
            const data = await response.json()

            console.log("data",data);

            if(response.ok) {
                console.log("data message",data.message);
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.username)
                localStorage.setItem('id', data.id)
                navigate('/')
            } else {
                setError(data.message)
            }
        } catch (err) {
            setError('An error occurred please try again')
        }
    }

    return (
        <>
            <Navbar />
            <h1 className='title text-center m-5'>Log in</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form method="post" >
                            {error && <div className="alert alert-danger">{error}</div>}
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input 
                                        type="text"
                                        className="form-control" 
                                        id="username" 
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
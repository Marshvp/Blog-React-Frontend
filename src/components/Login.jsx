import Navbar from "./Navbar"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import fetchLogin from "../auth/fetchLogin"
function Login() {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const result = await fetchLogin(username, password)
        if (result) {
            navigate('/posts')
        } else {
            setError('Invalid username or password')
        }
    }
        

    return (
        <>
            <Navbar />
            <h1 className='title text-center m-5'>Log in</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form method="post" onSubmit={handleSubmit} >
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
                                <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
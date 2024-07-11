import { useState, useEffect } from 'react'
function useAuth() {
    
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const [ token, setToken ] = useState(null)  
    const [ username, setUsername ] = useState(null)

    // console.log("Use auth hit");

    useEffect(() => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        if (token) {
            setIsAuthenticated(true)
            setToken(token)
            setUsername(username)
        } else {
            setIsAuthenticated(false)
            setToken(null)
            setUsername(null)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setIsAuthenticated(false)
        window.location.reload()
    }

    return { isAuthenticated, token, username, logout }
}

export default useAuth
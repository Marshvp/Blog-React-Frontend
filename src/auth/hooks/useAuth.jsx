import { useEffect, useState } from 'react'


function useAuth() {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false)
    };

    return { isAuthenticated, logout }
}

export default useAuth;



import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckToken() {
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCheckToken() {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found, redirecting to login');
                navigate('/login');
                return;
            }
            
            try {
                const response = await fetch('http://localhost:3000/check_token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}` // Ensure correct Authorization header
                    }
                });

                if (!response.ok) {
                    console.log('Token validation failed, clearing local storage');
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    navigate('/login');
                } else {
                    const data = await response.json();
                    console.log('Token validation success:', data);
                }
            } catch (err) {
                console.error('Error checking token:', err);
            }
        }

        fetchCheckToken();
    }, [navigate]); // Depend on navigate to avoid unnecessary re-runs

    return null; // This component does not render anything
}

export default CheckToken;

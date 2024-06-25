import useAuth from "../auth/hooks/useAuth"

function Navbar() {
    const { isAuthenticated, logout } = useAuth()

    return (
        <div>
            <h1 className='title text-center m-5'>Marshall&apos;s Blog</h1>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/" className="nav-link active">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/posts" className="nav-link">Blog Posts</a>
                                </li>
                                { !isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <a href="/register" className="nav-link">Sign Up</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/login" className="nav-link">Log in</a>
                                        </li>
                                    </>
                                )}
                                { isAuthenticated && (
                                    <>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" onClick={logout}>Log out</a>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link">Logged in as: {localStorage.getItem('username')}</p>
                                    </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}



export default Navbar
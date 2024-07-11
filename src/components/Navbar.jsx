import useAuth from "../auth/hooks/useAuth";

function Navbar() {
    const { isAuthenticated, username, logout } = useAuth();

    return (
        <div>
            <h1 className='title text-center m-5'>Marshall&apos;s Blog</h1>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            {isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <a href="/posts" className="nav-link">Blog Posts</a>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link">Logged in as: {username}</p>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" onClick={logout}>Log out</a>
                                    </li>
                                </>
                            )}
                            {!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <a href="/login" className="nav-link">Log in</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/register" className="nav-link">Register</a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
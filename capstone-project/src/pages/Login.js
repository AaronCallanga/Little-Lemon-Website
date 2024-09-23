export function Login () {
    return (
        <div className="Login-section">
            <h1>Login</h1>
            <div className="login-form">
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}
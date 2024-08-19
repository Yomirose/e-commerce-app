import "./Password.css"

function passwordReset () {
    return (
        <div className="resetPassword">
            <h2>Reset your password</h2>
            <form>
                <div>
                    <label>password</label>
                    <input type="password" placeholder="Enter your new password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password"/>
                </div>
                <button type="submit">Continue</button>
            </form>
            <a href="#">Login</a>
        </div>
    )
}
import "./Create.css"

function Create({getUserData}){
    return (
        <div className="create-container">
            {getUserData.username} {" "};
            {getUserData.email} {" "};
            {getUserData.password} {" "};
            <h2>Create your Account</h2>
            <form>
                <div>  
                    <label className="form-label">Username</label>
                    <input className="form-input" type="text" placeholder="Enter your username" required />
                </div>
                <div className="input-email">
                    <label>Email address</label>
                    <input className="form-input" type="text" placeholder="Enter your email address" required />
                </div>
                <div className="input-password">
                    <label>Password</label>
                    <input className="form-input"  type="password" placeholder="Enter your password" required />
                </div>
                <div className="input-password">
                    <label>Password Confirmation</label>
                    <input className="form-input" type="password" placeholder="Confirm your password" required/>
                </div>
                <button className="form-button" type="submit">Continue</button>
            </form>
            <div className="signin">
                <a href="#">Already have an account? Sign in</a>
            </div>
        </div>
    )
};

export default Create;
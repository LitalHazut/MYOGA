import './login.css';


const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    console.log("submit")
};
export const Login = () => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username:</label>
                    <input type="text" name="uname" placeholder="write email" required />
                </div>
                <div className="input-container">
                    <label>Password:</label>
                    <input type="password" name="pass" placeholder="write password" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="submit"/>
                </div>
                <br />
                <label>Don't have an Account?</label>
                <a href='/signup'> Sign up</a>
            </form>
        </div>
    )

}


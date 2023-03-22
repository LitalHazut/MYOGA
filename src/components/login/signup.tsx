import './login.css';


const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    console.log("submit")
};


export const Signup = () => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="write email" required />
                </div>
                <div className="input-container">
                    <label>Password:</label>
                    <input type="password" name="pass" placeholder="write password" required />
                </div>
                <div className="input-container">
                    <label>Confirm Password:</label>
                    <input type="password" name="copass" placeholder="write Confirm password" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Create Account" />
                </div>
                <br />
            </form>
        </div>
    )

}

import './login.css';
import React, { useState } from "react"
import { useAddAccount } from '../../context/addAccountsContext';


const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    console.log("submit")
};

export const Login = () => {
    const [authMode, setAuthMode] = useState("signin")
    const [newAccount, setNewAccount] = React.useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign In
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="name"
                                className="form-control mt-1"
                                placeholder="e.g Jane Doe"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                id="email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                id="password"
                            />
                        </div>
                        <SubmitAccount newAccount={newAccount} email={email} password={pass} setNewAccount={setNewAccount} />
                    </div>
                </form>
            </div>
        </>
    )
};
const SubmitAccount: React.FC<{
    newAccount: string;
    email: string;
    password: string;
    setNewAccount: (newAccount: string) => void;
}> = ({ newAccount, email, password, setNewAccount }) => {
    const addAccount = useAddAccount(setNewAccount);

    return (
        <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => addAccount(newAccount, email, password)}>
                Submit
            </button>
        </div>
    );
};





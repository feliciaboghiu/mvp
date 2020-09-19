import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h3>SignUp Component</h3>
                <form>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="email" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="https://reactjs.org/">Sign in?</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default SignUp;
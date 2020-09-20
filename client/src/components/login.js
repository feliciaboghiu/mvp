import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: ''
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting");
        console.log(this.state);
        // this.props.history.push('./mylists');
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>SIGN IN</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        name="email"
                        type="text"
                        value={email}
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block">Login</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="https://reactjs.org/">password?</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;
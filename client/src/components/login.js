import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: ''
        });

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('./mylists');
        }

    render() {
        return (
            <div>
                <form>
                    <h3>SIGN IN</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                        value={this.state.email}
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.updateInput} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                        value={this.state.password}
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.updateInput} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                        </div>
                    </div>

                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="https://reactjs.org/">password?</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;
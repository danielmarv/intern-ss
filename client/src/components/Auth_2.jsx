import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser, logout } from "../store/actions";
import { Link, withRouter } from "react-router-dom";
import { MdError } from "react-icons/md";
import ErrorMessage from "../components/ErrorMessage";

class Auth_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      emailId: "",
      confirmpassword: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password, emailId } = this.state;
    const { authType, history } = this.props;
  
    // Regular expression to match the format "21/BCC/BU/R/0019"
    const registrationIdRegex = /^(?:\d{2}\/[A-Z]+\/[A-Z]+\/[A-Z]\/\d{4})$/;
  
    if (this.state.password === this.state.confirmpassword) {
      if (registrationIdRegex.test(username)) {
        e.preventDefault();
        this.props.authUser(authType || "login", {
          username,
          password,
          emailId,
        });

        history.push("/login");
      } else {
        alert("Invalid Registration ID, Please check again");
      }
    } else {
      alert("Error! Passwords do not match");
    }
  }
  
  handleConfirmPassword(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.password !== e.target.value) {
      this.setState({ message: "Passwords do not match!" });
    } else {
      this.setState({ message: "" });
    }
  }

  render() {
    const { username, password, emailId, confirmpassword } = this.state;
    return (
      <div className="section">
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <p>Internship Management System</p>
            </div>
            <div className="formBx">
              <form onSubmit={this.handleSubmit}>
                <div className="Errorbox">
                  <div className="my-4 text-center" style={{ zIndex: "10" }}>
                    <ErrorMessage />
                  </div>
                </div>
                <h2>Student Registration</h2>
                <input
                  required
                  type="text"
                  value={username}
                  name="username"
                  placeholder="Registration ID (eg: 21/BU...)"
                  className="form-control"
                  minLength="16"
                  maxLength="16"
                  autoComplete="off"
                  onChange={this.handleChange}
                />

                <input
                  required
                  type="email"
                  value={emailId}
                  name="emailId"
                  placeholder="Email ID"
                  className="form-control"
                  autoComplete="off"
                  onChange={this.handleChange}
                />

                <input
                  required
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  autoComplete="off"
                  onChange={this.handleChange}
                />

                <input
                  required
                  type="password"
                  value={confirmpassword}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="form-control"
                  autoComplete="off"
                  onChange={this.handleConfirmPassword}
                />
                {this.state.message && (
                  <small className="text-danger">
                    <span className="mr-1">
                      <MdError
                        style={{ margin: -2, padding: -2 }}
                        color="crimson"
                      />
                    </span>
                    {this.state.message}
                  </small>
                )}
                <div className="text-center">
                  <Link className="btn-custom mr-2" to="/login">
                    <b>Login</b>
                  </Link>
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(() => ({}), { authUser, logout })(Auth_2));

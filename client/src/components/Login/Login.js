import React, { Component } from "react";
import logo from "../../images/logo.png";

const style = {

	modal: {
		fontFamily: "'Questrial', sans-serif",
	},

	btn: {
		backgroundColor: "mediumblue",
		color: "white",
		borderRadius: "20px"
	},

	img: {
		display: "table",
		margin: "auto"
	},

}

class Login extends Component {
	  // Setting the component's initial state
	  state = {
		loginemail: "",
		loginpassword: "",
		registeremail: "",
		password: "",
		confirmpassword: ""
	  };

handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleLoginSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.loginemail) {
      alert("Fill out your email please or we will feed you to Drogon!");
    } else if (!this.state.loginpassword) {
      alert(
				("Fill out your password please or we will feed you to Drogon!")
			)
			}
			else {
				this.loginUser();
			}
		console.log(this.state.loginemail);
		console.log(this.state.loginpassword)
	};

	loginUser(req, res) {
		console.log('loginuser')
		fetch("/users/login", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
				// 'Authorization': 'Bearer' + authToken
			},
			body: JSON.stringify({
				email: this.state.loginemail,
				password: this.state.loginpassword
			})
		})
		.then((response) => {
			response.json().then((data) =>
			console.log(data)
			)
		}
		)

		.catch(error => {
			if (error) throw error
		});
		console.log(`loginuser2` + this.state.loginemail)
	}

	handleRegisterSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.registeremail) {
      alert("Fill out your email please or we will feed you to Drogon!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password`
      );
		} else if (this.state.password !== this.state.confirmpassword) {
			alert(
				`Your passwords do not match`
			);
		}
		else {
			alert(`Hello ${this.state.registeremail}, You are registered!`);
			this.registerUser();
		}
	};
	
	registerUser(req) {
		console.log('register-client')
		fetch("/users/register", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.registeremail,
				password: this.state.password
			})
		})
		.catch(error => {
			if (error) throw error
		});
	}


  render() {
	  return(
			<div id="modal" style={style.modal}>
				<div className="row">

				<div className="col-6" id="login">
								<h4>login</h4>
									<form action="/users/login" method="POST">

										<div className="form-group">
											<label for="email">email</label>
											<input
												type="email"
												id="loginemail"
												name="loginemail"
												class="form-control"
												placeholder="Enter Email"
												value={this.state.loginemail}
												onChange={this.handleInputChange}>
											</input>
										</div>

										<div className="form-group">
											<label for="password">password</label>
											<input
												type="password"
												id="loginpassword"
												name="loginpassword"
												class="form-control"
												placeholder="Password"
												value={this.state.loginpassword}
												onChange={this.handleInputChange}>
											</input>
										</div>

										<br></br>
										<div className="text-center">
											<input type="submit" style={style.btn} onClick={this.handleLoginSubmit} value="Login" />
											</div>



								</form>
				</div>

						<div className="col-6" id="register">
						<h4>don't have an account? - register for free</h4>

						<form action="/users/register" method="POST">

							<div className="form-group">
								<label for="email">email</label>
								<input
									type="email"
									id="registeremail"
									name="registeremail"
									class="form-control"
									placeholder="email"
									value={this.state.registeremail}
									onChange={this.handleInputChange}>
					</input>
							</div>

							<div className="form-group">
								<label for="password">password</label>
								<input
									type="password"
									id="password"
									name="password"
									class="form-control"
									placeholder="password"
									value={this.state.password}
									onChange={this.handleInputChange}>
								</input>
							</div>

							<div className="form-group">
								<label for="confirm password">confirm password</label>
								<input
									type="password"
									id="confirmpassword"
									name="confirmpassword"
									class="form-control"
									placeholder="confirm password"
									value={this.state.confirmpassword}
									onChange={this.handleInputChange}>
								</input>
							</div>
							<br></br>
							<div className="text-center">
							<input type="submit" style={style.btn}  onClick={this.handleRegisterSubmit} value="Register" />
							</div>
							<br></br>
					</form>
					</div>
							</div>
							</div>
	  )};
	  }

export default Login;

import React, { Component } from "react";
import logo from "../../images/logo.png";

const style = {

	modal: {
		fontFamily: "'Questrial', sans-serif",
	},

	btn: {
		backgroundColor: "mediumblue",
		color: "white"
	},

	img: {
		display: "table",
		margin: "auto"
	}

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
    // this.setState({
    //   email: "",
    //   password: ""
    // });
	};
	
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
		// .then(res => {
			// let foo = res.json();
			// foo.then(json => {
		// 		console.log(json);
		// 	})
		// })
		.catch(error => {
			if (error) throw error
		});
	}


  render() {
	  return(
			<div id="modal" style={style.modal}>

				<img src={logo} style={style.img}></img>

				<div id="login">
								<h4>Login</h4>
									<form action="/users/login" method="GET">

										<div className="form-group">
											<label for="email">Email</label>
											<input
												type="loginemail"
												id="loginemail"
												name="loginemail"
												class="form-control"
												placeholder="Enter Email"
												value={this.state.loginemail}
												onChange={this.handleInputChange}>
											</input>
										</div>

										<div className="form-group">
											<label for="password">Password</label>
											<input
												type="loginpassword"
												id="loginpassword"
												name="loginpassword"
												class="form-control"
												placeholder="Password"
												value={this.state.loginpassword}
												onChange={this.handleInputChange}>
											</input>
										</div>

										<br></br>
										<input type="submit" onClick={this.handleLoginSubmit} value="Login" />



								</form>
								</div>
								<br></br>

				<h4>Don't Have An Account? - Register for Free</h4>

				<div className="row">

					<div className="col-md-12">

						<div id="register">
						<form action="/users/register" method="POST">

							<div className="form-group">
								<label for="email">Email</label>
								<input
									type="registeremail"
									id="registeremail"
									name="registeremail"
									class="form-control"
									placeholder="Enter Email"
									value={this.state.registeremail}
									onChange={this.handleInputChange}>
					</input>
							</div>

							<div className="form-group">
								<label for="password">Password</label>
								<input
									type="password"
									id="password"
									name="password"
									class="form-control"
									placeholder="Password"
									value={this.state.password}
									onChange={this.handleInputChange}>
								</input>
							</div>

							<div className="form-group">
								<label for="Confirm Password">Confirm Password</label>
								<input
									type="password"
									id="confirmpassword"
									name="confirmpassword"
									class="form-control"
									placeholder="Confirm Password"
									value={this.state.confirmpassword}
									onChange={this.handleInputChange}>
								</input>
							</div>

							<br></br>

							<input type="submit" onClick={this.handleRegisterSubmit} value="Register" />

							<br></br>
					</form>
					</div>
					<hr></hr>

							</div>
							</div>
							</div>
	  )};
	  }

export default Login;
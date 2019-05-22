import React, {Component} from "react";
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
		email: "",
		password: ""
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

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email) {
      alert("Fill out your name and email please or we will feed you to Drogon!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.email}`
      );
    } else {
      alert(`Hello ${this.state.email}`);
    }

    // this.setState({
    //   email: "",
    //   password: ""
    // });
  };


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
												type="email"
												id="email"
												name="email"
												class="form-control"
												placeholder="Enter Email"
												value={this.state.email}
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

										<br></br>
										<input type="submit" onClick={this.handleFormSubmit} value="Login" />



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
									type="email"
									id="email"
									name="email"
									class="form-control"
									placeholder="Enter Email"
									value="">
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
									value="">
								</input>
							</div>

							<div className="form-group">
								<label for="confirmpassword">Confirm Password</label>
								<input
									type="confirmpassword"
									id="confirmpassword"
									name="confirmpassword"
									class="form-control"
									placeholder="confirmpassword"
									value="">
								</input>
							</div>

							<br></br>

							<input type="submit" value="Register" />

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
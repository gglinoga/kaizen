import React from "react";
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

const Login = props => (
				
			<div id="modal" style={style.modal}>

				<img src={logo} style={style.img}></img>

				<div id="login">
								<h4>Login</h4>
									<form action="/user/login" method="POST">

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

										<br></br>
										<input type="submit" value="Login" />



								</form>
								</div>
								<br></br>

				<h4>Don't Have An Account? - Register for Free</h4>

				<div className="row">

					<div className="col-md-12">

						<div id="register">
						<form action="/user/register" method="POST">

							<div class="form-group">
								<label for="name">Name</label>
								<input
									type="name"
									id="name"
									name="name"
									class="form-control"
									placeholder="Enter Name"
									value="<%= typeof name=! 'undefined' ? name : '' %>">
								</input>
							</div>

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
)

export default Login;
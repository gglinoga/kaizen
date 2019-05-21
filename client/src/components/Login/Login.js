import React from "react";

const style = {
	modal: {
        fontFamily: "'Questrial', sans-serif",
	},

	btn: {
		backgroundColor: "mediumblue",
		color: "white"
	}
}

const Login = props => (
	<div style={style.modal}>
		<h4>Login</h4>

		<div className="row">
			<div className="col-md-12 login">
				<form>
					<label>
						Email:
    					<input type="text" name="Email" />
					</label>
					<label>
						Password:
    					<input type="text" name="Email" />
					</label>
					<br></br>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	</div>

);

export default Login;
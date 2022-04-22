import React, { useState } from "react";
import "../../styles/home.css";
import { signIn } from "../utilities/singIn";

export const Home = () => {
	const [email, setEmail] = useState ("")
	const [password, setPassword] = useState ("")

	return (

		<div className="d-flex justify-content-center">
			<form>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input 
					type="email" 
					className="form-control" 
					id="exampleInputEmail1" 
					onChange={(event) => {
						setEmail(event.target.value);
					}}
					value={email}/>
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input
					type="password"
					className="form-control" 
					id="exampleInputPassword1" 
					onChange={(event) => {
						setPassword(event.target.value);
					}}
					value={password}/>
				</div>
				<button 
				type="submit" 
				className="btn btn-primary"
				onClick={(event) => {
					if (email !== "" && password !== "")
					signIn(email, password)
					event.preventDefault()

				}}
				>
					Submit
					</button>
			</form>
		</div>

	)
}









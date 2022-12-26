// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useRef, useState } from "react";

import { app, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// CSS imports
import styles from "../styles/pages/Admin.module.css";

// Component imports
import PageTitle from "../components/parts/PageTitle";

// Interface for addMember function

// Page
export default function Admin() {
	const [name, setName] = useState("");
	const [grade, setGrade] = useState("");
	const [email, setEmail] = useState("");
	// const [loggedIn, setLoggedIn] = useState(false);
	// const [password, setPassword] = useState("");

	// const login = (password: String) => {
	// 	if (password == "password") {
	// 		setLoggedIn(true);
	// 	} else {
	// 		alert("Incorrect password.");
	// 	}
	// };

	// const dbInstance = collection(db, "Members");
	// const addMember = async ({ name, grade, email }: addMemberProps) => {
	// 	if (
	// 		name == "" ||
	// 		grade == "" ||
	// 		email == "" ||
	// 		name == null ||
	// 		grade == null ||
	// 		email == null
	// 	) {
	// 		alert("Please fill out all fields.");
	// 		return;
	// 	} else if (grade > 12 || grade < 9) {
	// 		alert("Please enter a valid grade.");
	// 		return;
	// 	} else if (!email.includes("@")) {
	// 		alert("Please enter a valid email.");
	// 		return;
	// 	}

	// 	const docRef = await addDoc(dbInstance, {
	// 		name: name,
	// 		grade: grade,
	// 		email: email,
	// 	}).then((r) => {
	// 		console.log("Document written with ID: ", r.id);
	// 		alert(`Success!\nName: ${name}\nGrade: ${grade}\nEmail: ${email}`);
	// 	});
	// };

	return (
		<>
			{/* Meta tags */}
			<Head>
				<title>NHS Admin</title>
			</Head>

			{/* ! Main homepage content */}
			<main>
				{/* {loggedIn ? ( */}
				<>
					<PageTitle title="NHS Admin" />
					<div id={`${styles.notTitle}`}>
						<section className="container-sm text-center">
							<div className="row">
								<div className="col-md-6 d-flex align-items-center justify-content-center">
									<h2>Pending Member Requests</h2>
								</div>
								<div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
									<h2>Add Members</h2>
									<div className="row">
										<div className="col-md-6 flex-column d-flex align-items-center justify-content-center">
											<input
												type="text"
												placeholder="Name"
												onChange={(e) => setName(e.target.value)}
												className={`${styles.memberInput}`}
											/>
											<input
												type="text"
												placeholder="Grade"
												onChange={(e) => setGrade(e.target.value)}
												className={`${styles.memberInput}`}
											/>
											<input
												type="text"
												placeholder="Email"
												onChange={(e) => setEmail(e.target.value)}
												className={`${styles.memberInput}`}
											/>
										</div>
										<div className="col-md-6 flex-column d-flex align-items-center justify-content-center">
											<button
												className="LoadButton-pushable my-3"
												// onClick={() => {
												// 	addMember({
												// 		name: name,
												// 		grade: grade,
												// 		email: email,
												// 	});
												// }}
											>
												<span className="LoadButton-shadow"></span>
												<span className="LoadButton-edge"></span>

												<span className="LoadButton-front text">
													Add Member
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</>
				{/* ) : (
					<div className="vw-100 vh-100 d-flex align-items-center justify-content-center flex-column">
						<h1>Enter the password</h1>
						<input
							type="password"
							placeholder="Password"
							className={`${styles.passInput}`}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className="LoadButton-pushable my-3"
							onClick={() => {
								login(password);
							}}
						>
							<span className="LoadButton-shadow"></span>
							<span className="LoadButton-edge"></span>
							<span className="LoadButton-front text">Login</span>
						</button>
					</div>
				)} */}
			</main>
		</>
	);
}
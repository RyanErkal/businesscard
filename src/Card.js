import React from "react";
/* import { motion } from "framer-motion"; */
import "./App.scss";

export default function Card() {
	return (
		<>
			<div className="card">
				<h1>Ryan Erkal</h1>
				<img src="https://picsum.photos/200/300" alt="random" />
				<div className="bio">
					<p>
						Disciplined Full Stack Developer with a strong
						foundation in HTML, CSS, JavaScript, Typescript, React.
						Proven ability to create efficient, scalable web
						applications and a passion for learning new
						technologies. Committed to providing high-quality
						results with little supervision and strong attention to
						detail.
					</p>
				</div>
				<div className="skills">
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
						<li>Python</li>
						<li>SQL</li>
						<li>Git</li>
						<li>GitHub</li>
					</ul>
				</div>
				<div className="contact">
					<p>+447784980622 | ryanerkal@yahoo.ie</p>
					<p>
						<a href="https://www.linkedin.com/in/ryan-erkal-1b1b1b1b1/">
							LinkedIn
						</a>
					</p>
					<p>
						<a href="github.com/ryanerkal">GitHub</a>
					</p>
				</div>
			</div>
		</>
	);
}

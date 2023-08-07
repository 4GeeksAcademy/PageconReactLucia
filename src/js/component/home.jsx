import React from "react";
import Navbar from "./navbar.jsx";
import Jumbatron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		<div className="" >
			<Navbar />
			<div>
				<Jumbatron />
				<div className="container w-75 p-3 justify-content-center">
					<div className="row row-cols-4 w-100 p-3 align-content-center mx-1 px-0 py-0">
						<div className="col mx-0 px-0"><Card /></div>
						<div className="col mx-0 px-0"><Card /></div>
						<div className="col mx-0 px-0"><Card /></div>
						<div className="col mx-0 px-0"><Card /></div>
					</div>
				</div>
			</div>
			<Footer />

		</div>
	);
};

export default Home;

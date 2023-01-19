import React from "react";
import AgovUtility from "../../components/agov-utility";
import Banner from "../../components/banner";
import BuyToken from "../../components/buy-token";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Partner from "../../components/partner";
import RoadMap from "../../components/roadmap";
import "./home.css"

const Home = () => {
	return (
		<>
			<div >
				<Header />
				<Banner />
				<AgovUtility />
			</div>
			<BuyToken />
			<RoadMap />
			<Partner/>
			<Footer/>

		</>
	)
}
export default Home
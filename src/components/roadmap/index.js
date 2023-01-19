import React from "react";
import "./roadmap.css"

const RoadMap = () => {
	return (
		<>
			<div className="roadmap_wrap">
				<div className="container">
					<div className="row">
						<div><h2 className="text-white text-center roadmap_heading mt-5">ROADMAP</h2> </div>
						<div>
							<p className=" text-center roadmap_paragraph mt-5">ARV project has a long-term and permanent infrastructure designed to be integrated into the real world.
								Ariva Team are very happy that they adhered strictly to roadmap and completed the tasks ahead of schedule.
								There is always more to do, more to build.</p>
						</div>
					</div>
					<div className="roadmap_box mb-5">

					<div className="roadmap_box1 offset-4  mt-5 ">
							<h1 className="roadmap_heading1 p-3">2021 1Q</h1>
							<ul>
							<li className="roadmap_box-paragraph">Liquidity Mining</li>
							</ul>	
					</div>
					<div className="roadmap_box2 offset-9 ">
							<h1 className="roadmap_heading1 p-3">2021 2Q</h1>
							<ul>
							<li className="roadmap_box-paragraph">First DEX Listing</li>
							</ul>
							
					</div>

					<div className="roadmap_box3  offset-3   ">
							<h1 className="roadmap_heading1 p-3">2021 3Q</h1>
							<li className="roadmap_box-paragraph">Introducing ClubRare Governance</li>
					</div>
					<div className="roadmap_box4 offset-8 ">
							<h1 className="roadmap_heading1 p-3 ">2021 3Q</h1>
							<ul>
							<li className="roadmap_box-paragraph">AGOV Token Economy Update</li>
							</ul>	
					</div>
					<div className="roadmap_box5 offset-1  bg-light">
							<h1 className="roadmap_heading1 p-3">2021 3Q</h1>
							<ul className="roadmap_box-paragraph pb-3" >
							<li>DeFi Launch</li>
							<li> Official Discord Community Launch</li>
							<li> Grant Program Launch</li>
							<li> New Partnerships’ Announcements</li>
							</ul>	
					</div>
					<div className="roadmap_box6 offset-7">
						<h1 className="roadmap_heading1 p-3">2022 2Q</h1>
						<ul className="roadmap_box-paragraph pb-3">
							<li >NFT Marketplace Launch</li>
							<li>  AGOV Website Update</li>
							<li> Platinum Sponsorship of NFT.NYC 2022</li>
							<li>  Web3 Collector Afterparty in NY</li>
							<li> AGOV Audit Report</li>
							<li>AGOV New Partnerships Announcements</li>
						</ul>
					</div>

					<div className="roadmap_box7 offset-9 bg-white">
						<h1 className="roadmap_heading1 p-3">2022 3Q</h1>
						<ul className="roadmap_box-paragraph pb-3">
							<li>AGOV DAO launch</li>
							<li>   AGOV Uniswap Onboarding</li>
							<li>  1st, 2nd, 3rd AGOV-ETH Liquidity Supply from AGOV DAO</li>
							<li>  AGOV Payment Support on ClubRare Marketplace</li>
						</ul>
					</div>
					<div className="roadmap_box8 offset-1 bg-white">
						<h1 className="roadmap_heading1 p-3">2022 Q4</h1>
						<ul className="roadmap_box-paragraph pb-3">
							<li>AGOV DAO Treasury Wallet Disclosure and NFTs Deposit</li>
							<li> AGOV-ETH Pair LP Staking Program Launch</li>
							<li>   Uniswap LP Competition Event</li>
							<li>   Global Marketing Expansion</li>
							<li> Network Bridge Service Launch</li>
						</ul>
					</div>
				</div>	
				</div>
			</div>
		</>
	)
}

export default RoadMap
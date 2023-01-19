import React from "react";
import "./agov-utility.css"
import vector from "../../assets/images/vector3.png"
import agovDaoCircle from "../../assets/images/agovDaoCircle.svg"

const AgovUtility = () => {
	return (
		<>
			<div className="utitlity_wrapper ">
				<div className="container  ">
					<div className="row mt-5">
						<div><h1 className="text-white text-center utility_card_heading">AGOV UTILITY</h1></div>
					</div>
					<div className="row d-flex justify-content-center mt-5 mb-5">
						<div className="col-lg-3 col-md-3 col-sm-3">
							<h1 className="agov_utility_card">MAKE DECISIONS</h1>
							<p className="text-white banner_utility-paragraph">With AGOV, the community votes on treasury spending,
								determines policies and brand partnerships,
								and can trade exclusive NFTs.</p>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3">
							<h1 className="agov_utility_card">MAKE A DIFFERENCE</h1>
							<p className="text-white banner_utility-paragraph">ClubRare believes in an open metaverse governed by community.
								With AGOV, DAO members shape the future of web3.</p>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3">
							<h1 className="agov_utility_card">MAKE THE UNIVERSE</h1>
							<p className="text-white banner_utility-paragraph">Steered by the DAO, ClubRare is creating a community-led commerce
								3ecosystem blending physical goods with experience-rich metaverse goods and NFTs:
								ClubRare Universe.</p>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col-lg-8 col-md-8 col-sm-8  ">
							<h1 className="text-white   d-flex justify-content-end  utility_heading  ">AGOV Token Matrix</h1>
							<p className="text-white d-flex justify-content-end   utility_paragraph p-0 m-0   ">Liquidity mining token</p>
							<p className="text-white d-flex  justify-content-end   ">Didn’t proceed with ICO or private sale</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 text-center">
							<figure>
								<img src={vector} alt="vector not available" width={150} />
							</figure>
						</div>
					</div>
					<div className="row text-center mb-5">
						<figure >
							<img src={agovDaoCircle} alt="vector not available" height="100%" width="50%"/>
						</figure>

					</div>
				</div>
			</div>
		</>
	)
}
export default AgovUtility


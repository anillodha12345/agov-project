import React from "react";
import Button from 'react-bootstrap/Button';
import "./buy-token.css"
import buytokenimage1 from "../../assets/images/buytokenimage1.png";
import buytokenimage2 from "../../assets/images/buytokenimage2.png"

const BuyToken = () => {
	return (
		<>
			<div className="buy_token_wrapper">
				<div className="container ">
					<div className="row">
						<h2 className="text-white  mx-5 text-center mb-3">WHY SHOULD I BUY TOKENS HERE AND NOW ? </h2>
						<p className="paragraph_buytoken1 mb-5">
							GOVERNANCE TOKEN FOR PHYGITAL CREATORS AND FUTURE OF E-COMMERCE, BENEFITS THROUGH GOVERNANCE OPERATIONS, SUSTAINABLE TOKEN ECONOMY
						</p>
					</div>
					<div>
						<p className="text-white paragraph_buytoken2 text-center mb-5">AGOV is a ClubRare governance token, the future of commerce.
							Through AGOV, the community is empowered to vote to determine ClubRare's
							major policies and brand partnerships and can trade exclusive Phygital NFTs at ClubRare.
							AGOV stands for “Answer Governance”.
							For ClubRare, there was never any other answer.</p>
					</div>
					<div className="text-center">
						<Button variant="light" className="px-5" >BUY AGOV</Button>
					</div>
					<div className="row mt-5  border border-info  mx-5 buytoken_image_transparent">
						<div className="col-lg-6 col-md-6 col-sm-6 text-center mt-5 mb-5">
							<figure >
								<img src={buytokenimage1} alt="Trulli" width={100} />
							</figure>
					<button type="button" className="btn btn button1">AGOV-ETH UNISWAP PAIR</button>

						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 text-center mt-5 mb-5">
							<figure>

								<img src={buytokenimage2} alt="Trulli" width={100} />
							</figure>
							<button type="button" class="btn btn button1">SCAN</button>

						</div>
					</div>
					<div className="row mt-5">
						<p className="text-light  text-center">PROJECTED TOTAL SUPPLY : </p>
						<h1 className="text-light text-center">1,000,000,000</h1>
					</div>
					<div className="row mt-3">

						<p className="text-light  text-center">CIRCULATING SUPPLY : </p>
						<h1 className="text-light text-center">927,105,720</h1>
					</div>
					<div className="row mt-3">
						<p className="text-light  text-center paragraph_buytoken3 ">
							AGOV DAO is at the core of the web3 economy. As the governance token for ClubRare Universe,
							AGOV allows holders to steer the future of ClubRare universe.
						</p>
					</div>
					<div className="row">
						<p className="text-light text-center buy_token_paragraph">By working with creators and collectors to innovate in the collector economy,
							everyone is rewarded. AGOV DAO will be the accelerator for Phygital NFT Creators.
							ClubRare is building the future of the collector-oriented economy with the Phygital
							NFT and AGOV DAO members will utilize treasury governance to allocate funds to new creators and
							kickstart their productivity in ClubRare Universe.</p>

					</div>
				</div>
			</div>
		</>
	)

}
export default BuyToken



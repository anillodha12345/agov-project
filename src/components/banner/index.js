import React from "react"
import "./banner.css"
import colddrink from "../../assets/images/colddrink.png"
const Banner = () => {
	return (
		<>
			<div className="body_banner mt-5 mb-5">
				<div className="container ">
					<div className="row ">
						<div className="col-lg-6 col-md-6 col-sm-6 text-light mb-5  "><h3 className="heading mb-5">
							NEVER ANY OTHER ANSWER <br />
							FOR THE FUTURE OF COMMERCE
						</h3>
							<div className="mt-3">
								<button type="button" class="btn btn mx-2 text-light join_button ">Join AGOV DAO</button>
								<button type="button" class="btn text-light  pay_button  ">Buy AGOV-ETH</button>
							</div>
							<div className="dollar_paragraph mt-5 mb-5" >
								<div className="mx-2">
									<p className="m-0" >$6.29</p>
									<p className="banner-paragraph">Token value</p>
								</div>
								<div className="mx-2">
									<p className="m-0">$61,026,562</p>
									<p className="banner-paragraph" >Market Cap</p>
								</div>
								<div className="mx-2">
									<p className="m-0">$9,705,556</p>
									<p className="banner-paragraph">Circulating Supply</p>
								</div>
								<div className="mx-2">
									<p className="m-0">$2,063</p>
									<p className="banner-paragraph">Staked</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<button type="button" class="btn btn text-light ethereumbutton1 mx-3 mb-2 rounded-pill  position-absolute">1 ETH = 9 466,7622 AGOV</button> <br/>
							<button type="button" class="btn btn text-light  ethereumbutton2 rounded-pill   position-absolute mt-2">
								1 AGOV = 0,0001 ETH</button>

							<figure className=" cold_drink" >
								<img src={colddrink} alt="colddrink not available" width={300} />
							</figure>
						</div>
					</div>
				</div>
				<hr className="mb-5"/>
			</div>
		</>
	)
}
export default Banner
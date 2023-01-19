import React from "react";
import twitters from "../../../assets/images/twitter.png"
import footervector from "../../../assets/images/footer-vector-image.png"
import "./footer.css"
import Banner from "../../banner";
import BuyToken from "../../buy-token";
import RoadMap from "../../roadmap";

const Footer  = () => {
    return (
        <>
        <div className="footer_wrap">
            <div className="container-fluid">
                  <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6  ">
                            <div className="row footer_section_left">
                                <div className="col-lg-6 p-0 mt-2 "><img src={twitters}  alt="not awailable image" width="50%" /> </div> 
                                <div className="col-lg-6 twitter_footer_left">
                                
                                        <p className="text-white mb-5">TWITTER.COM/AGOV_FINANCE</p>
                                        <button type="button" class="btn btn-light ">Light</button>
                                </div>  
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 footer_section_right">
                            <div className="row">
                                <div className="col-lg-6 twitter_footer_right ">
                                    
                                    <p className="text-white mb-5">DISCORD.GG/ClubRare</p>
                                    <button type="button" class="btn btn-light ">JOIN</button>

                                </div>
                                <div className="col-lg-6 footer_icon_left p-0">
                                    <img src={footervector} alt="image are not available" width="50%" />
                                </div>
                            </div>
                        </div>
                        <div className="row footer_wrap2 ">
                            <p className="text-white text-center footer_paragraph  mt-3">2022 © Agov.finance</p>

                        </div>
                   </div>
            </div>
        </div> 
        </>
    )
}

export  default Footer


import React from "react";
import sandbox from "../../assets/images/sandbox.png"
import budweiser from "../../assets/images/path2643.png"
import mxnci  from "../../assets/images/mxn_ci_white 1.png"
import meta from "../../assets/images/meta.png"
import cointelegraph from "../../assets/images/cointelegraph.png"
import cision from "../../assets/images/cision.png"
import yahoo from "../../assets/images/yahoo.png"
import crypto from "../../assets/images/crypto.png"

import "./partner.css"

const Partner = () => {
    return (
        <>
        <div className="partner_wrap">
            <div className="container">
                <div className="row">
                    <div>
                       <h1 className="partners_heading text-center">PARTNERS </h1>
                    </div>
                </div>
                <div className="row mt-5 mb-3 mx-auto  partner ">
                    <div className="col-lg-3 "><img src={sandbox} alt="not available" width="100%" height={50}/></div>
                    <div className="col-lg-3 "><img src={budweiser}  alt="not available" width="100%" height={50} /></div>
                    <div className="col-lg-3 "><img src = {mxnci}  alt="not available" width="100%" height={50}/></div>
                    <div className="col-lg-3 "><img src={meta} alt="not available" width="100%" height={50} /></div>
                </div>
                <div className="row ">
                <div>
                       <h1 className="partners_heading text-center pt-5">PRESS </h1>
                </div>
                <div className="row mt-4 mx-auto mb-5 press pt-3  ">
                    <div className="col-lg-3"><img src={cointelegraph}  alt="not available" width="100%"  height={50}/></div>
                    <div className="col-lg-3"><img src={cision}  alt="not available" width="100%" height={50} /> </div>
                    <div className="col-lg-3"><img src={yahoo}  alt="not available" width="100%" height={50}/></div>
                    <div className="col-lg-3"><img src={crypto}  alt="not available" width="100%" height={50}/> </div>
                </div>
                </div>
            </div> 
        </div>
        </>
    )
}
export default Partner
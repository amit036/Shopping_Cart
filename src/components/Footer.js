import React from "react";
class Footer extends React.Component {
render(){
    return(
         <div>
          <footer className="page-footer font-small pt-4" style={{ background: "#302F29" }}>
            <div className="container-fluid text-center text-white text-md-left">
              <div className="row">
                <hr className="clearfix w-100 d-md-none pb-3"></hr>

                <div className="col-md-2 mb-md-0 mb-3" style={{ marginLeft: "200px" }}>
                  <h5>CUSTOMER CARE</h5>
                  <ul className="list-unstyled">
                    <li>
                      <div className="text-white">Contact</div>
                    </li>
                    <li>
                      <div className="text-white">Shipping</div>
                    </li>
                    <li>
                      <div className="text-white" >Customer Service</div>
                    </li>
                    <li>
                      <div className="text-white" >Gift Voucher
                     </div>
                    </li>
                    <li>
                      <div className="text-white" >Discount Codes
                     </div>
                    </li>
                  </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                  <h5>INFORMATION</h5>
                  <ul className="list-unstyled">
                    <li>
                      <div className="text-white" >Terms & Conditions</div>
                    </li>
                    <li>
                      <div className="text-white" >Policies</div>
                    </li>
                    <li>
                      <div className="text-white" >Blog</div>
                    </li>
                    <li>
                      <div className="text-white" >Collaborations</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-md-0 mb-3 ">
                  <h5>LOCATION</h5>
                  <ul className="list-unstyled text-white">
                    <li>
                      <div className="text-white" >Bengaluru</div>
                    </li>
                    <li>
                      <div className="text-white" >Mumbai</div>
                    </li>
                    <li>
                      <div className="text-white" >Singapore</div>
                    </li>
                    <li>
                      <div className="text-white" >Kolkata</div>
                    </li>
                    <li>
                      <div className="text-white" >Delhi</div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                  <h5>STAY CONNECTED</h5>
                  <img src="https://www.freeiconspng.com/uploads/logo-twitter-circle-png-transparent-image-1.png" className="border-round" style={{ width: "50px", height: "50px", float: "left"}}></img>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="border-round" style={{ width: "50px", height: "50px", float: "left", marginLeft: "30px"}}></img>
                  <img src="https://images.vexels.com/media/users/3/137399/isolated/preview/47c9900ae893cbed1e1599ab9c8bcb18-pinterest-icon-logo-by-vexels.png" className="border-round" style={{ width: "50px", height: "50px", float: "left", marginLeft: "30px"}}></img>
                  <div>
                    <h6 style={{ clear: "both", marginTop: "70px" }}>GET THE GOOD STUFF</h6>
                    <input type="text" style={{ background: "transparent", color: "white",width:"200px" }}></input>
                    <button style={{ background: "gray", border: "1px solid gray", color: "white" }}>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ background: "whitesmoke" }}></hr>
            <div className="footer-copyright text-center py-3 text-white offset-5">© 2019 Copyright:
            </div>
          </footer>
        </div>
    );
}
}
export default Footer;
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
 const Navbar = (props)=>{
    let countItems = props.items.length;
    return(
            <nav className="nav fixed-top  bg-dark" style={{height:"70px"}}>
           
                    <Link className="nav-item nav-link text-white" to="/"> <h1 style={{ marginLeft: "20px", marginRight: "10px",fontSize: "40px",marginTop:"10px" }}><span>SPIKEBALL</span></h1></Link>
                    <Link className="nav-item nav-link text-white" style={{ fontSize: "15px",marginLeft:"860px"}} to="/shop"><span><img src="https://png.pngtree.com/svg/20170818/item__339553.png" style={{color:"white" ,height:"35px"}}></img></span>SHOP</Link>
                    <Link className="nav-item nav-link text-white" style={{ fontSize: "15px",marginLeft:"20px" }} to="/login"><span><img src="http://img.clipartlook.com/user-user-clipart-528_594.png" style={{color:"white" ,height:"35px"}}></img></span>LOG IN</Link>
                    <Link className="nav-item nav-link text-white" style={{ fontSize: "15px",marginLeft:"20px" }} to="/signup"><span><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{color:"white" ,height:"35px"}}></img></span>SIGN UP</Link>
                    <Link to="/cart"><img src="http://icons.iconarchive.com/icons/google/noto-emoji-objects/1024/63007-shopping-cart-icon.png" style={{width:"30px", height:"35px",marginLeft:"20px",marginTop:"12px"}}></img><span><sub className="text-danger" style={{fontWeight:"bold",fontSize:"20px"}}>{countItems}</sub></span></Link>
            </nav>
   
        
    )
}
const mapStateToProps = (state)=>{
    return {
        items: state.addedItems
    }
  }
export default connect(mapStateToProps,null)(Navbar);

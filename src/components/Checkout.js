import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Checkout extends Component{
    render(){
  
        return(
            <div>
                <div style={{color:"red"}}><b>Total: ₹{this.props.total}</b></div>
                <Link><button className="btn btn-primary mt-3">Checkout</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        total: state.total
    }
}

export default connect(mapStateToProps,null)(Checkout)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Shop extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img style={{height:"350px"}} src={item.img} alt={item.title}/>    
                            <hr></hr>
                            <span style={{float:"right",background:"green",color:"white",marginLeft:"-20px",width:"40px",textAlign:"center"}}>{item.rating}★</span>         
                            <h5 style={{textAlign:"center"}}>{item.title}</h5>
                            </div>
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}</b></p>
                        </div>
                        <button className="btn btn-primary" onClick={()=>{this.handleClick(item.id)}}>ADD TO CART</button>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 style={{marginTop:"70px"}} className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)
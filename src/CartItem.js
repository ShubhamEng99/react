import React from 'react'

class CartItem extends React.Component{
   
    render(){
        
        const {title,quantity,price,img}=this.props.product
        return(
          <div className='cartitem'>
              <div className='left-block'>
                <img style={styles.image}/>
              </div>
              <div className='right-block'
              >
              <div>{title}</div>
              <div>Rs {price}</div>
              <div>QWT:{quantity}</div>
              <div className='cart-item-actions'>
                <button onClick={()=>this.props.onincreasequantity(this.props.product)}>+</button>
                <button onClick={this.decreasequantity}>-</button>
                <button>del</button>
              </div>
              </div>
          </div>
        );
    }
}
const styles={
    image:{
        height:90,
        width:90,
        borderRadius:4
    }
}

export default CartItem;
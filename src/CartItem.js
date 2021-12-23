import React from 'react'

const CartItem=(props)=>{
        const {title,quantity,price,img}=props.product
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
                <button onClick={()=>props.onincreasequantity(props.product)}>+</button>
                <button onClick={()=>props.ondecreasequantity(props.product)}>-</button>
                <button onClick={()=>props.ondeleteproduct(props.product)}>del</button>
              </div>
              </div>
          </div>
        );
    
}
const styles={
    image:{
        height:90,
        width:90,
        borderRadius:4
    }
}

export default CartItem;
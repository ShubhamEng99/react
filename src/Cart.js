
import React from 'react'
import CartItem from './CartItem'
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
                    products:[
                        {
                    title:'Phone',
                    quantity:1,
                    price:999,
                    img:'',
                    id:1
                        },{ 
                        title:'watch',
                    quantity:1,
                    price:99,
                    img:'',
                    id:2
                },{
                    title:'tv',
                    quantity:1,
                    price:9999,
                    img:'',
                    id:3
                }
                    ]
        
                }
            
 }

 handleincreasequantity=(product)=>{
     const {products}=this.state;
     const index=products.indexOf(product);
     products[index].quantity++;
    this.setState({
        products:products
    })
 }
render(){
    const {products}=this.state;
    console.log(products)
    return (
        <div className="cart">
        {products.map((product)=>{
            return(<CartItem
                 product={product}
                  key={product.id}
                  onincreasequantity={this.handleincreasequantity}/>)
        })}   
        </div>
    )
}
}

export default Cart
import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component{
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
handledecreasequantity=(product)=>{
 const {products}=this.state;
 const index=products.indexOf(product);
 if(products[index].quantity==0){return;}
 products[index].quantity--;
 this.setState({
     products:products
 })
}
deleteproduct=(product)=>{
 const {products}=this.state;
 const index=products.indexOf(product)
 products.splice(index,1);
 this.setState({
     products:products
 })
}
getcount=()=>{
  const {products}=this.state;
  return products.length;
}
carttotal=()=>{
  const {products}=this.state;
  let total=0;
  products.forEach((el)=>{
    total+=el.price*el.quantity
  })
  return total
}
  render(){
    const {products}=this.state;
  return (
  <React.Fragment>
    <Navbar   count={this.getcount()}/>
    <div className="App">
     <Cart 
   
     products={products}
     onincreasequantity={this.handleincreasequantity}
     ondecreasequantity={this.handledecreasequantity}
     ondeleteproduct={this.deleteproduct}
     />
    </div>
    <div>Total : {this.carttotal()}</div>
    </React.Fragment>
  );
}
}


export default App;

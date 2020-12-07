import React from 'react';
import './Product.css';

class Product extends React.Component{
    render(){
    return <div><h2>{this.props.products.Name}</h2><p>{this.props.products.Description}</p></div>
    }
}

export default Product;
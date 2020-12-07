import React from 'react';
import './Catalog.css'
import Product from './Product'
class Catalog extends React.Component{
    render(){
        console.log("Catalog component initialized")
        let Products = {
            'Name': 'Felix',
            'Description': 'Amazing dude'
        }
        return <div>
            <h1>{this.props.name} is Awesome</h1>
            <Product products={Products} />
            </div>
    }
}

export default Catalog;

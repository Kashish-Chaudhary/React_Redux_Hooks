import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import bread from '../images/bread.jfif.jpg'
import cake from '../images/cake1.jfif.jpg'
import dounut from '../images/dounut.jfif.jpg'
import muffins from '../images/muffins.jfif.jpg'
import { productQuantity,clearProduct } from '../actions/productQuantity'
function Cart({basketProps,productQuantity,clearProduct}) {
    // console.log(basketProps)
    let productsInCart = [];
    Object.keys(basketProps.products).forEach(function(item){
        // console.log(item);
        // console.log(basketProps.products[item].inCart)
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        
    })
    console.log(productsInCart)
    // const productImages = [bread,cake,dounut,muffins];
    const productImages = (product) =>{
        if(product.tagName === 'Bread'){
            return bread;
        }
        else if(product.tagName === 'Cake'){
            return cake;
        }
        else if(product.tagName === 'Dounut'){
            return dounut;
        }
        else
            return muffins;
        
    }
    
    productsInCart = productsInCart.map((product,index)=>{
        return(
            <Fragment key={index} >
                <div onClick={()=>clearProduct(product.tagName)} className="product" ><ion-icon name="close-circle"></ion-icon><img src={productImages(product)}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">{product.price}.00</div>
                <div className="quantity">
                    <ion-icon onClick={()=>productQuantity('decrease',product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.number}</span>
                    <ion-icon onClick={()=>productQuantity('increase',product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>

                </div>
                <div className="total">${product.number*product.price}.00</div>
            </Fragment>
        )
    })
    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
            {productsInCart}
            </div>
            <div className="bastketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total : {basketProps.cartCost}</h4>
                <h4 className="basketTotel"> </h4>
            </div>
            
        </div>
    );
}
const mapStateToProps = state =>({
    basketProps:state.basketState
})
export default connect(mapStateToProps,{ productQuantity,clearProduct})(Cart)  ;
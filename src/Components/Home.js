import React,{useState} from 'react';
import bread from '../images/bread.jfif.jpg'
import cake from '../images/cake1.jfif.jpg'
import dounut from '../images/dounut.jfif.jpg'
import muffins from '../images/muffins.jfif.jpg'
import {connect} from 'react-redux'
import {addBasket} from '../actions/addAction'
 function Home(props) {
     console.log(props)
    // const [basketNumbers,setBasketNumber]=useState(0);
    // const addToBasket = ()=> {
    //      console.log("Button Clicked");
    //     setBasketNumber(basketNumbers+1)

    // }
    return (
        <div className="container">
            <div className="image">
                <img src={bread} alt="Bread"/>
                <h3>Breads</h3>
                <h3> $15.00</h3>
                <font onClick={()=>props.addBasket('Bread')}  className="addToCart cart1" href="#" >Add to Cart</font>

            </div>
            <div className="image">
                <img src={cake} alt="cake"/>
                <h3>Cake</h3>
                <h3> $15.00</h3>
                <font onClick={()=>props.addBasket('Cake')} className="addToCart cart2" href="#" >Add to Cart</font>

            </div>
            <div className="image">
                <img src={dounut} alt="dounut"/>
                <h3>DouNut</h3>
                <h3> $15.00</h3>
                <font onClick={()=>props.addBasket('Dounut')}  className="addToCart cart3"  >Add to Cart</font>

            </div>
            <div className="image">
                <img src={muffins} alt="muffin"/>
                <h3>Muffin</h3>
                <h3> $15.00</h3>
                <font onClick={()=>props.addBasket('Muffin')} className="addToCart cart4"  >Add to Cart</font>

            </div>
            {/* <h1>Current NUmbers In Cart {basketNumbers}</h1> */}
            
        </div>
    );
}

export default connect(null,{ addBasket })(Home);
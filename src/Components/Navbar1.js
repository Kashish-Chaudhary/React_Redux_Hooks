import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import {getNumbers} from '../actions/getActions'
import { Link } from 'react-router-dom'
function Navbar(props) {
  console.log(props)
  useEffect(()=>{    // runs after everthing has rendered
    getNumbers();
  },[]);
    return (
    <header>
        <div className="overlay"></div>
        <nav>
          <h2 className='h2'>Neighbour <br/> Bakery</h2>
          <ul>
            <li className="cart"><Link to="/"><ion-icon name="home-outline"></ion-icon>Home</Link> </li>
            <li className="cart"><Link to="/about"><ion-icon name="document-text-outline"></ion-icon>About</Link></li>
            <li className="cart"><Link to="/cart"><ion-icon name="basket-outline"></ion-icon>Cart <span> {props.basketProps.basketNumbers}</span></Link></li>

          </ul>
        </nav>
      </header>
    );
}
const mapStateToProps = state =>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Navbar);

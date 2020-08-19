import React ,{useState} from 'react';
import './Navbar.css';
import Img from './bakery.jpg'
function Navbar(props) {
    const [changePage,setPage] = useState('');
    function changeContent (event,element){
        setPage(changePage => changePage=event)
    }
    return (
        
        
            <div className="top">
                    <div className='nav'>
                    <font className="LOGO" >Neighbour<br/> Bakery</font>
                    <ul className="list">
                        <span className='nav-item' ><font className="item" onClick={()=>this.changeContent('home',this)}> Home  </font></span> 
                        <span className='nav-item'>  <font className="item" onClick={()=>this.changeContent('menu',this)}> Menu </font></span>
                        <span className='nav-item'>  <font className="item" onClick={()=>this.changeContent('about',this)}> AboutUs </font></span> 

                    </ul>
                    </div>
                    
                {/* <div id="img1" style={{float:"right"}}><img src={Img} id="img"></img></div> */}
            {/* <button className='button'>=</button> */}
            </div>
       
    );
}

export default Navbar;
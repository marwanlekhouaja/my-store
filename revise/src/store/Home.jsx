import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import store from "./img/store.jpeg";
import { Link } from "react-router-dom";
import Nav from "./Nav";
function Home() {
  const styleImg={width:'500px',height:'300px',borderRadius:'4px'}  
  return (
    <>
      <Nav />
      <div className="row home mt-3 d-flex align-items-center justify-content-around m-auto">
        <div className="description col-md-5 col-sm-10 mb-4">
          <h1 style={{color:'cornflowerblue'}} >YOUR BEST ONLINE SHOP DESTINATION !</h1>
          <p className="w-75" >
            Discover a world of endless shopping possiblities at our online
            store Browse choose and order your favorite products from the
            confort of your home
          </p>
          <button className="shopNow"><Link to='/products'>Shop now</Link></button>
        </div>
        <div className="storeImage col-md-5 col-sm-10 mb-4">
          <img src={store} style={styleImg} alt="test" />
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import store from "./img/store.jpeg";
import { Link } from "react-router-dom";
function Home() {
  const styleImg = {width: "500px",height:'300px', borderRadius: "4px" };
  return (
    <>
    {/* mini info sur store  */}
      <div className="row home  d-flex align-items-center justify-content-evenly m-auto">
        <div className="description col-md-5 col-sm-10 ">
          <h1 style={{ color: "cornflowerblue" }}>
            YOUR BEST ONLINE SHOP DESTINATION !
          </h1>
          <p className="w-75">
            Discover a world of endless shopping possiblities at our online
            store Browse choose and order your favorite products from the
            confort of your home
          </p>
          <button className="shopNow">
            <Link to="/products">Shop now</Link>
          </button>
        </div>
        <div className="storeImage col-md-5 col-sm-10 mb-4">
          <img src={store} style={styleImg} alt="test" />
        </div>
      </div>
      {/* parrtie footer */}
      <footer className="p-1 fs-2 text-dark">
        <div className="icons social media d-flex justify-content-center">
          <div className="m-3" style={{ cursor: "pointer" }}>
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className="m-3" style={{ cursor: "pointer" }}>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className="m-3" style={{ cursor: "pointer" }}>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
        <div className="copyright text-center">
          <p style={{fontSize:'16px'}}>Copyright © marwanshop  All Rights Reserved</p>          
        </div>
      </footer>
    </>
  );
}

export default Home;

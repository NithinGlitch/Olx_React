import React from "react";
import { useState, useEffect } from "react";
import Navbarr from "../Navbarr";
import axios from "axios";
import './Product.css';
// import ProductCards from "./ProductCard";
import { Link } from 'react-router-dom';

const Product = () => {
  const [ads, setAds] = useState([]);
  const [word, setWord] = useState([]);


  useEffect(() => {
    //   console.log(localStorage["token"]);
    axios
      .get("http://localhost:21460/api/Ads/ListProduct")
      // {
      //   headers: {
      //     authorization: "Bearer " + localStorage["token"],
      //   },
      // })
      .then((response) => {
        if (response.data !== null) {
          setAds(response.data);
        }
      })
      .catch((error) => {
        console.log(this.error);
      });
  });
  return (
    <>
      {/* <div className='cards'>
      <h1>Check out these Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
       {ads.map((p) => {
        return(
          <ProductCards 
          key={p.adsid}
          imagepath={p.ima
          title={p.title}
            price={p.price}
            description={p.description.substring(0,20)}
           updateTime={p.updateTime}
          />
        )
       })} 
       </ul>
       </div>
       </div>
       </div> */}
       <Navbarr />
      <div className="cardss">
        <div className='cardss_container'>
          <input type="search" onChange={(e) => setWord(e.target.value)} placeholder="Search By Category" aria-label="Search" />
        </div>
        <div className='cardss_items'>
        <div className='row'>
          {ads.filter((d) => d.title.toLowerCase().includes(word)).slice(0, 10).map((d) => (
            <div className='col-md-3 mb-4' key={d.adsId}>
              <div className="card-md-3 h-100 text-center p-4">
                <img src={d.img} height="10px" className="card-img-top" alt="product" />
                <div className="card-body">
                  <h5 className="card-title mb-3">{d.title}</h5>
                  <p className="card-text mb-0">{d.description.substring(0, 20)}</p>
                  <p className="card-text mb-0"><b>Rs--{d.price}/-</b></p>
                  <p className='card-text mb-2'>{d.updateTime}</p>
                  <Link to={`/Products/${d.adsId}`} className="btn btn-outline-dark">Add to Cart</Link>
                </div>
              </div>
            </div>
          ))};
        </div>
      </div>
      </div>

    </>
  )
}; export default Product






import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import './Product.css';

const Search = (event) => {
    const [ads, setAds] = useState([]);
    const [word, setWord] = useState([]);
    axios
        .get("http://localhost:21460/api/Ads/GetProductByCategory/" + category)
        .then((response) => {
            //(response.data);
            console.log(response.data)
        })
        .catch((error) => {
            console.log(this.error);
        });

    event.preventDefault();

    return (
        <div className='cardss_items'>
            <div className='row'>
                {ads.filter((d) => d.title.toLowerCase().includes(word)).slice(0, 10).map((d) => (
                    <div className='col-md-3 mb-4' key={d.adsId}>
                        <div className="card-md-3 h-100 text-center p-4">
                            <img src={d.imagepath} height="10px" className="card-img-top" alt="product" />
                            <div className="card-body">
                                <h5 className="card-title mb-3">{d.title}</h5>
                                <p className="card-text mb-0">{d.description.substring(0, 20)}</p>
                                <p className="card-text mb-0"><b>Rs--{d.price}/-</b></p>
                                <p className='card-text mb-2'>{d.updateTime}</p>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
};
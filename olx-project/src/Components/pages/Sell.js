import React, { useState } from 'react';
import'../../App.css';
import axios from 'axios';


export default function Sell() {
   const [title,setTitle] = useState('');
   const [category,setCategory] = useState('')
   const [price,setPrice] = useState(0);
   const [description,setDescription]=useState('')
   const [img,setImg]=useState(null);
   const [error, setError] = useState('');

   const types = ['image/png','image/jpeg','image/jpg'];

   const ImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
        setImg(selectedFile);
        setError('')
    }
    else {
        setImg(null);
        setError('Please select a valid image type (jpg or png)');
    }
   }
   const addProduct = (event) => {
    let product = {
      Title: title,
      Category:category,
      Description:description,
      Price:price,
      Imagepath:img,

    };
    axios
      .post("http://localhost:24253/api/Ads/AddProduct/", product)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(this.error);
      });
    event.preventDefault();
  };
  return (
    <div className='main'>
      <div className='sub-main'>
      {/* <h1 className='sell'>Gud to go</h1> */}
      <br/>
    <br/>
    <br/>
    <br/>
        <div className="container">

<form action="form-second" onSubmit={addProduct}>
    <div className="">
        <div className="details personal">
           <h2>POST YOUR ADS</h2>
            <div className="fields">
                <div className="input-field">
                    <label>Title</label><br/>
                    <input type="text" placeholder="Enter the Title" required value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>

                <div className="input-field">
                    <label>Category</label><br/>
                    <input type="text" placeholder="Category" required value={category} onChange={(e)=>setCategory(e.target.value)}/>
                </div>

                <div className="input-field">
                    <label>Discription</label><br/>
                    <input type="text" placeholder="Discription" required value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>

                <div className="input-field">
                    <label>Price</label><br/>
                    <input type="number" placeholder="Enter the Price" required value={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                {/* should change */}
                <br />
                <div className="input-field">
                <label>Upload Photo</label><br/>
                <input type="text" placeholder="Enter the Img URL" required value={img} onChange={(e)=>setImg(e.target.value)}/>
                </div>
                <br/>
                <button className="login-button">
                    <span className="btnText">Submit</span>
                    <i className="uil uil-navigator"></i>
                </button>
                <br/>
              </div>

           
        </div> 
    </div>
</form>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
    </div>
  )
}
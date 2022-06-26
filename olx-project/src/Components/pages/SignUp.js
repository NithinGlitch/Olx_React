import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Validation from './Validation';


export default function Register() {
	//States for registration

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');


	const addDetails = (event) => {
		let details = {
			Name: name,
			Email: email,
			Mobile: mobile,
			Password: password,
			Role:role

		};
		axios
			.post("http://localhost:57240/api/User/Register", details)
			.then((response) => {
				console.log(response.data);
				
			})
			.catch((error) => {
				console.log(this.error);
			});
		event.preventDefault();
		alert("Your account is created!")
		
	

	return (
		<div className='main'>
      <div className="sub-main">
        <div>
          <div>
            <h1>Create New Account</h1>
          </div>
          <div className="imgs">
            <div className="container-image">
              <img src="/images/aa.webp" alt="profile" className="profile" />
            </div>
			{/* <div className="messages">
				{errorMessage()}
				{successMessage()}
			</div> */}
          </div><br/>
          <form>

            <div className="second-input">
              {/* <img src="/images/email.jpg" alt="email" className="email"/> */}
              <input className='input' type="text" name='fullname' value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Full Name" />
            </div><br/>
            <div className="second-input">
              {/* <img src="/images/pass.png" alt="pass" className="email"/> */}
              <input className='input' type="email" name='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email" />
            </div>
			<div className="second-input">
			<input className='input' type="tel" name='mobile' value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="Enter Your MobileNo" />
            </div>
			<div className="second-input">
			<input className='input' type="password" name='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password"  />
            </div>
			<div className="second-input">
			<input className='input' type="role" name='role' value={role} onChange={(event) => setRole(event.target.value)} placeholder="Enter Your Role"  />
            </div>
            
              <button className='login-button' onClick={addDetails}>Regiter</button>
              
          </form>
          
        </div>
      </div>
    </div>
	)



}
}

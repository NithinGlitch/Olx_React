import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Popular Locations</h2>
            <Link to='/'>Kolkata</Link>
            <Link to='/'>Mumbai</Link>
            <Link to='/'>Chennai</Link>
            <Link to='/'>Pune</Link>
            {/* <Link to='/'>Terms of Service</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Trending Locations</h2>
            <Link to='/'>Delhi</Link>
            <Link to='/'>Hyderabad</Link>
            <Link to='/'>Bangalore</Link>
            <Link to='/'>Nasik</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2><br/>
            <Link to='https://www.olxgroup.com/'>OLX Group</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>OLX People</Link>
          </div>
          <div class='footer-link-items'>
            <h2>OLX</h2>
            <Link to='/'>Help</Link>
            <Link to='/'>Sitemap</Link>
            <Link to='/'>Legal & Privacy information</Link>
            <Link to='/'>Blog</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          {/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              OLX
              <i class='fab fa-typo3' />
            </Link>
          </div> */}
          <large class='website-rights'>OLX &copy; 2022</large>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
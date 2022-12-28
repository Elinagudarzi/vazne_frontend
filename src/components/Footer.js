import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>درباره ما</h2>
            <Link to='/Signup'>راهنمای ثبت نام</Link>
            <Link to='/aboutus'>ما که هستیم؟</Link>
            <Link to='/'>هدف</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>تماس با ما</h2>
            <Link to='/'>تلفن</Link>
            <Link to='/'>آدرس</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>محتوا</h2>
            <Link to='/blog'>فیلم آموزشی</Link>
            <Link to='/blog'>محتوای آموزشی</Link>
          </div>
          <div class='footer-link-items'>
            <h2>فضای مجازی</h2>
            <Link to='/'>اینستاگرام</Link>
            <Link to='/'>فیس بوک</Link>
            <Link to='/'>یوتیوب</Link>
            <Link to='/'>توییتر</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              وزنه
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>وزنه © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
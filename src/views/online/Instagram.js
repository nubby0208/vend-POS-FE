import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { ReactComponent as Instagram } from "../../assets/images/logos/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/images/logos/facebook.svg";
import InstagramPromo from "../../assets/images/bg/instagramPromo.png";
import { ReactComponent as SvgIcon } from "../../assets/images/logos/store-6.svg";

import './online.css'

const Overview = () => {
     return(
          <>
               <div className='online-header'>
                    <h2>Sell on Instagram</h2>
               </div>
               <div className='online-title'>
                    <p>Get your products in front of your followers on the fastest growing and most personal social network.<Link to='' className=''>Need help?</Link></p>
               </div>
               <div className='online-overview'>
                    <div className='online-description'> 
                         <h6>Sell on Facebook</h6>
                         <p>Connect your store to Facebook so you can display and sell your products directly through your Facebook business page and reach billions of potential customers. On average, merchants see a sales increase of 15% after adding their store to Facebook.</p>
                    </div>
                    <div className='online-instagram-static-body'>
                         <div>
                              <h4>Set up your Instagram account</h4>
                              <p>To create a storefront on Instagram, first check if your business sells physical goods and is located in supported markets. Make sure it complies with Facebook/Instagram Commerce Policies and follow our step-by-step instructions to gain approval from Instagram.</p>
                         </div>
                         <div>
                              <span><Instagram /></span>
                         </div>
                    </div>
                    <div className='online-instagram-body'>
                         <div className='online-child-img'>
                              <span><Facebook /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Step 1. Connect your Facebook page</h6>
                              <p>Connect your Facebook page to upload your product catalog to your Facebook shop. Instagram will use your Facebook shop catalog to tag products.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Connect Facebook</Button>
                         </div>
                    </div>
                    <div className='online-instagram-body'>
                         <div className='online-child-img'>
                              <span><Instagram /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Step 2. Connect your Instagram profile</h6>
                              <p>Select “Connect Instagram” and follow the on-screen instructions to connect your Instagram account with your Facebook page. If your Instagram account isn’t a business one yet, you’ll be asked to convert it into one.</p>
                         </div>
                    </div>

                    <div className='online-description'> 
                         <h6>Sell on Instagram</h6>
                         <p>Showcase your products on Instagram and convert your audience to buyers with shoppable Instagram posts.</p>
                    </div>
                    <div className='online-facebook-body instagram-custom'>
                         <div>
                              <h6>Post your products to Instagram</h6>
                              <p>Tag your products in Instagram to get them in front of your audience as shoppable Instagram posts.</p>
                              <h6>Offer a seamless shopping experience</h6>
                              <p>Open up a new way for mobile shoppers to discover and shop your products with in-app checkout on Instagram.</p>
                              <h6>Grow your reach</h6>
                              <p>Showcase products to your followers and to millions of potential customers who explore new products in Instagram.</p>
                         </div>
                         <div>
                              <img src={InstagramPromo} />
                         </div>
                    </div>

                    <div className='online-instagram-static-body'>
                         <div>
                              <h4>Tips to gain approval from Instagram</h4>
                              <p>Before you can access tagging products in your profile, Instagram team will review your account to see if it complies with Commerce Eligibility Requirements and decide whether to approve your account. Follow these tips to increase your chances to get approved.</p>

                              <h6>1. Have a business account on Instagram</h6>
                              <p>Make sure your account on Instagram is converted into a business account and connected to your Facebook page.</p>
                              <h6>Complete your Instagram profile with business info</h6>
                              <p>Add a clickable link to your website in bio and fill in your contact information like your business address, phone number, and email.</p>
                              <h6>Build the content around your business</h6>
                              <p>Post consistently and maintain the brand’s visual identity. Be sure to remove anything that implies personal and utilize business terms to describe your business in profile. For example, write “Art Shop” instead of “Artist”.</p>
                         </div>
                         <div>
                              <span className='svg-icon'><SvgIcon /></span>
                         </div>
                    </div>
                    
               </div>
          </>
     )
}
export default Overview;

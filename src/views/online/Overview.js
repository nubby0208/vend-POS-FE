import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { ReactComponent as Instagram } from "../../assets/images/logos/instagram.svg";
import { ReactComponent as FacebookMessage } from "../../assets/images/logos/facebook_message.svg";
import { ReactComponent as Facebook } from "../../assets/images/logos/facebook.svg";
import { ReactComponent as Amazon } from "../../assets/images/logos/amazon.svg";
import { ReactComponent as Android } from "../../assets/images/logos/android.svg";
import { ReactComponent as Apple } from "../../assets/images/logos/apple.svg";
import { ReactComponent as BuyButton } from "../../assets/images/logos/buyButton.svg";
import { ReactComponent as Code } from "../../assets/images/logos/code.svg";
import { ReactComponent as Ebay } from "../../assets/images/logos/ebay.svg";
import { ReactComponent as Google } from "../../assets/images/logos/google.svg";
import { ReactComponent as Lines } from "../../assets/images/logos/lines.svg";
import { ReactComponent as Plus } from "../../assets/images/logos/plus.svg";
import { ReactComponent as Roket } from "../../assets/images/logos/roket.svg";
import { ReactComponent as Tiktok } from "../../assets/images/logos/tiktok.svg";
import './online.css'

const Overview = () => {
     return(
          <>
               <div className='online-header'>
                    <h2>Sell Everywhere</h2>
               </div>
               <div className='online-title'>
                    <p>Reach more customers by selling on your websites, blogs, popular marketplaces, social media — everywhere your customers shop.<Link to='' className=''>Need help?</Link></p>
               </div>
               <div className='online-overview'>
                    <div className='online-description'> 
                         <h6>Sell on Facebook</h6>
                         <p>Connect your store to Facebook so you can display and sell your products directly through your Facebook business page and reach billions of potential customers. On average, merchants see a sales increase of 15% after adding their store to Facebook.</p>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Instagram /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Instagram Shopping</h6>
                              <p>Connect your Instagram account to start selling to your Instagram followers.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Facebook /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Facebook Shopping</h6>
                              <p>Sell your products on Facebook and reach billions of potential customers who are already spending their time on this sales channel.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><FacebookMessage /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Facebook Message</h6>
                              <p>Add a Facebook Messenger link to your product pages to allow potential customers to easily communicate with and leverage your customer service.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>

                    <div className='online-description'> 
                         <h6>Sell on Instant Site</h6>
                         <p>Your Instant Site with online storefront is already set up. Simply fill in your business information and start selling right away.</p>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Roket /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Instant Site</h6>
                              <p>Your Instant Site with online storefront is already set up. Simply fill in your business information and start selling right away.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>

                    <div className='online-description'> 
                         <h6>Sell on your website</h6>
                         <p>Add an online store to any website you have. Lightspeed eCom (E-Series) blends in seamlessly into all web pages letting you start selling online on an existing website in minutes.</p>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Plus /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Other platforms and sitebuilders</h6>
                              <p>Add Lightspeed eCom (E-Series) to a website built with any CMS or sitebuilder: Drupal, Strikingly, Tilda and so on.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Code /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Custom Website</h6>
                              <p>Add Lightspeed eCom (E-Series) to your custom website using our widgets. Lightspeed eCom (E-Series) blends in seamlessly into any websites.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Lines /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Squarespace</h6>
                              <p>You can easily add Lightspeed eCom (E-Series) to your Squarespace website. Your store will look as an original part of your site.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><BuyButton /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Buy Buttons</h6>
                              <p>Add a buy button for your products anywhere on your website, blog, or even your friend’s blog, and start selling immediately.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>

                    <div className='online-description'> 
                         <h6>Sell on the go</h6>
                         <p>Accept and process orders on your mobile device. You can also add products, manage inventory, and more.</p>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Apple /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Lightspeed eCom (E-Series) Mobile for iOS</h6>
                              <p>Manage your business at full capacity no matter where you are. Stay informed with push notifications and add products, update stock, process orders — do anything on the go.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Android /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Lightspeed eCom (E-Series) Mobile for Android</h6>
                              <p>Manage your products, orders, inventory, and more while you are on the go.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>

                    <div className='online-description'> 
                         <h6>Sell on online marketplaces</h6>
                         <p>Attract more customers by advertising your products on popular marketplaces and comparison websites.</p>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Google /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Google Shopping</h6>
                              <p>Increase visibility of your products in Google searches and Google Shopping.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Tiktok /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>TikTok</h6>
                              <p>Connect your TikTok account and start selling on the world’s buzziest social media app.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Amazon /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Amazon</h6>
                              <p>List your products where the world shops and reach 250 million active shoppers.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
                    <div className='online-body'>
                         <div className='online-child-img'>
                              <span><Ebay /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Ebay</h6>
                              <p>List your products on eBay and reach 159 million active shoppers.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button className='btn overview-Button' >Learn More </Button>
                         </div>
                    </div>
               </div>
          </>
     )
}
export default Overview;

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { Box, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import fbMessengerPromo from "../../assets/images/bg/fbMessengerPromo.png";
import fbMessengerMain from "../../assets/images/bg/fbMessengerMain.png";


import './online.css'

TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.number.isRequired,
     value: PropTypes.number.isRequired,
};

function TabPanel(props) {
     const { children, value, index, ...other } = props;

     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other}
          >
               {value === index && (
                    <div>{children}</div>
               )}
          </div>
     );
}

function a11yProps(index) {
     return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
     };
}


const Facebook = () => {

     const [value, setValue] = useState(0);
     const handleChange = (event, newValue) => {
          setValue(newValue);
     };
     return (
          <>
               <div className='online-header'>
                    <h2>Sell on Facebook</h2>
               </div>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: '#3f32f5', color: 'green' } }}>
                         <Tab label="Facebook Store" {...a11yProps(0)} />
                         <Tab label="Facebook Messenger" {...a11yProps(1)} />
                    </Tabs>
               </Box>
               <TabPanel value={value} index={0} >
                    <div className='online-title'>
                         <p>Sell your products on Facebook and reach billions of potential customers who are already spending their time on this sales channel.<Link to='' className=''>Need help?</Link></p>
                    </div>
                    <div className='online-overview'>
                         <div className='online-description'> 
                              <h6>Sell on Facebook</h6>
                              <p>Connect your store to Facebook so you can display and sell your products directly through your Facebook business page and reach billions of potential customers. On average, merchants see a sales increase of 15% after adding their store to Facebook.</p>
                         </div>
                         <div className='online-facebook-body'>
                              <div>
                                   <h5>Get connected</h5>
                                   <p>Simply connect your online store to Facebook by selecting “Connect” and choose the Facebook page that you would like to link with. If you already have products in your shop on Facebook, they will be replaced with products from your Lightspeed eCom (E-Series) store.</p>
                                   <div><Button>Connect</Button></div>
                                   <span>By clicking “Connect”, you accept the <Link to=''>Terms of Service.</Link></span>
                              </div>
                              <div>
                                   <img src="https://d34ikvsdm2rlij.cloudfront.net/fbshops/static/2022/2022-22237-g7cae3028a84/images/fbShopsMain.png" />
                              </div>
                         </div>

                         <div className='online-description'> 
                              <h6>Why sell on Facebook?</h6>
                              <p>Reach billions of shoppers on Facebook and grow your customer base.</p>
                         </div>
                         <div className='online-facebook-body'>
                              <div>
                                   <h6>Sell products to billions of Facebook users</h6>
                                   <p>Sell your products on Facebook and reach billions of potential customers who are already spending all of their time on this sales channel.</p>
                                   <h6>Your very own Facebook Shop</h6>
                                   <p>With Facebook Shop, customers can browse your products directly through the always visible and mobile-friendly “Shop” section of your Facebook page — even when browsing from Facebook’s mobile app. Lightspeed eCom (E-Series) automatically syncs all of your product information keeping your product catalog up to date without any additional effort.</p>
                                   <h6>Reach more shoppers with Instagram Shop</h6>
                                   <p>Tag your products on Instagram to get them in front of your audience as shoppable Instagram posts. Meet potential shoppers where they are and grow your customer base.</p>
                              </div>
                              <div>
                                   <img src="https://d34ikvsdm2rlij.cloudfront.net/fbshops/static/2022/2022-22237-g7cae3028a84/images/fbShopsPromo.png"></img>
                              </div>
                         </div>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={1}>
                    <div className='online-title'>
                         <p>Add a Facebook Messenger link to your product pages to allow potential customers to easily communicate with and leverage your customer service.<Link to='' className=''>Need help?</Link></p>
                    </div>
                    <div className='online-overview'>
                         <div className='online-description'> 
                              <h6>Getting started</h6>
                              <p>Connect to Facebook to enable Messenger. Once Facebook is connected, your customers will be able to message you from your product pages.</p>
                         </div>
                         <div className='online-facebook-body'>
                              <div>
                                   <h5>Set up Facebook Messenger</h5>
                                   <p>Enable Messenger in two simple steps: connect your Facebook Page and enter the address of your store. When prompted by Facebook, allow Lightspeed eCom (E-Series) to access that page. Lightspeed eCom (E-Series) won’t post or change anything on your page.</p>
                                   <div><Button>Connect Facebook</Button></div>
                              </div>
                              <div>
                                   <img src={fbMessengerMain} />
                              </div>
                         </div>

                         <div className='online-description'> 
                              <h6>Why use Facebook Messenger</h6>
                              <p>Whoever has a Facebook page, is already on Messenger — think millions of people who communicate through Messenger daily.</p>
                         </div>
                         <div className='online-facebook-body'>
                              <div>
                                   <h6>Chat with customers in real time</h6>
                                   <p>With a desktop and mobile app, Messenger makes it easy to be responsive and reply back instantly, whether you’re at your desk or away on your mobile phone.</p>
                                   <h6>Create a personal connection</h6>
                                   <p>Customers message your business the same way they message relatives and friends — letting you humanize your brand and build a long-term relationship.</p>
                                   <h6>Stay in touch</h6>
                                   <p>Conversations are saved in Messenger’s inbox allowing you to re-connect with customers at any time, and ask for feedback, promote a sale event, or inform that the product they asked about is back in stock.</p>
                              </div>
                              <div>
                                   <img src={fbMessengerPromo} />
                              </div>
                         </div>
                    </div>
               </TabPanel>
          </>
     )
}
export default Facebook;

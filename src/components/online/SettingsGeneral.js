import React, { useState, useMemo } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Select from 'react-select'
import { Box, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import '../../views/online/online.css'
import countryList from 'react-select-country-list'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ReactComponent as Facebook } from "../../assets/images/logos/facebook_1.svg";
import { ReactComponent as Instagram } from "../../assets/images/logos/instagram_1.svg";
import { ReactComponent as Twitter } from "../../assets/images/logos/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/images/logos/youtube.svg";
import { ReactComponent as Pinterest } from "../../assets/images/logos/pinterest.svg";
import { ReactComponent as General } from "../../assets/images/logos/general.svg";
import { ReactComponent as Pig } from "../../assets/images/logos/pig.svg";
import { ReactComponent as Google } from "../../assets/images/logos/google.svg";
import { ReactComponent as Facebook_1 } from "../../assets/images/logos/facebook.svg";
import { ReactComponent as Pinterest_1 } from "../../assets/images/logos/pinterest_1.svg";
import { ReactComponent as Ring } from "../../assets/images/logos/ring.svg";
import { ReactComponent as TikTok } from "../../assets/images/logos/tiktok.svg";
import { ReactComponent as Store_7 } from "../../assets/images/logos/store-7.svg";
import { ReactComponent as Mark } from "../../assets/images/logos/mark.svg";
import { RiGovernmentLine } from "react-icons/ri";
import SelectCurrency from './currency'
import IOSSwitch from '../IOSSwitch'

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


const SettingsGeneral = () => {

     const [value, setValue] = useState(0);
     const [country, setCountry] = useState('')

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };
     const options = useMemo(() => countryList().getData(), [])

     const onSelectedCurrency = currencyAbbrev => {
          console.log(`Selected ${currencyAbbrev}`)
     }

     const changeHandler = value => {
          console.log(value)
          setCountry(value)
     }

     const isShow = (key) => {
          console.log(key)
     }

     return (
          <div className='componentPadding'>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} scrollButtons="auto" variant="scrollable" TabIndicatorProps={{ style: { background: '#3f32f5', color: 'green' } }}>
                         <Tab label="Store Profile" {...a11yProps(0)} />
                         <Tab label="Regional Settings" {...a11yProps(1)} />
                         <Tab label="Cart & Checkout" {...a11yProps(2)} />
                         <Tab label="Tracking & Analytics" {...a11yProps(3)} />
                    </Tabs>
               </Box>
               <TabPanel value={value} index={0} >
                    <div className='online-settings-body '>
                         <div className='half-body'>
                              <h4>Store name and web address</h4>
                              <p>Your store name is the name under which your store appears to customers. Your store’s web address is displayed on customer-facing invoices and emails, and is also used when sharing products via social networks.</p>
                              <div >
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Store name</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                             <p className='description'>The name of your store as you want it to appear in your store’s header, email notifications, and invoices.</p>
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Store’s web address (URL)</p></div>
                                        <div className='half-body'><Button >Specify Address</Button></div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body '>
                         <div className='half-body'>
                              <h4>Company name and email</h4>
                              <p>The official name of your business. If you don’t have a registered business yet, specify your store name as the company name.</p>
                              <div >
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Company name</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Company email</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' type='email' />
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body '>
                         <div className='half-body'>
                              <h4>Company address</h4>
                              <p>The physical address of your store or place of business. If you don’t have a business address, enter the address from which you ship orders.</p>
                              <div >
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Street address</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>City</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>State/Province/Region</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Zip/Postal code</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                        </div>
                                   </div>

                                   <div className='flex country'>
                                        <div className='half-body'><p className='name'>Country</p></div>
                                        <div className='half-body'>
                                             <Select options={options} value={country} onChange={changeHandler} />
                                             <p className='description'> Some of your payment methods may stop working if you change your store’s country. Make sure to check them on the <Link to=''>Payment page</Link> after saving the changes.</p>
                                             <p className='description'>Selecting another country does not change store language, currency, or other geographical settings. To change these, go to the <Link to=''>Regional settings</Link>.</p>
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Phone Number</p></div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body '>
                         <div className='half-body'>
                              <h4>Social media accounts</h4>
                              <p>Specify your social media accounts to encourage customers to connect with you. These accounts will be displayed in email notifications sent by your store.</p>
                              <div >
                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>
                                                  <span><Facebook /></span> Facebook
                                             </p>
                                        </div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' placeholder="https://facebook.com/page" />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>
                                                  <span><Instagram /></span> Instagram
                                             </p>
                                        </div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' placeholder="https://instagram.com/username" />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>
                                                  <span><Twitter /></span> Twitter
                                             </p>
                                        </div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' placeholder="https://twitter.com/username" />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>
                                                  <span><Youtube /></span> Youtube
                                             </p>
                                        </div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' placeholder="https://youtube.com/username" />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>
                                                  <span><Pinterest /></span> Pinterest
                                             </p>
                                        </div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' placeholder="https://pinterest.com/username" />
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body '>
                         <div className='half-body'>
                              <h4 className='redColor'>Storefront is closed </h4>
                              <p>Remain open for the IPs (comma-separated)</p>
                              <div >
                                   <textarea></textarea>
                                   <p className='description'> Your IP: 188.43.235.177</p>
                                   <Button >Open Storefront</Button>
                              </div>
                         </div>
                    </div>

                    <div className='online-body'>
                         <div className='online-child-img settings'>
                              <span><RiGovernmentLine /></span>
                         </div>
                         <div className='online-list-description'>
                              <h6>Setup Wizard</h6>
                              <p>Get your store ready for sales. Proceed to setup wizard for a quick launch.</p>
                         </div>
                         <div className='online-child-button'>
                              <Button >Proceed to Wizard </Button>
                         </div>
                    </div>
               </TabPanel>

               <TabPanel value={value} index={1}>
                    <div className='flex'>
                         <div className='generalMagin'>
                              <div className='online-settings-body'>
                                   <h5>Currency</h5>
                                   <div className='flex country'>
                                        <div className='half-body'><p className='name'>Currency</p></div>
                                        <div className='half-body'>
                                             <SelectCurrency value={'USD'} onCurrencySelected={onSelectedCurrency} className='fullWidth' />
                                        </div>
                                   </div>

                                   <div className='flex country'>
                                        <div className='half-body'><p className='name'>Price display format</p></div>
                                        <div className='half-body'>
                                             <select className='fullWidth'>
                                                  <option>19999</option>
                                                  <option>19999</option>
                                                  <option>19999</option>
                                             </select>
                                        </div>
                                   </div>

                                   <div className='divider'></div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <div>1 Canadian dollar (C$) =</div>
                                             <div>100 U.S. dollars = $100.00</div>
                                        </div>
                                        <div className='half-body flex'>
                                             <input className='vend-settings-input' />
                                             <p className='name'>U.S. dollar</p>
                                        </div>
                                   </div>


                                   <div className='divider'></div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Currency symbol</p></div>
                                        <div className='half-body flex'>
                                             <p>prefix:</p>
                                             <input className='vend-settings-input' />
                                             <p>suffix:</p>
                                             <input className='vend-settings-input' />
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Hide trailing zeros in fractional part</p></div>
                                        <div className='half-body flex'>
                                             <RadioGroup
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                                  defaultValue="en"
                                                  className='flex'
                                                  name="radio-buttons-group">
                                                  <FormControlLabel value="di" control={<Radio onChange={() => isShow('disable')} size="small" />} label="Disable" />
                                                  <FormControlLabel value="en" control={<Radio onChange={() => isShow('enable')} size="small" />} label="Enable" />
                                             </RadioGroup>
                                        </div>
                                   </div>

                                   <div className='fullWidth exampleDollar'>
                                        <p className='description'>Price display example</p>
                                        <h5>$1 234</h5>
                                   </div>

                              </div>

                              <div className='online-settings-body'>
                                   <h5>Currency</h5>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Weight unit</p></div>
                                        <div className='half-body'>
                                             <select className='fullWidth'>
                                                  <option>ct</option>
                                                  <option>g</option>
                                                  <option>oz</option>
                                                  <option>lbs</option>
                                                  <option>kg</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Dimensions unit</p></div>
                                        <div className='half-body'>
                                             <select className='fullWidth'>
                                                  <option>mm</option>
                                                  <option>cm</option>
                                                  <option>in</option>
                                                  <option>yd</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Display format</p></div>
                                        <div className='half-body'>
                                             <select className='fullWidth'>
                                                  <option>19999</option>
                                                  <option>19999</option>
                                                  <option>19999</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Hide trailing zeros in fractional part</p></div>
                                        <div className='half-body flex'>
                                             <RadioGroup
                                                  aria-labelledby="demo-radio-buttons-group-label"
                                                  defaultValue="en"
                                                  className='flex'
                                                  name="radio-buttons-group">
                                                  <FormControlLabel value="di" control={<Radio onChange={() => isShow('disable')} size="small" />} label="Disable" />
                                                  <FormControlLabel value="en" control={<Radio onChange={() => isShow('enable')} size="small" />} label="Enable" />
                                             </RadioGroup>
                                        </div>
                                   </div>
                                   <div className='fullWidth exampleDollar'>
                                        <p className='description'>Price display example</p>
                                        <h5>1 234.00 lbs</h5>
                                   </div>
                              </div>
                         </div>


                         <div className='generalMagin'>
                              <div className='online-settings-body'>
                                   <h5>Store Language</h5>
                                   <p className='name'>
                                        Your store language defines what language your store communicates in with customers. This includes the store itself, your product catalog, email notifications, and invoices.
                                        <br />To make your store multilingual, enable additional languages in Language Settings.
                                   </p>
                                   <div className='flex'>
                                        <p className='name'>Store language: &nbsp;&nbsp;&nbsp;</p>
                                        <p>English</p>
                                   </div>
                                   <Button>Language Settings</Button>
                              </div>

                              <div className='online-settings-body'>
                                   <h5> Date & Time</h5>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Time Zone</p></div>

                                        {/* <div className='half-body'>
                                             <TimezoneSelect
                                                  value={tz}
                                                  onChange={setTz}
                                                  labelStyle="altName"
                                                  timezones={{
                                                  ...allTimezones,
                                                  "America/Lima": "Pittsburgh",
                                                  "Europe/Berlin": "Frankfurt"
                                                  }} />
                                        </div> */}
                                   </div>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Time display format</p></div>
                                        <div className='half-body'>
                                             <select class="fullWidth" >
                                                  <option value="hh:mm a">hh:mm AM/PM</option>
                                                  <option value="hh:mm:ss a">hh.mm.ss AM/PM</option>
                                                  <option value="HH:mm">hh:mm</option>
                                                  <option value="HH:mm:ss">hh:mm:ss</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className='flex'>
                                        <div className='half-body'><p className='name'>Date display format</p></div>
                                        <div className='half-body'>
                                        <select class="fullWidth">
                                             <option value="dd-MM-yyyy">27-04-2022</option>
                                             <option value="dd/MM/yyyy">27/04/2022</option>
                                             <option value="dd.MM.yyyy">27.04.2022</option>
                                             <option value="MM-dd-yyyy">04-27-2022</option>
                                             <option value="MM/dd/yyyy">04/27/2022</option>
                                             <option value="yyyy/MM/dd">2022/04/27</option>
                                             <option value="MMM d, yyyy">Apr 27, 2022</option>
                                             <option value="MMMM d, yyyy">April 27, 2022</option>
                                             <option value="EEE, MMM d, ''yy">Mon, Apr 27, 22</option>
                                             <option value="EEE, MMMM d, yyyy">Mon, April 27, 2022</option>
                                             <option value="dd MMMM yyyy">27 April 2022</option>
                                        </select>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </TabPanel>

               <TabPanel value={value} index={2}>
                    <div className='online-settings-body'>
                         <h4>Catalog settings</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Default out of stock products behavior</p>
                                   
                              </div>
                              <div className='forth-body'>
                                   <select class="fullWidth">
                                        <option value="SHOW">Show on storefront</option>
                                        <option value="HIDE">Hide from storefront</option>
                                        <option value="ALLOW_PREORDER">Show and allow pre-order</option>
                                   </select>
                              </div>
                         </div>
                         
                         <div className='forth-body'>
                              <p className='description'>Once a product is out of stock, you can hide it from your storefront until it’s available for purchase again. You can still show the product on display to let your customers know you sell it. For products that remain shown, you can allow pre-orders.</p>
                              <p className='description'>This setting applies to new products by default. To change out of stock behavior for each product individually, go to the product page. To hide or show all current products, go to Products → Mass Update.</p>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Default products sort order</p>
                                   
                              </div>
                              <div className='forth-body'>
                                   <select class="fullWidth">
                                        <option value="Defined by store owner">Defined by store owner</option>
                                        <option value="Date added">Date added</option>
                                        <option value="Price: low to high">Price: low to high</option>
                                        <option value="Price: high to low">Price: high to low</option>
                                        <option value="Name: A to Z">Name: A to Z</option>
                                        <option value="Name: Z to A">Name: Z to A</option>
                                   </select>
                              </div>
                         </div>

                         <div className='forth-body'>
                              <p className='description'>If option “Defined by store owner” is selected, your customers will see products in the same order as specified on Catalog → Categories page.</p>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Show price per unit</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>
                         <div className='forth-body'>
                              <p className='description'>You can manage item price fields on Settings → Product Types, and use it on Product details.</p>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>Checkout settings</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Minimum allowed order subtotal</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Leave empty if no limit</p>
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Maximum allowed order subtotal</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Leave empty if no limit</p>
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Default payment status for orders with zero total</p>
                              </div>
                              <div className='forth-body'>
                                   <select className='fullWidth'>
                                        <option>Awaiting Payment</option>
                                        <option>Paid</option>
                                   </select>
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Require phone number at checkout</p>
                                   <p className='description'>This option does not affect PayPal Express Checkout and Google Pay</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>When the “Buy Now” button is clicked for a product with options:</p>
                              </div>
                              <div className='forth-body'>
                                   <select className='fullWidth'>
                                        <option>Add the product to cart with the default options</option>
                                        <option>Open the product page and ask to select options</option>
                                   </select>
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Open bag when the “Add to bag” button is clicked</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Ask for the company name</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Ask for a ZIP/postal code</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Custom tracking code on Order Confirmation page</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Ask for a billing address during checkout</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                    </div>

                    <div className='online-settings-body'>
                         <h4>“Compare to” price</h4>
                         <div className='flex fullWidth'>
                              <div className='seven-body'>
                                   <div className='flex'>
                                        <div className='half-body '>
                                             <p className='name'>Display “Compare to” price on</p>
                                        </div>
                                        <div className='half-body'>
                                             <select class="fullWidth">
                                                  <option value="SHOW">Product list & product details pages</option>
                                                  <option value="HIDE">Product details pages</option>
                                             </select>
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>“Compare to” price name</p>
                                        </div>
                                        <div className='half-body'>
                                             <input className='vend-settings-input fullWidth' />
                                             <p className='description'>Examples: MRP, List price, was</p>
                                        </div>
                                   </div>

                                   <div className='flex'>
                                        <div className='half-body'>
                                             <p className='name'>Show “Save” in</p>
                                        </div>
                                        <div className='half-body'>
                                             <select class="fullWidth">
                                                  <option value="Defined by store owner">Percents</option>
                                                  <option value="Date added">Absolute values ($)</option>
                                             </select>
                                        </div>
                                   </div>
                              </div>

                              <div className='third-body compareMargin'>
                                   <div class="fullWidth exampleDollar">
                                        <p class="description">Price display example</p>
                                        <h5>$1 234</h5>
                                   </div>
                              </div>
                         </div>

                    </div>

                    <div className='online-settings-body'>
                         <h4>Order comments</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Order notes field</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Order notes field caption</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                              </div>
                         </div>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Require customers to leave order comments</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>E-goods</h4>
                         <p className='name'>
                              Sell downloadable products like software, audio and video files, e-books, or any other kind of file. Downloadable products (e-goods) are delivered to customers automatically via unique download links. Learn more
                         </p>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Link lifetime, hours</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Leave empty if no limit</p>
                              </div>
                         </div>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Number of download attempts</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Leave empty if no limit</p>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>Favorites</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Your customers will be able to favorite your items and keep a wish list for future purchases.<br/>It encourages them to visit your store more often and reminds to buy the products they like.</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>Order ID</h4>
                         <div className='flex'>
                              <div className='seven-body'>
                                   <p className='name'>Customize your order ID format to fit your business needs. You can include your store name, change ID to a higher number, or edit it for administration purposes.</p>
                                   <Button className='editOrderIDFomart'>Edit Order ID Fomart</Button>
                              </div>
                              <div className='third-body compareMargin'>
                                   <div class="fullWidth exampleDollar">
                                        <p class="description">Future order ID</p>
                                        <h5>$1 234</h5>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>Related Products</h4>
                         <p className='name'>Set up related product recommendations to promote your catalog and increase sales. You can set related items on the Related products tab of each product’s settings. Use the Bulk Editor in Products to add related items to several products at once.</p>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Show the “You may also like” section</p>
                                   <p className='description'> The “You may also like” section will be shown for items that have related products assigned to them. For items that don’t have related products, this section will be hidden.</p>
                              </div>
                              <div className='forth-body'>
                                   <select class="fullWidth">
                                        <option value="On product details page only">On product details page only</option>
                                        <option value="On product details page and in cart">On product details page and in cart</option>
                                   </select>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>Newsletters</h4>
                         <p className='name seven-body '>Add an option to subscribe to your newsletter at checkout to start building a mailing list of customers who are willing to receive promotional emails.</p>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Request customers’ approval for your marketing emails at checkout</p>
                                   <p className='description'> The “You may also like” section will be shown for items that have related products assigned to them. For items that don’t have related products, this section will be hidden.</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Text label</p>
                                   <p className='description'>Edit the text displayed for the sign-up option to detail what kind of emails you are sending, or to request any consent your business needs to obtain.</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Preselect the sign-up option</p>
                                   <p className='description'>When enabled, the sign-up checkbox is ticked in advance: customers need to uncheck the checkbox if they do not consent to receiving marketing emails from you. This accelerates the growth of your mailing list but may not comply with local law.</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <h4>Tips and gratuity</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Tipping option at checkout</p>
                                   <p className='description'>Turn this on to suggest customers leave a tip at checkout. You can change the tip amounts customers can choose from and edit the wording to make the tipping suggestion fit your business. Tips are added to order total after taxes have been calculated. Learn more about tipping options in Help Center.</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='flex'>
                              <p className='name'>Tip amounts: &nbsp;&nbsp;&nbsp;</p>
                              <p>0%, 5%, 10%</p>
                         </div>

                         <span className='absolute-icon'>
                              <Pig />
                         </span>

                         <div className='third-body'>
                              <Button className='fullWidth'>Tip Settings</Button>
                         </div>
                    </div>

                    <div className='flex general-margin-top'>
                         <div className='generalpadding'>
                              <span>
                                   <General />
                              </span>
                         </div>
                         <div className='generalpadding'>
                              <p className='name'>Create a custom checkout process</p>
                              <p className='description'>Adapt your store checkout flow to your business requirements.</p>
                              <Button>Learn More</Button>
                         </div>
                    </div>

               </TabPanel>

               <TabPanel value={value} index={3}>
                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <Google />
                         </span>
                         <h4>Google Analytics</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Google Analytics ID</p>
                                   <p className='description'>Make sure you’ve connected Google Analytics according to our <Link to=''>Help Center article</Link>.</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Enter your Google Analytics Web Property ID (UA-XXXXX-YY for Universal Analytics or G-XXXXXXX for Google Analytics 4)</p>
                              </div>
                         </div>

                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Remarketing with Google Analytics</p>
                                   <p className='description'>Google Remarketing lets you follow up with people who have already visited your website, and deliver ad content specifically targeted to the interests they expressed during those previous visits. Learn more</p>
                              </div>
                              <div className='forth-body'>
                                   <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="en"
                                        className='flex'
                                        name="radio-buttons-group">
                                        <FormControlLabel value="di" control={<Radio onChange={() => isShow('disable')} size="small" />} label="Disable" />
                                        <FormControlLabel value="en" control={<Radio onChange={() => isShow('enable')} size="small" />} label="Enable" />
                                   </RadioGroup>
                              </div>
                         </div>

                         
                    </div>

                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <Facebook_1 />
                         </span>
                         <h4>Facebook Pixel</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Facebook Pixel ID</p>
                                   <p className='description'>Facebook pixel lets you track your store visitors and their behavior — giving you a lot of data to optimize your Facebook ads, so you can retarget store visitors, track your ad results, get more conversions and boost sales. <Link to=''>Learn more</Link>.</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Enter your Pixel ID or paste the Pixel Code into the field above</p>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <Pinterest_1 />
                         </span>
                         <h4>Pinterest Tag</h4>
                         <p className='description seven-body'>Add a Pinterest Tag to see how many customers added products to the cart, started checkout, or placed an order after viewing your ads. This will help to optimize your campaigns and target them at people who show interest in your products.</p>
                         <div className='flex'>
                              <div className='forth-body pinterestTag'>
                                   <p className='name'>Add a Pinterest Tag to your store</p>
                                   <p className='description'>1. Log in to your Pinterest business account and go to Ads → Conversions.</p>
                                   <p className='description'>2. Choose Create Pinterest Tag and use Done button to confirm the tag creation.</p>
                                   <p className='description'>3. Select the name of a Pinterest tag from the list and copy your Unique Tag ID.</p>
                                   <p className='description'>4. Paste the ID into the corresponding field on this page and save the changes.</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Enter your Unique Tag ID or a tag base code</p>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <Ring />
                         </span>
                         <h4>Snapchat Pixel</h4>
                         <p className='description seven-body'>Measure your Snapchat ads impact on the sales. Add a Snap Pixel to see how many snapchatters interact with your store after viewing your ads.</p>
                         <div className='flex'>
                              <div className='forth-body pinterestTag'>
                                   <p className='name'>Add a Snap Pixel to your store</p>
                                   <p className='description'>1. Log in to your Snapchat Ads Manager.</p>
                                   <p className='description'>2. In the top corner menu select Snap Pixel and then use Setup Pixel button.</p>
                                   <p className='description'>3. Copy the Pixel snippet, paste it into the corresponding field on this page and save the changes.</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Enter your Snap Pixel snippet</p>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <TikTok />
                         </span>
                         <h4>TikTok Pixel</h4>
                         <div className='flex'>
                              <div className='forth-body pinterestTag'>
                                   <p className='name'>The TikTok Pixel is a powerful measurement tool that tracks the impact of your TikTok ads on your website. This clever piece of code allows you to monitor user activity and target the right audience for your ads, ultimately increasing sales.</p>
                              </div>
                              <div className='forth-body'>
                                   <Link to=''>Connect TikTok For Business</Link>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <Store_7 />
                         </span>
                         <h4>Google Ads Tags</h4>
                         <p className='description seven-body'>Follow up your Google advertising campaigns and boost their results with the help of Google Ads Tags. Add tags to your store and view which ads are the most sales driving ones. Learn more about how to set up conversion tracking in Google.</p>
                         <div className='flex'>
                              <div className='forth-body pinterestTag'>
                                   <p className='name'>Add Google Tags to your store</p>
                                   <p className='description'>1. Log in to your Google Ads account and go to Tools & Settings → Measurement → Conversions, use + button and choose Website.</p>
                                   <p className='description'>2. Create a new conversion action for Purchase Category.</p>
                                   <p className='description'>3. Select Install the tag yourself, copy the Global site tag and paste it into the corresponding field on this page.  </p>
                                   <p className='description'>3. Copy the Event snippet and paste it into the corresponding field on this page.</p>
                              </div>
                              <div className='forth-body'>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Enter your Global site tag</p>
                                   <input className='vend-settings-input fullWidth' />
                                   <p className='description'>Enter your Event snippet to track how many clients reached “Thank you for your order” page</p>
                              </div>
                         </div>
                    </div>

                    <div className='online-settings-body'>
                         <span className='absolute-icon'>
                              <Mark />
                         </span>
                         <h4>Custom tracking code on Order Confirmation page</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Tracking code</p>
                                   <p className='description'>Add a tracking code for any advertising, affiliate, or partner program. This tracking code will be executed on the last page of checkout confirming the order has been placed and will let you see where that order came from.</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>

                    </div>

                    <div className='online-settings-body'>
                         <h4>GDPR cookie consent banner</h4>
                         <div className='flex'>
                              <div className='forth-body'>
                                   <p className='name'>Request visitors’ approval for on-site activity tracking with cookies</p>
                                   <p className='description'>Displays a dialog box on your site which explicitly asks if your visitors are okay with their activity being tracked. Visitors which opt out of being tracked still count in statistics gathered by Google Analytics and Facebook Pixel, but their personal data is not collected.</p>
                              </div>
                              <div className='forth-body'>
                                   <IOSSwitch />
                              </div>
                         </div>
                    </div>
               </TabPanel>
          </div>
     )
}
export default SettingsGeneral;

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Card, Button, FormGroup, Label, Input } from "reactstrap";
import { Box, Tabs, Tab } from '@mui/material';
import { RiEditBoxLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ProductLayoutCard from '../../components/online/ProductLayout'
import CategoryPosition from '../../components/online/CategoryPosition'
import IOSSwitch from '../../components/IOSSwitch'
import { ReactComponent as Code } from "../../assets/images/logos/code.svg";
import { ReactComponent as Eye } from "../../assets/images/logos/eye.svg";
import { ReactComponent as Image } from "../../assets/images/logos/image.svg";
import { ReactComponent as MoreSite } from "../../assets/images/logos/moresite.svg";
import { ReactComponent as Paint } from "../../assets/images/logos/paint.svg";
import { ReactComponent as SiteMap } from "../../assets/images/logos/sitemap.svg";
import { ReactComponent as WWW } from "../../assets/images/logos/www.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/logos/store-3.svg";
import cap from "../../assets/images/bg/cap.png";
import clutch from "../../assets/images/bg/clutch.png";
import handbag from "../../assets/images/bg/handbag.png";
import sneakers from "../../assets/images/bg/sneakers.png";
import sunglasses from "../../assets/images/bg/sunglasses.png";
import tshirt from "../../assets/images/bg/tshirt.png";
import wallet from "../../assets/images/bg/wallet.png";
import watch from "../../assets/images/bg/watch.png";
import F1050DB8346AD3BA6FC1E643FA04A3 from "../../assets/images/bg/89F1050DB8346AD3BA6FC1E643FA04A3.png";
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

const Webstore = () => {

     const Ratio_1 = '--aspect-ratio-1333 '
     const Ratio_1333 = '--aspect-ratio-1333 '
     const Ratio_15 = '--aspect-ratio-15 '
     const Ratio_075 = '--aspect-ratio-075 '
     const Ratio_0667 = '--aspect-ratio-0667 '

     const PreviewClass = ' preview-product'
     const DefaultClass = 'settings-preview__tablet-inner preview-product'
     const DarkenImage = ' preview-product--darken-images'
     const Large = ' preview-product--size-large'
     const Medium = ' preview-product--size-medium'
     const Small = ' preview-product--size-small'

     const ProductClass = ' grid__products'
     const DefaultProduct = 'grid__products grid__products--classic'
     const ProductLayoutLeft = ' grid__products--layout-left'
     const ProductLayoutRight = ' grid__products--layout-right'
     const ProductLayoutCenter = ' grid__products--layout-center'
     const ProductLayoutJustify = ' grid__products--layout-justify'
     const ProductLayoutMedinumItem = ' grid__products--medium-items'
     const ProductCardFrame = ' grid__products--appearance-frame'
     const ProductHoverStyle = ' grid__products--appearance-hover'

     const CategoryClass = ' grid__categories' 
     const CategoryAdvanced = '--advanced'
     const CategoryMediumItem = '--medium-items'
     const CategoryBelow = '--appearance-below'
     const CategoryHover  = '--appearance-hover'    
     const CategoryText = '--appearance-text'
     const CategoryHide = '--appearance-hide'

     const [value, setValue] = useState(0);
     const [imageSize, setImageSize] = useState(Large)
     const [imageAspectRatio, setImageAspectRatio] = useState(Ratio_1)
     const [backColor, setBackColor] = useState('')
     const [layoutFrame, setLayoutFrame] = useState(ProductCardFrame)
     const [productName, setProductName] = useState(1)
     const [productSubTitle, setProductSubTitle] = useState(1)
     const [productPrice, setProductPrice] = useState(1)
     const [productSKU, setProductSKU] = useState(1)
     const [productBuyButton, setProductBuyButton] = useState(1)
     const [productMainImage, setProductMainImage] = useState(1)
     const [productAddImage, setProductAddImage] = useState(true)
     const [categoryNamePosition, setCategoryNamePosition] = useState('')
     const [productHover, setProductHover] = useState('')
     const [layout, setLayout] = useState(ProductLayoutCenter)
     const [positionName, setPositionName] = useState(0)

     const ProductData = [
          {
               key: 'card_1',
               img: 'https://d3fi9i0jj23cau.cloudfront.net/static/preview/v1/products/tshirt.png',
               hoverImg : "custom-div-background-1",
               productName: 'Organic cotton t-shirt',
               productSubTitle: 'Slim-fit short-sleeve unisex t-shirt',
               productPrice: '$19.00',
               productSKU: 'SKU 0001',
          },
          {
               key: 'card_2',
               img: 'https://d3fi9i0jj23cau.cloudfront.net/static/preview/v1/products/watch.png',
               hoverImg : "custom-div-background-3",
               productName: 'Classic color watch',
               productSubTitle: 'Waterproof men’s watches with leather',
               productPrice: '$380.00',
               productSKU: 'SKU 0002',
          },
          {
               key: 'card_3',
               img: 'https://d3fi9i0jj23cau.cloudfront.net/static/preview/v1/products/sunglasses.png',
               hoverImg : "custom-div-background-2",
               productName: 'Polarised sunglasses',
               productSubTitle: 'Retro sunglasses, metal frame and tinted lenses, sunglasses case for free',
               productPrice: '$35.00',
               productSKU: 'SKU 0003',
          },
          {
               key: 'card_4',
               img: 'https://d3fi9i0jj23cau.cloudfront.net/static/preview/v1/products/wallet.png',
               hoverImg : "custom-div-background-4",
               productName: 'Leather wallet',
               productSubTitle: 'Custom leather wallet of premium quality material',
               productPrice: '$190.00',
               productSKU: 'SKU 0004',
          },
     ]

     const CategoryName = [
          {
               key: 'cat_1',
               name: 'Apparel',
               hoverImg: 'category-position-image-1'
          },
          {
               key: 'cat_2',
               name: 'Footwear',
               hoverImg: 'category-position-image-2'
          },
          {
               key: 'cat_3',
               name: 'Accessories',
               hoverImg: 'category-position-image-3'
          },
          {
               key: 'cat_4',
               name: 'Handbags',
               hoverImg: 'category-position-image-4'
          }
     ]


     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     const changeImgaeSize = (key) => {
          switch (key) {
               case 0:
                    setImageSize(Large)
                    break;
               case 1:
                    setImageSize(Medium)
                    break;
               default:
                    setImageSize(Small)
          }
     }

     const ImageAspectRatio = (key) => {
          switch (key) {
               case '1_1':
                    setImageAspectRatio(Ratio_1)
                    break;
               case '4_3':
                    setImageAspectRatio(Ratio_1333)
                    break;
               case '3_2':
                    setImageAspectRatio(Ratio_15)
                    break;
               case '3_4':
                    setImageAspectRatio(Ratio_075)
                    break;
               default:
                    setImageAspectRatio(Ratio_0667)
                    break;
          }
     }

     const darkenImage = (key) => {
          if (key == 1)
               setBackColor(DarkenImage)
          else
               setBackColor('')
     }

     const changeProductLayout = (key) => {
          switch (key) {
               case 'center':
                    setLayout(ProductLayoutCenter)
                    break;
               case 'left':
                    setLayout(ProductLayoutLeft)
                    break;
               case 'right':
                    setLayout(ProductLayoutRight)
                    break;
               default:
                    setLayout(ProductLayoutJustify)
                    break;
          }
     }

     const changeProductLayoutCard = (selected, value) => {
          console.log(selected, value)
          if (selected == 'name') {
               switch (value) {
                    case 'SHOW':
                         setProductName(1)
                         break;
                    case 'HIDE':
                         setProductName(0)
                         break;
                    default:
                         setProductHover(ProductHoverStyle)
                         setProductName(2)
                         break;
               }
          }
          if (selected == 'frame') {
               switch (value) {
                    case 'true':
                         setLayoutFrame(ProductCardFrame)
                         break;
                    default:
                         setLayoutFrame('')
                         break;
               }
          }
          if(selected == "subtitle") {
               switch (value) {
                    case 'SHOW':
                         setProductSubTitle(1)
                         break;
                    case 'HIDE':
                         setProductSubTitle(0)
                         break;
                    default:
                         setProductHover(ProductHoverStyle)
                         setProductSubTitle(2)
                         break;
               }
          }
          if(selected == "price") {
               switch (value) {
                    case 'SHOW':
                         setProductPrice(1)
                         break;
                    case 'HIDE':
                         setProductPrice(0)
                         break;
                    default:
                         setProductHover(ProductHoverStyle)
                         setProductPrice(2)
                         break;
               }
          }
          if(selected == "SKU") {
               switch (value) {
                    case 'SHOW':
                         setProductSKU(1)
                         break;
                    case 'HIDE':
                         setProductSKU(0)
                         break;
                    default:
                         setProductHover(ProductHoverStyle)
                         setProductSKU(2)
                         break;
               }
          }
          if(selected == "buyButton") {
               switch (value) {
                    case 'SHOW':
                         setProductBuyButton(1)
                         break;
                    case 'HIDE':
                         setProductBuyButton(0)
                         break;
                    default:
                         setProductHover(ProductHoverStyle)
                         setProductBuyButton(2)
                         break;
               }
          }
          if(selected == 'mainImage') {
               switch (value) {
                    case 'true':
                         setProductMainImage(1)
                         break;
                    default:
                         setProductMainImage(0)
                         setProductAddImage(false)
                         break;
               }
          }
          if(selected == "addImage") {
               switch (value) {
                    case 'true':
                         setProductAddImage(true)
                         break;
                    default:
                         setProductHover(ProductHoverStyle)
                         setProductAddImage(false)
                         break;
               }
          }
     }

     const changeCateogryNamePosition = (key) => {
          console.log(key)
          setPositionName(key)
          switch (key) {
               case 0 :
                    setCategoryNamePosition('')
                    break;
               case 1:
                    setCategoryNamePosition(CategoryClass + CategoryBelow)
                    break;
               case 2:
                    setCategoryNamePosition(CategoryClass + CategoryHover)
                    break;
               case 3:
                    setCategoryNamePosition(CategoryClass + CategoryText)
                    break;
               default:
                    setCategoryNamePosition(CategoryClass + CategoryHide)
                    break;
          }
     }

     return (
          <>
               <div className='online-header'>
                    <h2>Sell Everywhere</h2>
               </div>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: '#3f32f5', color: 'green' } }}>
                         <Tab label="Overview" {...a11yProps(0)} />
                         <Tab label="Design" {...a11yProps(1)} />
                         <Tab label="Categories" {...a11yProps(2)} />
                    </Tabs>
               </Box>
               <TabPanel value={value} index={0} className='online-store-tab-1'>
                    <div className='online-title'>
                         <p>Website with a built-in e-commerce enabling you to start selling online at any time.<Link to='' className=''>Need help?</Link></p>
                    </div>
                    <div className='online-overview'>
                         <div className='online-store'>
                              <div className='online-store-siteinfo'>
                                   <h4>Online Store</h4>
                                   <Link to=''><span>store76217794.company.site</span><RiEditBoxLine /></Link>
                                   <p>Preview your site to see what it looks like to your customers. Edit your Instant Site at any time to keep its appearance and content up to date.</p>
                                   <Button> Edit Site <RiEditBoxLine /></Button>
                              </div>
                              <div className='online-store-preview'>
                                   <Link to='' target="_blank">
                                        <div className='online-store-img'>
                                             <div>
                                                  <span>Preview Site</span>
                                             </div>
                                        </div>
                                   </Link>
                              </div>
                         </div>

                         <div className='online-description'>
                              <h6>Design</h6>
                              <p>Personalize your Instant Site and your storefront’s appearance to reflect your unique brand. Need some inspiration?<Link to='' className=''> View demo Instant Site </Link></p>
                         </div>
                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><Paint /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Site appearance</h6>
                                   <p>Customize your site the way you like it. Upload your logo and background image, adjust the color of texts and other elements, change your site’s layout and style without getting into code.</p>
                              </div>
                              <div className='online-child-button'>
                                   <Button className='btn webstore-button' >Edit <RiEditBoxLine /> </Button>
                              </div>
                         </div>
                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><Image /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Site content</h6>
                                   <p>Fill up your site with the info about your business: describe who you are, add social proof and links to your social media. Update the content of your site to promote special events and stay connected with your customers.</p>
                              </div>
                              <div className='online-child-button'>
                                   <Button className='btn webstore-button' >Edit <RiEditBoxLine /> </Button>
                              </div>
                         </div>

                         <div className='online-description'>
                              <h6>Domain name and site address</h6>
                              <p>Help customers find you and stand out from the crowd by including the name of your business in your web address.</p>
                         </div>
                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><WWW /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Site address</h6>
                                   <p>Link your Instant Site with your own purchased domain name if you have one or use a free address provided by Lightspeed eCom (E-Series).</p>
                                   <p>Current address: <b>store76217794.company.site</b></p>
                              </div>
                              <div className='online-child-button'>
                                   <Button className='btn webstore-button' >Change Address </Button>
                              </div>
                         </div>

                         <div className='online-description'>
                              <h6>SEO settings</h6>
                              <p>Control how your site interacts with search engines like Google.</p>
                              <Link to=''>Read SEO 101</Link>
                         </div>
                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><Code /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Header meta tags and site verification</h6>
                                   <p>Add a custom code to the head section of your Instant Site to verify it in Google, Pinterest, and other services.</p>
                              </div>
                              <div className='online-child-button'>
                                   <Button className='btn webstore-button' >Add Code</Button>
                              </div>
                         </div>

                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><SiteMap /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Sitemap</h6>
                                   <p>Sitemap helps search robots to index pages of your site faster. Use the URL below to point search engines directly to your sitemap.</p>
                                   <p>Sitemap URL: <b>store76217794.company.site/sitemap.xml</b></p>
                              </div>
                              <div className='online-child-button'>
                                   <Button className='btn' >Copy SiteMap URL</Button>
                              </div>
                         </div>
                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><Eye /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Allow search engines to index Instant Site</h6>
                                   <p>This lets search engines display your Instant Site in search results. If you do not want your Instant Site to appear in search results, turn this option off.</p>
                              </div>
                              <div className='online-child-switch'>
                                   <IOSSwitch />
                              </div>
                         </div>

                         <div className='online-description'>
                              <h6>Add your store to other sites</h6>
                              <p>With Lightspeed eCom (E-Series), you can add your store to any number of websites and sell where your customers are.</p>
                         </div>
                         <div className='online-body'>
                              <div className='online-child-img'>
                                   <span><MoreSite /></span>
                              </div>
                              <div className='online-list-description'>
                                   <h6>Add your store to one more website</h6>
                                   <p>Pick a platform of your liking where you’d like to run Lightspeed eCom (E-Series). Lightspeed eCom (E-Series) integrates seamlessly with most sitebuilders and platforms.</p>
                              </div>
                              <div className='online-child-button'>
                                   <Button className='btn' >Learn More </Button>
                              </div>
                         </div>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={1}>
                    <div className='online-title'>
                         <p>Website with a built-in e-commerce enabling you to start selling online at any time.<Link to='' className=''>Need help?</Link></p>
                    </div>
                    <div className='online-store-design'>
                         <div className='settings-area'>
                              <div className='settings-area__header'>
                                   <Card>
                                        <div className="settings-area__title">Image size</div>
                                        <p>Large images help represent products in detail. Small images let you display more products in the Product List.</p>

                                        <RadioGroup
                                             aria-labelledby="demo-radio-buttons-group-label"
                                             defaultValue="large"
                                             className='imageSize'
                                             name="radio-buttons-group">
                                             <div>
                                                  <FormControlLabel value="large" control={<Radio onChange={() => changeImgaeSize(0)} />} label="Large" />
                                                  <p>Large images are best for products where every detail is a part of the product’s value.</p>
                                             </div>
                                             <div>
                                                  <FormControlLabel value="medium" control={<Radio onChange={() => changeImgaeSize(1)} />} label="Medium" />
                                                  <p>A well-balanced option that works with the majority of products.</p>
                                             </div>
                                             <div>
                                                  <FormControlLabel value="small" control={<Radio onChange={() => changeImgaeSize(2)} />} label="Small" />
                                                  <p>Compact images reveal less detail, but allow you to fit in more products for your customers to see on the screen.</p>
                                             </div>
                                        </RadioGroup>
                                   </Card>
                              </div>
                              <div className="settings-area__body">
                                   <div className="settings__preview-block">
                                        <div className="settings-preview">
                                             <div className="settings-preview__title">Product image preview</div>
                                             <div className="settings-preview__tablet">
                                                  <div className={DefaultClass + imageSize + PreviewClass + imageAspectRatio + backColor}>
                                                       <div className="settings-preview__tablet-spacer"></div>
                                                       <div className="settings-preview__tablet-content">
                                                            <div className="preview-product__grid">
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={tshirt} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={watch} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={sunglasses} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={wallet} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={handbag} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={cap} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={clutch} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={sneakers} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={tshirt} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={watch} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={sunglasses} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                                 <div className="preview-product__item">
                                                                      <div className="preview-product__image">
                                                                           <div className="preview-product__spacer"></div>
                                                                           <div className="preview-product__bg"></div>
                                                                           <div className="preview-product__image-wrap">
                                                                                <img className="preview-product__picture" src={wallet} />
                                                                           </div>
                                                                           <div className="preview-product__shadow"></div>
                                                                      </div>
                                                                      <div className="preview-product__text-placeholder"></div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className='settings-area'>
                              <div className='settings-area__header'>
                                   <Card>
                                        <div className="settings-area__title">Image aspect ratio</div>
                                        <p>Landscape orientation is best for products with horizontal images. Portrait orientation is meant for vertical images. Square is for images of equal proportions, which is ideal for small merchandise.</p>

                                        <RadioGroup
                                             aria-labelledby="demo-radio-buttons-group-label"
                                             defaultValue="square"
                                             className='imageSize'
                                             name="radio-buttons-group">
                                             <FormControlLabel value="square" control={<Radio onChange={() => ImageAspectRatio('1_1')} />} label="Square 1:1" />
                                             <FormControlLabel value="landscrape_4_3" control={<Radio onChange={() => ImageAspectRatio('4_3')} />} label="Landscape 4:3" />
                                             <FormControlLabel value="landscrape_3_2" control={<Radio onChange={() => ImageAspectRatio('3_2')} />} label="Landscape 3:2" />
                                             <FormControlLabel value="portrait_3_4" control={<Radio onChange={() => ImageAspectRatio('3_4')} />} label="Portrait 3:4" />
                                             <FormControlLabel value="portrait_2_3" control={<Radio onChange={() => ImageAspectRatio('2_3')} />} label="Portrait 2:3" />
                                        </RadioGroup>

                                        <FormGroup className='darkenImage'>
                                             <Label htmlFor="darkenImage">Darken image backgrounds</Label>
                                             <Input id="darkenImage" name="select" type="select" onChange={(e) => darkenImage(e.target.value)}>
                                                  <option value='0'>Disable</option>
                                                  <option value='1'>Enable</option>
                                             </Input>
                                             <span>Slightly darken the background of images to make them stand out against the store’s background and style them the same way for all products.</span>
                                        </FormGroup>
                                   </Card>
                              </div>
                         </div>

                         <div className="content-wrapper content-bg-grey">
                              <div className="ecwid-MainPanel-content cf">
                                   <div className="content-panel">
                                        <div className="settings-page design-settings normalized" id="preview">
                                             <div className="settings-page__body">
                                                  <div className="settings-area">
                                                       <div className="settings-area__header">
                                                            <div className="a-card a-card--compact">
                                                                 <div className="a-card__paddings">
                                                                      <div>
                                                                           <div className="settings-area__titles">
                                                                                <div className="settings-area__title">Product Card details and layout</div>
                                                                           </div>
                                                                           <div className="settings-area__description">Choose which product details to display on the Product List and how they are positioned in the Product Card.</div>
                                                                           <div className="settings-area__additional">
                                                                                <div className="tuning-block">
                                                                                     <div className="tuning-block__item custom-padding">
                                                                                          <RadioGroup
                                                                                               aria-labelledby="demo-radio-buttons-group-label"
                                                                                               defaultValue="center"
                                                                                               className='imageSize'
                                                                                               name="radio-buttons-group">
                                                                                               <FormControlLabel value="center" control={<Radio onChange={() => changeProductLayout('center')} />} label="Center content" />
                                                                                               <FormControlLabel value="left" control={<Radio onChange={() => changeProductLayout('left')} />} label="Align content to the left" />
                                                                                               <FormControlLabel value="right" control={<Radio onChange={() => changeProductLayout('right')} />} label="Align content to the right" />
                                                                                               <FormControlLabel value="justify" control={<Radio onChange={() => changeProductLayout('justify')} />} label="Justify content" />
                                                                                               <p>Product name is on the left and the price is on the right.</p>
                                                                                          </RadioGroup>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productCardFrame">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Product Card frame</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-857"></label>
                                                                                                    <select className="field__select" id="gwt-uid-857" onChange={(e) => changeProductLayoutCard("frame", e.target.value)}>
                                                                                                         <option value="true">Enable</option>
                                                                                                         <option value="false">Disable</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc">When enabled, show a border around Product Cards.</div>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productNameBehaviour">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Product name</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-868"></label>
                                                                                                    <select className="field__select" id="gwt-uid-868" onChange={(e) => changeProductLayoutCard("name", e.target.value)}>
                                                                                                         <option value="SHOW">Show</option>
                                                                                                         <option value="HIDE">Do not show</option>
                                                                                                         <option value="SHOW_ON_HOVER">Show on mouse hover</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc"></div>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productSubtitleBehaviour">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Product subtitle</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-879"></label>
                                                                                                    <select className="field__select" id="gwt-uid-879" onChange={(e) => changeProductLayoutCard("subtitle", e.target.value)}>
                                                                                                         <option value="SHOW">Show</option>
                                                                                                         <option value="HIDE">Do not show</option>
                                                                                                         <option value="SHOW_ON_HOVER">Show on mouse hover</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc"></div>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productPriceBehaviour">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Product price</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-890"></label>
                                                                                                    <select className="field__select" id="gwt-uid-890" onChange={(e) => changeProductLayoutCard("price", e.target.value)}>
                                                                                                         <option value="SHOW">Show</option>
                                                                                                         <option value="HIDE">Do not show</option>
                                                                                                         <option value="SHOW_ON_HOVER">Show on mouse hover</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc"></div>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productSKUBehaviour">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Product SKU</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-901"></label>
                                                                                                    <select className="field__select" id="gwt-uid-901" onChange={(e) => changeProductLayoutCard("SKU", e.target.value)}>
                                                                                                         <option value="SHOW">Show</option>
                                                                                                         <option value="HIDE">Do not show</option>
                                                                                                         <option value="SHOW_ON_HOVER">Show on mouse hover</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc"></div>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productBuyNowBehaviour">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">“Buy Now” button</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-912"></label>
                                                                                                    <select className="field__select" id="gwt-uid-912" onChange={(e) => changeProductLayoutCard("buyButton", e.target.value)}>
                                                                                                         <option value="SHOW">Show</option>
                                                                                                         <option value="HIDE">Do not show</option>
                                                                                                         <option value="SHOW_ON_HOVER">Show on mouse hover</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc"></div>
                                                                                     </div>
                                                                                     <div className="tuning-block__item" id="productMainImage">
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Main product image</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-923"></label>
                                                                                                    <select className="field__select" id="gwt-uid-923" onChange={(e) => changeProductLayoutCard("mainImage", e.target.value)}>
                                                                                                         <option value="true">Show</option>
                                                                                                         <option value="false">Do not show</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc">If your products do not have images, turn off their display.</div>
                                                                                     </div>
                                                                                     <div className={productMainImage == 1 ? "tuning-block__item" : 'product-hide'}>
                                                                                          <div className="fieldset fieldset--select fieldset--no-label">
                                                                                               <div className="fieldset__title">Additional product image</div>
                                                                                               <div className="field field--filled">
                                                                                                    <label className="field__label" htmlFor="gwt-uid-934"></label>
                                                                                                    <select className="field__select" id="gwt-uid-934" onChange={(e) => changeProductLayoutCard("addImage", e.target.value)}>
                                                                                                         <option value="true">Show on mouse hover</option>
                                                                                                         <option value="false">Do not show</option>
                                                                                                    </select>
                                                                                                    <span className="field__arrow">
                                                                                                         <ArrowIcon />
                                                                                                    </span>
                                                                                               </div>
                                                                                          </div>
                                                                                          <div className="tuning-block__item-desc">When customers hover the mouse pointer over a Product Card, show the first image from the product’s Gallery. To provide an unobstructed view of the image, disable displaying of other options on mouse hover.</div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="a-card__paddings" aria-hidden="true" style={{ display: 'none' }}></div>
                                                            </div>
                                                       </div>
                                                       <div className="settings-area__body">
                                                            <div className="settings__preview-block">
                                                                 <div className="settings-preview">
                                                                      <div className="settings-preview__title">Product Card preview</div>
                                                                      <div className="settings-preview__container settings-preview__container--products ec-size ec-size--xxs ec-size--xs ec-size--s ec-size--m ec-size--l ec-size--xl">
                                                                           <div>
                                                                                <div>
                                                                                     <div className="ec-store ec-store__category-page ec-store__category-page---1 ec-store--medium-category-images ec-store--medium-product-images">
                                                                                          <div className="ec-store__content-wrapper ec-store__content-wrapper--wide">
                                                                                               <div className="ec-grid">
                                                                                                    <div className="grid__wrap">
                                                                                                         <div className="grid__wrap-inner">
                                                                                                              <div className={DefaultProduct + layout + layoutFrame + ProductLayoutMedinumItem + productHover + ProductClass + imageAspectRatio} data-items="4" data-cols="2" >
                                                                                                                   {ProductData.map((item, index)=> (
                                                                                                                        <ProductLayoutCard 
                                                                                                                             key = {index}
                                                                                                                             productBuyButton = {productBuyButton}
                                                                                                                             productPrice = {productPrice}
                                                                                                                             productSKU = {productSKU}
                                                                                                                             productSubTitle = {productSubTitle}
                                                                                                                             productName = {productName}
                                                                                                                             productMainImage = {productMainImage} 
                                                                                                                             productAddImage = {productAddImage}
                                                                                                                             item = {item} />
                                                                                                                   ))}
                                                                                                                   
                                                                                                              </div>
                                                                                                         </div>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="settings-area">
                                                       <div className="settings-area__header">
                                                            <div className="a-card a-card--compact">
                                                                 <div className="a-card__paddings">
                                                                      <div>
                                                                           <div className="settings-area__titles">
                                                                                <div className="settings-area__title"> Category name position</div>
                                                                           </div>
                                                                           <div className="settings-area__description">
                                                                                Choose where to display
                                                                                category names or hide
                                                                                them completely.</div>
                                                                           <div className="settings-area__additional">
                                                                                <div className="tuning-block">
                                                                                     <div className="tuning-block__item">
                                                                                          <RadioGroup
                                                                                               aria-labelledby="demo-radio-buttons-group-label"
                                                                                               defaultValue="OnImage"
                                                                                               className='imageSize'
                                                                                               name="radio-buttons-group">
                                                                                               <div>
                                                                                                    <FormControlLabel value="OnImage" control={<Radio onChange={() => changeCateogryNamePosition(0)} />} label="Display category name on the image" />
                                                                                                    <p>For category images that follow the same style, professional photos, and snapshots.</p>
                                                                                               </div>
                                                                                               <div>
                                                                                                    <FormControlLabel value="BelowImage" control={<Radio onChange={() => changeCateogryNamePosition(1)} />} label="Display category name below the image" />
                                                                                                    <p>Your choice if all of your category images are styled differently or if you use icons to represent categories.</p>
                                                                                               </div>
                                                                                               <div>
                                                                                                    <FormControlLabel value="OnMouseImage" control={<Radio onChange={() => changeCateogryNamePosition(2)} />} label="Display category name on mouse hover" />
                                                                                                    <p>Use this option if your images give a clear idea of what categories contain without a text caption.</p>
                                                                                               </div>
                                                                                               <div>
                                                                                                    <FormControlLabel value="HideImage" control={<Radio onChange={() => changeCateogryNamePosition(3)} />} label="Hide category images" />
                                                                                                    <p>Hide category images if your categories do not have an image uploaded, and display category names instead.</p>
                                                                                               </div>
                                                                                               <div>
                                                                                                    <FormControlLabel value="HideName" control={<Radio onChange={() => changeCateogryNamePosition(4)} />} label="Hide category names" />
                                                                                                    <p>Hide category names if they are already embedded in category images.</p>
                                                                                               </div>
                                                                                          </RadioGroup>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="a-card__paddings" aria-hidden="true" style={{ display: 'none' }}></div>
                                                            </div>
                                                       </div>
                                                       <div className="settings-area__body">
                                                            <div className="settings__preview-block">
                                                                 <div className="settings-preview">
                                                                      <div className="settings-preview__title"> Category preview</div>
                                                                      <div className="settings-preview__container settings-preview__container--categories ec-size">
                                                                           <div>
                                                                                <div>
                                                                                     <div className="ec-store ec-store__category-page ec-store__category-page---1 ec-store--medium-category-images ec-store--medium-product-images">
                                                                                          <div className="ec-store__content-wrapper ec-store__content-wrapper--wide">
                                                                                               <div className="ec-grid">
                                                                                                    <div className={CategoryClass + CategoryClass + CategoryAdvanced + CategoryClass + CategoryMediumItem + CategoryClass + imageAspectRatio + categoryNamePosition } data-items="4" data-cols="2">
                                                                                                         { CategoryName.map((item, index) => (
                                                                                                              <CategoryPosition
                                                                                                                   key = {index} 
                                                                                                                   item = {item}
                                                                                                                   positionName = {positionName} />
                                                                                                         )) }
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="settings-page__section support-section">
                                                  <div className="support-section__image">
                                                       <img src={F1050DB8346AD3BA6FC1E643FA04A3} width="800" height="555" className="gwt-Image" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={2}>
                    <div className='OpenCloseHeader'>
                         <div><p>Continue processing open sales. <Link to=''>Need help?</Link></p></div>
                    </div>
               </TabPanel>
          </>
     )
}
export default Webstore;

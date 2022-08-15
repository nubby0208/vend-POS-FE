import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { BsCheck2, BsSearch } from "react-icons/bs";
import Select from 'react-select'
import Boxes from '../../assets/images/bg/boxes.png'
import "../online/online.css"


const StockControl = () => {
     const [showMore, setShowMore] = useState(false)

     const changeLabel = () => {
          setShowMore(!showMore)
     }

     return(
          <>
               <div className='online-header'>
                    <h2>Stock Control</h2>
               </div>
               <div className='online-title between'>
                    <div>
                         <p>A list of all of your consignments. <Link to='' className=''>Need help?</Link></p>
                    </div>
                    <div className='inventory-header'>
                         <Button className='vd-btn--supplementary'>Order Stock</Button>
                         <Button className='vd-btn--supplementary'>Receive Stock</Button>
                         <Button className='vd-btn--supplementary'>Return Stock</Button>
                         <Button className='vd-btn--supplementary'>Transfer stock</Button>
                    </div>
               </div>
               <div className='componentPadding'>
                    <div className='fullWidth flex product-catalog-card'>
                         <div className='third-body'>
                              <img src="//vendfrontendassets.freetls.fastly.net/images/setup/set-up-inventory-v3.svg" />
                         </div>
                         <div>
                              <h4>Update inventory levels to get selling.</h4>
                              <p>Track inventory levels to know exactly which products are in stock and able to be sold. We’ll help you get your current inventory levels into Lightspeed Retail depending on how you’re keeping track of your inventory at the moment.</p>
                              <div className='flex'>
                                   <Button className='vd-btn--supplementary'>Get Started</Button>
                                   <button className='dismiss-button'><BsCheck2/>Dismiss</button>
                              </div>
                         </div>
                    </div>

               </div>

               <div className='full-white-padding'>
                    <div className='row marginTop input-header-margin'>
                         <div className='col-md-4 marginBottom'>
                              <p>Show</p>
                              <Select />     
                         </div>
                         <div className='col-md-4 marginBottom'>
                              <p>Name / Number / Product / Supplier Invoice</p>
                              <input className='vend-settings-input fullWidth max-height-input' />
                         </div>
                         <div className='col-md-4 marginBottom'>
                              <p>Outlet</p>
                              <Select />     
                         </div>
                    </div>    

                    <div className={showMore ? 'row marginTop input-header-margin' : 'hidden'}>
                         <div className='col-md-3 marginBottom'>

                         </div>
                         <div className='col-md-3 marginBottom'>

                         </div>
                         <div className='col-md-3 marginBottom'>

                         </div>
                         <div className='col-md-3 marginBottom'>

                         </div>
                    </div>

                    <div className={showMore ? 'row marginTop input-header-margin' : 'hidden'}>
                         <div className='col-md-6 marginBottom'>
                              <p>Supplier</p>
                              <Select />   
                         </div>
                    </div>
                    <div className='between marginTop'>
                         <div>
                             <Link to='#' onClick={() => changeLabel()}>{showMore ? 'Less Filter Options' : 'More Filter Options'}</Link> 
                         </div>
                         <div >
                              <Button className='vd-btn--supplementary'>Update</Button>
                         </div>
                    </div>
               </div>

               <div className='fullWidth text-align-center marginTop'>
                    <img src={Boxes} style={{width: '150px'}}/>
                    <p className='marginTop'>No results found. Try a different search or filter.</p>
               </div>
          </>      
     )

}
export default StockControl;
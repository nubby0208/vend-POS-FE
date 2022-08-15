import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactComponent as Shipping_1 } from "../../assets/images/logos/shipping_1.svg";
import { ReactComponent as Shipping_2 } from "../../assets/images/logos/shipping_2.svg";
import { ReactComponent as Shipping_3 } from "../../assets/images/logos/shipping_3.svg";
import { ReactComponent as Shipping_4 } from "../../assets/images/logos/shipping_4.svg";
import { ReactComponent as Shipping_5 } from "../../assets/images/logos/shipping_5.svg";
import { ReactComponent as Shipping_6 } from "../../assets/images/logos/shipping_6.svg";
import { ReactComponent as Shipping_7 } from "../../assets/images/logos/shipping_7.svg";

const ShippingPickup = () => {
     return(
          <div className='componentPadding'>
               <h5 className='margin-zero'>Add a new shipping or delivery method</h5>
               <p>Select how you’ll be getting your products to customers. Add local delivery, curbside and drive-through pickup, or enable shipping with the most popular carriers.</p>
               <div className='online-settings-body fullWidth flex'>
                    <div className='seven-body'>
                         <h5 className='name'>Shipping</h5>
                         <p >Ship within your country or internationally. Enable automatic shipping rates from carriers or use your own custom rates if your product requires special shipping fees.</p>
                         <Button className='third-body'><AiOutlinePlus />Add Shipping</Button>
                    </div>

                    <div className='third-body payment-border-left'>
                         <div className='payment-icon'>
                              <span><Shipping_1 /></span>
                         </div>
                         <div>
                              <ul class="checkmark-list">
                                   <li class="checkmark-list__item">Weight-based and subtotal-based rates</li>
                                   <li class="checkmark-list__item">Free shipping promotions</li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div className='marginTop'></div>

               <div className='online-settings-body fullWidth flex'>
                    <div className='seven-body'>
                         <h5 className='name'>Local Delivery</h5>
                         <p >Deliver orders yourself in city and suburbs or outsource delivery to the services you trust. Set when, where, and under which conditions you deliver.</p>
                         <Button className='third-body'><AiOutlinePlus />Add Delivery</Button>
                    </div>

                    <div className='third-body payment-border-left'>
                         <div className='payment-icon'>
                              <span><Shipping_4 /></span>
                              <span><Shipping_2 /></span>
                              <span><Shipping_1 /></span>
                              <span><Shipping_3 /></span>
                         </div>
                         <div>
                              <ul class="checkmark-list">
                                   <li class="checkmark-list__item">Delivery limited by zones on map</li>
                                   <li class="checkmark-list__item">Delivery limited by order subtotal</li>
                                   <li class="checkmark-list__item">Custom rates</li>
                                   <li class="checkmark-list__item">Delivery limited by business hours</li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div className='marginTop'></div>

               <div className='online-settings-body fullWidth flex'>
                    <div className='seven-body'>
                         <h5 className='name'>Self Pickup</h5>
                         <p >Add a curbside, drive-through, or in-store pickup. Specify your business hours, the pickup location, and add a brief instruction on how the pickup works for customers.</p>
                         <Button className='third-body'><AiOutlinePlus />Add Pickup</Button>
                    </div>

                    <div className='third-body payment-border-left'>
                         <div className='payment-icon'>
                              <span><Shipping_5 /></span>
                              <span><Shipping_6 /></span>
                              <span><Shipping_7 /></span>
                         </div>
                         <div>
                              <ul class="checkmark-list">
                                   <li class="checkmark-list__item">In-store pickup</li>
                                   <li class="checkmark-list__item">Curbside pickup</li>
                                   <li class="checkmark-list__item">Drive-through pickup</li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default ShippingPickup;
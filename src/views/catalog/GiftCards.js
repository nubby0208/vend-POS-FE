import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../online/online.css'

const GridData = [
     {
          img: '//vendfrontendassets.global.ssl.fastly.net/images/sell/gift-cards-v1.svg',
          title: 'Sell and Track Cards',
          description: 'Sell gift cards to attract and engage new customers. Gift card reports let you track redemption and open balances.'
     },
     {
          img: '//vendfrontendassets.global.ssl.fastly.net/images/sell/boost-revenue-v1.svg',
          title: 'Boost Your Revenue',
          description: 'Customers using gift cards tend to spend more, and are more likely to buy products at regular price, increasing your bottom line.'
     },
     {
          img: '//vendfrontendassets.global.ssl.fastly.net/images/sell/customise-gift-cards-v1.svg',
          title: 'Customise Your Cards',
          description: 'Gift cards are hassle free. Create your own gift cards by hand, design and print new ones from our preferred partner, or use your own vendor.'
     },
]

const GiftCards = () => {
     return(
          <div className='componentPadding'>
               <div className='online-settings-body align-justify-center'>
                    <div className='text-align-center componentPadding'>
                         <h4>Enable Gift Cards to Boost Revenue</h4>
                         <p>Bring in new customers and increase revenue with flexible and brandable gift cards.</p>
                         <Button className='max-height-input'>Enable Gift Cards</Button>
                    </div>
                    
               </div>


               <div className='flex fullWidth marginTop'>
                    {GridData.map((item, index) => (
                         <div className='forth-body' key={index}>
                              <div className='text-align-center'>
                                   <img src={item.img} style={{height: '92px'}}/>
                                   <h5>{item.title}</h5>
                                   <p>{item.description}</p>
                              </div>
                         </div>
                    ))}
                    
               </div>
          </div>
     )
}
export default GiftCards;
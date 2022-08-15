import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ReactComponent as Wallet } from "../../assets/images/logos/wallet.svg";
import { ReactComponent as Payment_1 } from "../../assets/images/logos/payment-1.svg";
import { ReactComponent as Payment_2 } from "../../assets/images/logos/payment-2.svg";
import { ReactComponent as Payment_3 } from "../../assets/images/logos/payment-3.svg";
import { ReactComponent as Payment_4 } from "../../assets/images/logos/payment-4.svg";
import { ReactComponent as Visa } from "../../assets/images/logos/visa.svg";
import { ReactComponent as Circle } from "../../assets/images/logos/circle.svg";
import { ReactComponent as Cards } from "../../assets/images/logos/cards.svg";
import { ReactComponent as Match } from "../../assets/images/logos/match.svg";
import { AiOutlinePlus } from "react-icons/ai";
import IOSSwitch from '../IOSSwitch'

const StyledMenu = styled((props) => (
     <Menu
          elevation={0}
          anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
          }}
          transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
          }}
          {...props}
     />
))(({ theme }) => ({
     '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color:
               theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
               'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
               padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
               '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
               },
               '&:active': {
                    backgroundColor: alpha(
                         theme.palette.primary.main,
                         theme.palette.action.selectedOpacity,
                    ),
               },
          },
     },
}));

const Payments = () => {

     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };

     return (
          <div className='componentPadding '>
               <h5 className='margin-zero'>Current payment methods</h5>
               <p>These are the payment methods that you have set up in your store. If enabled, they are available for your customers to choose from at checkout.</p>

               <div className='online-settings-body'>
                    <div className='payment-method-body block'>
                         <div className='flex payment-method-wallet block-child'>
                              <span>
                                   <Wallet />
                              </span>
                              <div >
                                   <p className='name margin_0'>Pay by cash</p>
                                   <p className='description margin_0'>Manual payment: Settings</p>
                              </div>
                         </div>

                         <div className='block-child'> 
                              <Button
                                   id="demo-customized-button"
                                   aria-controls={open ? 'demo-customized-menu' : undefined}
                                   aria-haspopup="true"
                                   aria-expanded={open ? 'true' : undefined}
                                   variant="contained"
                                   disableElevation
                                   onClick={handleClick}
                                   endIcon={<KeyboardArrowDownIcon />} >
                                   Actions
                              </Button>

                              <StyledMenu
                                   id="demo-customized-menu"
                                   MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                   }}
                                   anchorEl={anchorEl}
                                   open={open}
                                   onClose={handleClose} >
                                   <MenuItem onClick={handleClose} disableRipple>
                                        Edit
                                   </MenuItem>
                                   <MenuItem onClick={handleClose} disableRipple>
                                        Remove
                                   </MenuItem>
                              </StyledMenu>
                              <IOSSwitch />
                         </div>
                    </div>
               </div>

               <div className='marginTop'></div>

               <h5 className='margin-zero'>Add new payment methods</h5>
               <p>Choose a payment provider from our list or set up your own manual payment methods to get paid for your online orders.</p>
               <div className='online-settings-body fullWidth flex'>
                    <div className='seven-body'>
                         <h5 className='name'>Manual payment methods</h5>
                         <p className='description'>Not ready to accept online payments yet? Add cash on delivery, phone orders, or check to receive payments outside of your store’s online checkout.</p>
                         <button className='payment-custom-button third-body'><AiOutlinePlus />Add Manual Payment</button>
                    </div>

                    <div className='third-body payment-border-left'>
                         <div className='payment-icon'>
                              <span><Payment_1 /></span>
                              <span><Payment_2 /></span>
                              <span><Payment_4 /></span>
                              <span><Payment_3 /></span>
                         </div>
                         <div>
                              <ul class="checkmark-list">
                                   <li class="checkmark-list__item">Cash on delivery</li>
                                   <li class="checkmark-list__item">Bank transfers</li>
                                   <li class="checkmark-list__item">Invoice</li>
                                   <li class="checkmark-list__item">Purchase orders</li>
                                   <li class="checkmark-list__item">Checks</li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div className='online-settings-body fullWidth flex'>
                    <div className='seven-body'>
                         <h5 className='name'>More options to accept online payments in Zambia 🇿🇲</h5>
                         <p className='description'>Choose a payment processor from our list to accept most commonly used payment options in your country.</p>
                         
                         <select className='third-body'>
                              <option>Choose Payment Method</option>
                         </select>
                    </div>

                    <div className='third-body payment-border-left'>
                         <div className='payment-icon'>
                              <span><Visa /></span>
                              <span><Circle /></span>
                              <span><Payment_4 /></span>
                         </div>
                         <div>
                              <ul class="checkmark-list">
                                   <li class="checkmark-list__item">Credit and debit cards</li>
                                   <li class="checkmark-list__item">Bank transfers</li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div className='marginTop'></div>
               <h5 className='margin-zero'>Payment alternatives</h5>
               <div className='flex'>
                    <div className='online-settings-body half-body flex'>
                         <div className='cardPadding'>
                              <span><Cards /></span>
                         </div>
                         <div>
                              <h6 className='name'>Other ways to get paid</h6>
                              <p className='description'>Choose a payment processor from our list of 120+ providers to accept credit and debit cards, PayPal, and other online payment options.</p>
                              <select class="third-body">
                                   <option>Choose Payment processor</option>
                              </select>
                         </div>
                    </div>
                    <div className='margin'></div>
                  <div className='online-settings-body half-body flex'>
                         <div className='cardPadding'>
                              <span><Match /></span>
                         </div>
                         <div>
                              <h6 className='name'>Accept payments with your preferred payment processor</h6>
                              <p className='description'>Connect and get paid with any payment gateway of your choice or customize existing payments methods to accept preorders and partial payments.</p>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Payments;
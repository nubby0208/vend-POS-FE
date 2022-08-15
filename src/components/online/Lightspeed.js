import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Select from 'react-select'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const options = [
     { value: 'chocolate', label: 'Chocolate' },
     { value: 'strawberry', label: 'Strawberry' },
     { value: 'vanilla', label: 'Vanilla' }
   ]

const Lightspeed = () => {
     return(
          <div className='componentPadding'>
               <div className='lightspeed-body'>
                    <h4>Sync Orders</h4>
                    <div className='flex'>
                         <div className='third-body'>
                              <p className='name'>Choose which register to save online sales to. When sales are made, inventory will be deducted from the outlet the register is associated with.</p>
                         </div>
                         <div className='forth-body'>
                              <p className='name'>Register</p>
                              <Select options={options} />
                              <p className='description'>All online sales will be synced to this register. We recommend you add a new register to track online sales separately from your in-store sales.</p>
                         </div>
                    </div>
               </div>

               <div className='divider'></div>

               <div className='lightspeed-body'>
                    <h4>Sync Inventory Levels</h4>
                    <div className='flex'>
                         <div className='third-body'>
                              <p className='name'>Choose one or more outlets to sync inventory with Lightspeed eCom.</p>
                         </div>
                         <div className='forth-body'>
                              <FormGroup>
                                   <FormControlLabel control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Main Outlet" />
                              </FormGroup>
                         </div>
                    </div>
               </div>
               <div className='divider'></div>

               <div className='lightspeed-body'>
                    <h4>Map Payment Methods</h4>
                    <div className='flex'>
                         <div className='third-body'>
                              <p className='name'>Choose a payment type to record online sales to. This keeps payment records accurate and easier to reconcile.</p>
                         </div>
                         <div className='forth-body'>
                              <p className='name'>Default Payment Type</p>
                              <Select options={options} />
                              <p className='description'>Payments processed in Lightspeed eCom will be recorded to this payment type in Lightspeed Retail.</p>
                         </div>
                    </div>
               </div>
               <div className='divider'></div>

          </div>
     )
}
export default Lightspeed;

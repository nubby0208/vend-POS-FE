import React, { useState } from 'react'
import { Button } from "reactstrap";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import "./sell.css"

const CashManagement = () => {
     return(
          <div className='OpenClose'>
               <div>
                    <h2>Cash Management</h2>
               </div>
                    
               <div className='OpenCloseBody'>
                    <div className='OpenCloseBody-child'>
                         <div className='CashManagementHeader'>
                              <img src="https://vendfrontendassets.freetls.fastly.net/images/sell/register-closed-v1.svg" className="sell-closed-image" />
                              <h3>Register closed</h3>
                              <p>Set an opening float to open the register and make a sale.</p>
                         </div>
                         <div className='sell-second-register'>
                              <TextField
                                   label="Opening Float"
                                   id="openingFloat"
                                   fullWidth 
                                   color="primary"
                                   placeholder='0.00'
                                   type='number'
                                   focused 
                                   InputProps={{
                                   startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                   }}
                              />
                              <TextField
                                   label="Notes Optional"
                                   id="notesOptional"
                                   fullWidth
                                   color="primary"
                                   multiline
                                   rows={4}
                                   placeholder="Enter a note"
                                   focused 
                              />
                              <Button className="mt-12" color="primary">
                                   Open Register
                              </Button>

                         </div>
                    </div>
               </div>
          </div>
     )
}
export default CashManagement;

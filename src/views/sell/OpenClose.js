import React, { useState } from 'react'
import { Button } from "reactstrap";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import "./sell.css"

const OpenClose = () => {
     return(
          <div className='OpenClose'>
               <div>
                    <h2>Open Register</h2>
               </div>
               <div className='OpenCloseHeader'>
                    <div><p>Set an opening float to open the register and make a sale.</p></div>
                    <div><Button className='' color='primary'>Print Last Summary</Button></div>
               </div>
               <div className='OpenCloseBody'>
                    <div className='OpenCloseBody-child'>
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
export default OpenClose;

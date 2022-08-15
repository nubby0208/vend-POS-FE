import React, { useState } from 'react'
import { Button } from "reactstrap";
import { styled } from '@mui/material/styles';
import IOSSwitch from '../../components/IOSSwitch'

import "./sell.css"

const CashManagement = () => {
     return(
          <div className='OpenClose'>
               <div>
                    <h2>Settings</h2>
               </div>
               <div className='OpenCloseHeader'>
                    <p>Manage your register settings.</p>
               </div>
               <div className='SellSettings'>
                    <div className="Settings-blog-1">
                         <h4>Training Mode</h4>
                         <div className='Settings-blog-child'>
                              <div >
                                   <h6>
                                        Enable Training Mode if you’re new to Lightspeed Retail and want to learn the ropes. You’ll be selling like a pro in no time.
                                   </h6>
                              </div>

                              <div>
                                   <Button>Enable Trading Mode</Button>
                              </div>
                         </div>
                    </div>
                    <div className='divider'></div>
                    <div className="Settings-blog-1">
                         <h4>Quick Keys </h4>
                         <div className='Settings-blog-child'>
                              <div >
                                   <h6>
                                        Assign products as Quick Keys to help process sales faster. Rename, reposition and recolor keys, or organize your buttons into folders and pages.
                                   </h6>
                              </div>

                              <div>
                                   <div className='switchStyle'>
                                        <IOSSwitch />
                                        <div>
                                             <span>Enable Quick Keys for this register.</span>
                                             <p>Toggle the switch to enable your Quick Keys for your register. You can turn this back on at anytime without losing your settings.</p>
                                        </div>
                                   </div>
                                   <Button>Add Layout</Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default CashManagement;

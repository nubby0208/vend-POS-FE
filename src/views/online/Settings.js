import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { Box, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import SettingsGeneral from '../../components/online/SettingsGeneral';
import Lightspeed from '../../components/online/Lightspeed';
import Payments from '../../components/online/Payments';
import ShippingPickup from '../../components/online/ShippingPickup';

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


const Settings = () => {

     const [value, setValue] = useState(0);
     const handleChange = (event, newValue) => {
          setValue(newValue);
     };
     return (
          <>
               <div className='online-header'>
                    <h2>Settings</h2>
               </div>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} scrollButtons="auto"  variant="scrollable" TabIndicatorProps={{ style: { background: '#3f32f5', color: 'green' } }}>
                         <Tab label="General" {...a11yProps(0)} />
                         <Tab label="Lightspeed eCom" {...a11yProps(1)} />
                         <Tab label="Payments" {...a11yProps(2)} />
                         <Tab label="Shipping and Pickup" {...a11yProps(3)} />
                    </Tabs>
               </Box>
               <TabPanel value={value} index={0} >
                    <div className='online-title'>
                         <p>Configure the general business settings for your online shop – such as your store’s name and address, time zone and currency.<Link to='' className=''>Need help?</Link></p>
                    </div>
                    <SettingsGeneral />
               </TabPanel>
               <TabPanel value={value} index={1}>
                    <div className='online-title'>
                         <p>Set up your Lightspeed eCom store with Lightspeed Retail to sell your products online.</p>
                    </div>
                    <Lightspeed />
               </TabPanel>
               <TabPanel value={value} index={2}>
                    <div className='online-title'>
                         <p>How do you get paid</p>
                    </div>
                    <Payments />
               </TabPanel>
               <TabPanel value={value} index={3}>
                    <div className='online-title'>
                         <p>Choosing the right shipping strategy for your store</p>
                    </div>
                    <ShippingPickup />
               </TabPanel>
          </>
     )
}
export default Settings;

import React, { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from "reactstrap";
import "../online/online.css"

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

const Promotions = () => {

     const [value, setValue] = useState(0);

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     const NoData = [
          {
               img: "//vendfrontendassets.freetls.fastly.net/images/promotions/multiple_promotions.svg",
               title: "Keep an eye here for promotions that are currently happening, or ones that will happen soon."
          },
          {
               img: "//vendfrontendassets.freetls.fastly.net/images/promotions/ticked_calendar.svg",
               title: "Revisit past promotions here. To repeat those that have been successful, just duplicate and go!"
          },
          {
               img: "//vendfrontendassets.freetls.fastly.net/images/promotions/multiple_promotions.svg",
               title: "Find all the promotions you’ll create here in one place."
          }
     ]
     return(
          <>
               <div className='online-header'>
                    <h2>Sell Everywhere</h2>
               </div>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: '#3f32f5', color: 'green' } }}>
                         <Tab label="Current & Upcomimg" {...a11yProps(0)} />
                         <Tab label="Past" {...a11yProps(1)} />
                         <Tab label="All" {...a11yProps(2)} />
                    </Tabs>
               </Box>
               <div className='online-title between'>
                    <p>Create promotions and manage current and upcoming ones.<Link to='' className=''>Need help?</Link></p>
                    <Button>Add Promotion</Button>
               </div>
               <div className='componentPadding'>
                    <table class="vd-table-list">
                         <thead >
                              <tr className="vd-table-list-row">
                                   <th className='vd-table-list-head-cell'>Start Date</th>
                                   <th className='vd-table-list-head-cell'>End Date</th>
                                   <th className='vd-table-list-head-cell'>Name</th>
                                   <th className='vd-table-list-head-cell'>Available On</th>
                              </tr>
                         </thead>
                         <tbody>
                              <TabPanel value={value} index={0}>

                              </TabPanel>
                              <TabPanel value={value} index={1}>

                              </TabPanel>
                              <TabPanel value={value} index={2}>

                              </TabPanel>
                         </tbody>
                    </table>
                    <div className='general-margin-top no-table'>
                         <img src={NoData[value].img} />
                         <div className='general-margin-top no-table-label'>
                              {NoData[value].title}
                         </div>
                    </div>
               </div>

               
          </>
     )
}
export default Promotions;
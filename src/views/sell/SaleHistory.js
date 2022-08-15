import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Tabs, Tab, InputAdornment, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./sell.css"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
     PaperProps: {
          style: {
               maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
               width: 250,
          },
     },
};

const AllSales = [
     {
          key: "All",
          value: "All Sales"
     },
     {
          key: "AllOpenSales",
          value: "All Open Sales"
     },
     {
          key: "Layby",
          value: "Layby"
     },
     {
          key: "OnAccount",
          value: "On Account"
     },
     {
          key: "Parked",
          value: "Parked"
     },
     {
          key: "DeliveryUnfulfilled",
          value: "Delivery Unfulfilled"
     },
     {
          key: "PickupUnfulfilled",
          value: "Pickup Unfulfilled"
     },
     {
          key: "AllClosedSales",
          value: "All Closed Sales"
     },
     {
          key: "Completed",
          value: "Completed"
     },
     {
          key: "LaybeCompleted",
          value: "Laybe Completed"
     },
     {
          key: "OnAccountCompleted",
          value: "On Account Completed"
     },
     {
          key: "DeliveryCompleted",
          value: "Delivery Completed"
     },
     {
          key: "PickupCompleted",
          value: "Pickup Completed"
     },
     {
          key: "Voided",
          value: "Voided"
     },
];

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SaleHistory = () => {
     const theme = useTheme();
     const [value, setValue] = useState(0);
     const [isShow, setShowHide] = useState(false);
     const [personName, setPersonName] = useState([]);
     const [selectOption, setselectOption] = useState([
          'All', 'Layby', 'OnAccount', 'Parked', 'PickupUnfulfilled', 'Completed', 'LaybeCompleted', 'OnAccountCompleted', 'DeliveryCompleted', 'PickupCompleted', 'Voided'
     ]);

     const handleChange = (event, newValue) => {
          setValue(newValue);
          if(newValue == 0)
               setselectOption(['All', 'Layby', 'OnAccount', 'Parked', 'PickupUnfulfilled', 'Completed', 'LaybeCompleted', 'OnAccountCompleted', 'DeliveryCompleted', 'PickupCompleted', 'Voided'])
          else if (newValue == 1)
               setselectOption(['AllOpenSales', 'Completed', 'LaybeCompleted', 'OnAccountCompleted', 'DeliveryCompleted', 'PickupCompleted'])
          else
               setselectOption(['AllClosedSales', 'Layby', 'OnAccount', 'Parked'])

     };

     const selectChange = (event) => {
          const {
               target: { value },
          } = event;
          setPersonName(
               typeof value === 'string' ? value.split(',') : value,
          );
     };

     const moreFilter = () => {
          setShowHide(!isShow)
     }

     return(
          <div className='OpenClose'>
               <div>
                    <h2>Sales History</h2>
               </div>
                    
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'#3f32f5', color: 'green'}}}>
                         <Tab label="All" {...a11yProps(0)} />
                         <Tab label="Process return" {...a11yProps(1)} />
                         <Tab label="Continue sale" {...a11yProps(2)} />
                    </Tabs>
               </Box>
               <TabPanel value={value} index={0}>
                    <div className='OpenCloseHeader'>
                         <div><p>View, edit and manage your sales all in one place. <Link to=''>Need help?</Link></p></div>
                    </div> 
               </TabPanel>
               <TabPanel value={value} index={1}>
                    <div className='OpenCloseHeader'>
                         <div><p>Retrieve a sale to process a return as an exchange or refund. <Link to=''>Need help?</Link></p></div>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={2}>
                    <div className='OpenCloseHeader'>
                         <div><p>Continue processing open sales. <Link to=''>Need help?</Link></p></div>
                    </div>
               </TabPanel>

                <div className='SalesHistory'>
                    <Row>
                         <Col xxl='3' md='3' className='tabControl'>
                              <InputLabel htmlFor="SaleHistoryStatus">
                                   Status
                              </InputLabel>
                              <Select
                                   labelId="SaleHistoryStatus"
                                   id="allSales"
                                   fullWidth
                                   value={personName}
                                   onChange={selectChange}
                                   input={<OutlinedInput label="Name" />}
                                   MenuProps={MenuProps}
                              >
                                   {selectOption.map((key, index) => {
                                        const data = AllSales.find((v) => v.key === key)

                                        return (
                                             <MenuItem
                                                  key={index}
                                                  value={data.value}
                                                  className={data.allKey}
                                                  style={getStyles(data.value, personName, theme)} >
                                                  {data.value}
                                             </MenuItem>
                                        );
                                   })}
                              </Select>
                         </Col>
                         <Col xxl='3' md='3' className='tabControl'> 
                              <InputLabel htmlFor="customer">
                              Customer
                              </InputLabel>
                              <OutlinedInput
                                   id="customer"
                                   fullWidth
                                   placeholder='Search for customers'
                                   startAdornment={
                                        <InputAdornment position="start">
                                        <AccountCircle />
                                        </InputAdornment>
                                   }
                              />
                         </Col>
                         <Col xxl='3' md='3' className='tabControl'>
                              <InputLabel htmlFor="receiptOrNote">
                                   Receipt or Note
                              </InputLabel>
                              <OutlinedInput
                                   id="receiptOrNote"
                                   fullWidth
                                   placeholder='Search receipt number or note'
                              />
                         </Col>
                         <Col xxl='3' md='3' className={isShow ? 'tabControl show' : 'tabControl hidden'}>
                         
                         </Col>
                         <Col xxl='3' md='3' className={isShow ? 'tabControl show' : 'tabControl hidden'}>
                              <InputLabel htmlFor="outlet">
                                   Outlet
                              </InputLabel>
                              <Select
                                   labelId="outlet"
                                   id="demo-multiple-name"
                                   fullWidth
                                   value={personName}
                                   onChange={selectChange}
                                   input={<OutlinedInput label="Name" />}
                                   MenuProps={MenuProps}
                              >
                                   {/* {AllSales.map((name, index) => (
                                        showSelectBox(name)
                                   ))} */}
                              </Select>
                         </Col>
                         <Col xxl='3' md='3' className={isShow ? 'tabControl show' : 'tabControl hidden'}>
                              <InputLabel htmlFor="user">
                                   User
                              </InputLabel>
                              <Select
                                   labelId="user"
                                   id="demo-multiple-name"
                                   fullWidth
                                   value={personName}
                                   onChange={selectChange}
                                   input={<OutlinedInput label="Name" />}
                                   MenuProps={MenuProps}
                              >
                                   {/* {names.map((name) => (
                                        <MenuItem
                                             key={name}
                                             value={name}
                                             style={getStyles(name, personName, theme)} >
                                             {name}
                                        </MenuItem>
                                   ))} */}
                              </Select>
                         </Col>
                         <Col xxl='3' md='3' className={isShow ? 'tabControl show' : 'tabControl hidden'}>
                         </Col>
                         <Col xxl='3' md='3' className='SaleHistory-moreInfo'>
                              <div>
                                   <Link to='' onClick={ () => moreFilter() }>More filters</Link>
                                   <Button variant="contained">Search</Button>
                              </div>
                         </Col>
                    </Row>
               </div>  

          </div>
     )
}
export default SaleHistory;

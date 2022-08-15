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

const selectData = [
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
     }
];


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

const Quotes = () => {
     const theme = useTheme();
     const [isShow, setShowHide] = useState(false);
     const [personName, setPersonName] = useState([]);

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
                    <h2>Quotes</h2>
               </div>
                    
               <div className='OpenCloseHeader'>
                    <div><p>View or process quotes. <Link to=''>Need help?</Link></p></div>
               </div>

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
                                   {selectData.map((data, index) => {
                                        return (
                                             <MenuItem
                                                  key={index}
                                                  value={data.value}
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
export default Quotes;

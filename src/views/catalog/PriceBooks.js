import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { BsChevronRight } from "react-icons/bs";
import { DataGrid } from '@mui/x-data-grid';
import "../online/online.css"

const columns = [
  { field: 'id', headerName: 'ID' }, 
  { field: 'name', headerName: 'Price Book Name', width: 152},
  { field: 'customer', headerName: 'Customer Group', width: 152},
  { field: 'outlet', headerName: 'Outlet', width: 152},
  { field: 'from', headerName: 'Valid From', width: 152},
  { field: 'to', headerName: 'Valid To', width: 152},
  { field: 'created_at', headerName: 'Created At', width: 152},
];

const rows = [
     { id: 1, name: 'Scott', customer: 'Admin', outlet: 'Main', from: '2020-10-1', to: '2020-11-1', created_at: '2010-11-10' },
];

const Promotions = () => {

     return(
          <>
               <div className='online-header'>
                    <h2>Sell Everywhere</h2>
               </div>

               <div className='online-title between'>
                    <p>Create promotions and manage current and upcoming ones.<Link to='' className=''>Need help?</Link></p>
                    <Button>Add Price Book</Button>
               </div>
               <div className='componentPadding'>
                    <div className='online-settings-body componentPadding flex fullWidth'>
                         <div className='second-body align-justify-center image-center'>
                              <img src="//vendfrontendassets.global.ssl.fastly.net/images/sell/promotions-v1.svg" alt="" />
                         </div>
                         <div className='seven-body'>
                              <h4>Introducing Lightspeed Retail’s discounting tools</h4>
                              <p>Bring in new customers with no spreadsheets required. With Lightspeed Retail’s easy new discounting tools you can run offers by time or date range, target specific customers and outlets, and run individual or blanket product promotions. Save time, enhance brand loyalty and boost revenue, now.</p>
                              <Link to=''>Try Promotions <BsChevronRight /></Link>
                         </div>
                    </div>
               </div>
               <div className='componentPadding'>
                    <div style={{ height: 400, width: '100%' }}>
                         <DataGrid
                              rows={rows}
                              columns={columns}
                              pageSize={5}
                              rowsPerPageOptions={[5]}
                              checkboxSelection/>
                    </div>
               </div>
               
          </>
     )
}
export default Promotions;
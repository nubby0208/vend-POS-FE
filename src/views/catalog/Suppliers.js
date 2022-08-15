import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../online/online.css'

const suppliers = () => {
     return(
          <>
               <div className='online-header'>
                    <h2>Suppliers</h2>
               </div>

               <div className='online-title between'>
                    <p>View and manage your suppliers.<Link to='' className=''>Need help?</Link></p>
                    <Button>Add Supplier</Button>
               </div>
               <div className='general-margin-top no-table'>
                    <div className='general-margin-top no-table-label'>
                         You haven't added any suppliers.
                         <Link to=''>Try adding a new suppliers</Link>
                    </div>
               </div>
          </>
     )
}
export default suppliers;
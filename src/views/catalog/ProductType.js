import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../online/online.css'

const ProductType = () => {
     return(
          <>
               <div className='online-header'>
                    <h2>Product Types</h2>
               </div>

               <div className='online-title between'>
                    <p>A list of all of your product types<Link to='' className=''>Need help?</Link></p>
                    <Button>Add Type</Button>
               </div>
               <div className='general-margin-top no-table'>
                    <div className='general-margin-top no-table-label'>
                         You haven't added any Types.
                         <Link to=''>Try adding a new Type</Link>
                    </div>
               </div>
          </>
     )
}
export default ProductType;
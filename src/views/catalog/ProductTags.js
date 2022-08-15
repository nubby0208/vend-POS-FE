import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../online/online.css'

const ProductTags = () => {
     return(
          <>
               <div className='online-header'>
                    <h2>Product Tags</h2>
               </div>

               <div className='online-title between'>
                    <p>A list of all of your product tags.<Link to='' className=''>Need help?</Link></p>
                    <Button>Add Tag</Button>
               </div>
               <div className='general-margin-top no-table'>
                    <div className='general-margin-top no-table-label'>
                         You haven't added any Tags.
                         <Link to=''>Try adding a new Tag</Link>
                    </div>
               </div>
          </>
     )
}
export default ProductTags;
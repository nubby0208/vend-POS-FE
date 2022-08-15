import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../online/online.css'

const Brands = () => {
     return(
          <>
               <div className='online-header'>
                    <h2>Brands</h2>
               </div>

               <div className='online-title between'>
                    <p>A list of all of your brands.<Link to='' className=''>Need help?</Link></p>
                    <Button>Add Brand</Button>
               </div>
               <div className='general-margin-top no-table'>
                    <div className='general-margin-top no-table-label'>
                         You haven't added any brands.
                         <Link to=''>Try adding a new brand</Link>
                    </div>
               </div>
          </>
     )
}
export default Brands;
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { BsCheck2, BsSearch } from "react-icons/bs";
import Select from 'react-select'
import Checkbox from '@mui/material/Checkbox';
import CreatableSelect from 'react-select/creatable';
import "../online/online.css"
import Switch from "react-switch";
import axios from 'axios'

const brand = []
const productType = []
const Supplier = []
const statusList = [
     { value: 'all', label: 'All Statues' },
     { value: 'active', label: 'Active' },
     { value: 'inactive', label: 'Inactive' },
]
const Products = () => {
     const navigate = useNavigate();
     const [productList, setProductList] = useState([])
     const [productImages, setProductImages] = useState([])
     const [inputSearchProduct, setInputSearchProduct] = useState('')
     const [searchSupplier, setSearchSupplier] = useState('')
     const [searchBrand, setSearchBrand] = useState('')
     const [searchType, setSearchType] = useState('')
     const [searchStatus, setSearchStatus] = useState('')
     const [searchTags, setSearchTags] = useState('')
     const API_URL = process.env.REACT_APP_API_URL

     const productActive = (e) => {
          console.log(e)
     }

     const productSearch = () => {
          console.log(inputSearchProduct)
          console.log(searchSupplier)
          console.log(searchBrand)
          console.log(searchStatus)
          console.log(searchTags)
          let result = productList.find((array, i) => {
               if (array.product_type === searchType.label) return true;
          });
          console.table(result)
     }

     useEffect(() => {
          axios.post(API_URL + "product/getProduct")
               .then(res => {
                    console.log(res)
                    setProductImages(res.data.images)
                    setProductList(res.data.data)
               })
          axios.post(API_URL + "brand")
               .then(res => {
                    res.data.data.map((item, index) => {
                         var obj = {}
                         obj.value = item.id
                         obj.label = item.name
                         brand.push(obj)
                    })
               })
          axios.post(API_URL + "productType")
               .then(res => {
                    res.data.data.map((item, index) => {
                         var obj = {}
                         obj.value = item.id
                         obj.label = item.type
                         productType.push(obj)
                    })
               })
          axios.post(API_URL + "product/getSupplier")
               .then(res => {
                    res.data.data.map((item, index) => {
                         var obj = {}
                         obj.value = item.id
                         obj.label = item.name
                         Supplier.push(obj)
                    })
               })
     }, [])

     return (
          <>
               <div className='online-header'>
                    <h2>Products</h2>
               </div>
               <div className='online-title between'>
                    <div>
                         <p>Add, view and edit your products in one place. <Link to='' className=''>Need help?</Link></p>
                    </div>
                    <div className='products-header'>
                         <Button className='vd-btn--supplementary'>Import</Button>
                         <Button onClick={() => navigate('/catalog/products/add')} >Add Products</Button>
                    </div>
               </div>
               <div className='componentPadding flex'>
                    <div className='half-body flex product-catalog-card'>
                         <div className='seven-body'>
                              <img src="//vendfrontendassets.freetls.fastly.net/images/setup/set-up-product-tour-v1.svg" />
                         </div>
                         <div>
                              <h4>Build your catalog</h4>
                              <p>Whether you already have a digital record of your catalog or not, we’ll help you set yourself up for success with complete catalog entries.</p>
                              <div className='flex'>
                                   <Button className='vd-btn--supplementary'>Start Building</Button>
                                   <button className='dismiss-button'><BsCheck2 />Dismiss</button>
                              </div>
                         </div>
                    </div>

                    <div className='margin'></div>

                    <div className='half-body flex product-catalog-card'>
                         <div className='seven-body'>
                              <img src="//vendfrontendassets.freetls.fastly.net/images/setup/set-up-products-v1.svg" />
                         </div>
                         <div>
                              <h4>Build your catalog</h4>
                              <p>Whether you already have a digital record of your catalog or not, we’ll help you set yourself up for success with complete catalog entries.</p>
                              <div className='flex'>
                                   <Button className='vd-btn--supplementary'>Start Building</Button>
                                   <button className='dismiss-button'><BsCheck2 />Dismiss</button>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='product-search fullWidth flex componentPadding'>
                    <div className='half-body'>
                         <p>Search for products</p>
                         <div className='relative fullWidth'>
                              <BsSearch className='search-icon' />
                              <input className='vend-settings-input fullWidth search-style' placeholder='Enter name, SKU, handle or supplier code' onChange={(e) => setInputSearchProduct(e.target.value)} value={inputSearchProduct} />
                         </div>
                         <div className='margin'></div>

                         <div className='flex fullWidth'>
                              <div className='half-body'>
                                   <p>Supplier</p>
                                   <Select options={Supplier} placeholder="All suppliers" onChange={(e) => setSearchSupplier(e)} value={searchSupplier} />
                              </div>
                              <div className='margin'></div>
                              <div className='half-body'>
                                   <p>Brand</p>
                                   <Select options={brand} placeholder="All brands" onChange={(e) => setSearchBrand(e)} value={searchBrand} />

                              </div>
                         </div>

                    </div>
                    <div className='margin'></div>

                    <div className='half-body'>
                         <div className='flex fullWidth'>
                              <div className='half-body'>
                                   <p>Product type</p>
                                   <Select options={productType} placeholder='All types' onChange={(e) => setSearchType(e)} value={searchType} />
                              </div>
                              <div className='margin'></div>
                              <div className='half-body'>
                                   <p>Tags</p>
                                   <CreatableSelect
                                        isMulti
                                        onChange={(e) => setSearchTags(e)}
                                        value={searchTags}
                                        placeholder="Enter tags" />
                              </div>
                         </div>
                         <div className='flex fullWidth'>
                              <div className='half-body'>
                                   <p>Status</p>
                                   <Select options={statusList} placeholder='All statues' onChange={(e) => setSearchStatus(e)} value={searchStatus} />
                              </div>
                              <div className='margin'></div>
                              <div className='half-body search-button'>
                                   <Button className='vd-btn--supplementary' onClick={() => productSearch()}>Search</Button>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='componentPadding'>
                    <div className='item-center'>
                         <div className='width-5'><Checkbox /></div>
                         <div className='width-20'>Product</div>
                         <div className='width-10'>Brand</div>
                         <div className='width-15'>Supplier</div>
                         <div className='width-12'>Inventory</div>
                         <div className='width-13'>Retail Price</div>
                         <div className='width-10'>Active</div>
                         <div className='width-10'>Created</div>
                    </div>
                    {productList.map((item, index) => {
                         var product_img = productImages.find(array => array.product_id === item.id)
                         var sku_code = JSON.parse(item.sku_code)
                         var supplier = JSON.parse(item.supplier)
                         if (item.retail_price)
                              var retail_price = parseInt(item.retail_price)

                         return (
                              <div className='product-list' key={index}>
                                   <div className='width-5'><Checkbox /></div>
                                   <div className='width-20 product-image-show'>
                                        <img src={product_img ? API_URL + product_img.url : '//vendfrontendassets.freetls.fastly.net/images/products/placeholder.svg'} className='productImage' />
                                        <div>
                                             <p className='margin-zero'>{item.name}</p>
                                             <p className='description margin-zero'>{sku_code[0].code}</p>
                                        </div>
                                   </div>
                                   <div className='width-10'>
                                        {item.brand}
                                   </div>
                                   <div className='width-15'>{supplier.length == 1 ? supplier[0].type.label : supplier[0].type.label + " and " + supplier.length - 1 + " more"}</div>
                                   <div className='width-12'>∞</div>
                                   <div className='width-13'>{retail_price && '$' + retail_price.toFixed(2)}</div>
                                   <div className='width-10'>
                                        <Switch onChange={(e) => productActive(e)} checked={item.isActive == 1 ? true : false} onColor='#3f32f5' />
                                   </div>
                                   <div className='width-10'>{item.create_at.split('T')[0]}</div>
                              </div>
                         )
                    })}

               </div>

          </>
     )
}
export default Products;
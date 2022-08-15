import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as ControlButton } from "../../assets/images/logos/store-5.svg";

import '../../views/online/lightspeed_retail.css'

const ProductLayout = (props) => {
     console.log(props)
     return (
          <div className={props.productAddImage ? "grid-product grid-product--id-1 grid-product--has-additional-image" : "grid-product grid-product--id-1" }>
               <div className="grid-product__wrap">
                    <div className="grid-product__scroller--id-1 grid-product__scroller"></div>
                    <div className="grid-product__wrap-inner">
                         <Link className={props.productMainImage == 1 ? "grid-product__image" : 'product-hide'} title="Organic cotton t-shirt" to="">
                              <div className="grid-product__spacer">
                                   <div className="grid-product__spacer-inner"></div>
                              </div>
                              <div className="grid-product__bg" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
                              <div className="grid-product__image-wrap">
                                   <img src={props.item.img} title="Organic cotton t-shirt" alt="Organic cotton t-shirt" className="grid-product__picture" style={{ width: '100%', height: 'auto', marginTop: '12.5%' }} />
                                   <div className="grid-product__picture-additional grid-product__picture-additional--simple" id={props.item.hoverImg}></div>
                              </div>
                              <div className="grid-product__shadow ec-text-muted">
                                   <div className="grid-product__shadow-inner">{props.item.productName}</div>
                              </div>
                              <div className="grid__clearfix"></div>
                              <div className="grid-product__hover-wrap">
                                   <Link className={props.productName == 2 ? "grid-product__title-hover" : 'product-hide'} to="">
                                        <div className="grid-product__title-inner">{props.item.productName}</div>
                                   </Link>
                                   <div className={props.productSubTitle == 2 ? "grid-product__subtitle-hover" : 'product-hide'}>
                                        <div class="grid-product__subtitle-inner">{props.item.productName}</div>
                                   </div>
                                   <div className={props.productPrice == 2 ? "grid-product__price-hover" : 'product-hide'}>
                                        <div class="grid-product__price-amount">
                                             <div class="grid-product__price-value ec-price-item">{props.item.productPrice}</div>
                                        </div>
                                   </div>
                                   <div className={props.productSKU == 2 ? "grid-product__sku-hover" : 'product-hide'} >
                                        <div class="grid-product__sku-inner">{props.item.productSKU}</div>
                                   </div>
                                   <div className={props.productBuyButton == 2 ? "grid-product__button-hover  grid-product__buy-now" : 'product-hide'}>
                                        <div class="form-control form-control--button form-control--small form-control--secondary form-control--animated form-control--done">
                                             <button class="form-control__button form-control__button--icon-center" type="button">
                                                  <span class="form-control__button-text">Buy Now</span>
                                                  <span class="form-control__button-svg">
                                                       <span class="svg-icon">
                                                            <ControlButton />
                                                       </span>
                                                  </span>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </Link>
                         <Link className={props.productName == 1 ? 'grid-product__title' : 'product-hide'} to="">
                              <div className="grid-product__title-inner">Organic cotton t-shirt</div>
                         </Link>
                         <div className={props.productSubTitle == 1 ? "grid-product__subtitle ec-text-muted" : 'product-hide'}>
                              <div className="grid-product__subtitle-inner">Slim-fit short-sleeve unisex t-shirt</div>
                         </div>
                         <div className={props.productSKU == 1 ? 'grid-product__sku ec-text-muted' : 'product-hide'}>
                              <div className="grid-product__sku-inner">SKU 0001</div>
                         </div>
                         <div className={props.productPrice == 1 ? 'grid-product__price' : 'product-hide'}>
                              <div className="grid-product__price-amount">
                                   <div className="grid-product__price-value ec-price-item">{props.item.productPrice}</div>
                              </div>
                         </div>
                         <div className={props.productBuyButton == 1 ? 'grid-product__button grid-product__buy-now' : 'product-hide'}>
                              <div className="form-control form-control--button form-control--small form-control--secondary form-control--animated form-control--done">
                                   <button className="form-control__button form-control__button--icon-center" type="button">
                                        <span className="form-control__button-text">Buy Now</span>
                                        <span className="form-control__button-svg">
                                             <span className="svg-icon">
                                                  <ControlButton />
                                             </span>
                                        </span>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductLayout;

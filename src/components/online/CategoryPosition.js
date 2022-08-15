import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import '../../views/online/online.css'


const CategoryPosition = (props) => {
     console.log(props)
     return (
          <div className="grid-category grid-category--id-1 grid-category--simple">
               <div className="grid-category__wrap">
                    <div className="grid-category__wrap-inner">
                         <div className="grid-category__card">
                              <Link className={props.positionName == 3 ? "product-hide" : "grid-category__image" } title={props.item.name} to="" tabindex="-1">
                                   <div className="grid-category__bg">
                                        {/* <div className="grid-category__bg-color" style={{backgroundColor: 'rgb(254, 234, 231)'}}></div> */}
                                        <div className={props.item.hoverImg + " grid-category__bg-image"} ></div>
                                   </div>
                                   <div className="grid-category__image-wrap">
                                        <div className="grid-category__image-spacer">
                                             <div className="grid-category__image-spacer-inner"></div>
                                        </div>
                                        <div className={props.item.hoverImg + " grid-category__bg-image"}>
                                        </div>
                                        <div className="grid__clearfix"></div>
                                   </div>
                                   <div className="grid-category__shadow">
                                        <div className="grid-category__shadow-inner">{props.item.name}</div>
                                   </div>
                              </Link>
                              <div className={props.positionName == 2  ? "grid-category__hover-wrap" : "product-hide"} >
                                   <Link className="grid-category__title" to="">
                                        <div className="grid-category__title-inner">{props.item.name}</div>
                                   </Link>
                              </div>
                              <Link className={props.positionName == 0 || props.positionName == 1 || props.positionName == 3 ? "grid-category__title" : "product-hide"} to="">
                                   <div className="grid-category__title-inner">{props.item.name}</div>
                              </Link>
                         </div>
                         <div className="grid-category__spacer">
                              <div className="grid-category__spacer-inner"></div>
                         </div>
                         <div className="grid__clearfix"></div>
                    </div>
               </div>
          </div>
     );
};

export default CategoryPosition;

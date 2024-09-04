import React from 'react';
import {pec4} from '../assets'
import {arrow} from '../assets'

const SubPics = () => {
  return (
    <React.Fragment>
        <div className='subps p-4'style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
      <img src={pec4} alt=""className='' />
         <div className='d-flex mt-3'>
      <h6 className='header '><b>Wade Warren</b></h6>
        <div className='ml-4'>.</div>
      <p className='ml-3'>Fashion Designer</p>
                 </div>
        <h5 className='paragr mt-3'><b>How important are clothes<br/> in your style?</b></h5>
        <p className='mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua<br/> dolor do 
        amet sint. Velit officia consequat duis enim <br/>velit mollit. Exercitation 
        veniam consequat sunt nostrud<br/> amet.</p>
        <button className='btn btn-outline-dark mt-3'>Read more <img src={arrow} alt="" /></button>
               </div>
    </React.Fragment>
  );
}

export default SubPics;

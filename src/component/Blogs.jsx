import React from 'react';
import SubPics from './SubPics';
import {ground} from '../assets'
import {pec1,pec2,pec3} from '../assets'
import './style.css'

const Blogs = () => {
return (
    <React.Fragment>
      
      <div className='text-left mt-5 ml-4'>
        <p>Home &gt; Blogs</p>
      </div>
     <div><h4 className='text-center'><b>How important are shoes in your style?</b></h4></div>
                    <div className='para'>
       <p style={{marginLeft:"80px", width:"1356", height:"186px", top:"446px", left:"42px",marginTop:"100px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
       duis enim velit mollit. Exercitation veniam consequat<br/> sunt nostrud ametAmet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation<br/>
         veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
         sint. Velit officia consequat, duis enim velit<br/> mollit. Exercitation veniam consequat sunt nostrud ametAmet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat<br/> duis enim 
          velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est 
          sit aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit mollit. Exercitation veniam consequat
           sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do </p>
                          </div>
     <div className='ground '>
        <img src={ground} alt=""className='w-100' style={{height:'682px', marginLeft:'14px', marginTop:'50px'}}/>
     </div>
      <p style={{marginLeft:"95px",marginTop:"50px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
         duis enim velit mollit. Exercitation veniam consequat<br/> sunt nostrud ametAmet minim mollit non deserunt ullamco
         est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation<br/> veniam consequat
        sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
        consequat duis enim velit<br/> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat<br/> sunt nostrud ametAmet minim mollit
         non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
         Exercitation <br/>veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit<br/> mollit. Exercitation veniam consequat sunt nostrud ametAmet
           minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat<br/> duis enim velit
            mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit 
         aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit mollit. Exercitation veniam consequat
             sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor<br/> doAmet minim mollit non 
         deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
         Exercitation veniam consequat<br/> sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor
         do amet sint. Velit officia consequat duis enim velit mollit. Exercitation<br/> veniam consequat sunt nostrud 
         amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
         duis enim velit<br/> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat<br/> sunt nostrud ametAmet minim mollit non 
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
           Exercitation<br/> veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua
         dolor do amet sint. Velit officia consequat duis enim velit<br/> mollit. Exercitation veniam consequat sunt
           nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
         consequat<br/> duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit
           non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit 
          mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est
         sit aliqua dolor do  </p>
           <h3 className='text-center'style={{marginTop:"80px"}}><b>More Blog news</b></h3>
           <div className="row mt-5"  style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
           <div className="col-sm-12 col-md-12 col-lg-4 ">
                 <img src={pec1} alt=""className='w-100' />
                 <SubPics/>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
                 <img src={pec2} alt="" className='w-100' />
                 <SubPics/>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
                 <img src={pec3} alt=""className='w-100' />
                 <SubPics/>
            </div>
           </div>
       <div className='pagination'style={{marginTop:"100px",marginLeft:"530px"}}>
         <ul class="pagination">

             <li class="page-item ">
               <a className="page-link "href='#'><span aria-hidden="true">&lt;</span></a>
            </li>
                 <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item "><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                 <li class="page-item">
                       <a class="page-link" href="#" >
                           <span aria-hidden="true">&gt;</span>
                       </a>
              </li>
          </ul>
      </div>
    </React.Fragment>
  )
}
export default Blogs

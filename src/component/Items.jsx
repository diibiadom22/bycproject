import React from 'react';
import Stars from './Stars';
import {shot} from '../assets'
import {caba} from '../assets'
import {aple} from '../assets'
import {byc} from '../assets'


const Items = () => {
  return (
<React.Fragment>
<div class="mt-5" style={{backgroundColor:'white',border:'2px solid lightgray',height:'600px',width:'1200px',            marginLeft:'15px', borderRadius:'10px'}}>
              <p className='font-weight-bold p-2 ml-4 mt-3'>Cart 1 item(s)</p>
               <p style={{borderBottom:'2px solid lightgray', width:'1150px', marginLeft:'15px'}}></p>
  <div className='cart d-flex mt-5'>
          <img src={shot} alt="" className='' />
        <div className='head ml-5'>
           <p className='font-weight-bold'>MEN BOXERS</p>
           <p className='font-weight-bold'style={{marginTop:"-10px"}}>BYC 1166</p>
           <p className='font-weight-normal mt-3'>100% Cotton 12 Pieces Of Mens Boxer </p>
            <div className='d-flex'>
                  <div className='butto mt-3'>
                         <button type="btn" className="btn btn-outline-danger" style={{width:"150px",borderRadius:"10px",height:'40px'}}><img src={aple} alt=""className='app'style={{width:'17px',marginLeft:'-80px'}} /><p className='pen'style={{fontSize:'15px', marginLeft:'20px'}}> Wishlist</p> </button>
                  </div>
                  <div className='cars ml-3 mt-3'>
                         <button type="btn" className="btn bg-danger" style={{width:"150px",borderRadius:"10px",height:'40px'}}><img src={caba}  alt=""className='bro' style={{width:'17px',marginLeft:'-80px'}}/><p className="writ"style={{fontSize:'15px', marginTop:'-20px',color:'white',marginLeft:"20px"}} >Remove</p> </button> 
                 </div>
            </div>
       </div>
       <div className='vborder'style={{borderLeft:'1px solid lightgray',marginLeft:'30px'}}></div>
        <div className='subparent'>
             <p style={{marginLeft:'50px'}}><>Quantity</></p>
             <div className='d-flex'>
                 <div className='but1'>
                     <button type="btn" className="btn bg-danger btn-outline-light ml-4 mt-2"style={{width:'40px',height:'40px'}}><p>+</p></button>
                 </div>
                 <h6 className='mt-3 ml-3'>1</h6>
                 <div className='but1'>
                     <button type="btn" className="btn bg-danger btn-outline-light ml-3 mt-2"style={{width:'40px',height:'40px'}}><p>-</p></button>
                 </div>
            </div>
       </div>
       <div className='vborder'style={{borderLeft:'1px solid lightgray',marginLeft:'30px'}}></div> 
       <div className='subpar'>
       <p style={{marginLeft:'60px'}}>Unit Price</p>
       <h2 style={{marginLeft:'60px', marginTop:'30px'}}><b>#2,800.00</b></h2>
       </div>
   </div>
   <p style={{borderBottom:'2px solid lightgray', width:'1150px', marginLeft:'15px',marginTop:'40px'}}></p>
    <h5 className='trab'style={{marginLeft:'600px'}}><b>CART TOTALS</b></h5>
   <div className='cart1 d-flex mt-5'>
          <div className='catpa'style={{marginTop:'-30px'}}>
              <p style={{marginLeft:'600px',fontSize:'20px',fontWeight:'400px'}}>Subtotal</p>
               <p style={{marginLeft:'600px',fontSize:'20px',fontWeight:'400px'}}>Total</p>
               <button type="btn" className="btn bg-light btn-outline-danger  mt-2"style={{width:'200px',height:'40px',marginLeft:'600px'}}>continue shopping</button>
         </div>
         <div className='nums'style={{marginTop:'-30px'}}>
         <p style={{marginLeft:'200px',fontSize:'20px',fontWeight:'400px'}}>#2,800.00</p>
         <p style={{marginLeft:'200px',fontSize:'20px',fontWeight:'400px'}}>#2,800.00</p>
         <button type="btn" className="btn bg-danger btn-outline-light  mt-2"style={{width:'200px',height:'40px',marginLeft:'50px'}}>proceed to checkout</button>
         </div>
     </div>
 </div>
        
 <div class="mt-5" style={{backgroundColor:'white',border:'2px solid lightgray',height:'500px',width:'1200px',marginLeft:'15px', borderRadius:'10px'}}>
          <div className="d-flex">
           <div className='view pl-4 mt-4'><b>Recently Viewed</b></div> 
          <div className="text-danger mt-4"style={{marginLeft:'960px'}}>See All &gt; </div>
           </div>
           <p style={{borderBottom:'2px solid lightgray', width:'1150px', marginLeft:'20px',marginTop:'10px'}}></p>

          <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-2">
          <img src={byc}alt="" className='w-100' style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}/>
             <h6 className='can mt-3'><b>MEN BOXERS</b></h6>
             <h6>BYC 1163</h6>
             <p className='test'style={{color:'#787885',fontSize:'12px',width:'224',lineHeight:'15.96px',fontWeight:'400px'}}>Fashionables Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
              <p>₦1,900.00</p>
              <Stars/>
             </div>
             <div className="col-sm-12 col-md-12 col-lg-2 ">
          <img src={byc}alt="" className='w-100' style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}/>
             <h6 className='can mt-3'><b>MEN BOXERS</b></h6>
             <h6>BYC 1163</h6>
             <p className='test'style={{color:'#787885',fontSize:'12px',width:'224',lineHeight:'15.96px',fontWeight:'400px'}}>Fashionables Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
              <p>₦1,900.00</p>
              <Stars/>
             </div>
             <div className="col-sm-12 col-md-12 col-lg-2 ">
          <img src={byc}alt="" className='w-100' style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}/>
             <h6 className='can mt-3'><b>MEN BOXERS</b></h6>
             <h6>BYC 1163</h6>
             <p className='test'style={{color:'#787885',fontSize:'12px',width:'224',lineHeight:'15.96px',fontWeight:'400px'}}>Fashionables Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
              <p>₦1,900.00</p>
              <Stars/>
             </div>
             <div className="col-sm-12 col-md-12 col-lg-2 ">
          <img src={byc}alt="" className='w-100' style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}/>
             <h6 className='can mt-3'><b>MEN BOXERS</b></h6>
             <h6>BYC 1163</h6>
             <p className='test'style={{color:'#787885',fontSize:'12px',width:'224',lineHeight:'15.96px',fontWeight:'400px'}}>Fashionables Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
              <p>₦1,900.00</p>
              <Stars/>
             </div>
             <div className="col-sm-12 col-md-12 col-lg-2 ">
          <img src={byc}alt="" className='w-100' style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}/>
             <h6 className='can mt-3'><b>MEN BOXERS</b></h6>
             <h6>BYC 1163</h6>
             <p className='test'style={{color:'#787885',fontSize:'12px',width:'224',lineHeight:'15.96px',fontWeight:'400px'}}>Fashionables Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
              <p>₦1,900.00</p>
              <Stars/>
             </div>
             
             <div className="col-sm-12 col-md-12 col-lg-2 ">
          <img src={byc}alt="" className='w-100' style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}/>
             <h6 className='can mt-3'><b>MEN BOXERS</b></h6>
             <h6>BYC 1163</h6>
             <p className='test'style={{color:'#787885',fontSize:'12px',width:'224',lineHeight:'15.96px',fontWeight:'400px'}}>Fashionables Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
              <p>₦1,900.00</p>
              <Stars/>
             </div>
          </div>
       </div>
        
</React.Fragment>
  );
}

export default Items;

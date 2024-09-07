import React from 'react';
import {shot} from '../assets'
import {visa} from '../assets'

const OrderSum = () => {
  return (
    <React.Fragment>
 <div class="mt-5" style={{backgroundColor:'white',border:'2px solid lightgray',height:'1500px',  width:'1200px',        marginLeft:'15px', borderRadius:'10px'}}>
              <p className='font-weight-bold p-2 ml-4 mt-3'>Order Summary 1 item(s)</p>
               <p style={{borderBottom:'2px solid lightgray', width:'1150px', marginLeft:'15px'}}></p>
 <div className='cart d-flex '>
      <div className='image'>
          <img src={shot} alt=""  />
      </div>
         <div className='head ml-5'>
             <p className='font-weight-bold'>MEN BOXERS</p>
             <p className='font-weight-bold'style={{marginTop:"-10px"}}>BYC 1166</p>
             <p className='font-weight-normal mt-3'>100% Cotton 12 Pieces Of Mens Boxer </p>
             <h2 style={{marginLeft:'px', marginTop:'30px'}}><b>#2,800.00</b></h2>
             <p style={{marginLeft:'px'}}>Quantity: 1</p>
             <button type="btn" className="btn bg-danger" style={{width:"200px",borderRadius:"10px",height:'40px'}}><p className="writ"style={{fontSize:'13px', marginTop:'5px',color:'white',marginLeft:"10px"}} >Modify Cart</p> </button>
         </div>
      <div className='vborder'style={{borderLeft:'1px solid lightgray',marginLeft:'200px', height:'130px'}}></div>
     <div className='cart1 d-flex '>
          <div className='catpa'style={{marginTop:'20px'}}>
                <p style={{marginLeft:'10px',fontSize:'20px',fontWeight:'400px', }}>Subtotal</p>
                <p style={{marginLeft:'10px',fontSize:'20px',fontWeight:'400px'}}>Delivery fee</p>
          </div>
          <div className='nums'style={{marginTop:'20px'}}>
                 <p style={{marginLeft:'200px',fontSize:'20px',fontWeight:'400px'}}>#2,800.00</p>
                 <p style={{marginLeft:'200px',fontSize:'20px',fontWeight:'400px'}}>#2,800.00</p>
               <div className='subbd' style={{borderBottom:'2px solid lightgray', width:'400px', marginLeft:'-100px',marginTop:'00px'}}>
               </div>
               <div className='d-flex'>
               <div className='total'style={{marginLeft:'-100px'}}><b> Total</b></div>
               <div className='nom'style={{marginLeft:'260px'}}><b>#2,800.00</b></div>
               </div>
         </div>
         </div>
  </div>
  <p style={{borderBottom:'2px solid lightgray', width:'1150px', marginLeft:'15px',marginTop:'50px'}}></p>
    <div className='d-flex'>
     <div className='total'style={{marginLeft:'30px'}}><b>SHIPPING ADRESS</b></div>
     <div className='nom'style={{marginLeft:'550px'}}><b>CHECKOUT</b></div>
 </div>
 <p style={{borderBottom:'2px solid lightgray', width:'1150px', marginLeft:'15px',marginTop:'20px'}}></p>
 <div className="row">
 <div className="col-sm-12 col-md-12 col-lg-6 ">
 <form>
   <div className='fom ml-3'>
   <label for="fullN">Full Name</label>
    <input type="email" class="form-control"style={{border:'1px solid red', width:'400px'}} />
    
    <label for="exampleInputPassword1">company name </label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>
    
    <label for="exampleInputPassword1">Country/Region</label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>
    
    <label for="exampleInputPassword1">Town/City </label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>
    
    <label for="exampleInputPassword1">State</label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>
    
    <label for="exampleInputPassword1">State </label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>
    
    <label for="exampleInputPassword1">Phone</label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>

    <label for="exampleInputPassword1">Email address</label>
    <input type="password" class="form-control" style={{border:'1px solid red',width:'400px'}}/>
  
  
  <button type="submit" class="btn  mt-4"style={{backgroundColor:'#DC143C',width:'400px', color:'white'}}>Submit</button>
  </div>
</form>
</div>
 <div className="col-sm-12 col-md-12 col-lg-6 ">
      <div className='subback'style={{backgroundColor:'#FFF8F8',width:'577px',height:'350px', marginTop:'30px'}}>
          <div class="form-radio">
             <input type="radio"  className=" ml-3 mode" style={{}} />
                <label class="form-check-label mt-3 ml-5" for="boss">
                  Direct bank transfer
              </label>
           </div>
           <p style={{backgroundColor:'white',marginLeft:"70px",fontWeight:'400px',fontSize:'12px', marginTop:'20px', color:'#9F9F9F'}}>Make your payment directly into our bank account. <br/>
            Please use your Order ID as the payment reference.<br/> 
           Your order will not be shipped until the funds have cleared in our account.</p>
           <div className='d-flex'>
         <div className='radio'>
            <input type="radio"className='' style={{marginTop:'30px', marginLeft:'20px'}} />
            <label className="go" for="bost" style={{marginTop:'30px',marginLeft:'50px'}} >Secure Online Payment</label>
            </div>
            <div className='image'>
                <img src={visa} alt=""className=''style={{marginTop:'10px', marginLeft:'50px'}} />
         </div>
         </div>
         <p style={{fontWeight:'400px',fontSize:'12px',color:'#100F0F',marginLeft:"50px",marginTop:'60px'}}>Your personal data will be used to process your order, support your experience throughout<br/> 
         this website, and for other purposes described in our privacy policy.</p>
      </div>
      
         <button type="submit" class="btn  mt-4"style={{backgroundColor:'#DC143C',width:'400px',marginTop:'30px',color:'white'}}>Place order</button>
    </div>
    
</div>
</div>

 </React.Fragment>
  );
}

export default OrderSum;

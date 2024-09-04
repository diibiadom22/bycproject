import React from 'react';
import {shot} from '../assets'
import {caba} from '../assets'
import {aple} from '../assets'


const Items = () => {
  return (
 <React.Fragment>
        <div class="mt-5" style={{backgroundColor:'white',border:'2px solid lightgray',height:'500px',width:'1200px',     marginLeft:'15px', borderRadius:'15px'}}>
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
                        

         </div>
    </div>
        
</React.Fragment>
  );
}

export default Items;

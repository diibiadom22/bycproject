import React from 'react';
import Blogs from './component/Blogs';
import AllProducts from './component/AllProducts';
import Items from './component/Items';
import OrderSum from './component/OrderSum';

const Display = () => {
  return (
    <div>
      <Blogs/>
      <AllProducts/>
      <Items/>
      <OrderSum/>
    </div>
  );
}
export default Display

import React, { useState } from 'react';
import Itemlis from './Itemlis';

const Content=({items,onhandlechange,ondelete})=>{
  
  return (
    <div className='container'>
      {items.length ?(
        <Itemlis
        items={items}
        onhandlechange={onhandlechange}
        ondelete={ondelete}/>
    ):(
      <p style={{marginTop: '2rem'}}>Your list is empty</p>

    )}
    </div>
  );};

export default Content;





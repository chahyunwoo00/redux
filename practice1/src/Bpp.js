import React from 'react';
import { useEffect } from 'react';

const Bpp = () => {
  useEffect(()=>{
   console.log('rendering') 
  })
  return (
    <div>
      <span>타이머를 시작합니다</span>
      
    </div>
  );
};

export default Bpp;

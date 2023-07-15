'use client'
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import  { toggle} from '../app/redux/store'


const CakeContainer = () => {

  const dispatch = useDispatch();
  const toggleValue = useSelector((state) => state.toggle);

  const handleToggle = () => {
    dispatch(toggle());
    console.log(toggleValue.toString());
    
  };


  return (
    <div>
      <h1>Value:  {'  '+ toggleValue.toString()}</h1>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default CakeContainer;

import {useState,useEffect} from 'react';
import svg from '../svgList';
function RXandDXform(props){
    const type = props.type
  return (
    <div className="AddNewPatientDRifo">
    <li>
      <a
      style={{
        boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"

      }}
      >
        {svg.RAD}
      </a>
    </li>
    <div
    style={{
        flexDirection:"column"
    }}
    >
        <h1>
            {props.type}
        </h1>
        <textarea>
            
        </textarea>
    </div>
  </div>
  );
}

export default RXandDXform;

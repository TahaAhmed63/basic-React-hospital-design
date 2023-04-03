import React from 'react'
import "./Detail.css"
import Card from './Card'
 const Apointment = () => {
  return (
 <>
  <div className="container">
 <div className="main-box">
 <div className="container">
        <div className="my-box">
      <div className="item">
        <div className="box-head-1">
          <h3>St Judes Hospital   </h3>
          <p>Sarasota,FL. 33178</p>
        </div>
      </div>
  <div className="item">
    <div className="line-10"></div>
  <div className="box-head-1">
    <div className="box-6">
  <h3>10 </h3>

<span>-</span>
  <h3>17</h3>
 
</div>
<div className="box-6">
  <p>October</p>
  <p>December</p>
</div>

</div>

</div>
  <div className="item">
  <div className="line-10"></div>
  <div className="box-head-1">
          <h3>20 Rooms   </h3>
          <p>10 Singles, 10 doubles</p>
        </div>
   



  </div>
  </div></div>
 
  <div className="button oval right-2">
        <span>COMPLETED</span>
      </div>
<div className="container">

<Card/>

</div>
 </div>

 
 </div>
 
 </>
  )
}
export default Apointment
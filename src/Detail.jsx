import React from 'react'
import "./Detail.css"
import "./OvalButttons"
import OvalButtons from './OvalButttons'

const Detail = () => {
  return (
    <>
    <div className="req-head">
      <h3>You currently have 3 requests</h3>
    </div>
    <div className="container">
      <div className="box">
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

  </div>
<OvalButtons/>
      </div> 
    </div>
  </>
  
  )
}
export default Detail
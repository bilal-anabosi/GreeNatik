import React from 'react'
import StyleLeaderboard from './StyleLeaderboard.css';
function CurrentLeaders  ({ name, points,img,tasks,pts,icon })  {
  return (
<div>

    <div className="carddddd " >
      
    <div className="card-body ddd eman-contai-current mt-5" style={{height:'240px'}}>


<div className="container gG">
  <div className="left-image">
    <img src={img} alt="" />
  </div>
  <div>
    <p className="card-nameee">{name}</p>
    
  </div>
</div>



      <h5 className="card-ptss">{pts}<sub>Pts.</sub></h5>
      <p>
       <hr/>
      </p>
      <div className="container aA">
      
      
      <p className='Pointss'>Points <h5>{points}</h5></p>
   
      <p className='taskss'>Tasks     <h5>{tasks}</h5></p>
    </div>
    </div>
    
    <div className='icon ' >
  <img className='icon icone-leader' src={icon}  style={{ }}  />

</div>
  </div>
  <div/>
  </div>
 )
}
export default CurrentLeaders;
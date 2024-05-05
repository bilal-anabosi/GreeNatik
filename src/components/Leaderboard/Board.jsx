import StyleLeaderboard from './StyleLeaderboard.css';
function Board ({icon,number,title,title2,countt}) {
  return (
 <div className='board-carddd-body'>

{/* card */}
<div className="carddddd h-100 card-lg">
  {/* card body */}
  <div className="card-body p-6 board-carddd"style={{backgroundColor:'#F1F3F2',borderRadius:'11px' }}>
    {/* heading */}
    <div className="d-flex justify-content-between align-items-center mb-6">

    <div>
        <p className="mb-0 fs-5">{title}</p>
        <p><h2 className='countttt'>{countt}</h2></p> 
        <p > <h6 className='dayHourMinute' style={{marginBottom:'-25px',marginLeft:'5px'}}>{title2} </h6> </p>
    </div>
   


      <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
      <img src={icon} style={{width:'140%',borderRadius:'50%'} }></img>
      </div>
    </div>
    {/* project number */}
    <div className="lh-1">
      <h1 className="mb-2 fw-bold fs-2">{number}</h1>
      
    </div>
   
  </div>
</div>


 </div>
  )
}
export default Board;
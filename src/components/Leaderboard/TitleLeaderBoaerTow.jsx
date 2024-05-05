import React from 'react'
import StyleLeaderboard from './StyleLeaderboard.css';

import DropdownsLeader from './DropdownsLeader';
function TitleLeaderBoardTow  ({Title})  {
  return (
    <div>
        <div className="dropdown-monthly" style={{marginBottom:'30px',marginLeft:'110px'}}><DropdownsLeader title="Monthly" /></div>
        
    <div>
        <h2 className='eman-Text-two-Current'>{Title}</h2>
        </div></div>
  )
}
export default  TitleLeaderBoardTow;
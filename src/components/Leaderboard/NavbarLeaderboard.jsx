import React from 'react'
import DropdownsLeader from './DropdownsLeader'
import StyleLeaderboard from './StyleLeaderboard.css';
function NavbarLeaderboard  ()  {
  return (
   

 <div  className='HomeShopFoodWaer' >

<nav aria-label="breadcrumb "className='eman-homeShop'>
<ol className="breadcrumb ">
<li className="breadcrumb-item"><a href="# ">Home</a></li>
<li className="breadcrumb-item active " aria-current="page">Leaderboard</li>
</ol>
</nav>


<div className='NavTwoo navvvbarrtwo'>
      <nav className="navbar bg-body-tertiary ">
  <div className="container-fluid">

    <span className="navbar-text">
      <h1>Leaderboard</h1>

    </span>
  
  </div>
  
</nav>
<DropdownsLeader title="Overall" dropdownItem1="dropdownItem1" dropdownItem2="dropdownItem2" dropdownItem3="dropdownItem3"/>
</div>


</div>
  )
}
export default NavbarLeaderboard 

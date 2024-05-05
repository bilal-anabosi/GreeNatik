import React from 'react'

function DropdownsLeader ({title,dropdownItem1,dropdownItem2,dropdownItem3})  {
  return (
    <div>
<div className="dropdown DDropddowne">
  <button className="btn btn-secondary dropdown-toggle DrobdowneLeader" type="button" data-bs-toggle="dropdown" aria-expanded="false"  >
 
 
{title}

  </button >
 
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">{dropdownItem1}</button></li>
    <li><button className="dropdown-item" type="button">{dropdownItem2}</button></li>
    <li><button className="dropdown-item" type="button">{dropdownItem3}</button></li>
  </ul>
</div>


    </div>
  )
}
export default DropdownsLeader;

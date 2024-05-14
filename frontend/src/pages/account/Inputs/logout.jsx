import React from 'react';

export function Logout(){
    const handleCilck=()=>{
        localStorage.clear();
        window.location.reload();
      }

      return (
        <div onClick={handleCilck}>Logout</div>
      )
}
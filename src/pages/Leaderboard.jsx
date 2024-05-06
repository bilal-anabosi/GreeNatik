import React from 'react';
import NavbarLeaderboard from '../components/Leaderboard/NavbarLeaderboard';
import ListLeader from '../components/Leaderboard/ListLeader';
import Board from '../components/Leaderboard/Board';
import TitleLeaderBoardTow from '../components/Leaderboard/TitleLeaderBoaerTow';
import TitleLeaderBoard  from '../components/Leaderboard/TitleLeaderBoard';
import CurrentLeaders from '../components/Leaderboard/CurrentLeaders';
import WarningLeader from '../components/Leaderboard/WarningLeader';
function Leaderboard  ()  {
    return (
<div>
<NavbarLeaderboard/>

<div className="container mt-5">
      <div className="row">
        <div className="col-md-4 ">
          <Board  title="Joined members " number="369+" icon="\img\Screenshot 2024-05-03 230248.png" />
        </div>
        <div className="col-md-4">
          <Board title="Achieved Goals" number="732+" icon="\img\Screenshot 2024-05-03 223843.png" />
        </div>
        <div className="col-md-4">
          <Board title="Remaining time to completion🔥"title2=" day : Hour : Minute"  icon="\img\Screenshot 2024-05-03 232803.png" countt="12 : 6 : 42" />
        

        </div>
      </div>
      

    </div>



<TitleLeaderBoard Title="Current Leaders"/>
<div className="container eman-contai-current mt-5">

      <div className="row">
        <div className="col-md-4">
          <CurrentLeaders tasks="13" points="450" pts="56782" img="\img\Screenshot 2024-05-04 170459.png" icon="\img\Screenshot 2024-05-04 124913.png" name="Wahiba Jalal" />
        </div>
        <div className="col-md-4">
          <CurrentLeaders tasks="13" points="410" pts="54612" img="\img\Screenshot 2024-05-04 170506.png"icon =" \img\Screenshot 2024-05-04 124918.png" name="Abboud Samir" />
        </div>
        <div className="col-md-4">
          <CurrentLeaders tasks="11" points="398" pts="50962" img="\img\Screenshot 2024-05-04 170510.png"icon ="\img\Screenshot 2024-05-04 124927.png"name="Tamara Selsal" />
        </div>
      </div>
   
     </div>

<TitleLeaderBoardTow Title="Global Ranking"/>
<ListLeader/>
<WarningLeader/>
</div>
)};

export default Leaderboard;


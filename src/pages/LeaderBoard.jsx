// src/pages/Home.js
import React from 'react';
import Bord from '../components/LeaderBoard/Board';
import LeaderBar from '../components/LeaderBoard/LeaderBar';
import TableData from '../components/LeaderBoard/TableData';
import CardPoint from '../components/LeaderBoard/CardPoint';

const LeaderBoard = () => {
return (


<div className ="container-fluid">

<LeaderBar/>

<Bord/>

<CardPoint/>

<TableData/>



</div>



);
};

export default LeaderBoard;

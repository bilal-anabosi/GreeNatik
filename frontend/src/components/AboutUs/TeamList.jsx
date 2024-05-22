import React from 'react';
import './About.css';

function TeamList({ teamMembers }) {
    
  const chunkedTeamMembers = [];
  for (let i = 0; i < teamMembers.length; i += 4) {
    chunkedTeamMembers.push(teamMembers.slice(i, i + 4));
  }

  return (
    <div>
      {chunkedTeamMembers.map((chunk, index) => (
        <div className="row" key={index}>
          {chunk.map((member, idx) => (
            <div className="col-sm-6 col-md-3" key={idx}>
              <div className="team-item text-center">
                <div className="team-avatar">
                  <img src={member.image} alt="Team Member" className="iimmgg"/>
                </div>
                <div className="team-desc">
                  <h5 className="team-name">{member.name}</h5>
                  <span className="team-position">{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TeamList;

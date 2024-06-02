// OurTeam.js
import React from 'react';
import './About.css';
import TeamList from './TeamList';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Bilal Anabosi',
      position: 'Team Leader',
      image: '/pics/teamimg/tt1.png',
    },
    {
      name: 'Toqa Asidah',
      position: 'Member 1',
      image: '/pics/teamimg/tt2.png',
    },
    {
      name: 'Sana Saleh',
      position: 'Member 2',
      image: '/pics/teamimg/tt3.png',
    },
    {
      name: 'Roaa Kittaneh',
      position: 'Member 3',
      image: '/pics/teamimg/tt4.png',
    },
    {
      name: 'Abdellatif Shtayeh',
      position: 'Product Designer',
      image: '/pics/teamimg/tt5.png',
    },
    {
      name: 'Nora Sarrawi',
      position: 'Member 5',
      image: '/pics/teamimg/tt6.png',
    },
    {
      name: 'Eman Rayyan',
      position: 'Member 6',
      image: '/pics/teamimg/tt7.png',
    },
    {
      name: 'Ebrahim Bileh',
      position: 'Member 7',
      image: '/pics/teamimg/tt8.png',
    }
  ];


  return (
    <div className='container'>
    <div className='ZZ'>
        <section className="team social-hover team-overlay pb-0">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="title text-center">
                <h2>Our Leadership</h2>
              </div>
            </div>
          </div>
          <TeamList teamMembers={teamMembers} />
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto text-center mt-5">
              <br/><br/><br/>
              <h6>For more information, please contact us at (contact information) or follow us on (social media links).</h6>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurTeam;

import Blog_card from '../../components/blog/blog-card.jsx'
import Pagination_blog from '../../components/blog/pagination-blog';
import React, { useEffect } from 'react';

function Blog_category() {

  useEffect(() => {
    document.title = "LifeStyle"; 
  }, []); 

  return (
    <>
      {/* section */}
      <div className="mt-4">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-12">
              {/* breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#!">Home</a></li>
                  <li className="breadcrumb-item"><a href="#!">Blog</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog Category</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <section className="mt-8">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-12 mb-4">
              {/* heading */}
              <h1 className="fw-bold">LifeStyle</h1>
            </div>
          </div>
        </div>
      </section>
      {/* section */}
      <section className="mb-lg-14 mb-8">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* blog cards (this is just for show will be modifid later to add the back end etc) */}
            <Blog_card img='https://i.imgur.com/bVNE2I5.png' tag='LifeStyle' title='Will sustainable living make you happier? ' description='clean air, fresh water, green trees…I think everyone can agree that a clean, sustainable environment is better for everyone. ' timestamp='22 April 2023' readtime='12min'/>
            <Blog_card img='https://i.imgur.com/QkjzrOX.png' tag='Recycle' title='Tips To Write Pros & Cons Of Recycling Essay' description='Gain valuable insights and practical tips for structuring a compelling pros and cons essay on recycling, empowering you to effectively communicate .' timestamp='20 April 2023' readtime='16min'/>
            <Blog_card img='https://i.imgur.com/xXcDA2m.png' tag='LifeStyle' title='How Do I Recycle Common Recyclables' description='Navigate the maze of recycling with ease as we demystify the process of recycling everyday household items.' timestamp='21 April 2023' readtime='13min'/>
            <Blog_card img='https://i.imgur.com/jg1NfYH.png' tag='Climate Change' title='The Green Revolution: Transforming Waste into Wealth' description='Dive into the world of recycling and discover how innovative approaches are turning trash into treasure.' timestamp='15 April 2023' readtime='20min'/>
            <Blog_card img='https://i.imgur.com/jBWEQI8.png' tag='Recycle' title='From Trash to Treasure' description='Explore the art of upcycling and learn how creative repurposing is breathing new life into discarded materials.' timestamp='15 April 2023' readtime='15min'/>
            <Blog_card img='https://i.imgur.com/K6ioSme.png' tag='Eco-friendly' title='Recycling 101: A Beginner`s Guide to Saving the Planet' description='Embark on a journey to understand the fundamentals of recycling, empowering yourself with practical tips and insights' timestamp='11 April 2023' readtime='16min'/>
            <Blog_card img='https://i.imgur.com/5279xsG.png' tag='LifeStyle' title='Beyond the Bin: Exploring Advanced Recycling Techniques' description='clean air, fresh water, green trees…I think everyone can agree that a clean, sustainable environment is better for everyone. ' timestamp='11 April 2023' readtime='23min'/>
            <Blog_card img='https://i.imgur.com/THgmJ7i.png' tag='Recycle' title='Closing the Loop' description='Discover the concept of a circular economy and its pivotal role in transforming our linear consumption habits.' timestamp='8 April 2023' readtime='15min'/>
            <Blog_card img='https://i.imgur.com/5HKCtuT.png' tag='LifeStyle' title='Green Living Made Easy' description='Unlock a treasure trove of easy-to-implement recycling hacks and lifestyle changes.' timestamp='21 March 2023' readtime='8min'/>

          </div>
          <Pagination_blog />
        </div>
      </section>
    

    </>);
}

export default Blog_category;
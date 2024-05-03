import Pagination_blog from '../../components/blog/pagination-blog';
import Blog_card from '../../components/blog/blog-card';
import React, { useEffect } from 'react';
import Category_card from '../../components/blog/category-card'

function All_blogs() {

  useEffect(() => {
    document.title = "GreeNatik Blog"; 
  }, []); 

  return (
    <>
      <div>
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#!">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>

              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <section className="mt-8">
          <div className="container">
            <div className="row">
              {/* logo */}
              <div className="col-12">
                <h1 className="fw-bold">GreeNatik Blog</h1>
              </div>
            </div>
          </div>
        </section>

        {/* section */}
        <section className="mt-6 mb-lg-14 mb-8">
          {/* container */}
          <div className="container">
            <div className="row d-flex align-items-center mb-8">
              <div className="col-12 col-md-12 col-lg-8">
                <a href="http://localhost:3000/single-blog">
                  {/* img */}
                  <div className="img-zoom">
                    <img src="https://i.imgur.com/X3yjmRP.png" alt className="img-fluid w-100" />
                  </div>
                </a>
              </div>
              {/* text */}
              <div className="col-12 col-md-12 col-lg-4">
                <div className="ps-lg-8 mt-8 mt-lg-0">
                  <h2 className="mb-3"><a href="http://localhost:3000/single-blog" className="text-inherit">Will sustainable living make you happier?</a></h2>
                  <p>
                    clean air, fresh water, green trees…I think everyone can agree that a clean, sustainable environment is better for everyone.
                  </p>
                  <div className="d-flex justify-content-between text-muted">
                    <span><small>22 April 2023</small></span>
                    <span>
                      <small>
                        Read time:
                        <span className="text-dark fw-bold">12min</span>
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-lg-14 my-8">
              <div className="container">
                <div className="row">
                  <div className="col-12 mb-6">
                    <h3 className="mb-0">Featured Categories</h3>
                  </div>
                </div>
              </div>
              <div className="container">
                {/* row */}
                <div className="table-responsive-xxl">
                  <div className="row flex-nowrap">
                    <Category_card card_img='https://i.imgur.com/cp1Va46.png' color='bg-success' title='LifeStyle' link="http://localhost:3000/blog-category" />
                    <Category_card card_img='https://i.imgur.com/rQEu9RT.png' color='bg-secondary' title='Climate Change' />
                    <Category_card card_img='https://i.imgur.com/JlRwd3y.png' color='bg-dark-danger' title='Eco-friendly' />
                    <Category_card card_img='https://i.imgur.com/YGDiTAA.png' color='bg-primary' title='Recycle' />
                    <Category_card card_img='https://i.imgur.com/C2b4YFo.png' color='bg-warning' title='Family' />

                  </div>
                </div>
              </div>
            </div>

            {/* row */}
            <div className="row">
              <Blog_card img='https://i.imgur.com/jg1NfYH.png' tag='Climate Change' title='The Green Revolution: Transforming Waste into Wealth' description='Dive into the world of recycling and discover how innovative approaches are turning trash into treasure.' timestamp='15 April 2023' readtime='20min' />
              <Blog_card img='https://i.imgur.com/jBWEQI8.png' tag='Recycle' title='From Trash to Treasure' description='Explore the art of upcycling and learn how creative repurposing is breathing new life into discarded materials.' timestamp='15 April 2023' readtime='15min' />
              <Blog_card img='https://i.imgur.com/K6ioSme.png' tag='Eco-friendly' title='Recycling 101: A Beginner`s Guide to Saving the Planet' description='Embark on a journey to understand the fundamentals of recycling, empowering yourself with practical tips and insights' timestamp='11 April 2023' readtime='16min' />
              <Blog_card img='https://i.imgur.com/KK6mou6.png' tag='Family' title='Teach your children the importance of recycling' description='You should teach your children that not cause i care, it is cause am just filling this sh!t for styling nothing more  ' timestamp='11 April 2023' readtime='13min' />
              <Blog_card img='https://i.imgur.com/gymwvDX.png' tag='Climate Change' title='Does using green products help with climate change' description='I mean come on... how f obvious is it, like despite the numbers and all idc about that it is a direct question wither it help or not, will it does help' timestamp='11 April 2023' readtime='22min' />
              <Blog_card img='https://i.imgur.com/gOteoO5.png' tag='Climate Change' title='I eat meat every day and I consider my self a Vegetarian, can climate change stop me?' description='Dude 💀 like i know you’re bored and everything but this? like what is the chance that Samir is gonna actually read this?' timestamp='11 April 2023' readtime='11min' />
              <Blog_card img='https://i.imgur.com/OAWOP0N.png' tag='Recycle' title='Sort your waste in a modern educated way' description='have you ever wondered why sorting your trash would be such a game changer well let me tell you after you finish reading this article' timestamp='11 April 2023' readtime='23min' />
              <Blog_card img='https://i.imgur.com/THgmJ7i.png' tag='Recycle' title='Closing the Loop' description='Discover the concept of a circular economy and its pivotal role in transforming our linear consumption habits.' timestamp='8 April 2023' readtime='15min' />
              <Blog_card img='https://i.imgur.com/5HKCtuT.png' tag='LifeStyle' title='Green Living Made Easy' description='Unlock a treasure trove of easy-to-implement recycling hacks and lifestyle changes.' timestamp='21 March 2023' readtime='8min' />

              <Pagination_blog />
            </div>
          </div>
        </section>
      </div>


    </>
  );
}
export default All_blogs;